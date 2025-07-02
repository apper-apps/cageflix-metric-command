import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import SearchBar from '@/components/molecules/SearchBar'

const Header = ({ onSearch }) => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-secondary-800/90 backdrop-blur-md border-b border-secondary-200 sticky top-0 z-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-2 rounded-lg shadow-gold">
              <ApperIcon name="Film" className="w-8 h-8 text-secondary-900" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                CageFlix
              </h1>
              <p className="text-xs text-gray-400 -mt-1">The Ultimate Cage Collection</p>
            </div>
          </motion.div>
          
          {/* Search */}
          <div className="flex-1 max-w-xl mx-8">
            <SearchBar 
              onSearch={onSearch}
              placeholder="Search Nicholas Cage movies..."
            />
          </div>
          
          {/* Stats */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="text-center">
              <div className="font-bold text-primary-500">100+</div>
              <div className="text-gray-400">Movies</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-primary-500">50+</div>
              <div className="text-gray-400">Years</div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header