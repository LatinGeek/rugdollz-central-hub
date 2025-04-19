'use client'

import { useState, useMemo } from 'react'
import { ModeratedLoreEntry } from './ModeratedLoreEntry'

interface NFT {
  id: string
  name: string
  imageUrl: string
  collection: string
}

interface LoreEntry {
  id: string
  nft: NFT
  content: string
  createdAt: string
  author: string
  votes: number
}

interface ModeratedLoreFeedProps {
  entries: LoreEntry[]
}

export function ModeratedLoreFeed({ entries: initialEntries }: ModeratedLoreFeedProps) {
  const [entries, setEntries] = useState(initialEntries)
  const [searchQuery, setSearchQuery] = useState('')

  // Filter entries by search query
  const filteredEntries = useMemo(() => {
    if (!searchQuery) return entries
    const query = searchQuery.toLowerCase()
    return entries.filter(entry => 
      entry.author.toLowerCase().includes(query)
    )
  }, [entries, searchQuery])

  const handleDelete = (entryId: string) => {
    setEntries(currentEntries => currentEntries.filter(entry => entry.id !== entryId))
  }

  return (
    <div className="space-y-4">
      {/* Search Section */}
      <div className="flex items-center gap-4 mb-6">
        <label className="text-sm text-[rgb(var(--text-primary))]">Search by User:</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter username..."
          className="bg-[rgb(var(--bg-dark))] text-[rgb(var(--text-primary))] border border-[rgb(var(--border-dark))] rounded-lg px-3 py-2 flex-1"
        />
      </div>

      {/* Entries List */}
      <div className="space-y-4">
        {filteredEntries.map(entry => (
          <ModeratedLoreEntry
            key={entry.id}
            entry={entry}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  )
} 