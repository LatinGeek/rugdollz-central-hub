'use client'

import { useState, useMemo } from 'react'
import { ModeratedLoreEntry } from './ModeratedLoreEntry'
import { ConfirmDialog } from '../ui/ConfirmDialog'
import { LoreEntryDetails } from '@/types/FormattedData/lore-entry-details'

interface ModeratedLoreFeedProps {
  loreEntryDetails: LoreEntryDetails[]
}

export function ModeratedLoreFeed({ loreEntryDetails }: ModeratedLoreFeedProps) {
  const [entries, setEntries] = useState(loreEntryDetails)
  const [searchQuery, setSearchQuery] = useState('')
  const [showWorstRated, setShowWorstRated] = useState(false)
  const [entryToDelete, setEntryToDelete] = useState<LoreEntryDetails | null>(null)

  // Filter entries by search query and worst rating
  const filteredEntries = useMemo(() => {
    let filtered = [...entries]

    // Apply user search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(entry => 
        entry.userDetails.username?.toLowerCase().includes(query)
      )
    }

    // Apply worst rating filter
    if (showWorstRated) {
      // Sort by votes ascending and take the bottom 25%
      const sortedByVotes = [...filtered].sort((a, b) => a.loreEntry.votes - b.loreEntry.votes)
      const worstCount = Math.max(1, Math.floor(sortedByVotes.length * 0.25))
      const worstEntries = sortedByVotes.slice(0, worstCount)
      filtered = filtered.filter(entry => 
        worstEntries.some(worst => worst.loreEntry.id === entry.loreEntry.id)
      )
    }

    return filtered
  }, [entries, searchQuery, showWorstRated])

  const handleDeleteClick = (entry: LoreEntryDetails) => {
    setEntryToDelete(entry)
  }

  const handleDeleteConfirm = () => {
    if (entryToDelete) {
      setEntries(currentEntries => 
        currentEntries.filter(entry => entry.loreEntry.id !== entryToDelete.loreEntry.id)
      )
      setEntryToDelete(null)
    }
  }

  const handleDeleteCancel = () => {
    setEntryToDelete(null)
  }

  return (
    <div className="space-y-4">
      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <label className="text-sm text-[rgb(var(--text-primary))] whitespace-nowrap">Search by User:</label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter username..."
            className="bg-[rgb(var(--bg-dark))] text-[rgb(var(--text-primary))] border border-[rgb(var(--border-dark))] rounded-lg px-3 py-2 flex-1"
          />
        </div>

        <div className="flex items-center gap-3 bg-[rgb(var(--bg-dark))] border border-[rgb(var(--border-dark))] rounded-lg px-4 py-2">
          <input
            type="checkbox"
            id="worstRated"
            checked={showWorstRated}
            onChange={(e) => setShowWorstRated(e.target.checked)}
            className="w-4 h-4 text-[rgb(var(--accent))] bg-[rgb(var(--bg-dark))] border-[rgb(var(--border-dark))] rounded focus:ring-[rgb(var(--accent))]"
          />
          <label 
            htmlFor="worstRated"
            className="text-sm text-[rgb(var(--text-primary))] cursor-pointer select-none"
          >
            Show worst rated entries (bottom 25%)
          </label>
        </div>
      </div>

      {/* Entries List */}
      <div className="space-y-4">
        {filteredEntries.map(entry => (
          <ModeratedLoreEntry
            key={entry.loreEntry.id}
            entryDetails={entry}
            onDelete={() => handleDeleteClick(entry)}
          />
        ))}
      </div>

      {/* Delete Confirmation Dialog */}
      {entryToDelete && (
        <ConfirmDialog
          isOpen={!!entryToDelete}
          onClose={handleDeleteCancel}
          title="Delete Lore Entry"
          description={`Are you sure you want to delete the lore entry for "${entryToDelete.nft.name}"? This action cannot be undone.`}
          onConfirm={handleDeleteConfirm}
          action="Delete Lore Entry"
        />
      )}
    </div>
  )
} 