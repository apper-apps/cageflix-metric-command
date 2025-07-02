import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const HeaderTypeSelector = ({ currentType, onTypeChange, compact = false, enhanced = false }) => {
  const headerTypes = [
    { id: 'default', name: 'Default', icon: 'Layout' },
    { id: 'compact', name: 'Compact', icon: 'Minimize2' },
    { id: 'featured', name: 'Featured', icon: 'Maximize2' }
  ]

  const buttonSize = compact ? 'p-1.5' : enhanced ? 'p-3' : 'p-2'
  const iconSize = compact ? 4 : enhanced ? 5 : 4

  return (
    <div className="relative">
      <motion.div 
        className={`flex items-center space-x-1 bg-secondary-700/50 rounded-lg ${compact ? 'p-1' : 'p-1.5'} border border-secondary-600/30`}
        whileHover={{ backgroundColor: 'rgba(55, 65, 81, 0.7)' }}
      >
        {headerTypes.map((type) => (
          <motion.button
            key={type.id}
            onClick={() => onTypeChange(type.id)}
            className={`
              ${buttonSize} rounded-md transition-all duration-200 
              ${currentType === type.id 
                ? 'bg-primary-500 text-secondary-900' 
                : 'text-gray-400 hover:text-primary-400 hover:bg-secondary-600/50'
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={`${type.name} Header`}
          >
            <ApperIcon name={type.icon} size={iconSize} />
          </motion.button>
        ))}
      </motion.div>
    </div>
  )
}

export default HeaderTypeSelector