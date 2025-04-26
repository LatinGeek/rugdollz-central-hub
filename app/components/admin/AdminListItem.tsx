'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Trash2, Edit, Award } from 'lucide-react'
import { PlaceholderImage } from '@/app/components/PlaceholderImage'

interface AdminListItemProps {
  id: string
  title: string
  description: string
  category: string
  type: 'raffle' | 'badge'
  startDate?: string
  endDate?: string
  participants?: number
  maxParticipants?: number
  status?: string,
  imageUrl?: string
  icon?: string
  winner?: {
    id: string
    name: string
    avatar?: string
  }
  onDelete: () => void
  onEdit: () => void
  onTitleClick?: () => void
}

export default function AdminListItem({
  id,
  title,
  description,
  category,
  type,
  startDate,
  endDate,
  participants,
  status,
  imageUrl,
  icon,
  winner,
  onDelete,
  onEdit,
  onTitleClick,
}: AdminListItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const router = useRouter()

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const handleTitleClick = () => {
    if (onTitleClick) {
      onTitleClick()
    } else {
      router.push(`/${type}-details/${id}`)
    }
  }

  const formatDate = (date?: string) => {
    if (!date) return 'N/A'
    return format(new Date(date), 'MMM d, yyyy h:mm a')
  }

  const getStatusColor = () => {
    switch (status) {
      case 'started':
      case 'active':
        return 'bg-green-500'
      case 'ended':
      case 'inactive':
        return 'bg-red-500'
      case 'programmed':
        return 'bg-yellow-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-[rgb(var(--background-secondary))] rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-2 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden flex-shrink-0">
                {imageUrl && !imageError ? (
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : icon ? (
                  <div 
                    className="w-full h-full flex items-center justify-center bg-[rgb(var(--background-tertiary))]"
                    dangerouslySetInnerHTML={{ __html: icon }}
                  />
                ) : (
                  <PlaceholderImage category={category} className="w-full h-full" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 
                    className="text-sm sm:text-lg font-semibold text-[rgb(var(--text-primary))] cursor-pointer hover:text-[rgb(var(--accent))]"
                    onClick={handleTitleClick}
                  >
                    {title}
                  </h3>
                  <div className="grow md:hidden" />
                  {status && (
                    <span className={`text-[0.6em] sm:text-xs px-2 py-1 text-white rounded-full ${getStatusColor()}`}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-[rgb(var(--text-secondary))] mt-1">{description}</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col-reverse sm:flex-row-reverse items-center pl-3">
            <button
              onClick={toggleExpand}
              className="p-2 sm:p-4 rounded-full hover:bg-[rgb(var(--background-tertiary))] transition-colors"
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-[rgb(var(--text-secondary))]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[rgb(var(--text-secondary))]" />
              )}
            </button>
            <button
              onClick={onEdit}
              className="p-2 rounded-full hover:bg-[rgb(var(--accent))]/10 transition-colors"
            >
              <Edit className="w-5 h-5 text-[rgb(var(--accent))]" />
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
              {startDate && (
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-[rgb(var(--text-secondary))]" />
                  <div>
                    <p className="text-sm text-[rgb(var(--text-secondary))]">Start Date</p>
                    <p className="text-sm font-medium text-[rgb(var(--text-primary))]">
                      {formatDate(startDate)}
                    </p>
                  </div>
                </div>
              )}
              {endDate && (
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-[rgb(var(--text-secondary))]" />
                  <div>
                    <p className="text-sm text-[rgb(var(--text-secondary))]">End Date</p>
                    <p className="text-sm font-medium text-[rgb(var(--text-primary))]">
                      {formatDate(endDate)}
                    </p>
                  </div>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-[rgb(var(--text-secondary))]" />
                <div>
                  <p className="text-sm text-[rgb(var(--text-secondary))]">Category</p>
                  <p className="text-sm font-medium text-[rgb(var(--text-primary))]">
                    {category}
                  </p>
                </div>
              </div>
              {participants !== undefined && (
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-[rgb(var(--text-secondary))]" />
                  <div>
                    <p className="text-sm text-[rgb(var(--text-secondary))]">Participants</p>
                    <p className="text-sm font-medium text-[rgb(var(--text-primary))]">
                      {participants}
                    </p>
                  </div>
                </div>
              )}
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