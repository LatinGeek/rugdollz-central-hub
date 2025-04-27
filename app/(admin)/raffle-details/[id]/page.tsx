import { RaffleDetailsInteractive } from '@/app/components/admin/RaffleDetailsInteractive'
import { sampleRaffleDetails } from '@/types/FormattedData/raffle-details'


export default function RaffleDetailsPage() {

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-8">
        Raffle Details
      </h1>
      
      <div className="bg-[rgb(var(--bg-dark))] rounded-lg p-6">
        <RaffleDetailsInteractive initialRaffle={sampleRaffleDetails[0]} isAdmin={false} />
      </div>   
    </div>
  )
} 