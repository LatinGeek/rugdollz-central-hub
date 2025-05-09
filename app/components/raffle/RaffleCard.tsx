'use client'

import { useRaffleTimer } from './useRaffleTimer'
import { PlaceholderImage } from '../PlaceholderImage'
import { useRouter } from 'next/navigation'
import { RaffleDetails } from '@/types/FormattedData/raffle-details'


interface RaffleCardProps {
  raffleDetails: RaffleDetails
  onJoin: (raffleId: string) => void
  isJoined: boolean
}

export function RaffleCard({ raffleDetails, onJoin, isJoined }: RaffleCardProps) {
  const router = useRouter()
  const timer = useRaffleTimer(raffleDetails.raffle.startDate.toISOString(), raffleDetails.raffle.endDate.toISOString())

  const formatTime = (value: number) => {
    return value.toString().padStart(2, '0')
  }

  const navigateToRaffleDetails = () => {
    router.push(`/raffle-details/${raffleDetails.raffle.id}`)
  }

  const renderTimer = () => {
    if (timer.isEnded) {
      return (
        <div className="text-red-500 text-right">
          <div className="text-sm font-medium">Ended</div>
          {raffleDetails.winner ? (
            <div className="text-white text-xs flex items-center justify-end gap-2 mt-1">
              <span>Winner:</span>
              {raffleDetails.winner.avatar ? (
                <img 
                  src={raffleDetails.winner.avatar} 
                  alt={raffleDetails.winner.username ?? ''}
                  className="w-4 h-4 rounded-full"
                />
              ) : (
                <div className="w-4 h-4 rounded-full bg-[rgb(var(--accent))] flex items-center justify-center text-[8px] text-white">
                  {raffleDetails.winner.username?.charAt(0).toUpperCase()}
                </div>
              )}
              <span className="font-medium">{raffleDetails.winner.username}</span>
            </div>
          ) : (
            <div className="text-white text-xs">Final results coming soon</div>
          )}
        </div>
      )
    }

    if (timer.isStarted) {
      return (
        <div className="text-green-500 text-right">
          <div className="text-sm font-medium">Ends in</div>
          <div className="text-xs">
            {timer.days > 0 && `${timer.days}d `}
            {formatTime(timer.hours)}:{formatTime(timer.minutes)}:{formatTime(timer.seconds)}
          </div>
        </div>
      )
    }

    return (
      <div className="text-blue-500 text-right">
        <div className="text-sm font-medium">Starts in</div>
        <div className="text-xs">
          {timer.days > 0 && `${timer.days}d `}
          {formatTime(timer.hours)}:{formatTime(timer.minutes)}:{formatTime(timer.seconds)}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[rgb(var(--bg-dark))] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row">
        <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
          <div className="w-full h-48 rounded-t-lg overflow-hidden cursor-pointer" onClick={navigateToRaffleDetails}>
            {raffleDetails.raffle.imageUrl ? (
              <img
                src={raffleDetails.raffle.imageUrl}
                alt={raffleDetails.raffle.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <PlaceholderImage category={raffleDetails.raffle.category} className="w-full h-full object-cover" />
            )}
          </div>
        </div>

        <div className="flex-1 p-4">
          <div className="flex sm:flex-row justify-between items-start gap-4 sm:gap-0 mb-2">
            <div className="flex-1">
              <h3 
                className="text-lg font-semibold text-[rgb(var(--text-primary))] cursor-pointer hover:text-[rgb(var(--accent))]"
                onClick={navigateToRaffleDetails}
              >
                {raffleDetails.raffle.name}
              </h3>
              <p className="text-sm text-[rgb(var(--text-secondary))] mt-1">
                {raffleDetails.raffle.description}
              </p>
            </div>
            <div className="flex flex-col items-end">
              {renderTimer()}
              <span className="text-sm text-[rgb(var(--text-secondary))] mt-1">
                {raffleDetails.raffle.soldTickets}/{raffleDetails.raffle.totalTickets} joined
              </span>
            </div>
          </div>

          <div className="flex justify-end mt-4 sm:mt-0">
            <button
              onClick={() => onJoin(raffleDetails.raffle.id)}
              disabled={isJoined || timer.isEnded}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                isJoined
                  ? 'bg-[rgba(var(--primary-orange))]/70 text-white cursor-not-allowed'
                  : timer.isEnded
                  ? 'bg-gray-500 text-white cursor-not-allowed'
                  : 'bg-[rgba(var(--primary-orange))] text-white hover:bg-[rgba(var(--primary-orange))]/40'
              }`}
            >
              {isJoined ? 'Joined' : timer.isEnded ? 'Ended' : 'Join Raffle'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 