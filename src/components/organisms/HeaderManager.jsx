import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DefaultHeader from '@/components/organisms/DefaultHeader'
import CompactHeader from '@/components/organisms/CompactHeader'
import FeaturedHeader from '@/components/organisms/FeaturedHeader'

const HeaderManager = ({ onSearch }) => {
  const [headerType, setHeaderType] = useState(() => {
    return localStorage.getItem('headerType') || 'default'
  })

  useEffect(() => {
    localStorage.setItem('headerType', headerType)
  }, [headerType])

  const renderHeader = () => {
    switch (headerType) {
      case 'compact':
        return (
          <CompactHeader 
            onSearch={onSearch} 
            onHeaderTypeChange={setHeaderType}
            currentType={headerType}
          />
        )
      case 'featured':
        return (
          <FeaturedHeader 
            onSearch={onSearch} 
            onHeaderTypeChange={setHeaderType}
            currentType={headerType}
          />
        )
      default:
        return (
          <DefaultHeader 
            onSearch={onSearch} 
            onHeaderTypeChange={setHeaderType}
            currentType={headerType}
          />
        )
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={headerType}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {renderHeader()}
      </motion.div>
    </AnimatePresence>
  )
}

export default HeaderManager