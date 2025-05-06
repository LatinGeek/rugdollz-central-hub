'use client'

import { useState, useEffect } from 'react'
import { LoreFeed } from '../components/nft-lore/LoreFeed'
import { LoreEntryDetails } from '@/types/FormattedData/lore-entry-details'
import { useLoreService } from '@/services/lore'
import { LoadingSpinner } from '../components/ui/LoadingSpinner'

export default function LoreDiscoveryPage() {
  const [entries, setEntries] = useState<LoreEntryDetails[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { getAllLoreEntries, voteLoreEntry } = useLoreService()

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const data = await getAllLoreEntries()
        if (data === null) {
          setError('Failed to load lore entries')
        } else {
          setEntries(data)
        }
      } catch (err) {
        console.error('Error fetching lore entries:', err)
        setError('Failed to load lore entries')
      } finally {
        setIsLoading(false)
      }
    }

    fetchEntries()
  }, [])

  const handleVote = async (entryId: string, voteValue: 1 | -1 | null) => {
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
          <h1 className="text-2xl font-bold text-[rgb(var(--text-primary))] mb-2">Lore Discovery</h1>
          <p className="text-[rgb(var(--text-secondary))]">
            Discover new stories and contribute to the RugDollz universe
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[rgb(var(--text-primary))] mb-4">LATEST LORE ENTRIES</h2>
          {entries.length === 0 ? (
            <div className="bg-[rgb(var(--bg-lighter))] rounded-lg p-8 text-center">
              <h3 className="text-lg font-semibold text-[rgb(var(--text-primary))] mb-2">No Lore Entries Yet</h3>
              <p className="text-[rgb(var(--text-secondary))]">
                Be the first to write a story for your NFT!
              </p>
            </div>
          ) : (
            <LoreFeed loreEntryDetails={entries} onVote={handleVote} />
          )}
        </div>
      </div>
    </div>
  );
} 