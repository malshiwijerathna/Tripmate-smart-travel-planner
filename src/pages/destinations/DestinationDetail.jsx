import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FiMapPin, FiCalendar, FiDollarSign, FiStar, FiClock, FiHeart } from 'react-icons/fi'
import Button from '../../components/ui/Button'

const DestinationDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isLiked, setIsLiked] = useState(false)
  
  // Mock data 
  const destination = {
    id: parseInt(id),
    name: 'Paris',
    country: 'France',
    rating: 4.8,
    reviews: 1250,
    price: {
      from: 1200,
      to: 3000,
    },
    description: 'Paris, the City of Light, is a global center for art, fashion, gastronomy, and culture. Its iconic landmarks include the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum. The city\'s romantic atmosphere, historic neighborhoods, and world-renowned cuisine make it one of the most visited destinations in the world.',
    image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/705764/pexels-photo-705764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    highlights: [
      'Visit the iconic Eiffel Tower',
      'Explore the Louvre Museum',
      'Stroll through Montmartre',
      'Take a Seine River cruise',
      'Visit Notre-Dame Cathedral',
    ],
    bestTimeToVisit: 'April to October',
    weather: {
      spring: 'Mild and pleasant',
      summer: 'Warm and sunny',
      autumn: 'Cool and crisp',
      winter: 'Cold and occasionally rainy',
    },
    transportation: [
      'Metro system',
      'Public buses',
      'Bike rentals',
      'Walking tours',
    ],
  }
  
  const toggleLike = () => {
    setIsLiked(!isLiked)
  }
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96">
        <img 
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container-wide">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-4xl font-bold mb-2 text-white">{destination.name}</h1>
                <p className="flex items-center text-lg">
                  <FiMapPin className="mr-2" />
                  {destination.country}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  onClick={toggleLike}
                >
                  <FiHeart className={`mr-2 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? 'Saved' : 'Save'}
                </Button>
                <Button variant="accent">
                  Plan Your Trip
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="card">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600">{destination.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <FiStar className="mx-auto text-accent-500 mb-2" size={24} />
                    <div className="font-semibold">{destination.rating}</div>
                    <div className="text-sm text-gray-500">{destination.reviews} reviews</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <FiCalendar className="mx-auto text-primary-500 mb-2" size={24} />
                    <div className="font-semibold">Best Time</div>
                    <div className="text-sm text-gray-500">{destination.bestTimeToVisit}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <FiClock className="mx-auto text-secondary-500 mb-2" size={24} />
                    <div className="font-semibold">Duration</div>
                    <div className="text-sm text-gray-500">5-7 days recommended</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <FiDollarSign className="mx-auto text-success-500 mb-2" size={24} />
                    <div className="font-semibold">Budget</div>
                    <div className="text-sm text-gray-500">${destination.price.from}-{destination.price.to}</div>
                  </div>
                </div>
              </div>
              
              {/* Gallery */}
              <div className="card">
                <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {destination.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${destination.name} ${index + 1}`}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  ))}
                </div>
              </div>
              
              {/* Highlights */}
              <div className="card">
                <h2 className="text-2xl font-bold mb-4">Highlights</h2>
                <ul className="space-y-3">
                  {destination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-6 h-6 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full mr-3 text-sm font-medium">
                        {index + 1}
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Info */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Weather</h3>
                <div className="space-y-3">
                  {Object.entries(destination.weather).map(([season, description]) => (
                    <div key={season} className="flex justify-between">
                      <span className="capitalize text-gray-600">{season}</span>
                      <span className="text-gray-900">{description}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Transportation */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Getting Around</h3>
                <ul className="space-y-2">
                  {destination.transportation.map((transport, index) => (
                    <li key={index} className="text-gray-600">• {transport}</li>
                  ))}
                </ul>
              </div>
              
              {/* CTA */}
              <div className="card bg-primary-50">
                <h3 className="text-xl font-bold mb-2">Ready to explore {destination.name}?</h3>
                <p className="text-gray-600 mb-4">
                  Start planning your trip now and create unforgettable memories.
                </p>
                <Button variant="primary" fullWidth>
                  Start Planning
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DestinationDetail