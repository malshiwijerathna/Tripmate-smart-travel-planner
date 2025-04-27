import { useState } from 'react'
import { FiBriefcase, FiMapPin, FiPhone, FiMail, FiGlobe, FiCamera } from 'react-icons/fi'
import Button from '../../components/ui/Button'

const BusinessProfile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    businessName: 'Paris Travel Experiences',
    category: 'Tour Operator',
    description: 'We offer unique and authentic travel experiences in Paris, from guided tours to cooking classes and wine tasting events.',
    address: '123 Rue de Rivoli, Paris, France',
    phone: '+33 1 23 45 67 89',
    email: 'contact@paristravelexp.com',
    website: 'www.paristravelexperiences.com',
    logo: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socialMedia: {
      facebook: 'paristravelexp',
      instagram: 'paristravelexp',
      twitter: 'paristravelexp',
    },
    businessHours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 6:00 PM',
      saturday: '10:00 AM - 4:00 PM',
      sunday: 'Closed',
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
        <h1 className="text-3xl font-bold">Business Profile</h1>
        <p className="text-gray-600">Manage your business information and settings</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Basic Information */}
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Business Information</h2>
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
                <label htmlFor="businessName" className="form-label">Business Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiBriefcase className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="form-input pl-10"
                    disabled={!isEditing}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="category" className="form-label">Business Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="form-input"
                  disabled={!isEditing}
                >
                  <option value="Tour Operator">Tour Operator</option>
                  <option value="Accommodation">Accommodation</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Activity Provider">Activity Provider</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="description" className="form-label">Business Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="form-input"
                  disabled={!isEditing}
                />
              </div>
              
              <div>
                <label htmlFor="address" className="form-label">Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMapPin className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-input pl-10"
                    disabled={!isEditing}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiPhone className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
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
              </div>
              
              <div>
                <label htmlFor="website" className="form-label">Website</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiGlobe className="text-gray-400" />
                  </div>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
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
          
          {/* Business Hours */}
          <div className="card">
            <h2 className="text-xl font-bold mb-6">Business Hours</h2>
            <div className="space-y-4">
              {Object.entries(formData.businessHours).map(([day, hours]) => (
                <div key={day} className="flex justify-between items-center">
                  <span className="capitalize text-gray-600">{day}</span>
                  <span className="font-medium">{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Logo Upload */}
          <div className="card text-center">
            <div className="mb-4">
              <img
                src={formData.logo}
                alt="Business Logo"
                className="w-32 h-32 rounded-lg mx-auto object-cover"
              />
            </div>
            <Button
              variant="outline"
              className="flex items-center justify-center"
              fullWidth
            >
              <FiCamera className="mr-2" />
              Change Logo
            </Button>
          </div>
          
          {/* Social Media */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="space-y-4">
              <div>
                <label className="form-label">Facebook</label>
                <input
                  type="text"
                  value={formData.socialMedia.facebook}
                  className="form-input"
                  disabled={!isEditing}
                />
              </div>
              
              <div>
                <label className="form-label">Instagram</label>
                <input
                  type="text"
                  value={formData.socialMedia.instagram}
                  className="form-input"
                  disabled={!isEditing}
                />
              </div>
              
              <div>
                <label className="form-label">Twitter</label>
                <input
                  type="text"
                  value={formData.socialMedia.twitter}
                  className="form-input"
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="card bg-gray-50">
            <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button variant="primary" fullWidth>
                Preview Profile
              </Button>
              <Button variant="outline" fullWidth>
                Download Analytics
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessProfile