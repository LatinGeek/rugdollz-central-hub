'use client'

import { useState } from 'react'
import { QuickActionButton } from '@/app/components/admin/QuickActionButton'
import { AdminModal } from '@/app/components/admin/AdminModal'
import { AdminForm } from '@/app/components/admin/AdminForm'
import AdminListItem from '@/app/components/admin/AdminListItem'
import { ConfirmDialog } from '@/app/components/ui/ConfirmDialog'
import { sampleBadges } from '@/types/Entities/badge'
import { Badge } from '@/types/Entities/badge'

export default function BadgeManagementPage() {
  const [badges, setBadges] = useState<Badge[]>(sampleBadges)
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [badgeToDelete, setBadgeToDelete] = useState<Badge | null>(null)
  const [newBadge, setNewBadge] = useState<Omit<Badge, 'id'>>({
    name: '',
    description: '',
    icon: '',
    isActive: true,
    collection: '',
    requirementsIds: []
  })

  const handleTitleClick = (badge: Badge) => {
    setSelectedBadge(badge)
  }

  const handleCreateBadge = () => {
    if (!newBadge.name || !newBadge.icon) return

    const badge: Badge = {
      id: Date.now().toString(),
      ...newBadge
    }

    setBadges([...badges, badge])
    setIsCreating(false)
    setNewBadge({
      name: '',
      description: '',
      icon: '',
      isActive: true,
      collection: '',
      requirementsIds: []
    })
  }

  const handleDeleteClick = (badge: Badge) => {
    setBadgeToDelete(badge)
  }

  const handleDeleteConfirm = () => {
    if (badgeToDelete) {
      setBadges(badges.filter(badge => badge.id !== badgeToDelete.id))
      setBadgeToDelete(null)
    }
  }

  const handleDeleteCancel = () => {
    setBadgeToDelete(null)
  }

  const handleUpdateBadge = (updatedBadge: Badge) => {
    setBadges(badges.map(badge => 
      badge.id === updatedBadge.id ? updatedBadge : badge
    ))
    setSelectedBadge(null)
  }

  const formFields = [
    {
      label: 'Name',
      name: 'name',
      type: 'text' as const,
      value: selectedBadge?.name || newBadge.name,
      onChange: (value: string | Date | null) => {
        if (typeof value === 'string') {
          if (selectedBadge) {
            setSelectedBadge({ ...selectedBadge, name: value })
          } else {
            setNewBadge({ ...newBadge, name: value })
          }
        }
      }
    },
    {
      label: 'Description',
      name: 'description',
      type: 'textarea' as const,
      value: selectedBadge?.description || newBadge.description,
      onChange: (value: string | Date | null) => {
        if (typeof value === 'string') {
          if (selectedBadge) {
            setSelectedBadge({ ...selectedBadge, description: value })
          } else {
            setNewBadge({ ...newBadge, description: value })
          }
        }
      }
    },
    {
      label: 'Icon',
      name: 'icon',
      type: 'text' as const,
      value: selectedBadge?.icon || newBadge.icon,
      onChange: (value: string | Date | null) => {
        if (typeof value === 'string') {
          if (selectedBadge) {
            setSelectedBadge({ ...selectedBadge, icon: value })
          } else {
            setNewBadge({ ...newBadge, icon: value })
          }
        }
      }
    },
    {
      label: 'Status',
      name: 'status',
      type: 'select' as const,
      value: selectedBadge?.isActive ? 'active' : 'inactive',
      onChange: (value: string | Date | null) => {
        if (typeof value === 'string') {
          if (selectedBadge) {
            setSelectedBadge({ ...selectedBadge, isActive: value === 'active' })
          } else {
            setNewBadge({ ...newBadge, isActive: value === 'active' })
          }
        }
      },
      options: [
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-darker))]">
      {/* Header */}
      <div className="bg-[rgb(var(--bg-dark))] border-b border-[rgb(var(--border-dark))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <h1 className="text-2xl font-bold text-[rgb(var(--text-primary))]">Badge Management</h1>
            <p className="mt-1 text-sm text-[rgb(var(--text-secondary))]">
              Create and manage badges for your community
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <QuickActionButton
            title="Create New Badge"
            description="Set up a new badge"
            onClick={() => setIsCreating(true)}
          />
        </div>

        <div className="bg-[rgb(var(--bg-dark))] rounded-xl border border-[rgb(var(--border-dark))]">
          <div className="p-2">
            <div className="space-y-4">
              {badges.map((badge) => (
                <AdminListItem
                  key={badge.id}
                  id={badge.id}
                  title={badge.name}
                  description={badge.description}
                  category="Badge"
                  type="badge"
                  status={badge.isActive ? 'active' : 'inactive'}
                  icon={badge.icon}
                  onDelete={() => handleDeleteClick(badge)}
                  onEdit={() => setSelectedBadge(badge)}
                  onTitleClick={() => handleTitleClick(badge)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Create/Edit Modal */}
      <AdminModal
        isOpen={isCreating || !!selectedBadge}
        onClose={() => {
          if (isCreating) {
            setIsCreating(false)
            setNewBadge({ 
              name: '',
              description: '',
              icon: '',
              isActive: true,
              collection: '',
              requirementsIds: []
            })
          } else {
            setSelectedBadge(null)
          }
        }}
        title={isCreating ? 'Create New Badge' : 'Edit Badge'}
      >
        <AdminForm
          title={isCreating ? 'Create New Badge' : 'Edit Badge'}
          fields={formFields}
          onCancel={() => {
            if (isCreating) {
              setIsCreating(false)
            } else {
              setSelectedBadge(null)
            }
          }}
          onSubmit={() => {
            if (isCreating) {
              handleCreateBadge()
            } else if (selectedBadge) {
              handleUpdateBadge(selectedBadge)
            }
          }}
          submitLabel={isCreating ? 'Create Badge' : 'Update Badge'}
        />
      </AdminModal>

      {/* Delete Confirmation Dialog */}
      {badgeToDelete && (
        <ConfirmDialog
          isOpen={!!badgeToDelete}
          onClose={handleDeleteCancel}
          title="Delete Badge"
          description={`Are you sure you want to delete the badge "${badgeToDelete.name}"? This action cannot be undone.`}
          onConfirm={handleDeleteConfirm}
          action="Delete Badge"
        />
      )}
    </div>
  )
} 