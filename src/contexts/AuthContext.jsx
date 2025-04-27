import { createContext, useContext, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { API_URL } from '../config/constants'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const checkAuthStatus = useCallback(async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        setUser(null)
        setLoading(false)
        return
      }

      // This would be replaced with an actual API call to validate token
      // For now, we'll just parse the token and use the data (mock implementation)
      const mockUser = {
        id: '123',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'traveler', // 'traveler', 'business', or 'admin'
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      }
      
      setUser(mockUser)
    } catch (error) {
      console.error('Auth check failed:', error)
      localStorage.removeItem('token')
      setUser(null)
    } finally {
      setLoading(false)
    }
  }, [])

  const login = async (email, password) => {
    try {
      setLoading(true)
      // This would be replaced with an actual API call
      // const { data } = await axios.post(`${API_URL}/auth/login`, { email, password })
      
      // Mock successful login
      const mockResponse = {
        token: 'mock-jwt-token',
        user: {
          id: '123',
          name: 'John Doe',
          email: email,
          role: 'traveler',
          avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
      }
      
      localStorage.setItem('token', mockResponse.token)
      setUser(mockResponse.user)
      toast.success('Login successful!')
      navigate('/dashboard')
      return true
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed')
      return false
    } finally {
      setLoading(false)
    }
  }

  const register = async (userData) => {
    try {
      setLoading(true)
      // This would be replaced with an actual API call
      // const { data } = await axios.post(`${API_URL}/auth/register`, userData)
      
      // Mock successful registration
      toast.success('Registration successful! Please login.')
      navigate('/login')
      return true
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed')
      return false
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    toast.info('You have been logged out')
    navigate('/')
  }

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    checkAuthStatus,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}