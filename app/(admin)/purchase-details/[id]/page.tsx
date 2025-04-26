import { PurchaseDetailsInteractive } from '@/app/components/admin/PurchaseDetailsInteractive'
import { PurchaseDetails, samplePurchaseDetails } from '@/types/FormattedData/purchase-details'

// Sample data - Replace with actual data fetching


interface PurchaseDetailsPageProps {
  params: Promise<{
    id: string
  }>
}

export default function PurchaseDetailsPage({ params }: PurchaseDetailsPageProps) {
  // In a real application, you would fetch the purchase data using the ID
  // const purchase = await fetchPurchase(params.id)
  console.log(params)
  // For now, we'll use the sample data
  const purchaseDetails: PurchaseDetails = samplePurchaseDetails[0];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-8">
        Purchase Details
      </h1>
      
      <div className="bg-[rgb(var(--bg-dark))] rounded-lg p-6">
        <PurchaseDetailsInteractive purchaseDetails={purchaseDetails} />
      </div>
    </div>
  )
} 