'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Trash2, Ticket, Calendar, Clock, DollarSign } from 'lucide-react'
import { PlaceholderImage } from '@/app/components/PlaceholderImage'

interface AdminListItemProps {
  id: string
  title: string
  description: string
  category: 'Bundles' | 'Game Items' | 'Pets' | 'Membership'
  startDate: string
  endDate: string
  participants: number
  maxParticipants: number
  status: 'programmed' | 'started' | 'ended'
  imageUrl: string
  winner?: {
    id: string
    name: string
    avatar?: string
  }
  onDelete: () => void
}

export default function AdminListItem({
  id,
  title,
  description,
  category,
  startDate,
  endDate,
  participants,
  maxParticipants,
  status,
  imageUrl,
  winner,
  onDelete,
}: AdminListItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const router = useRouter()

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const calculateProgress = () => {
    return (participants / maxParticipants) * 100
  }

  const formatDate = (date: string) => {
    return format(new Date(date), 'MMM d, yyyy h:mm a')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-[rgb(var(--background-secondary))] rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                {imageUrl && !imageError ? (
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <PlaceholderImage category={category} className="w-full h-full" />
                )}
              </div>
              <div>
                <h3 
                  className="text-lg font-semibold text-[rgb(var(--text-primary))] cursor-pointer hover:text-[rgb(var(--accent))]"
                  onClick={() => router.push(`/raffle-details/${id}`)}
                >
                  {title}
                </h3>
                <p className="text-sm text-[rgb(var(--text-secondary))] mt-1">{description}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleExpand}
              className="p-2 rounded-full hover:bg-[rgb(var(--background-tertiary))] transition-colors"
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-[rgb(var(--text-secondary))]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[rgb(var(--text-secondary))]" />
              )}
            </button>
            <button
              onClick={onDelete}
              className="p-2 rounded-full hover:bg-red-500/10 transition-colors"
            >
              <Trash2 className="w-5 h-5 text-red-500" />
            </button>
          </div>
        </div>

        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-[rgb(var(--text-secondary))]" />
                <div>
                  <p className="text-sm text-[rgb(var(--text-secondary))]">Start Date</p>
                  <p className="text-sm font-medium text-[rgb(var(--text-primary))]">
                    {formatDate(startDate)}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[rgb(var(--text-secondary))]" />
                <div>
                  <p className="text-sm text-[rgb(var(--text-secondary))]">End Date</p>
                  <p className="text-sm font-medium text-[rgb(var(--text-primary))]">
                    {formatDate(endDate)}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-[rgb(var(--text-secondary))]" />
                <div>
                  <p className="text-sm text-[rgb(var(--text-secondary))]">Category</p>
                  <p className="text-sm font-medium text-[rgb(var(--text-primary))]">
                    {category}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Ticket className="w-5 h-5 text-[rgb(var(--text-secondary))]" />
                <div>
                  <p className="text-sm text-[rgb(var(--text-secondary))]">Participants</p>
                  <p className="text-sm font-medium text-[rgb(var(--text-primary))]">
                    {participants} / {maxParticipants}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[rgb(var(--text-secondary))]">Progress</span>
                <span className="text-sm font-medium text-[rgb(var(--text-primary))]">
                  {calculateProgress().toFixed(1)}%
                </span>
              </div>
              <div className="h-2 bg-[rgb(var(--background-tertiary))] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${calculateProgress()}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-[rgb(var(--accent))]"
                />
              </div>
            </div>

            {winner && (
              <div className="mt-4 p-4 bg-[rgb(var(--background-tertiary))] rounded-lg">
                <h4 className="text-sm font-medium text-[rgb(var(--text-primary))] mb-2">Winner</h4>
                <div className="flex items-center space-x-3">
                  {winner.avatar && (
                    <img
                      src={winner.avatar}
                      alt={winner.name}
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <div>
                    <p className="text-sm font-medium text-[rgb(var(--text-primary))]">{winner.name}</p>
                    <p className="text-xs text-[rgb(var(--text-secondary))]">ID: {winner.id}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
} 