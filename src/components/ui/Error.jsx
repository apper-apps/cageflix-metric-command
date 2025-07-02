import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'

const Error = ({ message = 'Something went wrong', onRetry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <div className="bg-secondary-200 rounded-2xl p-8 max-w-md w-full text-center shadow-premium">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-full p-4 w-20 h-20 mx-auto mb-6 shadow-lg"
        >
          <ApperIcon name="AlertTriangle" className="w-12 h-12 text-white" />
        </motion.div>
        
        <h3 className="font-display text-2xl font-bold text-white mb-3">
          Oops! Something Went Wrong
        </h3>
        
        <p className="text-gray-400 mb-6 leading-relaxed">
          {message}
        </p>
        
        <div className="space-y-3">
          {onRetry && (
            <Button 
              variant="primary" 
              size="lg" 
              onClick={onRetry}
              className="w-full"
            >
              <ApperIcon name="RotateCcw" className="w-5 h-5 mr-2" />
              Try Again
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
      
      <p className="text-gray-500 text-sm mt-6 text-center">
        If the problem persists, please check your internet connection
      </p>
    </motion.div>
  )
}

export default Error