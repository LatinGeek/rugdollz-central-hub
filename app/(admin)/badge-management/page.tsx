'use client'

import { useState } from 'react'
import { AdminFileUpload } from '@/app/components/admin/AdminFileUpload'
import { QuickActionButton } from '@/app/components/admin/QuickActionButton'

interface Emblem {
  id: string
  name: string
  icon: string
  isActive: boolean
  description?: string
}

// Sample emblems from profile page
const sampleEmblems = [
  {
    id: '1',
    name: 'Early Adopter',
    description: 'One of the first supporters of the RugDollz ecosystem',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>',
    isActive: true
  },
  {
    id: '2',
    name: 'Race Champion',
    description: 'Won first place in a RugDollz racing tournament',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M20.2,2H19.5H18C17.1,2 16,3 16,4H8C8,3 6.9,2 6,2H4.5H3.8H2V11C2,12 3,13 4,13H6.2C6.6,15 7.9,16.7 11,17V19.1C8.8,19.3 8,20.4 8,21.7V22H16V21.7C16,20.4 15.2,19.3 13,19.1V17C16.1,16.7 17.4,15 17.8,13H20C21,13 22,12 22,11V2H20.2M4,11V4H6V6V11C5.1,11 4.3,11 4,11M20,11C19.7,11 18.9,11 18,11V6V4H20V11Z"/></svg>',
    isActive: true
  },
  {
    id: '3',
    name: 'Collector',
    description: 'Collected over 10 unique RugDollz NFTs',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19M11,7H13A2,2 0 0,1 15,9V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M11,9V15H13V9H11Z"/></svg>',
    isActive: true
  },
  {
    id: '4',
    name: 'Rugling Master',
    description: 'Trained a Rugling to maximum level',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12,3C16.97,3 21,6.58 21,11C21,15.42 15,21 12,21C9,21 3,15.42 3,11C3,6.58 7.03,3 12,3M10,17.5C10.32,17.5 10.62,17.35 10.79,17.1L14.79,11.1C15.13,10.61 15.01,9.95 14.5,9.61C14,9.27 13.34,9.39 13,9.89L9,15.89C8.66,16.39 8.78,17.05 9.29,17.39C9.5,17.47 9.75,17.5 10,17.5Z"/></svg>',
    isActive: true
  },
  {
    id: '5',
    name: 'Top Staker',
    description: 'Staked over 100,000 $RUGZ tokens',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/></svg>',
    isActive: false
  },
  {
    id: '6',
    name: 'Beta Tester',
    description: 'Participated in the RugDollz beta testing phase',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/></svg>',
    isActive: true
  },
  {
    id: '7',
    name: 'Tournament Winner',
    description: 'Won a major RugDollz tournament event',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.1C8.8 19.3 8 20.4 8 21.7V22H16V21.7C16 20.4 15.2 19.3 13 19.1V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M20 11H18V4H20V11Z"/></svg>',
    isActive: false
  },
  {
    id: '8',
    name: 'RUGZ Whale',
    description: 'Holds over 1,000,000 $RUGZ tokens',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12Z"/></svg>',
    isActive: false
  },
  {
    id: '9',
    name: 'Community Leader',
    description: 'Recognized contributor to the RugDollz community',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"/></svg>',
    isActive: true
  },
  {
    id: '10',
    name: 'Legendary Trader',
    description: 'Completed over 100 successful NFT trades',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M3,13H7V23H3V13M10,14H14V23H10V14M17,9H21V23H17V9M17,1H21V3H20V5H17V3H18V1Z"/></svg>',
    isActive: false
  }
]

