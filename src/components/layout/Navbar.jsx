import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { FiMenu, FiX, FiUser, FiMap, FiLogOut, FiDollarSign, FiBriefcase, FiSettings } from 'react-icons/fi'
import Button from '../ui/Button'
import Avatar from '../ui/Avatar'

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen)
  const closeMenus = () => {
    setIsMenuOpen(false)
    setIsProfileMenuOpen(false)
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
  ]
  
  const renderAuthLinks = () => {
    if (isAuthenticated) {
      return (
        <div className="relative">
          <button 
            className="flex items-center focus:outline-none" 
            onClick={toggleProfileMenu}
          >
            <Avatar src={user.avatar} alt={user.name} size="sm" />
            <span className="ml-2 hidden md:block">{user.name}</span>
          </button>
          
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <div className="px-4 py-2 border-b">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              
              <Link 
                to="/dashboard" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={closeMenus}
              >
                Dashboard
              </Link>
              
              {user.role === 'traveler' && (
                <>
                  <Link 
                    to="/trips" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeMenus}
                  >
                    <div className="flex items-center">
                      <FiMap className="mr-2" />
                      My Trips
                    </div>
                  </Link>
                  <Link 
                    to="/budget" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeMenus}
                  >
                    <div className="flex items-center">
                      <FiDollarSign className="mr-2" />
                      Budget
                    </div>
                  </Link>
                </>
              )}
              
              {user.role === 'business' && (
                <Link 
                  to="/business" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeMenus}
                >
                  <div className="flex items-center">
                    <FiBriefcase className="mr-2" />
                    Business Dashboard
                  </div>
                </Link>
              )}
              
              {user.role === 'admin' && (
                <Link 
                  to="/admin" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeMenus}
                >
                  <div className="flex items-center">
                    <FiSettings className="mr-2" />
                    Admin Dashboard
                  </div>
                </Link>
              )}
              
              <Link 
                to="/profile" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={closeMenus}
              >
                <div className="flex items-center">
                  <FiUser className="mr-2" />
                  Profile Settings
                </div>
              </Link>
              
              <button 
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  closeMenus()
                  logout()
                }}
              >
                <div className="flex items-center">
                  <FiLogOut className="mr-2" />
                  Sign Out
                </div>
              </button>
            </div>
          )}
        </div>
      )
    }
    
    return (
      <div className="flex space-x-4">
        <Button 
          variant="outline" 
          onClick={() => navigate('/login')}
          className="hidden md:block"
        >
          Sign In
        </Button>
        <Button 
          variant="primary" 
          onClick={() => navigate('/register')}
          className="hidden md:block"
        >
          Create Account
        </Button>
      </div>
    )
  }
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="container-wide py-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center" onClick={closeMenus}>
            <span className="text-2xl font-bold text-primary-600">TRIP<span className="text-accent-500">MATE</span></span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `text-base font-medium transition-colors duration-200 ${
                    isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-500'
                  }`
                }
                onClick={closeMenus}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          
          {/* User Menu & Auth Links */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {renderAuthLinks()}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-2 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `px-4 py-2 text-base font-medium rounded-md ${
                      isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'
                    }`
                  }
                  onClick={closeMenus}
                >
                  {item.name}
                </NavLink>
              ))}
              
              {!isAuthenticated && (
                <>
                  <NavLink
                    to="/login"
                    className="px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                    onClick={closeMenus}
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="px-4 py-2 text-base font-medium bg-primary-500 text-white rounded-md"
                    onClick={closeMenus}
                  >
                    Create Account
                  </NavLink>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar