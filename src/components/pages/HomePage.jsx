import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import FilterPills from '@/components/molecules/FilterPills'
import MovieGrid from '@/components/organisms/MovieGrid'
import MovieModal from '@/components/organisms/MovieModal'
import Layout from '@/components/organisms/Layout'
import { movieService } from '@/services/api/movieService'
import { genreService } from '@/services/api/genreService'

const HomePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  // State
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Filters
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState(null)
  const [sortBy, setSortBy] = useState('popularity')
  
  // Load data
  useEffect(() => {
    loadData()
  }, [])
  
  // Handle URL movie ID
  useEffect(() => {
    if (id && movies.length > 0) {
      const movie = movies.find(m => m.id === parseInt(id))
      if (movie) {
        handleMovieClick(movie)
      }
    }
  }, [id, movies])
  
  const loadData = async () => {
    try {
      setLoading(true)
      setError('')
      
      const [moviesData, genresData] = await Promise.all([
        movieService.getAll(),
        genreService.getAll()
      ])
      
      setMovies(moviesData)
      setGenres(genresData)
    } catch (err) {
      setError('Failed to load movies. Please try again.')
      toast.error('Failed to load movies')
    } finally {
      setLoading(false)
    }
  }
  
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie)
    setIsModalOpen(true)
    navigate(`/movie/${movie.id}`)
  }
  
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedMovie(null)
    navigate('/')
  }
  
  const handleSearch = (term) => {
    setSearchTerm(term)
  }
  
  const handleGenreSelect = (genreId) => {
    setSelectedGenre(genreId)
  }
  
  // Filter movies
  const filteredMovies = movies.filter(movie => {
    const matchesSearch = !searchTerm || 
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.overview.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesGenre = !selectedGenre || 
      movie.genre_ids.includes(selectedGenre)
    
    return matchesSearch && matchesGenre
  })
  
  // Sort movies
  const sortedMovies = [...filteredMovies].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.vote_average - a.vote_average
      case 'release_date':
        return new Date(b.release_date) - new Date(a.release_date)
      case 'title':
        return a.title.localeCompare(b.title)
      default:
        return b.popularity - a.popularity
    }
  })
  
  return (
    <Layout onSearch={handleSearch}>
      <div className="space-y-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent mb-4">
            The Cage Collection
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover every Nicholas Cage movie ever made. From action blockbusters to indie gems, 
            explore the complete filmography of Hollywood's most enigmatic actor.
          </p>
        </motion.div>
        
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-secondary-200 rounded-xl p-4 md:p-6 space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <FilterPills
              genres={genres}
              selectedGenre={selectedGenre}
              onGenreSelect={handleGenreSelect}
            />
            
            <div className="flex items-center gap-3">
              <label className="text-sm text-gray-400">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-secondary-100 border border-secondary-50 rounded-lg px-3 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
                <option value="release_date">Release Date</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
          
          {/* Results Count */}
          <div className="text-sm text-gray-400">
            {loading ? 'Loading...' : `${sortedMovies.length} movies found`}
          </div>
        </motion.div>
        
        {/* Movie Grid */}
        <MovieGrid
          movies={sortedMovies}
          loading={loading}
          error={error}
          onMovieClick={handleMovieClick}
          onRetry={loadData}
        />
        
        {/* Movie Modal */}
        <MovieModal
          movie={selectedMovie}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </Layout>
  )
}

export default HomePage