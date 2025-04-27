import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMapPin, FiUsers, FiStar, FiTrendingUp, FiList, FiEdit2 } from 'react-icons/fi'
import Button from '../../components/ui/Button'

const BusinessDashboard = () => {
  const [period, setPeriod] = useState('week')
  
  // Mock data - would be fetched from API
  const stats = {
    totalListings: 12,
    activeListings: 8,
    totalViews: 2450,
    totalBookings: 156,
    averageRating: 4.8,
  }
  
  const recentBookings = [
    {
      id: 1,
      service: 'Guided City Tour',
      customer: 'John Smith',
      date: '2024-03-15',
      amount: 150,
      status: 'confirmed',
    },
    {
      id: 2,
      service: 'Wine Tasting Experience',
      customer: 'Sarah Johnson',
      date: '2024-03-18',
      amount: 85,
      status: 'pending',
    },
    {
      id: 3,
      service: 'Cooking Class',
      customer: 'Mike Brown',
      date: '2024-03-20',
      amount: 120,
      status: 'confirmed',
    },
  ]
  
  const popularListings = [
    {
      id: 1,
      title: 'Paris Walking Tour',
      rating: 4.9,
      reviews: 128,
      bookings: 450,
      image: 'https://images.pexels.com/photos/705764/pexels-photo-705764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title: 'French Cuisine Workshop',
      rating: 4.8,
      reviews: 96,
      bookings: 320,
      image: 'https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ]
  
  return (
    <div className="container-wide py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Business Dashboard</h1>
          <p className="text-gray-600">Manage your listings and bookings</p>
        </div>
        <Button 
          variant="primary"
          as={Link}
          to="/business/listings/new"
        >
          Add New Listing
        </Button>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center">
            <div className="p-3 bg-primary-100 rounded-lg mr-4">
              <FiList className="text-primary-600" size={24} />
            </div>
            <div>
              <p className="text-gray-600">Total Listings</p>
              <h3 className="text-2xl font-bold">{stats.totalListings}</h3>
              <p className="text-sm text-success-600">
                {stats.activeListings} active
              </p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center">
            <div className="p-3 bg-secondary-100 rounded-lg mr-4">
              <FiUsers className="text-secondary-600" size={24} />
            </div>
            <div>
              <p className="text-gray-600">Total Views</p>
              <h3 className="text-2xl font-bold">{stats.totalViews}</h3>
              <p className="text-sm text-success-600">+12% this month</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center">
            <div className="p-3 bg-accent-100 rounded-lg mr-4">
              <FiTrendingUp className="text-accent-600" size={24} />
            </div>
            <div>
              <p className="text-gray-600">Total Bookings</p>
              <h3 className="text-2xl font-bold">{stats.totalBookings}</h3>
              <p className="text-sm text-success-600">+8% this month</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center">
            <div className="p-3 bg-success-100 rounded-lg mr-4">
              <FiStar className="text-success-600" size={24} />
            </div>
            <div>
              <p className="text-gray-600">Average Rating</p>
              <h3 className="text-2xl font-bold">{stats.averageRating}</h3>
              <p className="text-sm text-success-600">+0.2 this month</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Bookings */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Recent Bookings</h2>
              <Link to="/business/bookings" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View All
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h4 className="font-medium">{booking.service}</h4>
                    <p className="text-sm text-gray-600">
                      {booking.customer} • {new Date(booking.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${booking.amount}</p>
                    <span className={`text-sm ${
                      booking.status === 'confirmed' 
                        ? 'text-success-600' 
                        : 'text-primary-600'
                    }`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Popular Listings */}
        <div>
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Popular Listings</h2>
              <Link to="/business/listings" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View All
              </Link>
            </div>
            
            <div className="space-y-4">
              {popularListings.map((listing) => (
                <div key={listing.id} className="bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-medium mb-2">{listing.title}</h4>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center text-accent-600">
                        <FiStar className="mr-1" />
                        {listing.rating} ({listing.reviews} reviews)
                      </span>
                      <span className="text-gray-600">
                        {listing.bookings} bookings
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      fullWidth
                      className="mt-3"
                      as={Link}
                      to={`/business/listings/${listing.id}`}
                    >
                      <FiEdit2 className="mr-2" />
                      Edit Listing
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessDashboard