'use client'

import { useState, useRef, useEffect } from 'react'
import { Highlights } from '@/app/components/profile/Highlights'
import { LoreFeed } from '@/app/components/nft-lore/LoreFeed'
import { WriteLore } from '@/app/components/nft-lore/WriteLore'
import { NFT } from '@/types/Entities/nft'
import { LoreEntryDetails } from '@/types/FormattedData/lore-entry-details'
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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const writeLoreRef = useRef<HTMLDivElement>(null)
  const { getUserNFTs } = useNFTService()
  const { getUserLoreEntries, createLoreEntry, voteLoreEntry } = useLoreService()
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

        console.log(loreEntries)
        
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

    try {
      setIsSubmitting(true)
      setError(null)

      // Create the lore entry
      const newEntry = await createLoreEntry({
        title: selectedNFT.name,
        content,
        nftId: selectedNFT.id
      });

      if (!newEntry) {
        throw new Error('Failed to create lore entry');
      }

      // Create the full lore entry details
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
      }

      // Update the UI
      setEntries(prev => [newEntryDetails, ...prev])
      setSelectedNFT(null) // Close the write form
    } catch (err) {
      console.error('Error creating lore entry:', err)
      setError('Failed to create lore entry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleVote = async (entryId: string, voteValue: 1 | -1 | null) => {
    if (!user) return;

    try {
      // Calculate vote change for optimistic update
      const entry = entries.find(e => e.loreEntry.id === entryId);
      if (!entry) return;

      const oldVote = entry.userVote;
      let voteChange = 0;

      // Calculate vote change
      if (voteValue === null && oldVote === 1) voteChange = -1;
      if (voteValue === null && oldVote === -1) voteChange = 1;
      if (voteValue === 1 && oldVote === null) voteChange = 1;
      if (voteValue === 1 && oldVote === -1) voteChange = 2;
      if (voteValue === -1 && oldVote === null) voteChange = -1;
      if (voteValue === -1 && oldVote === 1) voteChange = -2;

      // Optimistically update UI
      setEntries(prev => prev.map(entry => {
        if (entry.loreEntry.id === entryId) {
          return {
            ...entry,
            loreEntry: {
              ...entry.loreEntry,
              votes: entry.loreEntry.votes + voteChange
            },
            userVote: voteValue
          };
        }
        return entry;
      }));

      // Make API call
      const updatedVotes = await voteLoreEntry(entryId, voteValue);
      if (updatedVotes === null) {
        // If API call fails, revert the optimistic update
        setEntries(prev => prev.map(entry => {
          if (entry.loreEntry.id === entryId) {
            return {
              ...entry,
              loreEntry: {
                ...entry.loreEntry,
                votes: entry.loreEntry.votes - voteChange
              },
              userVote: oldVote
            };
          }
          return entry;
        }));
        throw new Error('Failed to update vote');
      }

      // Update with actual vote count from server (in case of race conditions)
      setEntries(prev => prev.map(entry => {
        if (entry.loreEntry.id === entryId) {
          return {
            ...entry,
            loreEntry: {
              ...entry.loreEntry,
              votes: updatedVotes
            },
            userVote: voteValue
          };
        }
        return entry;
      }));
    } catch (err) {
      console.error('Error voting on lore entry:', err);
      setError('Failed to update vote. Please try again.');
    }
  };

  if (isLoading) {
    return <LoadingSpinner fullScreen />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[rgb(var(--bg-darker))] flex items-center justify-center">
        <div className="text-[rgb(var(--text-primary))]">{error}</div>
      </div>
    );
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
              isSubmitting={isSubmitting}
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
            <LoreFeed 
              loreEntryDetails={entries} 
              onVote={handleVote}
            />
          )}
        </div>
      </div>
    </div>
  )
} 