import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { format } from 'date-fns'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'
import TrailerPlayer from '@/components/molecules/TrailerPlayer'

const MovieModal = ({ movie, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  
  if (!movie) return null
  
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder-poster.jpg'
  
  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
    : posterUrl
  
  const releaseDate = movie.release_date ? format(new Date(movie.release_date), 'MMMM d, yyyy') : 'Release date unknown'
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'
  const runtime = movie.runtime ? `${movie.runtime} min` : 'Runtime unknown'
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative bg-secondary-200 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <ApperIcon name="X" className="w-6 h-6" />
            </button>
            
            {/* Hero Section */}
            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
              <img
                src={backdropUrl}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-200 via-black/50 to-transparent" />
              
              {/* Movie Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                  {movie.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="primary">
                    <ApperIcon name="Star" className="w-3 h-3 mr-1 fill-current" />
                    {rating}
                  </Badge>
                  <Badge variant="default">{releaseDate}</Badge>
                  <Badge variant="default">{runtime}</Badge>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {/* Poster */}
                <div className="md:col-span-1">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={posterUrl}
                    alt={movie.title}
                    className="w-full rounded-lg shadow-premium"
                  />
                </div>
                
                {/* Details */}
                <div className="md:col-span-2 space-y-6">
                  {/* Overview */}
                  <div>
                    <h2 className="font-display text-2xl font-bold text-white mb-3">
                      Overview
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {movie.overview || 'No overview available for this movie.'}
                    </p>
                  </div>
                  
                  {/* Genres */}
                  {movie.genres && movie.genres.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-white mb-2">Genres</h3>
                      <div className="flex flex-wrap gap-2">
                        {movie.genres.map((genre) => (
                          <Badge key={genre.id} variant="default">
                            {genre.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Additional Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Language:</span>
                      <span className="text-white ml-2">{movie.original_language?.toUpperCase() || 'EN'}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Popularity:</span>
                      <span className="text-white ml-2">{movie.popularity?.toFixed(0) || 'N/A'}</span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button variant="primary" size="lg" className="flex-1">
                      <ApperIcon name="Play" className="w-5 h-5 mr-2" />
                      Watch Trailer
                    </Button>
                    <Button variant="secondary" size="lg">
                      <ApperIcon name="Plus" className="w-5 h-5 mr-2" />
                      Watchlist
                    </Button>
                    <Button variant="ghost" size="lg">
                      <ApperIcon name="Share2" className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Trailer Section */}
              {movie.trailer_key && (
                <div className="mt-8">
                  <h2 className="font-display text-2xl font-bold text-white mb-4">
                    Official Trailer
                  </h2>
                  <TrailerPlayer 
                    trailerKey={movie.trailer_key} 
                    movieTitle={movie.title}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MovieModal