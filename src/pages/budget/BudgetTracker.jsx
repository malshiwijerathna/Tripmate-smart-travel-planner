import { useState } from 'react'
import { FiDollarSign, FiPieChart, FiTrendingUp, FiPlus } from 'react-icons/fi'
import Button from '../../components/ui/Button'

const BudgetTracker = () => {
  const [activeTrip, setActiveTrip] = useState('all')
  
  // Mock data - would be fetched from API
  const trips = [
    {
      id: 1,
      name: 'Paris Trip',
      budget: 3000,
      spent: 2100,
      remaining: 900,
    },
    {
      id: 2,
      name: 'Tokyo Trip',
      budget: 4500,
      spent: 0,
      remaining: 4500,
    },
  ]
  
  const expenses = [
    {
      id: 1,
      tripId: 1,
      category: 'Flights',
      amount: 800,
      date: '2024-02-15',
      paid: true,
    },
    {
      id: 2,
      tripId: 1,
      category: 'Hotel',
      amount: 1200,
      date: '2024-02-15',
      paid: true,
    },
    {
      id: 3,
      tripId: 1,
      category: 'Activities',
      amount: 400,
      date: '2024-02-16',
      paid: false,
    },
    {
      id: 4,
      tripId: 2,
      category: 'Flights',
      amount: 1000,
      date: '2024-02-20',
      paid: false,
    },
  ]
  
  const categories = [
    'Flights',
    'Hotel',
    'Transportation',
    'Food & Dining',
    'Activities',
    'Shopping',
    'Other',
  ]
  
  const filteredExpenses = activeTrip === 'all'
    ? expenses
    : expenses.filter(expense => expense.tripId === parseInt(activeTrip))
  
  const totalBudget = trips.reduce((sum, trip) => sum + trip.budget, 0)
  const totalSpent = trips.reduce((sum, trip) => sum + trip.spent, 0)
  const totalRemaining = totalBudget - totalSpent
  
  return (
    <div className="container-wide py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Budget Tracker</h1>
          <p className="text-gray-600">Manage your travel expenses</p>
        </div>
        <Button 
          variant="primary"
          className="flex items-center"
        >
          <FiPlus className="mr-2" />
          Add Expense
        </Button>
      </div>
      
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card bg-primary-50">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-primary-600 font-medium">Total Budget</p>
              <h3 className="text-2xl font-bold mt-1">${totalBudget}</h3>
            </div>
            <div className="p-3 bg-primary-100 rounded-lg">
              <FiDollarSign className="text-primary-600" size={24} />
            </div>
          </div>
        </div>
        
        <div className="card bg-success-50">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-success-600 font-medium">Total Spent</p>
              <h3 className="text-2xl font-bold mt-1">${totalSpent}</h3>
            </div>
            <div className="p-3 bg-success-100 rounded-lg">
              <FiPieChart className="text-success-600" size={24} />
            </div>
          </div>
        </div>
        
        <div className="card bg-accent-50">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-accent-600 font-medium">Remaining</p>
              <h3 className="text-2xl font-bold mt-1">${totalRemaining}</h3>
            </div>
            <div className="p-3 bg-accent-100 rounded-lg">
              <FiTrendingUp className="text-accent-600" size={24} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Expenses List */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Expenses</h2>
              <select
                className="form-input py-1 pr-8"
                value={activeTrip}
                onChange={(e) => setActiveTrip(e.target.value)}
              >
                <option value="all">All Trips</option>
                {trips.map(trip => (
                  <option key={trip.id} value={trip.id}>{trip.name}</option>
                ))}
              </select>
            </div>
            
            <div className="space-y-4">
              {filteredExpenses.map(expense => (
                <div
                  key={expense.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center">
                    <div className="p-2 bg-white rounded-lg mr-4">
                      <FiDollarSign className="text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">{expense.category}</h4>
                      <p className="text-sm text-gray-500">
                        {new Date(expense.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${expense.amount}</p>
                    <span className={`text-sm ${
                      expense.paid ? 'text-success-600' : 'text-gray-500'
                    }`}>
                      {expense.paid ? 'Paid' : 'Pending'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trip Budgets */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Trip Budgets</h3>
            <div className="space-y-4">
              {trips.map(trip => (
                <div key={trip.id}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{trip.name}</span>
                    <span className="text-gray-600">
                      ${trip.spent} / ${trip.budget}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-500 h-2 rounded-full"
                      style={{ width: `${(trip.spent / trip.budget) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Add */}
          <div className="card bg-gray-50">
            <h3 className="text-xl font-bold mb-4">Quick Add Expense</h3>
            <form className="space-y-4">
              <div>
                <label className="form-label">Category</label>
                <select className="form-input">
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="form-label">Amount</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiDollarSign className="text-gray-400" />
                  </div>
                  <input
                    type="number"
                    className="form-input pl-8"
                    placeholder="0.00"
                  />
                </div>
              </div>
              
              <div>
                <label className="form-label">Trip</label>
                <select className="form-input">
                  {trips.map(trip => (
                    <option key={trip.id} value={trip.id}>{trip.name}</option>
                  ))}
                </select>
              </div>
              
              <Button variant="primary" fullWidth>
                Add Expense
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BudgetTracker