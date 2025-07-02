import { motion } from 'framer-motion'
import MovieCard from '@/components/molecules/MovieCard'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'

const MovieGrid = ({ movies, loading, error, onMovieClick, onRetry }) => {
  if (loading) {
    return <Loading />
  }
  
  if (error) {
    return <Error message={error} onRetry={onRetry} />
  }
  
  if (!movies || movies.length === 0) {
    return <Empty />
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 md:gap-6"
    >
      {movies.map((movie, index) => (
        <motion.div
          key={movie.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
        >
          <MovieCard movie={movie} onClick={onMovieClick} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default MovieGrid