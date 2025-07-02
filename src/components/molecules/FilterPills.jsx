import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'

const FilterPills = ({ genres, selectedGenre, onGenreSelect, className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <Button
        variant={selectedGenre === null ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => onGenreSelect(null)}
        className="whitespace-nowrap"
      >
        All Movies
      </Button>
      {genres.map((genre) => (
        <motion.div
          key={genre.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={selectedGenre === genre.id ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => onGenreSelect(genre.id)}
            className="whitespace-nowrap"
          >
            {genre.name}
          </Button>
        </motion.div>
      ))}
    </div>
  )
}

export default FilterPills