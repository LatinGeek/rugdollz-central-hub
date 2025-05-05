'use client'

import { useState, useRef, useEffect } from 'react'
import { Highlights } from '@/app/components/profile/Highlights'
import { LoreFeed } from '@/app/components/nft-lore/LoreFeed'
import { WriteLore } from '@/app/components/nft-lore/WriteLore'
import { NFT } from '@/types/Entities/nft'
import { LoreEntryDetails } from '@/types/FormattedData/lore-entry-details'
import { LoreEntry } from '@/types/Entities/lore-entry'
import { LoreEntryStatus } from '@/types/enums/lore-entry-status'
import { useNFTService } from '@/services/nft'
import { useLoreService } from '@/services/lore'
import { useAuth } from '@/app/contexts/AuthContext'
import { LoadingSpinner } from '@/app/components/ui/LoadingSpinner'

export default function NFTLorePage() {
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null)
  const [entries, setEntries] = useState<LoreEntryDetails[]>([])
  const [nfts, setNFTs] = useState<NFT[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const writeLoreRef = useRef<HTMLDivElement>(null)
  const { getUserNFTs } = useNFTService()
  const { getUserLoreEntries } = useLoreService()
  const { user, connect } = useAuth()

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.address) {
        setIsLoading(false)
        return
      }

      try {
        setIsLoading(true)
        const [userNFTs, loreEntries] = await Promise.all([
          getUserNFTs(user.address),
          getUserLoreEntries(user.id)
        ]);
        
        setNFTs(userNFTs)
        if (loreEntries === null) {
          setError('Failed to load lore entries')
        } else {
          setEntries(loreEntries)
        }
      } catch (err) {
        console.error('Error fetching data:', err)
        setError('Failed to load data')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [user?.address, user?.id])

  const handleNFTClick = (nft: NFT) => {
    setSelectedNFT(nft)
    // Scroll to the WriteLore component after a short delay to ensure it's rendered
    setTimeout(() => {
      writeLoreRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleSubmitLore = async (content: string) => {
    if (!selectedNFT || !user) return

    // In a real app, this would be an API call
    const newEntry: LoreEntry = {
      id: Date.now().toString(),
      title: selectedNFT.name,
      nftId: selectedNFT.id,
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: LoreEntryStatus.published,
      authorId: user.id,
      votes: 0,
    }

    const newEntryDetails: LoreEntryDetails = {
      loreEntry: newEntry,
      userDetails: {
        id: user.id,
        address: user.address,
        username: user.username || null,
        avatar: user.avatar || null,
        points: user.points || 0,
        nfts: [],
        createdAt: user.createdAt || null,
        updatedAt: user.updatedAt || null,
        achievements: []
      },
      nft: selectedNFT,
      userVote: null,
      votes: 0
    }

    setEntries(prev => [newEntryDetails, ...prev])
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[rgb(var(--bg-darker))] flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[rgb(var(--bg-darker))] flex items-center justify-center">
        <div className="text-[rgb(var(--text-primary))]">{error}</div>
      </div>
    )
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

        {nfts.length === 0 ? (
          <div className="bg-[rgb(var(--bg-lighter))] rounded-lg p-8 text-center">
            <h2 className="text-xl font-semibold text-[rgb(var(--text-primary))] mb-2">No NFTs Found</h2>
            <p className="text-[rgb(var(--text-secondary))] mb-4">
              {user ? 
                "You don't have any NFTs in your wallet yet. Connect a wallet with NFTs to start contributing to their lore." :
                "Connect your wallet to view your NFTs and start contributing to their lore."
              }
            </p>
            {!user && (
              <button 
                onClick={() => connect()}
                className="bg-[rgb(var(--primary-orange))] text-white px-6 py-2 rounded-lg hover:bg-[rgb(var(--primary-dark))] transition-colors"
              >
                Connect Wallet
              </button>
            )}
          </div>
        ) : (
          <Highlights
            title="YOUR NFTS"
            nfts={nfts}
            onNFTClick={handleNFTClick}
            className="mb-8"
          />
        )}

        {selectedNFT && (
          <div 
            ref={writeLoreRef}
            className="scroll-mt-16 w-full mx-auto py-8"
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
          {entries.length === 0 ? (
            <div className="bg-[rgb(var(--bg-lighter))] rounded-lg p-8 text-center">
              <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-2">No Lore Entries Yet</h3>
              <p className="text-[rgb(var(--text-secondary))] mb-4">
                {selectedNFT ? 
                  "Start writing your first lore entry above!" :
                  "Select an NFT from your collection above to start writing its lore."
                }
              </p>
              {!selectedNFT && nfts.length > 0 && (
                <p className="text-[rgb(var(--text-secondary))] text-sm italic">
                  Click on any NFT in your collection to begin
                </p>
              )}
            </div>
          ) : (
            <LoreFeed loreEntryDetails={entries} />
          )}
        </div>
      </div>
    </div>
  )
} 