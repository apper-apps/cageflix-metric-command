import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const TrailerPlayer = ({ trailerKey, movieTitle, onClose }) => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  
  if (!trailerKey) {
    return (
      <div className="bg-secondary-200 rounded-lg p-8 text-center">
        <ApperIcon name="VideoOff" className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-400">No trailer available for this movie</p>
      </div>
    )
  }
  
  const embedUrl = `https://www.youtube.com/embed/${trailerKey}?autoplay=1&rel=0&modestbranding=1`
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`relative bg-black rounded-lg overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}
    >
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="bg-black/50 hover:bg-black/70 text-white"
        >
          <ApperIcon name={isFullscreen ? "Minimize2" : "Maximize2"} className="w-4 h-4" />
        </Button>
        {onClose && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="bg-black/50 hover:bg-black/70 text-white"
          >
            <ApperIcon name="X" className="w-4 h-4" />
          </Button>
        )}
      </div>
      
      <div className={`relative ${isFullscreen ? 'h-screen' : 'aspect-video'}`}>
        <iframe
          src={embedUrl}
          title={`${movieTitle} Trailer`}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </motion.div>
  )
}

export default TrailerPlayer