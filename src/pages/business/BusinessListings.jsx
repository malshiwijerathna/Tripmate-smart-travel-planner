import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiSearch, FiFilter, FiEdit2, FiTrash2, FiEye, FiStar } from 'react-icons/fi'
import Button from '../../components/ui/Button'

const BusinessListings = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState('all')
  
  // Mock data - would be fetched from API
  const listings = [
    {
      id: 1,
      title: 'Paris Walking Tour',
      category: 'Tour',
      price: 45,
      duration: '3 hours',
      rating: 4.9,
      reviews: 128,
      status: 'active',
      image: 'https://images.pexels.com/photos/705764/pexels-photo-705764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title: 'French Cuisine Workshop',
      category: 'Activity',
      price: 85,
      duration: '4 hours',
      rating: 4.8,
      reviews: 96,
      status: 'active',
      image: 'https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      title: 'Wine Tasting Experience',
      category: 'Activity',
      price: 65,
      duration: '2 hours',
      rating: 4.7,
      reviews: 75,
      status: 'draft',
      image: 'https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ]
  
  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filter === 'all' || listing.status === filter
    return matchesSearch && matchesFilter
  })
  
  return (
    <div className="container-wide py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Listings</h1>
          <p className="text-gray-600">Manage your tours, activities, and services</p>
        </div>
        <Button 
          variant="primary"
          as={Link}
          to="/business/listings/new"
          className="flex items-center"
        >
          <FiPlus className="mr-2" />
          Add New Listing
        </Button>
      </div>
      
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-grow">
          <div className="relative">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search listings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input pl-10 w-full"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="form-input min-w-[150px]"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select>
          <Button variant="outline">
            <FiFilter className="mr-2" />
            More Filters
          </Button>
        </div>
      </div>
      
      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((listing) => (
          <div key={listing.id} className="card">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  listing.status === 'active'
                    ? 'bg-success-100 text-success-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>{listing.category}</span>
                <span>{listing.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">${listing.price}</span>
                <span className="flex items-center text-accent-600">
                  <FiStar className="mr-1" />
                  {listing.rating} ({listing.reviews})
                </span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                as={Link}
                to={`/business/listings/${listing.id}`}
              >
                <FiEdit2 className="mr-2" />
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
              >
                <FiEye className="mr-2" />
                Preview
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-error-600 hover:bg-error-50"
              >
                <FiTrash2 />
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredListings.length === 0 && (
        <div className="text-center py-12">
          <FiSearch className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No listings found
          </h3>
          <p className="text-gray-500 mb-4">
            Try adjusting your search or filters
          </p>
          <Button
            variant="primary"
            as={Link}
            to="/business/listings/new"
          >
            Create Your First Listing
          </Button>
        </div>
      )}
    </div>
  )
}

export default BusinessListings