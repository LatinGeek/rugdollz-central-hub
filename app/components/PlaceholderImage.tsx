'use client'

interface PlaceholderImageProps {
  category: string
  className?: string
}

const categoryColors: Record<string, string> = {
  'Game Items': '#FF6B6B',
  'Pets': '#4ECDC4',
  'Cosmetics': '#FFD166',
  'Consumables': '#6A0572',
  'Membership': '#1A535C',
  'Bundles': '#FF9F1C'
}

const categoryIcons: Record<string, string> = {
  'Game Items': '🎮',
  'Pets': '🐱',
  'Cosmetics': '💄',
  'Consumables': '⚡',
  'Membership': '👑',
  'Bundles': '🎁'
}

export function PlaceholderImage({ category, className = '' }: PlaceholderImageProps) {
  const color = categoryColors[category] || '#6B7280'
  const icon = categoryIcons[category] || '📦'
  
  return (
    <div className={`relative w-full h-full ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="400" height="300" fill={color} fillOpacity="0.1" />
        <path
          d="M200 150C222.091 150 240 132.091 240 110C240 87.9086 222.091 70 200 70C177.909 70 160 87.9086 160 110C160 132.091 177.909 150 200 150Z"
          fill={color}
          fillOpacity="0.2"
        />
        <path
          d="M200 170C155.817 170 120 205.817 120 250H280C280 205.817 244.183 170 200 170Z"
          fill={color}
          fillOpacity="0.2"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl transform transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
} 