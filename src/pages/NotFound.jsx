import { useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import Button from '../components/ui/Button'

const NotFound = () => {
  const navigate = useNavigate()
  
  return (
    <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center py-12 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mt-6 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We're sorry, the page you requested could not be found. Please go back to the homepage.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="primary" 
            size="lg"
            className="flex items-center"
            onClick={() => navigate('/')}
          >
            <FiArrowLeft className="mr-2" />
            Back to Home
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound