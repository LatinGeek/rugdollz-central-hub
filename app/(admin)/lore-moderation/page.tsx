import { ModeratedLoreFeed } from '@/app/components/admin/ModeratedLoreFeed'
import { sampleLoreEntryDetails } from '@/types/FormattedData/lore-entry-details'


export default function LoreModerationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[rgb(var(--text-primary))] mb-8">
        Lore Moderation
      </h1>
      
      <div className="bg-[rgb(var(--bg-dark))] rounded-lg p-6">
        <ModeratedLoreFeed loreEntryDetails={sampleLoreEntryDetails} />
      </div>
    </div>
  )
} 