import React, { useState } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const SearchBar = ({ onSearch, placeholder = "Search...", compact = false, enhanced = false }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }
  
  const handleClear = () => {
    setQuery('')
    onSearch('')
  }

  const inputHeight = compact ? 'h-8' : enhanced ? 'h-12' : 'h-10'
  const inputPadding = compact ? 'pl-8 pr-3' : enhanced ? 'pl-12 pr-4' : 'pl-10 pr-4'
  const iconSize = compact ? 16 : enhanced ? 20 : 18
  const iconPosition = compact ? 'left-2' : enhanced ? 'left-3' : 'left-3'

  return (
    <motion.div 
      className="relative"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={`
            w-full ${inputHeight} ${inputPadding} 
            bg-secondary-700/50 border border-secondary-600 rounded-lg 
            text-white placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent 
            backdrop-blur-sm transition-all duration-200
            ${enhanced ? 'text-lg' : compact ? 'text-sm' : 'text-base'}
          `}
        />
        <ApperIcon 
          name="Search" 
          className={`absolute ${iconPosition} top-1/2 transform -translate-y-1/2 text-gray-400`}
          size={iconSize}
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-500 transition-colors"
          >
            <ApperIcon name="X" className="w-5 h-5" />
          </button>
        )}
      </form>
    </motion.div>
  )
}

export default SearchBar