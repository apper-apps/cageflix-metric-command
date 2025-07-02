import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import SearchBar from '@/components/molecules/SearchBar'
import HeaderTypeSelector from '@/components/molecules/HeaderTypeSelector'

const CompactHeader = ({ onSearch, onHeaderTypeChange, currentType }) => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-secondary-800/95 backdrop-blur-md border-b border-secondary-200 sticky top-0 z-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Compact Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-1.5 rounded-md">
              <ApperIcon name="Film" className="w-5 h-5 text-secondary-900" />
            </div>
            <h1 className="font-display text-lg font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              CageFlix
            </h1>
          </motion.div>
          
          {/* Compact Search */}
          <div className="flex-1 max-w-md mx-6">
            <SearchBar 
              onSearch={onSearch}
              placeholder="Search movies..."
              compact={true}
            />
          </div>
          
          {/* Header Selector */}
          <HeaderTypeSelector 
            currentType={currentType}
            onTypeChange={onHeaderTypeChange}
            compact={true}
          />
        </div>
      </div>
    </motion.header>
  )
}

export default CompactHeader