const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-secondary-200 text-white',
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-secondary-900',
    accent: 'bg-accent-500 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-secondary-900'
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}

export default Badge