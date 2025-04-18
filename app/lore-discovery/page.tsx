'use client'

import { LoreFeed } from '../components/nft-lore/LoreFeed'

// Sample data - Reused from NFT lore page
const sampleNFTs = [
  {
    id: '1',
    name: 'Tome of Eternal Flames',
    imageUrl: '/images/sample-nfts/nft-1.png',
    collection: 'RugDollz'
  },
  {
    id: '2',
    name: 'Tome of the Forbidden Arts',
    imageUrl: '/images/sample-nfts/nft-2.png',
    collection: 'RugDollz'
  },
  {
    id: '3',
    name: 'Tome of the Earths Veins',
    imageUrl: '/images/sample-nfts/nft-3.png',
    collection: 'RugDollz'
  }
]

const sampleLoreEntries = [
  {
    id: '1',
    nft: sampleNFTs[0],
    content: 'The Tome of Eternal Flames was discovered in the ancient ruins of the First City, its pages still warm to the touch after millennia. Legend speaks of its creation during the Great Convergence, when the elemental planes briefly aligned. The knowledge contained within is said to be capable of both creation and destruction, depending on the intent of its wielder.',
    createdAt: '2024-02-20T10:30:00Z',
    author: 'LoreKeeper_42',
    votes: 156,
    userVote: null
  },
  {
    id: '2',
    nft: sampleNFTs[1],
    content: 'Deep within the Forbidden Archives, this tome was sealed away by the Council of Mages. Its contents speak of arts so powerful they were deemed too dangerous for any single person to possess. The intricate patterns on its cover seem to shift and change when viewed from different angles, as if the book itself is trying to hide its true nature.',
    createdAt: '2024-02-19T15:45:00Z',
    author: 'MysticScribe',
    votes: 89,
    userVote: 'up' as const
  },
  {
    id: '3',
    nft: sampleNFTs[2],
    content: 'The Tome of the Earths Veins contains ancient knowledge of ley lines and their manipulation. It was penned by the legendary geomancer Terravox during their decades-long journey mapping the worlds energy currents. Some say the book itself is bound in stone that pulses with the heartbeat of the world.',
    createdAt: '2024-02-18T09:15:00Z',
    author: 'EarthWalker',
    votes: 124,
    userVote: 'down' as const
  }
]

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
          <LoreFeed entries={sampleLoreEntries} />
        </div>
      </div>
    </div>
  )
} 