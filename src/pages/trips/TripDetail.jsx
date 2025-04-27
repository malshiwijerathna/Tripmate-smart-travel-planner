import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FiCalendar, FiMapPin, FiUsers, FiDollarSign, FiClock, FiEdit2, FiTrash2 } from 'react-icons/fi'
import Button from '../../components/ui/Button'

const TripDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  
  // Mock data 
  const trip = {
    id: parseInt(id),
    destination: 'Paris, France',
    startDate: '2025-06-15',
    endDate: '2025-06-25',
    travelers: 2,
    budget: 3000,
    status: 'confirmed',
    image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    itinerary: [
      {
        day: 1,
        date: '2025-06-15',
        activities: [
          {
            time: '09:00',
            title: 'Arrival at Charles de Gaulle Airport',
            type: 'transportation',
            notes: 'Terminal 2E, Flight AF1234',
          },
          {
            time: '11:00',
            title: 'Hotel Check-in',
            type: 'accommodation',
            notes: 'Hotel du Louvre, Superior Room',
          },
          {
            time: '14:00',
            title: 'Eiffel Tower Visit',
            type: 'attraction',
            notes: 'Pre-booked tickets for observation deck',
          },
        ],
      },
      {
        day: 2,
        date: '2025-06-16',
        activities: [
          {
            time: '10:00',
            title: 'Louvre Museum',
            type: 'attraction',
            notes: 'Guided tour booked',
          },
          {
            time: '15:00',
            title: 'Seine River Cruise',
            type: 'activity',
            notes: '1-hour scenic cruise',
          },
          {
            time: '19:00',
            title: 'Dinner at Le Cheval Blanc',
            type: 'dining',
            notes: 'Reservation confirmed',
          },
        ],
      },
    ],
    expenses: [
      {
        category: 'Flights',
        amount: 800,
        paid: true,
      },
      {
        category: 'Hotel',
        amount: 1200,
        paid: true,
      },
      {
        category: 'Activities',
        amount: 400,
        paid: false,
      },
      {
        category: 'Food & Dining',
        amount: 600,
        paid: false,
      },
    ],
  }
  
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  
  const totalExpenses = trip.expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const paidExpenses = trip.expenses.reduce((sum, expense) => expense.paid ? sum + expense.amount : sum, 0)
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-64">
        <img 
          src={trip.image}
          alt={trip.destination}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container-wide">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-4xl font-bold mb-2 text-white">{trip.destination}</h1>
                <div className="flex items-center space-x-4 text-gray-100">
                  <span className="flex items-center">
                    <FiCalendar className="mr-2" />
                    {formatDate(trip.startDate)}
                  </span>
                  <span className="flex items-center">
                    <FiUsers className="mr-2" />
                    {trip.travelers} Travelers
                  </span>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => setIsEditing(true)}
                >
                  <FiEdit2 className="mr-2" />
                  Edit Trip
                </Button>
                <Button variant="error">
                  <FiTrash2 className="mr-2" />
                  Cancel Trip
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-8">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Itinerary */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Itinerary</h2>
                  <Button variant="outline" size="sm">
                    <FiEdit2 className="mr-2" />
                    Edit Itinerary
                  </Button>
                </div>
                
                {trip.itinerary.map((day) => (
                  <div key={day.day} className="mb-8 last:mb-0">
                    <h3 className="text-lg font-semibold mb-4">
                      Day {day.day} - {formatDate(day.date)}
                    </h3>
                    <div className="space-y-4">
                      {day.activities.map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-start p-4 bg-gray-50 rounded-lg"
                        >
                          <div className="flex-shrink-0 w-16 text-sm font-medium text-gray-600">
                            {activity.time}
                          </div>
                          <div>
                            <h4 className="font-medium">{activity.title}</h4>
                            <p className="text-sm text-gray-600">{activity.notes}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trip Status */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Trip Status</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      trip.status === 'confirmed'
                        ? 'bg-success-100 text-success-700'
                        : 'bg-primary-100 text-primary-700'
                    }`}>
                      {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Days until trip</span>
                    <span className="font-medium">180 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">10 days</span>
                  </div>
                </div>
              </div>
              
              {/* Budget Overview */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Budget Overview</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Total Budget</span>
                      <span className="font-medium">${trip.budget}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-500 h-2 rounded-full"
                        style={{ width: `${(totalExpenses / trip.budget) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Expenses</span>
                    <span className="font-medium">${totalExpenses}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Paid</span>
                    <span className="font-medium text-success-600">${paidExpenses}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Remaining</span>
                    <span className="font-medium text-primary-600">
                      ${trip.budget - totalExpenses}
                    </span>
                  </div>
                  
                  <Button variant="outline" fullWidth>
                    <FiDollarSign className="mr-2" />
                    Manage Expenses
                  </Button>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="card bg-gray-50">
                <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="primary" fullWidth>
                    Download Itinerary
                  </Button>
                  <Button variant="outline" fullWidth>
                    Share Trip Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TripDetail