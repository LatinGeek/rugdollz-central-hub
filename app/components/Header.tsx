'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  isAuthenticated?: boolean
  userBalance?: number
  userAvatar?: string
  username?: string
  onMenuClick?: () => void
  isOpen?: boolean
}

export function Header({ 
  isAuthenticated = false, 
  userBalance = 0, 
  userAvatar, 
  username,
  onMenuClick,
  isOpen = false
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsMenuOpen(isOpen)
  }, [isOpen])

  const handleConnect = () => {
    // Implement wallet connection logic
    console.log('Connecting wallet...')
  }

  const handleProfileClick = () => {
    router.push('/profile')
    setIsMenuOpen(false)
  }

  const handleMenuClick = () => {
    onMenuClick?.()
  }

  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 z-50 bg-[rgb(var(--bg-darker))] ">
      <div className="flex items-center  h-16 px-4 justify-end">
        <div className="flex items-center gap-4">
          
          {isAuthenticated ? (
            <>
              <div className="text-sm text-[rgb(var(--text-primary))]">
                {userBalance.toLocaleString('en-US')} $RUGZ
              </div>
              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center gap-2"
                >
                  {userAvatar ? (
                    <img
                      src={userAvatar}
                      alt={username}
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-[rgb(var(--accent))] flex items-center justify-center text-white">
                      {username?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </button>

                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[rgb(var(--bg-dark))] rounded-lg shadow-lg border border-[rgb(var(--border-dark))] py-1">
                    <button
                      onClick={handleProfileClick}
                      className="w-full px-4 py-2 text-left text-sm text-[rgb(var(--text-primary))] hover:bg-[rgb(var(--bg-light))]"
                    >
                      Profile
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <button
              onClick={handleConnect}
              className="px-4 py-2 bg-[rgb(var(--primary-orange))] text-white rounded-lg hover:bg-[rgb(var(--primary-orange))]/90 transition-colors"
            >
              Connect Wallet
            </button>
          )}
          <button
            onClick={handleMenuClick}
            className="block sm:hidden p-2 text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))]"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
} 