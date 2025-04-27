import { useState } from 'react'

const Avatar = ({ 
  src,
  alt,
  size = 'md',
  className = '',
  fallback,
}) => {
  const [imgError, setImgError] = useState(false)
  
  const handleError = () => {
    setImgError(true)
  }
  
  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-16 h-16 text-lg',
    xl: 'w-24 h-24 text-xl',
  }
  
  // Generate initials from name or use provided fallback
  const getInitials = () => {
    if (fallback) return fallback
    
    if (alt) {
      const names = alt.split(' ')
      if (names.length === 1) return names[0].charAt(0).toUpperCase()
      return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase()
    }
    
    return '?'
  }
  
  if (imgError || !src) {
    return (
      <div 
        className={`flex items-center justify-center rounded-full bg-gray-300 ${sizeClasses[size]} ${className}`} 
        role="img" 
        aria-label={alt || "User avatar"}
      >
        <span className="font-medium text-gray-800">{getInitials()}</span>
      </div>
    )
  }
  
  return (
    <img 
      src={src} 
      alt={alt || "User avatar"} 
      className={`rounded-full object-cover ${sizeClasses[size]} ${className}`}
      onError={handleError}
    />
  )
}

export default Avatar