'use client'

import { useState, useRef, useEffect } from 'react'
import { Download } from 'lucide-react'

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
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleCategorySelect = (categoryId: string) => {
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
        }
      })
    }
  }, [baseImage, selectedLayers, categories])

  return (
    <div className="space-y-8">
      {/* NFT Preview */}
      <div className="relative w-full max-w-md mx-auto aspect-square bg-[rgb(var(--bg-dark))] rounded-lg overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          width={1000}
          height={1000}
        />
      </div>

      {/* Category Selector */}
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category.id
                  ? 'bg-[rgb(var(--accent))] text-white'
                  : 'bg-[rgb(var(--bg-dark))] text-[rgb(var(--text-primary))] hover:bg-[rgb(var(--bg-tertiary))]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Layer Options */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories
          .find(cat => cat.id === selectedCategory)
          ?.options.map(option => (
            <button
              key={option.id}
              onClick={() => handleLayerSelect(selectedCategory, option.id)}
              className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                selectedLayers[selectedCategory] === option.id
                  ? 'ring-2 ring-[rgb(var(--accent))]'
                  : 'hover:ring-1 hover:ring-[rgb(var(--border-dark))]'
              }`}
            >
              <img
                src={option.imageUrl}
                alt={option.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                <p className="text-sm text-white truncate">{option.name}</p>
              </div>
            </button>
          ))}
      </div>

      {/* Download Button */}
      <div className="flex justify-center">
        <button
          onClick={handleDownload}
          className="flex items-center space-x-2 px-6 py-3 bg-[rgb(var(--accent))] text-white rounded-lg hover:bg-[rgb(var(--accent))]/90 transition-colors"
        >
          <Download className="w-5 h-5" />
          <span>Download NFT</span>
        </button>
      </div>
    </div>
  )
} 