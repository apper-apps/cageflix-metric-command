import { useState, useEffect } from 'react'
import { movieService } from '@/services/api/movieService'
import { genreService } from '@/services/api/genreService'

export const useMovies = () => {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  
  const loadMovies = async () => {
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
      setError(err.message || 'Failed to load movies')
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadMovies()
  }, [])
  
  return {
    movies,
    genres,
    loading,
    error,
    refetch: loadMovies
  }
}