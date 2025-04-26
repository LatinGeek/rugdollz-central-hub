'use client'

import { LoreFeed } from '../components/nft-lore/LoreFeed'
import { sampleLoreEntryDetails } from '@/types/FormattedData/lore-entry-details'



export default function LoreDiscoveryPage() {
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
          <LoreFeed loreEntryDetails={sampleLoreEntryDetails} />
        </div>
      </div>
    </div>
  )
} 