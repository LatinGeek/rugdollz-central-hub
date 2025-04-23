'use client'

import { useState, useEffect } from 'react'
import { PlaceholderImage } from './PlaceholderImage'

interface StoreItemProps {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  category: string
  onPurchase: () => void
}

export function StoreItem({ id, name, description, price, imageUrl, category, onPurchase }: StoreItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [hasImageError, setHasImageError] = useState(false)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    // Reset states when imageUrl changes
    setHasImageError(false)
    setIsImageLoaded(false)
  }, [imageUrl])

  const handleImageError = () => {
    setHasImageError(true)
    setIsImageLoaded(false)
  }

  const handleImageLoad = () => {
    setIsImageLoaded(true)
  }

  return (
    <div 
      className="group relative bg-[rgb(var(--bg-light))] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 flex flex-row sm:flex-col h-32 sm:h-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-32 sm:w-full h-32 sm:h-64 flex-shrink-0 overflow-hidden">
        {!hasImageError && imageUrl && isImageLoaded ? (
            <img
              src={imageUrl}
              alt={name}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isHovered ? 'scale-110' : 'scale-100'
              } ${!isImageLoaded ? 'hidden' : ''}`}
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
        ) : (
          <PlaceholderImage category={category} />
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r sm:bg-gradient-to-t from-black/60 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Category Badge */}
        <div className="absolute top-1 right-0 md:top-3 md:right-3 bg-black/10 backdrop-blur-md text-[rgb(var(--accent))] px-2 py-1.5 mx-1 rounded-full text-[0.55rem] sm:text-xs font-medium transform transition-all duration-300 group-hover:scale-110 group-hover:bg-black/60">
          {category}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-3 md:p-5 flex flex-col justify-between flex-grow h-full">
        <div>
          <h3 className="sm:text-lg text-md font-bold text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--accent))] transition-colors duration-300">
            {name}
          </h3>
          <p className="sm:py-2 md:py-2 mt-1 md:text-base text-xs  text-[rgb(var(--text-secondary))] line-clamp-2">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-2">
            <span className="text-base font-bold text-[rgb(var(--accent))] group-hover:scale-105 transition-transform duration-300">
              {price.toLocaleString("en-US")}
            </span>
            <span className="text-xs sm:text-sm text-[rgb(var(--text-secondary))]">$RUGZ</span>
          </div>
          <button
            className="px-4 py-2 text-xs md:text-sm bg-[rgb(var(--bg-dark))] text-white rounded-lg hover:bg-[rgb(var(--primary-orange))] transition-all duration-300 transform hover:scale-105 active:scale-95 font-medium shadow-lg hover:shadow-[rgb(var(--accent))]/20"
            onClick={onPurchase}
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  )
} 