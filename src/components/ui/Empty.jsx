import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const Empty = ({ 
  title = "No Movies Found", 
  message = "We couldn't find any Nicholas Cage movies matching your search. Try adjusting your filters or search terms.",
  onReset 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <div className="bg-gradient-to-br from-secondary-200 to-secondary-100 rounded-2xl p-8 max-w-md w-full text-center shadow-premium border border-secondary-100">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-full p-4 w-20 h-20 mx-auto mb-6 shadow-gold-lg"
        >
          <ApperIcon name="Film" className="w-12 h-12 text-secondary-900" />
        </motion.div>
        
        <h3 className="font-display text-2xl font-bold text-white mb-3">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-6 leading-relaxed">
          {message}
        </p>
        
        <div className="space-y-3">
          {onReset && (
            <Button 
              variant="primary" 
              size="lg" 
              onClick={onReset}
              className="w-full"
            >
              <ApperIcon name="RotateCcw" className="w-5 h-5 mr-2" />
              Reset Filters
            </Button>
          )}
          
          <Button 
            variant="ghost" 
            size="md"
            onClick={() => window.location.reload()}
            className="w-full"
          >
            <ApperIcon name="RefreshCw" className="w-4 h-4 mr-2" />
            Refresh Page
          </Button>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-center"
      >
        <p className="text-gray-500 text-sm mb-2">
          Did you know Nicholas Cage has starred in over 100 films?
        </p>
        <p className="text-gray-500 text-xs">
          From action blockbusters to indie gems, there's always more to discover!
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Empty