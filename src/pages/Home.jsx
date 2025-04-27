import { useNavigate } from 'react-router-dom'
import { FiSearch, FiMapPin, FiPocket, FiDollarSign, FiStar } from 'react-icons/fi'
import Button from '../components/ui/Button'

const Home = () => {
  const navigate = useNavigate()
  
  const popularDestinations = [
    {
      id: 1,
      name: 'Paris',
      country: 'France',
      image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      name: 'Tokyo',
      country: 'Japan',
      image: 'https://images.pexels.com/photos/9425202/pexels-photo-9425202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      name: 'New York',
      country: 'USA',
      image: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      name: 'Bali',
      country: 'Indonesia',
      image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ]
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-secondary-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Travel background" 
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
        </div>
        
        <div className="container-wide relative py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Your journey begins with perfect planning
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Plan your trip, track your budget, and discover amazing destinations all in one place
            </p>
            
            <div className="bg-white p-4 rounded-lg shadow-lg mb-8 animate-slide-up">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 mb-4 md:mb-0 md:mr-4">
                  <div className="relative">
                    <FiMapPin className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Where do you want to go?"
                      className="form-input pl-10"
                    />
                  </div>
                </div>
                <Button 
                  variant="accent" 
                  size="lg"
                  onClick={() => navigate('/destinations')}
                  className="flex items-center justify-center"
                >
                  <FiSearch className="mr-2" />
                  Explore
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => navigate('/register')}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10"
                onClick={() => navigate('/destinations')}
              >
                Browse Destinations
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan your perfect trip with ease</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our travel planning tools make it simple to create amazing trips while staying on budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full mb-6">
                <FiMapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Create your itinerary</h3>
              <p className="text-gray-600">
                Plan your perfect trip with our intuitive itinerary builder. Add destinations, activities, and accommodations.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-accent-100 text-accent-600 rounded-full mb-6">
                <FiDollarSign size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track your expenses</h3>
              <p className="text-gray-600">
                Keep your budget under control by tracking all your travel expenses in real-time.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-secondary-100 text-secondary-600 rounded-full mb-6">
                <FiPocket size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Find local businesses</h3>
              <p className="text-gray-600">
                Discover and book the best local restaurants, tours, and accommodations for your trip.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Destinations */}
      <section className="py-20">
        <div className="container-wide">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Popular Destinations</h2>
              <p className="text-gray-600">Explore our most-visited places around the world</p>
            </div>
            <Button 
              variant="outline"
              onClick={() => navigate('/destinations')}
            >
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination) => (
              <div 
                key={destination.id}
                className="rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02] cursor-pointer"
                onClick={() => navigate(`/destinations/${destination.id}`)}
              >
                <div className="relative h-48">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">{destination.name}</h3>
                  <p className="text-gray-600 flex items-center">
                    <FiMapPin size={14} className="mr-1" />
                    {destination.country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What our travelers say</h2>
            <p className="text-xl text-gray-600">Hear from people who have planned and experienced amazing trips with TRIPMATE</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="User" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">Alex Johnson</h4>
                  <p className="text-gray-600 text-sm">Tokyo, Japan</p>
                </div>
              </div>
              <p className="text-gray-700">
                "TRIPMATE made planning my trip to Japan so simple. The budget tracker
                helped me stay on track financially, and the itinerary builder was perfect
                for organizing our daily activities."
              </p>
              <div className="flex mt-4 text-accent-500">
                <FiStar size={18} />
                <FiStar size={18} />
                <FiStar size={18} />
                <FiStar size={18} />
                <FiStar size={18} />
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="User" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">Sarah Miller</h4>
                  <p className="text-gray-600 text-sm">Barcelona, Spain</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I've used several travel planners before, but TRIPMATE is by far the most
                comprehensive. Finding local businesses and adding them directly to my itinerary
                saved me hours of research!"
              </p>
              <div className="flex mt-4 text-accent-500">
                <FiStar size={18} />
                <FiStar size={18} />
                <FiStar size={18} />
                <FiStar size={18} />
                <FiStar size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start planning your next adventure?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of travelers who are creating amazing trips with TRIPMATE
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="accent" 
              size="lg"
              onClick={() => navigate('/register')}
            >
              Create Free Account
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate('/destinations')}
            >
              Explore Destinations
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home