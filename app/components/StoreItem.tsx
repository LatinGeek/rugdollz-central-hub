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
}

export function StoreItem({ name, description, price, imageUrl, category }: StoreItemProps) {
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
      className="group relative bg-[rgb(var(--bg-light))] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 flex flex-row sm:flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-30 sm:w-full h-full sm:h-auto aspect-[4/3] overflow-hidden">
        {!hasImageError && imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt={name}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isHovered ? 'scale-110' : 'scale-100'
              } ${!isImageLoaded ? 'hidden' : ''}`}
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
            {!isImageLoaded && <PlaceholderImage category={category} />}
          </>
        ) : (
          <PlaceholderImage category={category} />
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r sm:bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-[rgb(var(--accent))]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium transform transition-all duration-300 group-hover:scale-110 group-hover:bg-[rgb(var(--accent))]">
          {category}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--accent))] transition-colors duration-300">
            {name}
          </h3>
          <p className="mt-2 text-sm text-[rgb(var(--text-secondary))] line-clamp-2">
            {description}
          </p>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[rgb(var(--accent))] group-hover:scale-105 transition-transform duration-300">
              {price.toLocaleString("en-US")}
            </span>
            <span className="text-sm text-[rgb(var(--text-secondary))]">$RUGZ</span>
          </div>
          <button
            className="px-5 py-2.5 bg-[rgb(var(--accent))] text-white rounded-lg hover:bg-[rgb(var(--accent-dark))] transition-all duration-300 transform hover:scale-105 active:scale-95 font-medium shadow-lg hover:shadow-[rgb(var(--accent))]/20"
            onClick={() => {/* TODO: Implement purchase logic */}}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
} 