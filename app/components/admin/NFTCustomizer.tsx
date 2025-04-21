'use client'

import { useState, useRef, useEffect } from 'react'
import { Download } from 'lucide-react'
import { PlaceholderImage } from '@/app/components/PlaceholderImage'

interface LayerOption {
  id: string
  name: string
  imageUrl: string
}

interface LayerCategory {
  id: string
  name: string
  options: LayerOption[]
}

interface NFTCustomizerProps {
  baseImage: string
  categories: LayerCategory[]
}

export function NFTCustomizer({ baseImage, categories }: NFTCustomizerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].id)
  const [selectedLayers, setSelectedLayers] = useState<Record<string, string>>({})
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
  const [showLeftGradient, setShowLeftGradient] = useState(false)
  const [showRightGradient, setShowRightGradient] = useState(true)
  const [showLayerLeftGradient, setShowLayerLeftGradient] = useState(false)
  const [showLayerRightGradient, setShowLayerRightGradient] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)
  const layersRef = useRef<HTMLDivElement>(null)

  const handleCategorySelect = (categoryId: string): void => {
    setSelectedCategory(categoryId)
  }

  const handleLayerSelect = (categoryId: string, optionId: string) => {
    setSelectedLayers(prev => ({
      ...prev,
      [categoryId]: optionId
    }))
  }

  const handleDownload = () => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const link = document.createElement('a')
    link.download = 'custom-nft.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  const handleImageError = (imageUrl: string) => {
    setImageErrors(prev => new Set([...prev, imageUrl]))
  }

  const handleScroll = () => {
    if (!categoriesRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = categoriesRef.current
    setShowLeftGradient(scrollLeft > 0)
    setShowRightGradient(scrollLeft < scrollWidth - clientWidth)
  }

  const handleLayerScroll = () => {
    if (!layersRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = layersRef.current
    setShowLayerLeftGradient(scrollLeft > 0)
    setShowLayerRightGradient(scrollLeft < scrollWidth - clientWidth)
  }

  useEffect(() => {
    const container = categoriesRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      handleScroll() // Initial check
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const container = layersRef.current
    if (container) {
      container.addEventListener('scroll', handleLayerScroll)
      handleLayerScroll() // Initial check
      return () => container.removeEventListener('scroll', handleLayerScroll)
    }
  }, [selectedCategory])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Load and draw base image
    const baseImg = new Image()
    baseImg.src = baseImage
    baseImg.onload = () => {
      ctx.drawImage(baseImg, 0, 0, canvas.width, canvas.height)

      // Draw selected layers
      Object.entries(selectedLayers).forEach(([categoryId, optionId]) => {
        const category = categories.find(cat => cat.id === categoryId)
        const option = category?.options.find(opt => opt.id === optionId)
        
        if (option) {
          const layerImg = new Image()
          layerImg.src = option.imageUrl
          layerImg.onload = () => {
            ctx.drawImage(layerImg, 0, 0, canvas.width, canvas.height)
          }
          layerImg.onerror = () => {
            handleImageError(option.imageUrl)
          }
        }
      })
    }
  }, [baseImage, selectedLayers, categories])

  return (
    <div className="w-full max-w-full space-y-0">
      {/* NFT Preview */}
      <div className="px-4 relative w-full sm:w-1/2 m-auto aspect-square bg-[rgb(var(--bg-dark))] rounded-lg overflow-hidden">
        <canvas
          ref={canvasRef}
          className="p-4 absolute inset-0 w-full h-full"
          width={1000}
          height={1000}
        />
        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="absolute bottom-5 right-5 flex items-center space-x-2 px-2 py-2 sm:px-4 sm:py-4 bg-[rgba(var(--bg-dark))]/60 text-white rounded-lg hover:bg-[rgba(var(--primary-orange))]/60 transition-colors shadow-lg font-bold "
        >
          <Download className="w-6 h-6" />
        </button>
      </div>

      {/* Category Selector */}
      <div className="relative w-full">
        {/* Gradient Indicators */}
        <div 
          className={`block md:hidden absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[rgb(var(--bg-darker))] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
            showLeftGradient ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div 
          className={`block md:hidden absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[rgb(var(--bg-darker))] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
            showRightGradient ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div 
          ref={categoriesRef}
          className="relative pt-4 min-w-full w-0 flex space-x-4 overflow-x-auto pb-4 touch-pan-x snap-x snap-mandatory scrollbar-hide"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div className='snap-start w-4 min-w-4 flex-shrink-0'></div>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors snap-start ${
                selectedCategory === category.id
                  ? 'bg-[rgb(var(--primary-orange))] text-white'
                  : 'bg-[rgb(var(--bg-light))] text-[rgb(var(--text-primary))] hover:bg-[rgb(var(--bg-tertiary))]'
              }`}
            >
              {category.name}
            </button>
          ))}
          <div className='snap-start w-4 min-w-4 flex-shrink-0'></div>
        </div>
      </div>

      {/* Layer Options */}
      <div className="relative w-full">
        {/* Gradient Indicators */}
        <div 
          className={`block md:hidden absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[rgb(var(--bg-darker))] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
            showLayerLeftGradient ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div 
          className={`block md:hidden absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[rgb(var(--bg-darker))] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
            showLayerRightGradient ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div 
          ref={layersRef}
          className="relative pt-4 min-w-full w-0 flex space-x-4 overflow-x-auto pb-4 touch-pan-x snap-x snap-mandatory scrollbar-hide"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div className='snap-start w-4 min-w-4 flex-shrink-0'></div>
          {categories
            .find(cat => cat.id === selectedCategory)
            ?.options.map(option => {
              const hasError = imageErrors.has(option.imageUrl)
              
              return (
                <button
                  key={option.id}
                  onClick={() => handleLayerSelect(selectedCategory, option.id)}
                  className={`relative aspect-square w-32 flex-shrink-0 rounded-lg overflow-hidden transition-all snap-start ${
                    selectedLayers[selectedCategory] === option.id
                      ? 'ring-2 ring-[rgb(var(--accent))]'
                      : 'hover:ring-1 hover:ring-[rgb(var(--border-dark))]'
                  }`}
                >
                  {hasError ? (
                    <PlaceholderImage 
                      category={categories.find(cat => cat.id === selectedCategory)?.name || 'User'} 
                      className="w-full h-full"
                    />
                  ) : (
                    <img
                      src={option.imageUrl}
                      alt={option.name}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(option.imageUrl)}
                    />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                    <p className="text-sm text-white truncate">{option.name}</p>
                  </div>
                </button>
              )
            })}
          <div className='snap-start w-4 min-w-4 flex-shrink-0'></div>
        </div>
      </div>
    </div>
  )
} 