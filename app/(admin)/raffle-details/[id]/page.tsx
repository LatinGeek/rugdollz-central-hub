import { RaffleDetailsInteractive } from '@/app/components/admin/RaffleDetailsInteractive'

// Sample data - Replace with actual data fetching
const sampleRaffle = {
  id: '1',
  title: 'Tome of Eternal Flames Raffle',
  description: 'Win this legendary tome containing ancient knowledge of fire magic',
  nft: {
    id: '1',
    name: 'Tome of Eternal Flames',
    imageUrl: '/images/sample-nfts/nft-1.png',
    collection: 'RugDollz'
  },
  winner: {
    id: '1',
    username: 'LoreKeeper_42',
    walletAddress: '0x123...456'
  },
  status: 'pending' as const,
  startDate: '2024-03-15T00:00:00Z',
  endDate: '2024-03-20T00:00:00Z',
  ticketPrice: 0.1,
  totalTickets: 100,
  soldTickets: 85,
  notes: [
    {
      id: '1',
      content: 'Winner has been notified via email',
      author: 'Admin',
      createdAt: '2024-03-20T10:30:00Z'
    },
    {
      id: '2',
      content: 'Waiting for winner to confirm wallet address',
      author: 'Admin',
      createdAt: '2024-03-20T11:45:00Z'
    }
  ]
}

export default function RaffleDetailsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-8">
        Raffle Details
      </h1>
      
      <div className="bg-[rgb(var(--bg-dark))] rounded-lg p-6">
        <RaffleDetailsInteractive initialRaffle={sampleRaffle} />
      </div>
    </div>
  )
} 