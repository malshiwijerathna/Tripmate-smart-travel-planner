import { FiMapPin, FiCalendar, FiDollarSign, FiClock, FiStar } from 'react-icons/fi'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button'

const Dashboard = () => {
  const { user } = useAuth()
  
  // Mock data 
  const upcomingTrips = [
    {
      id: 1,
      destination: 'Paris, France',
      startDate: '2025-06-15',
      endDate: '2025-06-25',
      image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      status: 'confirmed'
    },
    {
      id: 2,
      destination: 'Tokyo, Japan',
      startDate: '2025-09-10',
      endDate: '2025-09-20',
      image: 'https://images.pexels.com/photos/9425202/pexels-photo-9425202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      status: 'planning'
    }
  ]
  
  const recentActivity = [
    { id: 1, action: 'Updated Tokyo itinerary', date: '2 hours ago' },
    { id: 2, action: 'Added new expense to Paris trip', date: '1 day ago' },
    { id: 3, action: 'Saved Hotel Belleville to favorites', date: '3 days ago' },
  ]
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  
  return (
    <div className="container-wide py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome back, {user.name}</h1>
        <p className="text-gray-600">Here's what's happening with your travel plans</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Upcoming Trips */}
          <section className="mb-8 card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Upcoming Trips</h2>
              <Button 
                variant="outline" 
                size="sm"
                as={Link}
                to="/trips"
              >
                View All
              </Button>
            </div>
            
            {upcomingTrips.length > 0 ? (
              <div className="space-y-6">
                {upcomingTrips.map((trip) => (
                  <div key={trip.id} className="flex flex-col md:flex-row border rounded-lg overflow-hidden">
                    <div className="w-full md:w-1/3 h-48 md:h-auto">
                      <img 
                        src={trip.image} 
                        alt={trip.destination}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-semibold mb-2">{trip.destination}</h3>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            trip.status === 'confirmed' 
                              ? 'bg-success-100 text-success-700' 
                              : 'bg-secondary-100 text-secondary-700'
                          }`}>
                            {trip.status === 'confirmed' ? 'Confirmed' : 'Planning'}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <FiCalendar className="mr-2" />
                          <span>
                            {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
                          </span>
                        </div>
                      </div>
                      <div className="flex mt-4">
                        <Button 
                          variant="primary" 
                          size="sm" 
                          as={Link}
                          to={`/trips/${trip.id}`}
                          className="mr-3"
                        >
                          View Trip
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          as={Link}
                          to={`/trips/${trip.id}?edit=true`}
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-gray-50 rounded-lg">
                <FiMapPin className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No trips planned yet</h3>
                <p className="text-gray-500 mb-4">Start planning your next adventure!</p>
                <Button 
                  variant="primary"
                  as={Link}
                  to="/trips"
                >
                  Plan a Trip
                </Button>
              </div>
            )}
          </section>
          
          {/* Budget Overview */}
          <section className="card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Budget Overview</h2>
              <Button 
                variant="outline" 
                size="sm"
                as={Link}
                to="/budget"
              >
                View Details
              </Button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Paris Trip Budget</h3>
                <span className="text-success-600 font-medium">70% remaining</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-success-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>$900 spent</span>
                <span>$3,000 budget</span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Tokyo Trip Budget</h3>
                <span className="text-primary-600 font-medium">100% remaining</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>$0 spent</span>
                <span>$4,500 budget</span>
              </div>
            </div>
          </section>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-8">
          {/* Profile Card */}
          <section className="card">
            <div className="flex items-center">
              <img 
                src={user.avatar}
                alt={user.name}
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <h3 className="font-semibold text-xl">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-sm text-primary-600 mt-1 capitalize">{user.role}</p>
              </div>
            </div>
            <div className="mt-6">
              <Button 
                variant="outline" 
                size="sm" 
                fullWidth
                as={Link}
                to="/profile"
              >
                Edit Profile
              </Button>
            </div>
          </section>
          
          {/* Recent Activity */}
          <section className="card">
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <div className="bg-gray-100 rounded-full p-2 mr-3">
                    <FiClock className="text-gray-500" />
                  </div>
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Travel Recommendations */}
          <section className="card">
            <h3 className="text-xl font-semibold mb-4">Recommended for You</h3>
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Bali"
                  className="w-full h-36 object-cover"
                />
                <div className="p-3 bg-gray-50">
                  <h4 className="font-medium mb-1">Bali, Indonesia</h4>
                  <div className="flex items-center text-accent-500 mb-2">
                    <FiStar size={14} />
                    <FiStar size={14} />
                    <FiStar size={14} />
                    <FiStar size={14} />
                    <FiStar size={14} />
                  </div>
                  <p className="text-sm text-gray-600">Perfect for your next vacation</p>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                fullWidth
                as={Link}
                to="/destinations"
              >
                Explore More
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Dashboard