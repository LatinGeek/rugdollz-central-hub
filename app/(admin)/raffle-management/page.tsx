'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { QuickActionButton } from '@/app/components/admin/QuickActionButton'
import { AdminModal } from '@/app/components/admin/AdminModal'
import { AdminForm } from '@/app/components/admin/AdminForm'
import AdminListItem from '@/app/components/admin/AdminListItem'
import { ConfirmDialog } from '@/app/components/ui/ConfirmDialog'
import { RaffleDetails, sampleRaffleDetails } from '@/types/FormattedData/raffle-details'
import { generateDefaultRaffle, Raffle } from '@/types/Entities/raffle'
import { RaffleStatusType } from '@/types/enums/raffle-status'



export default function RaffleManagementPage() {
  const router = useRouter()
  const [raffles, setRaffles] = useState<RaffleDetails[]>(sampleRaffleDetails)
  const [isCreating, setIsCreating] = useState(false)
  const [raffleToDelete, setRaffleToDelete] = useState<RaffleDetails | null>(null)
  const [newRaffle, setNewRaffle] = useState<Omit<Raffle, 'id'>>(generateDefaultRaffle())

  const handleTitleClick = (raffleDetails: RaffleDetails) => {
    router.push(`/raffle-details/${raffleDetails.raffle.id}`)
  }

  const handleEditClick = (raffleDetails: RaffleDetails) => {
      router.push(`/raffle-details/${raffleDetails.raffle.id}`)
  }

  const handleCreateRaffle = () => {
    if (!newRaffle.name || !newRaffle.description) return

    const raffle: Raffle = {
      id: Date.now().toString(),
      ...newRaffle
    }

    setRaffles([...raffles, {raffle: raffle, winner: undefined, notes: []}])
    setIsCreating(false)
    setNewRaffle(generateDefaultRaffle())
  }

  const handleDeleteClick = (raffleDetails: RaffleDetails) => {
    setRaffleToDelete(raffleDetails)
  }

  const handleDeleteConfirm = () => {
    if (raffleToDelete) {
      setRaffles(raffles.filter(raffleDetails => raffleDetails.raffle.id !== raffleToDelete.raffle.id))
      setRaffleToDelete(null)
    }
  }

  const handleDeleteCancel = () => {
    setRaffleToDelete(null)
  }

  const formFields = [
    {
      label: 'Title',
      name: 'title',
      type: 'text' as const,
      value: newRaffle.name,
      onChange: (value: string | Date | null) => {
        if (typeof value === 'string') {
          setNewRaffle({ ...newRaffle, name: value })
        }
      }
    },
    {
      label: 'Description',
      name: 'description',
      type: 'textarea' as const,
      value: newRaffle.description,
      onChange: (value: string | Date | null) => {
        if (typeof value === 'string') {
          setNewRaffle({ ...newRaffle, description: value })
        }
      }
    },
    {
      label: 'Category',
      name: 'category',
      type: 'select' as const,
      value: newRaffle.category,
      onChange: (value: string | Date | null) => {
        if (typeof value === 'string') {
          setNewRaffle({ ...newRaffle, category: value as Raffle['category'] })
        }
      },
      options: [
        { value: 'Bundles', label: 'Bundles' },
        { value: 'Game Items', label: 'Game Items' },
        { value: 'Pets', label: 'Pets' },
        { value: 'Membership', label: 'Membership' }
      ]
    },
    {
      label: 'Start Date',
      name: 'startDate',
      type: 'datetime' as const,
      value: new Date(newRaffle.startDate),
      onChange: (value: string | Date | null) => {
        if (value instanceof Date) {
          setNewRaffle({ ...newRaffle, startDate: value })
        }
      }
    },
    {
      label: 'End Date',
      name: 'endDate',
      type: 'datetime' as const,
      value: new Date(newRaffle.endDate),
      onChange: (value: string | Date | null) => {
        if (value instanceof Date) {
          setNewRaffle({ ...newRaffle, endDate: value })
        }
      }
    },
    {
      label: 'Max Participants',
      name: 'maxParticipants',
      type: 'text' as const,
      value: String(newRaffle.totalTickets),
      onChange: (value: string | Date | null) => {
        if (typeof value === 'string') {
          const numValue = parseInt(value) || 0
          setNewRaffle({ ...newRaffle, totalTickets: numValue })
        }
      }
    },
    {
      label: 'Image URL',
      name: 'imageUrl',
      type: 'text' as const,
      value: newRaffle.imageUrl,
      onChange: (value: string | Date | null) => {
        if (typeof value === 'string') {
          setNewRaffle({ ...newRaffle, imageUrl: value })
        }
      }
    }
  ]

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-darker))]">
      {/* Header */}
      <div className="bg-[rgb(var(--bg-dark))] border-b border-[rgb(var(--border-dark))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <h1 className="text-2xl font-bold text-[rgb(var(--text-primary))]">Raffle Management</h1>
            <p className="mt-1 text-sm text-[rgb(var(--text-secondary))]">
              Create and manage raffles for your community
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <QuickActionButton
            title="Create New Raffle"
            description="Set up a new raffle"
            onClick={() => setIsCreating(true)}
          />
        </div>

        <div className="bg-[rgb(var(--bg-dark))] rounded-xl border border-[rgb(var(--border-dark))]">
          <div className="p-2">
            <div className="space-y-4">
              {raffles.map((raffleDetails) => (
                <AdminListItem
                  key={raffleDetails.raffle.id}
                  id={raffleDetails.raffle.id}
                  title={raffleDetails.raffle.name}
                  description={`${raffleDetails.raffle.totalTickets} participants • ${raffleDetails.raffle.category}`}
                  category={raffleDetails.raffle.category}
                  type="raffle"
                  status={raffleDetails.raffle.raffleStatus as RaffleStatusType}
                  imageUrl={raffleDetails.raffle.imageUrl}
                  startDate={raffleDetails.raffle.startDate.toISOString()}
                  endDate={raffleDetails.raffle.endDate.toISOString()}
                  participants={raffleDetails.raffle.soldTickets}
                  maxParticipants={raffleDetails.raffle.totalTickets}
                  onDelete={() => handleDeleteClick(raffleDetails)}
                  onEdit={() => handleEditClick(raffleDetails)}
                  onTitleClick={() => handleTitleClick(raffleDetails)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Create Modal */}
      <AdminModal
        isOpen={isCreating}
        onClose={() => {
          setIsCreating(false)
          setNewRaffle(generateDefaultRaffle())
        }}
        title="Create New Raffle"
      >
        <AdminForm
          title="Create New Raffle"
          fields={formFields}
          onCancel={() => setIsCreating(false)}
          onSubmit={handleCreateRaffle}
          submitLabel="Create Raffle"
        />
      </AdminModal>

      {/* Delete Confirmation Dialog */}
      {raffleToDelete && (
        <ConfirmDialog
          isOpen={!!raffleToDelete}
          onClose={handleDeleteCancel}
          title="Delete Raffle"
          description={`Are you sure you want to delete the raffle "${raffleToDelete.raffle.name}"? This action cannot be undone.`}
          onConfirm={handleDeleteConfirm}
          action="Delete Raffle"
        />
      )}
    </div>
  )
} 