import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import Spinner from '../ui/Spinner'

const RoleRoute = ({ allowedRoles }) => {
  const { user, loading, isAuthenticated } = useAuth()
  
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  
  const hasAllowedRole = allowedRoles.includes(user.role)
  
  if (!hasAllowedRole) {
    // Redirect to appropriate page based on user role
    switch (user.role) {
      case 'admin':
        return <Navigate to="/admin" replace />
      case 'business':
        return <Navigate to="/business" replace />
      default:
        return <Navigate to="/dashboard" replace />
    }
  }
  
  return <Outlet />
}

export default RoleRoute