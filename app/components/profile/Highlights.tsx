'use client'

import { NFT } from "@/types/Entities/nft"
import { useState } from "react"
import { PlaceholderImage } from "@/app/components/PlaceholderImage"

interface HighlightsProps {
  title?: string
  nfts: NFT[]
  onNFTClick?: (nft: NFT) => void
  className?: string
}

export function Highlights({ 
  title = "HIGHLIGHTS", 
  nfts, 
  onNFTClick,
  className = ""
}: HighlightsProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (nftId: string) => {
    setImageErrors(prev => ({ ...prev, [nftId]: true }));
  };

  return (
    <div className={`bg-[rgb(var(--bg-dark))] rounded-xl p-6 ${className}`}>
      <h2 className="text-xl font-bold text-[rgb(var(--text-primary))] mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            className="group relative aspect-square rounded-xl overflow-hidden bg-[rgb(var(--bg-darker))] cursor-pointer"
            onClick={() => onNFTClick?.(nft)}
          >
            {nft.imageUrl && !imageErrors[nft.id] ? (
              <img
                src={nft.imageUrl}
                alt={nft.name}
                className="w-full h-full object-cover transition-transform duration-500 sm:group-hover:scale-110 scale-110 sm:scale-100"
                onError={() => handleImageError(nft.id)}
              />
            ) : (
              <PlaceholderImage category="NFT" className="w-full h-full" />
            )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/0 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
              <div className="text-white">
                <p className="text-sm font-medium truncate">{nft.name}</p>
                <p className="text-xs text-white/70">{nft.collection}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 