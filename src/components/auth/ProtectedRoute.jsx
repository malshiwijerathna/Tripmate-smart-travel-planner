import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import Spinner from '../ui/Spinner'

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth()
  const location = useLocation()
  
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  }
  
  if (!isAuthenticated) {
    // Redirect to login and remember the page user was trying to access
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  
  return <Outlet />
}

export default ProtectedRoute