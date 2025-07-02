import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import SearchBar from '@/components/molecules/SearchBar'
import HeaderTypeSelector from '@/components/molecules/HeaderTypeSelector'

const FeaturedHeader = ({ onSearch, onHeaderTypeChange, currentType }) => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gradient-to-r from-secondary-800/95 via-secondary-700/95 to-secondary-800/95 backdrop-blur-md border-b border-primary-500/20 sticky top-0 z-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header Row */}
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
          >
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 p-3 rounded-xl shadow-gold ring-2 ring-primary-500/30">
              <ApperIcon name="Film" className="w-10 h-10 text-secondary-900" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 bg-clip-text text-transparent">
                CageFlix
              </h1>
              <p className="text-sm text-primary-400 -mt-1 font-medium">The Ultimate Nicolas Cage Collection</p>
              <p className="text-xs text-gray-400">Discover • Watch • Enjoy</p>
            </div>
          </motion.div>
          
          {/* Enhanced Search */}
          <div className="flex-1 max-w-2xl mx-8">
            <SearchBar 
              onSearch={onSearch}
              placeholder="Discover Nicholas Cage movies, genres, years..."
              enhanced={true}
            />
          </div>
          
          {/* Enhanced Stats & Navigation */}
          <div className="flex items-center space-x-8">
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-2 rounded-lg bg-secondary-700/50"
              >
                <div className="font-bold text-primary-400 text-lg">100+</div>
                <div className="text-gray-300">Movies</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-2 rounded-lg bg-secondary-700/50"
              >
                <div className="font-bold text-primary-400 text-lg">50+</div>
                <div className="text-gray-300">Years</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center p-2 rounded-lg bg-secondary-700/50"
              >
                <div className="font-bold text-primary-400 text-lg">15+</div>
                <div className="text-gray-300">Genres</div>
              </motion.div>
            </div>
            <HeaderTypeSelector 
              currentType={currentType}
              onTypeChange={onHeaderTypeChange}
              enhanced={true}
            />
          </div>
        </div>
        
        {/* Additional Navigation Row */}
        <div className="hidden md:flex items-center justify-center py-3 border-t border-secondary-600/30">
          <nav className="flex items-center space-x-8 text-sm">
            <motion.a 
              whileHover={{ scale: 1.05, color: '#fbbf24' }}
              href="#" 
              className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
            >
              All Movies
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, color: '#fbbf24' }}
              href="#" 
              className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
            >
              Top Rated
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, color: '#fbbf24' }}
              href="#" 
              className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
            >
              Recent
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, color: '#fbbf24' }}
              href="#" 
              className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
            >
              Genres
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, color: '#fbbf24' }}
              href="#" 
              className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
            >
              Random
            </motion.a>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

export default FeaturedHeader