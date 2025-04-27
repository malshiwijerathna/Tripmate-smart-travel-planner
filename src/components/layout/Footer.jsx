import { Link } from 'react-router-dom'
import { FiMapPin, FiMail, FiPhone, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Travel<span className="text-accent-400">Ease</span></h3>
            <p className="text-gray-400 mb-4">Your perfect travel companion for planning trips, managing budgets, and discovering new destinations.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-white transition-colors">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-white transition-colors">
                  Create Account
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white transition-colors">Trip Planning</li>
              <li className="text-gray-400 hover:text-white transition-colors">Budget Tracking</li>
              <li className="text-gray-400 hover:text-white transition-colors">Interactive Maps</li>
              <li className="text-gray-400 hover:text-white transition-colors">Business Listings</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-primary-400" />
                <span className="text-gray-400">123 Travel Street, City, Country</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 text-primary-400" />
                <a href="mailto:info@TRIPMATE.com" className="text-gray-400 hover:text-white transition-colors">
                  info@TRIPMATE.com
                </a>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3 text-primary-400" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} TRIPMATE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer