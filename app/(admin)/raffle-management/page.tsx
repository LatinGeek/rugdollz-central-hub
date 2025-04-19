'use client'

import { useState } from 'react'
import { QuickActionButton } from '@/app/components/admin/QuickActionButton'
import { AdminModal } from '@/app/components/admin/AdminModal'
import { AdminForm } from '@/app/components/admin/AdminForm'
import AdminListItem from '@/app/components/admin/AdminListItem'

interface Raffle {
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
}

// Sample raffles from the raffle discovery page
const sampleRaffles: Raffle[] = [
  {
    id: '1',
    title: 'Legendary NFT Bundle',
    description: 'Win a collection of rare NFTs including a one-of-a-kind RugDollz and exclusive game items.',
    category: 'Bundles' as const,
    startDate: '2024-04-20T10:00:00Z',
    endDate: '2025-04-25T10:00:00Z',
    participants: 245,
    maxParticipants: 500,
    status: 'programmed',
    imageUrl: 'https://i.imgur.com/example1.jpg'
  },
  {
    id: '2',
    title: 'Racing Kart Upgrade',
    description: 'Get a chance to win a premium racing kart upgrade for your NFT collection.',
    category: 'Game Items' as const,
    startDate: '2024-04-18T00:00:00Z',
    endDate: '2025-04-22T00:00:00Z',
    participants: 189,
    maxParticipants: 300,
    status: 'started',
    imageUrl: 'https://i.imgur.com/example2.jpg'
  },
  {
    id: '3',
    title: 'Exclusive Pet Companion',
    description: 'Rare pet companion that gives special abilities in the RugDollz universe.',
    category: 'Pets' as const,
    startDate: '2024-04-15T00:00:00Z',
    endDate: '2025-04-17T00:00:00Z',
    participants: 150,
    maxParticipants: 200,
    status: 'ended',
    imageUrl: 'https://i.imgur.com/example3.jpg',
    winner: {
      id: 'user123',
      name: 'CryptoMaster',
      avatar: 'https://i.pravatar.cc/150?img=3'
    }
  },
  {
    id: '4',
    title: 'Premium Membership',
    description: 'Win a 3-month premium membership with exclusive benefits and early access to new features.',
    category: 'Membership' as const,
    startDate: '2025-05-22T12:00:00Z',
    endDate: '2025-05-29T12:00:00Z',
    participants: 320,
    maxParticipants: 500,
    status: 'programmed',
    imageUrl: 'https://i.imgur.com/example4.jpg'
  }
]

export default function RaffleManagementPage() {
  const [raffles, setRaffles] = useState<Raffle[]>(sampleRaffles)
  const [selectedRaffle, setSelectedRaffle] = useState<Raffle | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [newRaffle, setNewRaffle] = useState<Omit<Raffle, 'id'>>({
    title: '',
    description: '',
    category: 'Bundles',
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
    participants: 0,
    maxParticipants: 100,
    status: 'programmed',
    imageUrl: ''
  })

  const handleCreateRaffle = () => {
    if (!newRaffle.title || !newRaffle.description) return

    const raffle: Raffle = {
      id: Date.now().toString(),
      ...newRaffle
    }

    setRaffles([...raffles, raffle])
    setIsCreating(false)
    setNewRaffle({
      title: '',
      description: '',
      category: 'Bundles',
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      participants: 0,
      maxParticipants: 100,
      status: 'programmed',
      imageUrl: ''
    })
  }

  const handleDeleteRaffle = (id: string) => {
    setRaffles(raffles.filter(raffle => raffle.id !== id))
  }

  const handleUpdateRaffle = (updatedRaffle: Raffle) => {
    setRaffles(raffles.map(raffle => 
      raffle.id === updatedRaffle.id ? updatedRaffle : raffle
    ))
    setSelectedRaffle(null)
  }

  const formFields = [
    {
      label: 'Title',
      name: 'title',
      type: 'text' as const,
      value: selectedRaffle?.title || newRaffle.title,
      onChange: (value: string | Date | null) => {
        if (typeof value === 'string') {
          if (selectedRaffle) {
            setSelectedRaffle({ ...selectedRaffle, title: value })
          } else {
            setNewRaffle({ ...newRaffle, title: value })
          }
        }
      }
    },
    {
      label: 'Description',
      name: 'description',
      type: 'textarea' as const,
      value: selectedRaffle?.description || newRaffle.description,
      onChange: (value: string | Date | null) => {
        if (typeof value === 'string') {
          if (selectedRaffle) {
            setSelectedRaffle({ ...selectedRaffle, description: value })
          } else {
            setNewRaffle({ ...newRaffle, description: value })
          }
        }
      }
    },
    {
      label: 'Category',
      name: 'category',
      type: 'select' as const,
      value: selectedRaffle?.category || newRaffle.category,
      onChange: (value: string | Date | null) => {
        if (typeof value === 'string') {
          if (selectedRaffle) {
            setSelectedRaffle({ ...selectedRaffle, category: value as Raffle['category'] })
          } else {
            setNewRaffle({ ...newRaffle, category: value as Raffle['category'] })
          }
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
      value: new Date(selectedRaffle?.startDate || newRaffle.startDate),
      onChange: (value: string | Date | null) => {
        if (value instanceof Date) {
          if (selectedRaffle) {
            setSelectedRaffle({ ...selectedRaffle, startDate: value.toISOString() })
          } else {
            setNewRaffle({ ...newRaffle, startDate: value.toISOString() })
          }
        }
      }
    },
    {
      label: 'End Date',
      name: 'endDate',
      type: 'datetime' as const,
      value: new Date(selectedRaffle?.endDate || newRaffle.endDate),
      onChange: (value: string | Date | null) => {
        if (value instanceof Date) {
          if (selectedRaffle) {
            setSelectedRaffle({ ...selectedRaffle, endDate: value.toISOString() })
          } else {
            setNewRaffle({ ...newRaffle, endDate: value.toISOString() })
          }
        }
      }
    },
    {
      label: 'Max Participants',
      name: 'maxParticipants',
      type: 'text' as const,
      value: String(selectedRaffle?.maxParticipants || newRaffle.maxParticipants),
      onChange: (value: string | Date | null) => {
        if (typeof value === 'string') {
          const numValue = parseInt(value) || 0
          if (selectedRaffle) {
            setSelectedRaffle({ ...selectedRaffle, maxParticipants: numValue })
          } else {
            setNewRaffle({ ...newRaffle, maxParticipants: numValue })
          }
        }
      }
    },
    {
      label: 'Image URL',
      name: 'imageUrl',
      type: 'text' as const,
      value: selectedRaffle?.imageUrl || newRaffle.imageUrl,
      onChange: (value: string | Date | null) => {
        if (typeof value === 'string') {
          if (selectedRaffle) {
            setSelectedRaffle({ ...selectedRaffle, imageUrl: value })
          } else {
            setNewRaffle({ ...newRaffle, imageUrl: value })
          }
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
            description="Set up a new raffle event"
            onClick={() => setIsCreating(true)}
          />
        </div>

        <div className="bg-[rgb(var(--bg-dark))] rounded-xl border border-[rgb(var(--border-dark))]">
          <div className="p-6">
            <div className="space-y-4">
              {raffles.map((raffle) => (
                <AdminListItem
                  key={raffle.id}
                  id={raffle.id}
                  title={raffle.title}
                  description={`${raffle.participants}/${raffle.maxParticipants} participants • ${raffle.category} • `}
                  category={raffle.category}
                  startDate={raffle.startDate}
                  endDate={raffle.endDate}
                  participants={raffle.participants}
                  maxParticipants={raffle.maxParticipants}
                  status={raffle.status}
                  imageUrl={raffle.imageUrl}
                  winner={raffle.winner}
                  onDelete={() => handleDeleteRaffle(raffle.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Create/Edit Modal */}
      <AdminModal
        isOpen={isCreating || !!selectedRaffle}
        onClose={() => {
          if (isCreating) {
            setIsCreating(false)
            setNewRaffle({
              title: '',
              description: '',
              category: 'Bundles',
              startDate: new Date().toISOString(),
              endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
              participants: 0,
              maxParticipants: 100,
              status: 'programmed',
              imageUrl: ''
            })
          } else {
            setSelectedRaffle(null)
          }
        }}
        title={isCreating ? 'Create New Raffle' : 'Edit Raffle'}
      >
        <AdminForm
          title={isCreating ? 'Create New Raffle' : 'Edit Raffle'}
          fields={formFields}
          onCancel={() => {
            if (isCreating) {
              setIsCreating(false)
            } else {
              setSelectedRaffle(null)
            }
          }}
          onSubmit={() => {
            if (isCreating) {
              handleCreateRaffle()
            } else if (selectedRaffle) {
              handleUpdateRaffle(selectedRaffle)
            }
          }}
          submitLabel={isCreating ? 'Create Raffle' : 'Update Raffle'}
        />
      </AdminModal>
    </div>
  )
} 