export default function BadgeManagementPage() {
  const [emblems, setEmblems] = useState<Emblem[]>(sampleEmblems)
  const [selectedEmblem, setSelectedEmblem] = useState<Emblem | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [newEmblem, setNewEmblem] = useState<Partial<Emblem>>({
    name: '',
    icon: '',
    isActive: true,
    description: ''
  })

  const handleCreateEmblem = () => {
    if (!newEmblem.name || !newEmblem.icon) return

    const emblem: Emblem = {
      id: Date.now().toString(),
      name: newEmblem.name,
      icon: newEmblem.icon,
      isActive: newEmblem.isActive ?? true,
      description: newEmblem.description || ''
    }

    setEmblems([...emblems, emblem])
    setIsCreating(false)
    setNewEmblem({
      name: '',
      icon: '',
      isActive: true,
      description: ''
    })
  }

  const handleDeleteEmblem = (id: string) => {
    setEmblems(emblems.filter(emblem => emblem.id !== id))
  }

  const handleUpdateEmblem = (updatedEmblem: Emblem) => {
    setEmblems(emblems.map(emblem => 
      emblem.id === updatedEmblem.id ? updatedEmblem : emblem
    ))
    setSelectedEmblem(null)
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-darker))]">
      {/* Header */}
      <div className="bg-[rgb(var(--bg-dark))] border-b border-[rgb(var(--border-dark))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <h1 className="text-2xl font-bold text-[rgb(var(--text-primary))]">Badge Management</h1>
            <p className="mt-1 text-sm text-[rgb(var(--text-secondary))]">
              Manage and create new badges for users
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <QuickActionButton
            title="Create New Badge"
            description="Add a new badge to the collection"
            onClick={() => setIsCreating(true)}
          />
        </div>

        <div className="bg-[rgb(var(--bg-dark))] rounded-xl border border-[rgb(var(--border-dark))]">
          <div className="p-6">
            <div className="space-y-4">
              {emblems.map((emblem) => (
                <div
                  key={emblem.id}
                  className="flex items-center gap-4 p-4 rounded-lg border border-[rgb(var(--border-dark))] bg-[rgb(var(--bg-darker))]"
                >
                  <div
                    className={`w-16 h-16 flex items-center justify-center rounded-lg flex-shrink-0 ${
                      emblem.isActive
                        ? 'bg-[rgb(var(--accent))] bg-opacity-20'
                        : 'bg-[rgb(var(--bg-darker))] grayscale'
                    }`}
                  >
                    <div 
                      className="w-12 h-12 flex items-center justify-center"
                      dangerouslySetInnerHTML={{ __html: emblem.icon }}
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium text-[rgb(var(--text-primary))]">
                        {emblem.name}
                      </h3>
                      <span className={`px-2 py-0.5 text-xs rounded-full ${
                        emblem.isActive
                          ? 'bg-green-500/20 text-green-500'
                          : 'bg-red-500/20 text-red-500'
                      }`}>
                        {emblem.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    <p className="text-sm text-[rgb(var(--text-secondary))] mt-1">
                      {emblem.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setSelectedEmblem(emblem)}
                      className="p-2 bg-[rgb(var(--primary))] text-white rounded-lg hover:bg-[rgb(var(--primary))]/90 transition-colors"
                      aria-label="Edit emblem"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDeleteEmblem(emblem.id)}
                      className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      aria-label="Delete emblem"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Create/Edit Modal */}
      {(isCreating || selectedEmblem) && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => {
            if (isCreating) {
              setIsCreating(false)
              setNewEmblem({
                name: '',
                icon: '',
                isActive: true,
                description: ''
              })
            } else {
              setSelectedEmblem(null)
            }
          }}
        >
          <div 
            className="bg-[rgb(var(--bg-dark))] rounded-lg p-6 w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4 text-[rgb(var(--text-primary))]">
              {isCreating ? 'Create New Badge' : 'Edit Badge'}
            </h2>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-[rgb(var(--text))]">
                  Name
                </label>
                <input
                  type="text"
                  value={isCreating ? newEmblem.name : selectedEmblem?.name || ''}
                  onChange={(e) => {
                    if (isCreating) {
                      setNewEmblem({ ...newEmblem, name: e.target.value })
                    } else if (selectedEmblem) {
                      setSelectedEmblem({ ...selectedEmblem, name: e.target.value })
                    }
                  }}
                  className="w-full px-3 py-2 bg-[rgb(var(--background))] border border-[rgb(var(--border))] rounded-md text-[rgb(var(--text))] focus:border-[rgb(var(--primary))] focus:ring-[rgb(var(--primary))]"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-[rgb(var(--text))]">
                  Description
                </label>
                <input
                  type="text"
                  value={isCreating ? newEmblem.description : selectedEmblem?.description || ''}
                  onChange={(e) => {
                    if (isCreating) {
                      setNewEmblem({ ...newEmblem, description: e.target.value })
                    } else if (selectedEmblem) {
                      setSelectedEmblem({ ...selectedEmblem, description: e.target.value })
                    }
                  }}
                  className="w-full px-3 py-2 bg-[rgb(var(--background))] border border-[rgb(var(--border))] rounded-md text-[rgb(var(--text))] focus:border-[rgb(var(--primary))] focus:ring-[rgb(var(--primary))]"
                />
              </div>

              <AdminFileUpload
                label="Icon"
                value={isCreating ? (newEmblem.icon || '') : (selectedEmblem?.icon || '')}
                onChange={(value) => {
                  if (isCreating) {
                    setNewEmblem({ ...newEmblem, icon: value })
                  } else if (selectedEmblem) {
                    setSelectedEmblem({ ...selectedEmblem, icon: value })
                  }
                }}
              />

              <div className="space-y-1">
                <label className="block text-sm font-medium text-[rgb(var(--text))]">
                  Status
                </label>
                <select
                  value={isCreating ? (newEmblem.isActive ? 'active' : 'inactive') : (selectedEmblem?.isActive ? 'active' : 'inactive')}
                  onChange={(e) => {
                    if (isCreating) {
                      setNewEmblem({ ...newEmblem, isActive: e.target.value === 'active' })
                    } else if (selectedEmblem) {
                      setSelectedEmblem({ ...selectedEmblem, isActive: e.target.value === 'active' })
                    }
                  }}
                  className="w-full px-3 py-2 bg-[rgb(var(--background))] border border-[rgb(var(--border))] rounded-md text-[rgb(var(--text))] focus:border-[rgb(var(--primary))] focus:ring-[rgb(var(--primary))]"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  onClick={() => {
                    if (isCreating) {
                      setIsCreating(false)
                      setNewEmblem({
                        name: '',
                        icon: '',
                        isActive: true,
                        description: ''
                      })
                    } else {
                      setSelectedEmblem(null)
                    }
                  }}
                  className="px-4 py-2 bg-[rgb(var(--bg-darker))] text-[rgb(var(--text))] rounded-lg hover:bg-[rgb(var(--bg-darker))]/90 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (isCreating) {
                      handleCreateEmblem()
                    } else if (selectedEmblem) {
                      handleUpdateEmblem(selectedEmblem)
                    }
                  }}
                  className="px-4 py-2 bg-[rgb(var(--primary))] text-white rounded-lg hover:bg-[rgb(var(--primary))]/90 transition-colors"
                >
                  {isCreating ? 'Create' : 'Save'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 