import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import Layout from './components/layout/Layout'
import ProtectedRoute from './components/auth/ProtectedRoute'
import RoleRoute from './components/auth/RoleRoute'

// Public pages 
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Destinations from './pages/destinations/Destinations'
import DestinationDetail from './pages/destinations/DestinationDetail'
import NotFound from './pages/NotFound'

// User pages
import Dashboard from './pages/user/Dashboard'
import TripPlanner from './pages/trips/TripPlanner'
import TripDetail from './pages/trips/TripDetail'
import BudgetTracker from './pages/budget/BudgetTracker'
import Profile from './pages/user/Profile'

// Business pages
import BusinessDashboard from './pages/business/BusinessDashboard'
import BusinessProfile from './pages/business/BusinessProfile'
import BusinessListings from './pages/business/BusinessListings'

// Admin pages
// import AdminDashboard from './pages/admin/AdminDashboard'
// import AdminUsers from './pages/admin/AdminUsers'
// import AdminTrips from './pages/admin/AdminTrips'
// import AdminBusinesses from './pages/admin/AdminBusinesses'

function App() {
  const { checkAuthStatus } = useAuth()
  
  useEffect(() => {
    checkAuthStatus()
  }, [checkAuthStatus])
  
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="destinations/:id" element={<DestinationDetail />} />
        
        {/* Protected routes for all authenticated users */}
        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        
        {/* Traveler routes */}
        <Route element={<RoleRoute allowedRoles={['traveler']} />}>
          <Route path="trips" element={<TripPlanner />} />
          <Route path="trips/:id" element={<TripDetail />} />
          <Route path="budget" element={<BudgetTracker />} />
        </Route>
        
        {/* Business owner routes */}
        <Route element={<RoleRoute allowedRoles={['business']} />}>
          <Route path="business" element={<BusinessDashboard />} />
          <Route path="business/profile" element={<BusinessProfile />} />
          <Route path="business/listings" element={<BusinessListings />} />
        </Route>
        
        {/* Admin routes */}
        {/* <Route element={<RoleRoute allowedRoles={['admin']} />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/users" element={<AdminUsers />} />
          <Route path="admin/trips" element={<AdminTrips />} />
          <Route path="admin/businesses" element={<AdminBusinesses />} />
        </Route> */}
        
        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App