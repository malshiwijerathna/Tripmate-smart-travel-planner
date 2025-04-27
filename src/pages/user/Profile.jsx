import { useState } from 'react'
import { FiUser, FiMail, FiLock, FiCamera, FiGlobe } from 'react-icons/fi'
import { useAuth } from '../../contexts/AuthContext'
import Button from '../../components/ui/Button'
import Avatar from '../../components/ui/Avatar'

const Profile = () => {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    avatar: user.avatar,
    preferences: {
      currency: 'USD',
      language: 'English',
      notifications: {
        email: true,
        push: true,
      },
    },
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    setIsEditing(false)
  }
  
  return (
    <div className="container-narrow py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Profile Settings</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Profile Information */}
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Profile Information</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </Button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="form-label">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input pl-10"
                    disabled={!isEditing}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="form-label">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input pl-10"
                    disabled={!isEditing}
                  />
                </div>
              </div>
              
              {isEditing && (
                <div className="pt-4 border-t">
                  <Button type="submit" variant="primary">
                    Save Changes
                  </Button>
                </div>
              )}
            </form>
          </div>
          
          {/* Password */}
          <div className="card">
            <h2 className="text-xl font-bold mb-6">Change Password</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="currentPassword" className="form-label">
                  Current Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    className="form-input pl-10"
                    placeholder="Enter current password"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="newPassword" className="form-label">
                  New Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    className="form-input pl-10"
                    placeholder="Enter new password"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm New Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-input pl-10"
                    placeholder="Confirm new password"
                  />
                </div>
              </div>
              
              <div>
                <Button variant="primary">
                  Update Password
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Profile Picture */}
          <div className="card text-center">
            <div className="mb-4">
              <Avatar
                src={formData.avatar}
                alt={formData.name}
                size="xl"
                className="mx-auto"
              />
            </div>
            <Button
              variant="outline"
              className="flex items-center justify-center"
              fullWidth
            >
              <FiCamera className="mr-2" />
              Change Photo
            </Button>
          </div>
          
          {/* Preferences */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Preferences</h3>
            <div className="space-y-4">
              <div>
                <label className="form-label">Currency</label>
                <select className="form-input">
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>
              
              <div>
                <label className="form-label">Language</label>
                <select className="form-input">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
              
              <div>
                <label className="form-label">Notifications</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      checked={formData.preferences.notifications.email}
                    />
                    <span className="ml-2">Email notifications</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      checked={formData.preferences.notifications.push}
                    />
                    <span className="ml-2">Push notifications</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Account Actions */}
          <div className="card bg-gray-50">
            <h3 className="text-xl font-bold mb-4">Account Actions</h3>
            <div className="space-y-3">
              <Button variant="outline" fullWidth>
                Download My Data
              </Button>
              <Button variant="error" fullWidth>
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile