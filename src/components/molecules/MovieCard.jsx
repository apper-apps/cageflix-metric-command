import { motion } from 'framer-motion'
import { format } from 'date-fns'
import ApperIcon from '@/components/ApperIcon'
import Badge from '@/components/atoms/Badge'

const MovieCard = ({ movie, onClick }) => {
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder-poster.jpg'
  
  const releaseYear = movie.release_date ? format(new Date(movie.release_date), 'yyyy') : 'TBA'
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'
  
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="relative bg-secondary-200 rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-gold-lg"
      onClick={() => onClick(movie)}
    >
      <div className="aspect-[2/3] relative">
        <img
          src={posterUrl}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            className="bg-primary-500/90 rounded-full p-4 backdrop-blur-sm"
          >
            <ApperIcon name="Play" className="w-8 h-8 text-secondary-900 fill-current" />
          </motion.div>
        </div>
        
        {/* Rating Badge */}
        <div className="absolute top-2 right-2">
          <Badge variant="primary" className="shadow-lg">
            <ApperIcon name="Star" className="w-3 h-3 mr-1 fill-current" />
            {rating}
          </Badge>
        </div>
        
        {/* Year Badge */}
        <div className="absolute top-2 left-2">
          <Badge variant="default" className="shadow-lg">
            {releaseYear}
          </Badge>
        </div>
      </div>
      
      {/* Movie Info */}
      <div className="p-4">
        <h3 className="font-display text-lg font-bold text-white mb-1 line-clamp-2 group-hover:text-primary-500 transition-colors">
          {movie.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-3">
          {movie.overview || 'No description available.'}
        </p>
      </div>
    </motion.div>
  )
}

export default MovieCard