import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiSearch, FiMapPin, FiFilter, FiStar } from 'react-icons/fi'
import Button from '../../components/ui/Button'

const Destinations = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    continent: '',
    budget: '',
    type: '',
  })
  
  // Mock data 
  const destinations = [
    {
      id: 1,
      name: 'Paris',
      country: 'France',
      continent: 'Europe',
      rating: 4.8,
      budget: 'high',
      type: 'city',
      image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'The City of Light with iconic landmarks and world-class cuisine.'
    },
    {
      id: 2,
      name: 'Tokyo',
      country: 'Japan',
      continent: 'Asia',
      rating: 4.9,
      budget: 'high',
      type: 'city',
      image: 'https://images.pexels.com/photos/9425202/pexels-photo-9425202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: "Ultramodern meets traditional in Japan's bustling capital."
    },
    {
      id: 3,
      name: 'Bali',
      country: 'Indonesia',
      continent: 'Asia',
      rating: 4.6,
      budget: 'medium',
      type: 'beach',
      image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Tropical paradise with beautiful beaches and rich culture.'
    },
    {
      id: 4,
      name: 'Santorini',
      country: 'Greece',
      continent: 'Europe',
      rating: 4.7,
      budget: 'high',
      type: 'beach',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Stunning island with white-washed buildings and blue domes.'
    },
    {
      id: 5,
      name: 'New York City',
      country: 'USA',
      continent: 'North America',
      rating: 4.7,
      budget: 'high',
      type: 'city',
      image: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'The Big Apple offers world-class entertainment, shopping, and dining.'
    },
    {
      id: 6,
      name: 'Marrakech',
      country: 'Morocco',
      continent: 'Africa',
      rating: 4.5,
      budget: 'medium',
      type: 'cultural',
      image: 'https://images.pexels.com/photos/4577792/pexels-photo-4577792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Ancient city with vibrant markets and rich history.'
    },
    {
      id: 7,
      name: 'Sydney',
      country: 'Australia',
      continent: 'Oceania',
      rating: 4.6,
      budget: 'high',
      type: 'city',
      image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Stunning harbor city with iconic landmarks and beautiful beaches.'
    },
    {
      id: 8,
      name: 'Rio de Janeiro',
      country: 'Brazil',
      continent: 'South America',
      rating: 4.5,
      budget: 'medium',
      type: 'beach',
      image: 'https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Vibrant city known for its beautiful beaches and carnival.'
    },
  ]
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters({
      ...filters,
      [name]: value
    })
  }
  
  const resetFilters = () => {
    setFilters({
      continent: '',
      budget: '',
      type: '',
    })
    setSearchQuery('')
  }
  
  // Filter destinations based on search query and filters
  const filteredDestinations = destinations.filter((destination) => {
    // Search query filter
    const matchesSearch = 
      destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    // Additional filters
    const matchesContinent = !filters.continent || destination.continent === filters.continent
    const matchesBudget = !filters.budget || destination.budget === filters.budget
    const matchesType = !filters.type || destination.type === filters.type
    
    return matchesSearch && matchesContinent && matchesBudget && matchesType
  })
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container-wide">
          <h1 className="text-4xl font-bold mb-6 text-white">Discover Amazing Destinations</h1>
          <p className="text-xl mb-8 max-w-2xl text-primary-100">
            Explore breathtaking locations around the world and find your perfect next adventure
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-3xl">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-grow">
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search destinations, countries, or experiences..."
                  className="form-input pl-10 w-full"
                />
              </div>
              <Button 
                variant="accent"
                className="flex-shrink-0"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Filters</h2>
                  <button 
                    className="text-primary-600 text-sm font-medium"
                    onClick={resetFilters}
                  >
                    Reset All
                  </button>
                </div>
                
                <div className="space-y-6">
                  {/* Continent Filter */}
                  <div>
                    <label htmlFor="continent" className="block text-sm font-medium text-gray-700 mb-2">
                      Continent
                    </label>
                    <select
                      id="continent"
                      name="continent"
                      value={filters.continent}
                      onChange={handleFilterChange}
                      className="form-input"
                    >
                      <option value="">All Continents</option>
                      <option value="Africa">Africa</option>
                      <option value="Asia">Asia</option>
                      <option value="Europe">Europe</option>
                      <option value="North America">North America</option>
                      <option value="South America">South America</option>
                      <option value="Oceania">Oceania</option>
                    </select>
                  </div>
                  
                  {/* Budget Filter */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={filters.budget}
                      onChange={handleFilterChange}
                      className="form-input"
                    >
                      <option value="">All Budgets</option>
                      <option value="low">Budget-Friendly</option>
                      <option value="medium">Mid-Range</option>
                      <option value="high">Luxury</option>
                    </select>
                  </div>
                  
                  {/* Destination Type Filter */}
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                      Destination Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={filters.type}
                      onChange={handleFilterChange}
                      className="form-input"
                    >
                      <option value="">All Types</option>
                      <option value="beach">Beach</option>
                      <option value="city">City</option>
                      <option value="mountain">Mountain</option>
                      <option value="cultural">Cultural</option>
                      <option value="adventure">Adventure</option>
                    </select>
                  </div>
                  
                  <Button 
                    variant="primary" 
                    fullWidth
                    className="mt-4"
                    icon={<FiFilter />}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Destinations Grid */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {filteredDestinations.length} Destinations
                </h2>
                <div className="flex items-center">
                  <span className="mr-2 text-sm text-gray-600">Sort by:</span>
                  <select className="form-input py-1 text-sm pr-8">
                    <option>Popularity</option>
                    <option>Rating: High to Low</option>
                    <option>Name: A to Z</option>
                  </select>
                </div>
              </div>
              
              {filteredDestinations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDestinations.map((destination) => (
                    <div 
                      key={destination.id}
                      className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform hover:shadow-md hover:-translate-y-1 cursor-pointer"
                      onClick={() => navigate(`/destinations/${destination.id}`)}
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">{destination.name}</h3>
                          <div className="flex items-center bg-accent-50 text-accent-700 px-2 py-1 rounded-full text-xs font-medium">
                            <FiStar size={12} className="mr-1" />
                            {destination.rating}
                          </div>
                        </div>
                        <p className="text-gray-600 flex items-center mb-2">
                          <FiMapPin size={14} className="mr-1" />
                          {destination.country}
                        </p>
                        <p className="text-gray-700 text-sm mb-3">
                          {destination.description}
                        </p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          fullWidth
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg p-8 text-center">
                  <h3 className="text-xl font-medium mb-2">No destinations found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search criteria or filters
                  </p>
                  <Button 
                    variant="primary"
                    onClick={resetFilters}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Destinations