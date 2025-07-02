import HeaderManager from '@/components/organisms/HeaderManager'

const Layout = ({ children, onSearch }) => {
  return (
    <div className="min-h-screen bg-secondary-900">
      <HeaderManager onSearch={onSearch} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}

export default Layout