'use client'

import { useState, useRef } from 'react'
import { Highlights } from '@/app/components/profile/Highlights'
import { LoreFeed } from '@/app/components/nft-lore/LoreFeed'
import { WriteLore } from '@/app/components/nft-lore/WriteLore'
import { NFT, sampleNFTs } from '@/types/nft'
import { LoreEntryDetails, sampleLoreEntryDetails } from '@/types/FormattedData/lore-entry-details'
import { sampleUserDetails } from '@/types/FormattedData/user-details'
import { LoreEntry } from '@/types/Entities/lore-entry'
import { LoreEntryStatus } from '@/types/enums/lore-entry-status'


export default function NFTLorePage() {
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null)
  const [entries, setEntries] = useState<LoreEntryDetails[]>(sampleLoreEntryDetails)
  const writeLoreRef = useRef<HTMLDivElement>(null)

  const handleNFTClick = (nft: NFT) => {
    setSelectedNFT(nft)
    // Scroll to the WriteLore component after a short delay to ensure it's rendered
    setTimeout(() => {
      writeLoreRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleSubmitLore = async (content: string) => {
    if (!selectedNFT) return

    // In a real app, this would be an API call
    const newEntry: LoreEntry = {
      id: Date.now().toString(),
      title: selectedNFT.name,
      nftId: selectedNFT.id,
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: LoreEntryStatus.published,
      authorId: sampleUserDetails[0].id, // Replace with actual user
      votes: 0,
    }

    const newEntryDetails: LoreEntryDetails = {
      loreEntry: newEntry,
      userDetails: sampleUserDetails[0],
      nft: selectedNFT,
      userVote: null,
    }

    setEntries(prev => [newEntryDetails, ...prev])
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-darker))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-[rgb(var(--text-primary))] mb-2">NFT Lore</h1>
          <p className="text-[rgb(var(--text-secondary))]">
            Discover and contribute to the rich lore of your NFTs
          </p>
        </div>

        <Highlights
          title="YOUR NFTS"
          nfts={sampleNFTs}
          onNFTClick={handleNFTClick}
          className="mb-8"
        />

        {selectedNFT && (
          <div 
            ref={writeLoreRef}
            className="scroll-mt-16 w-full mx-auto   py-8"
          >
            <WriteLore
              nft={selectedNFT}
              onClose={() => setSelectedNFT(null)}
              onSubmit={handleSubmitLore}
            />
          </div>
        )}

        <div>
          <h2 className="text-xl font-bold text-[rgb(var(--text-primary))] mb-4">LATEST LORE ENTRIES</h2>
          <LoreFeed loreEntryDetails={entries} />
        </div>
      </div>
    </div>
  )
} 