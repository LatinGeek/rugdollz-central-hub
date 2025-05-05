'use client'

import { BadgeDetails } from '@/types/FormattedData/badge-details'
import { UserBadgeRequirement } from '@/types/FormattedData/user-badge-requirement'
import { useEffect, useState } from 'react'
import { Award, X } from 'lucide-react'


interface BadgeDetailsComponentProps {
  badges: BadgeDetails[]
  selectedBadge: BadgeDetails
  onClose: () => void
  onSelect: (badge: BadgeDetails) => void
}


export function BadgeDetailsComponent({ badges, selectedBadge, onClose, onSelect }: BadgeDetailsComponentProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    // Add event listener for escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  if (!selectedBadge) return null

  const requirements: UserBadgeRequirement[] = selectedBadge.userBadgeRequirements;

  return (
    <div 
      className={`fixed inset-0 z-50 flex transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className="relative w-full md:max-w-4xl h-full md:h-screen bg-[rgb(var(--bg-dark))] flex flex-col md:flex-row"
        onClick={e => e.stopPropagation()}
      >
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 bg-[rgb(var(--bg-darker))]">
          <h3 className="text-sm font-medium text-[rgb(var(--text-secondary))]">BADGES</h3>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[rgb(var(--bg-dark))] text-[rgb(var(--text-secondary))]"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
          </button>
        </div>

        {/* Left sidebar with all emblems */}
        <div className="h-1/3 md:h-full w-full md:w-72 bg-[rgb(var(--bg-darker))] p-4 md:p-6 overflow-x-auto md:overflow-y-auto">
          <div className="hidden md:block text-sm font-medium text-[rgb(var(--text-secondary))] mb-4">BADGES</div>
          <div className="grid grid-cols-6 md:grid-cols-4 gap-2 min-w-fit md:min-w-0">
            {badges.map((badge: BadgeDetails) => (
              <div
                key={badge.badge.id}
                className={`aspect-square w-12 md:w-16 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 ${
                  badge.badge.id === selectedBadge.badge.id
                    ? 'bg-[rgb(var(--accent))] bg-opacity-20'
                    : 'bg-[rgb(var(--bg-dark))] hover:bg-opacity-80'
                }`}
              >
                <div
                  className={`w-full h-full flex items-center justify-center transition-all duration-300 ${
                    badge.badge.isActive 
                      ? 'opacity-100' 
                      : 'opacity-30 group-hover:opacity-50'
                  }`}
                  onClick={() => onSelect(badge)}
                  dangerouslySetInnerHTML={{ __html: badge.badge.icon }}
                  style={{ 
                    filter: (() => {
                      const completedRequirements = badge.userBadgeRequirements.filter(req => req.isCompleted).length;
                      const totalRequirements = badge.userBadgeRequirements.length;
                      
                      if (completedRequirements === 0) return 'brightness(0) invert(0.3)'; // Dark gray
                      if (completedRequirements === totalRequirements) return 'invert(84%) sepia(44%) saturate(850%) hue-rotate(359deg) brightness(105%) contrast(107%)'; // Gold
                      return 'brightness(0) invert(0.9)'; // Light gray, almost white
                    })(),
                    width: '75%',
                    height: '75%'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 md:p-8 overflow-y-auto" onClick={() => {
                onClose()
            }}>
          <div className="max-w-2xl mx-auto">
            {/* Selected emblem header */}
            <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
              <div 
                className={`aspect-square w-16 h-16 md:w-24 md:h-24 rounded-xl flex items-center justify-center ${
                  selectedBadge.badge.isActive
                    ? 'bg-[rgb(var(--accent))] bg-opacity-20'
                    : 'bg-[rgb(var(--bg-darker))] grayscale'
                }`}
              >
                <div
                  className={`w-full h-full flex items-center justify-center transition-all duration-300 ${
                    selectedBadge.badge.isActive 
                      ? 'opacity-100' 
                      : 'opacity-30'
                  }`}
                  dangerouslySetInnerHTML={{ __html: selectedBadge.badge.icon }}
                  style={{ 
                    filter: (() => {
                      const completedRequirements = selectedBadge.userBadgeRequirements.filter(req => req.isCompleted).length;
                      const totalRequirements = selectedBadge.userBadgeRequirements.length;
                      
                      if (completedRequirements === 0) return 'brightness(0) invert(0.3)'; // Dark gray
                      if (completedRequirements === totalRequirements) return 'invert(84%) sepia(44%) saturate(850%) hue-rotate(359deg) brightness(105%) contrast(107%)'; // Gold
                      return 'brightness(0) invert(0.9)'; // Light gray, almost white
                    })(),
                    width: '80%',
                    height: '80%'
                  }}
                />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[rgb(var(--text-primary))]">
                  {selectedBadge.badge.name}
                </h2>
                {selectedBadge.badge.description && (
                  <p className="text-sm md:text-base text-[rgb(var(--text-secondary))] mt-1">
                    {selectedBadge.badge.description}
                  </p>
                )}
              </div>
            </div>

            {/* Requirements section */}
            <div>
              <h3 className="text-sm font-medium text-[rgb(var(--text-secondary))] mb-4">
                REQUIREMENTS
              </h3>
              <div className="space-y-3 md:space-y-4">
                {requirements.map((req, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg ${
                      req.isCompleted
                        ? 'bg-[rgba(var(--primary-orange))]/10'
                        : 'bg-[rgb(var(--bg-darker))]'
                    }`}
                  >
                    <div 
                      className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center ${
                        req.isCompleted
                          ? 'bg-[rgb(var(--primary-orange))] bg-opacity-10 text-[rgb(var(--bg-darker))]'
                          : 'bg-[rgb(var(--bg-light))] bg-opacity-10 text-[rgb(var(--text-secondary))]'
                      }`}
                    >
                      {req.isCompleted ? (
                        <Award className="w-4 h-4 md:w-5 md:h-5" />
                      ) : (
                        <X className="w-4 h-4 md:w-5 md:h-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-[rgb(var(--text-primary))]">
                        {req.requirement.title}
                      </div>
                      <div className="text-xs text-[rgb(var(--text-secondary))]">
                        +{req.requirement.points.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 