import { motion } from 'framer-motion'

const LoadingSkeleton = () => (
  <div className="bg-secondary-200 rounded-lg overflow-hidden">
    <div className="aspect-[2/3] shimmer" />
    <div className="p-4 space-y-2">
      <div className="h-5 shimmer rounded" />
      <div className="h-4 shimmer rounded w-3/4" />
      <div className="h-3 shimmer rounded w-1/2" />
    </div>
  </div>
)

const Loading = () => {
  return (
    <div className="space-y-6">
      {/* Hero Loading */}
      <div className="text-center py-8">
        <div className="h-12 md:h-16 shimmer rounded-lg max-w-md mx-auto mb-4" />
        <div className="h-6 shimmer rounded-lg max-w-2xl mx-auto" />
      </div>
      
      {/* Filter Loading */}
      <div className="bg-secondary-200 rounded-xl p-4 md:p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-8 w-20 shimmer rounded-full" />
          ))}
        </div>
        <div className="h-4 shimmer rounded w-32" />
      </div>
      
      {/* Grid Loading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 md:gap-6"
      >
        {[...Array(21)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02, duration: 0.3 }}
          >
            <LoadingSkeleton />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Loading