// API Configuration
export const API_URL = 'http://localhost:8080/api' // To be replaced with actual backend URL

// Map Configuration
export const MAP_ACCESS_TOKEN = 'pk.mock.mapbox.token' // Replace with actual token when integrating
export const DEFAULT_MAP_CENTER = {
  latitude: 40.7128,
  longitude: -74.0060, // New York City
}
export const DEFAULT_ZOOM_LEVEL = 9

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'token',
  USER_PREFERENCES: 'user_preferences',
  RECENT_SEARCHES: 'recent_searches'
}

// Roles
export const ROLES = {
  ADMIN: 'admin',
  TRAVELER: 'traveler',
  BUSINESS: 'business'
}

// Pagination
export const ITEMS_PER_PAGE = 12

// Trip Status
export const TRIP_STATUS = {
  PLANNING: 'planning',
  CONFIRMED: 'confirmed',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled'
}

// Budget Categories
export const BUDGET_CATEGORIES = [
  { id: 'accommodation', name: 'Accommodation', icon: 'hotel' },
  { id: 'transportation', name: 'Transportation', icon: 'plane' },
  { id: 'food', name: 'Food & Dining', icon: 'utensils' },
  { id: 'activities', name: 'Activities', icon: 'hiking' },
  { id: 'shopping', name: 'Shopping', icon: 'shopping-bag' },
  { id: 'other', name: 'Other', icon: 'tag' }
]