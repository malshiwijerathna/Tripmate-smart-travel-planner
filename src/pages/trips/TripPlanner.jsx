import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiPlus, FiMap, FiCalendar, FiUsers, FiDollarSign } from 'react-icons/fi'
import Button from '../../components/ui/Button'

const TripPlanner = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('upcoming')
  
  // Mock data -
  const trips = {
    upcoming: [
      {
        id: 1,
        destination: 'Paris, France',
        startDate: '2025-06-15',
        endDate: '2025-06-25',
        travelers: 2,
        budget: 3000,
        status: 'confirmed',
        image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 2,
        destination: 'Tokyo, Japan',
        startDate: '2025-09-10',
        endDate: '2025-09-20',
        travelers: 1,
        budget: 4500,
        status: 'planning',
        image: 'https://images.pexels.com/photos/9425202/pexels-photo-9425202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    ],
    past: [
      {
        id: 3,
        destination: 'Barcelona, Spain',
        startDate: '2024-03-01',
        endDate: '2024-03-08',
        travelers: 2,
        budget: 2500,
        status: 'completed',
        image: 'https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    ],
  }
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  
  return (
    <div className="container-wide py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Trips</h1>
          <p className="text-gray-600">Plan and manage your travel itineraries</p>
        </div>
        <Button 
          variant="primary"
          onClick={() => navigate('/trips/new')}
          className="flex items-center"
        >
          <FiPlus className="mr-2" />
          Plan New Trip
        </Button>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <div className="flex space-x-8">
          <button
            className={`pb-4 text-sm font-medium ${
              activeTab === 'upcoming'
                ? 'border-b-2 border-primary-500 text-primary-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Trips ({trips.upcoming.length})
          </button>
          <button
            className={`pb-4 text-sm font-medium ${
              activeTab === 'past'
                ? 'border-b-2 border-primary-500 text-primary-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('past')}
          >
            Past Trips ({trips.past.length})
          </button>
        </div>
      </div>
      
      {/* Trip Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trips[activeTab].map((trip) => (
          <div 
            key={trip.id}
            className="card hover:shadow-lg cursor-pointer transition-shadow"
            onClick={() => navigate(`/trips/${trip.id}`)}
          >
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <img
                src={trip.image}
                alt={trip.destination}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  trip.status === 'confirmed'
                    ? 'bg-success-100 text-success-700'
                    : trip.status === 'planning'
                    ? 'bg-primary-100 text-primary-700'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                </span>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">{trip.destination}</h3>
            
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <FiCalendar className="mr-2" />
                <span>
                  {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
                </span>
              </div>
              <div className="flex items-center">
                <FiUsers className="mr-2" />
                <span>{trip.travelers} Travelers</span>
              </div>
              <div className="flex items-center">
                <FiDollarSign className="mr-2" />
                <span>Budget: ${trip.budget}</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <Button 
                variant="outline"
                fullWidth
                className="flex items-center justify-center"
              >
                <FiMap className="mr-2" />
                View Itinerary
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      {trips[activeTab].length === 0 && (
        <div className="text-center py-12">
          <FiMap className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {activeTab === 'upcoming' ? 'No upcoming trips' : 'No past trips'}
          </h3>
          <p className="text-gray-500 mb-4">
            {activeTab === 'upcoming'
              ? 'Start planning your next adventure!'
              : 'Your completed trips will appear here.'}
          </p>
          {activeTab === 'upcoming' && (
            <Button
              variant="primary"
              onClick={() => navigate('/trips/new')}
            >
              Plan Your First Trip
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

export default TripPlanner