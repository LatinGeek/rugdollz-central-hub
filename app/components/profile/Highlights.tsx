'use client'

interface NFT {
  id: string
  name: string
  imageUrl: string
  collection: string
}

interface HighlightsProps {
  nfts: NFT[]
}

export function Highlights({ nfts }: HighlightsProps) {
  return (
    <div className="bg-[rgb(var(--bg-dark))] rounded-xl p-6">
      <h2 className="text-xl font-bold text-[rgb(var(--text-primary))] mb-4">HIGHLIGHTS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            className="group relative aspect-square rounded-xl overflow-hidden bg-[rgb(var(--bg-darker))]"
          >
            <img
              src={nft.imageUrl}
              alt={nft.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
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