import { PurchaseDetailsInteractive } from '@/app/components/admin/PurchaseDetailsInteractive'

// Sample data - Replace with actual data fetching
const samplePurchase = {
  id: '1',
  title: 'RugDollz OG #1234',
  description: 'Purchase of a rare RugDollz OG NFT',
  nft: {
    id: '1234',
    name: 'RugDollz OG #1234',
    imageUrl: '/images/sample-nfts/nft-1.png',
    collection: 'RugDollz OG'
  },
  buyer: {
    id: '1',
    username: 'NFTCollector_42',
    walletAddress: '0x123...456'
  },
  status: 'completed' as const,
  purchaseDate: '2024-03-15T00:00:00Z',
  price: 1.5,
  paymentMethod: 'ETH',
  transactionHash: '0xabc...def',
  notes: [
    {
      id: '1',
      content: 'Purchase completed successfully',
      author: 'Admin',
      createdAt: '2024-03-15T10:30:00Z'
    },
    {
      id: '2',
      content: 'NFT transferred to buyer',
      author: 'Admin',
      createdAt: '2024-03-15T11:45:00Z'
    }
  ]
}

interface PurchaseDetailsPageProps {
  params: {
    id: string
  }
}

export default function PurchaseDetailsPage({ params }: PurchaseDetailsPageProps) {
  // In a real application, you would fetch the purchase data using the ID
  // const purchase = await fetchPurchase(params.id)
  console.log(params.id)
  // For now, we'll use the sample data
  const purchase = samplePurchase

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-8">
        Purchase Details
      </h1>
      
      <div className="bg-[rgb(var(--bg-dark))] rounded-lg p-6">
        <PurchaseDetailsInteractive initialPurchase={purchase} />
      </div>
    </div>
  )
} 