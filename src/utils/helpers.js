import { format, parseISO } from 'date-fns'

export const formatDate = (dateString) => {
  if (!dateString) return 'Unknown'
  try {
    return format(parseISO(dateString), 'MMMM d, yyyy')
  } catch {
    return 'Invalid date'
  }
}

export const formatYear = (dateString) => {
  if (!dateString) return 'TBA'
  try {
    return format(parseISO(dateString), 'yyyy')
  } catch {
    return 'Unknown'
  }
}

export const formatRating = (rating) => {
  if (!rating || rating === 0) return 'N/A'
  return Number(rating).toFixed(1)
}

export const formatRuntime = (minutes) => {
  if (!minutes) return 'Unknown'
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
}

export const getImageUrl = (path, size = 'w500') => {
  if (!path) return '/placeholder-poster.jpg'
  return `https://image.tmdb.org/t/p/${size}${path}`
}

export const getTrailerUrl = (key, autoplay = false) => {
  if (!key) return null
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    ...(autoplay && { autoplay: '1' })
  })
  return `https://www.youtube.com/embed/${key}?${params.toString()}`
}

export const filterMovies = (movies, { searchTerm, genreId, sortBy }) => {
  let filtered = [...movies]
  
  // Filter by search term
  if (searchTerm) {
    filtered = filtered.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.overview.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }
  
  // Filter by genre
  if (genreId) {
    filtered = filtered.filter(movie =>
      movie.genre_ids.includes(genreId)
    )
  }
  
  // Sort movies
  filtered.sort((a, b) => {
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
  
  return filtered
}

export const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(null, args), delay)
  }
}