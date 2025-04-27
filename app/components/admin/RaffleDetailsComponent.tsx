'use client'

import { OrderStatusType } from '@/types/enums/order-status'
import { Notes } from './Notes'
import { TransactionInfo } from './TransactionInfo'
import { RaffleDetails } from '@/types/FormattedData/raffle-details'
import { useRaffleTimer } from '@/app/components/raffle/useRaffleTimer'

interface RaffleDetailsComponentProps {
  raffle: RaffleDetails
  onStatusChange: (status: OrderStatusType) => void
  newNote: string
  onNoteChange: (note: string) => void
  onAddNote: () => void
  showStatusChange: boolean
  showNoteAddition: boolean
  showNotes: boolean
  onJoin: () => void,
  userJoined: boolean
}

export function RaffleDetailsComponent({
  raffle,
  onStatusChange,
  newNote,
  onNoteChange,
  onAddNote,
  showStatusChange,
  showNoteAddition,
  showNotes,
  onJoin,
  userJoined
}: RaffleDetailsComponentProps) {
  const timer = useRaffleTimer(raffle.raffle.startDate.toISOString(), raffle.raffle.endDate.toISOString())

  const formatTime = (value: number) => {
    return value.toString().padStart(2, '0')
  }

  const renderTimer = () => {
    if (timer.isEnded) {
      return "Ended"
    }

    if (timer.isStarted) {
      return  `Ends in ${timer.days > 0 ? `${timer.days}d` : ''} ${formatTime(timer.hours)}:${formatTime(timer.minutes)}:${formatTime(timer.seconds)} `;
    }

    return `Starts in ${timer.days > 0 ? `${timer.days}d` : ''} ${formatTime(timer.hours)}:${formatTime(timer.minutes)}:${formatTime(timer.seconds)} `;
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-start">
        {renderTimer()}
      </div>
      <TransactionInfo
        title={raffle.raffle.name}
        description={raffle.raffle.description}
        status={raffle.raffle.raffleStatus}
        imageUrl={raffle.raffle.imageUrl}
        onStatusChange={onStatusChange}
        showStatusChange={showStatusChange}
        details={[
          {
            label: 'Raffle Details',
            details: [
              { label: 'Raffle Status', value: renderTimer() },
              { label: 'Start Date', value: raffle.raffle.startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }) },
              { label: 'End Date', value: raffle.raffle.endDate.toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }) },
              { label: 'Ticket Price', value: raffle.raffle.ticketPrice, format: 'currency' },
              { label: 'Tickets Sold', value: `${raffle.raffle.soldTickets} / ${raffle.raffle.totalTickets}`, format: 'text' }
            ]
          },
          {
            label: 'Winner Details',
            details: [
              { label: 'Username', value: raffle.winner?.username ?? 'N/A' },
              { label: 'Wallet', value: raffle.winner?.address ?? 'N/A' }
            ]
          }
        ]}
      >


      {!showStatusChange && <div className="flex justify-end mt-4">
        <button
          onClick={onJoin}
          disabled={userJoined || timer.isEnded}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
            userJoined
              ? 'bg-[rgba(var(--primary-orange))]/70 text-white cursor-not-allowed'
              : timer.isEnded
              ? 'bg-gray-500 text-white cursor-not-allowed'
              : 'bg-[rgba(var(--primary-orange))] text-white hover:bg-[rgba(var(--primary-orange))]/40'
          }`}
        >
          {userJoined ? 'Joined' : timer.isEnded ? 'Ended' : 'Join Raffle'}
        </button>
      </div>}
      </TransactionInfo>


      {/* Notes Section */}
      {showNotes && (
        <Notes
          notes={raffle.notes}
          newNote={newNote}
          onNoteChange={onNoteChange}
          onAddNote={onAddNote}
          showNoteAddition={showNoteAddition}
        />
      )}
    </div>
  )
} 