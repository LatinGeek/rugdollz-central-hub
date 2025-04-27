'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

interface HeaderProps {
  onMenuClick?: () => void
  isOpen?: boolean
}

export function Header({ 
  onMenuClick,
  isOpen = false
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const router = useRouter()
  const { user, isAuthenticated, connect, disconnect } = useAuth()

  useEffect(() => {
    setIsMenuOpen(isOpen)
  }, [isOpen])

  const handleProfileClick = () => {
    router.push('/profile')
    setIsMenuOpen(false)
  }

  const handleMenuClick = () => {
    onMenuClick?.()
  }

  const formatAddress = (address: string) => {
    if (!address) return ''
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 z-50 bg-[rgb(var(--bg-darker))] ">
      <div className="flex items-center  h-16 px-4 justify-end">
        <div className="flex items-center gap-4">
          
          {isAuthenticated ? (
            <>
              <div className="font-bold text-sm text-[rgb(var(--text-primary))]">
                {user?.balance} $RUGZ
              </div>
              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center gap-2"
                >
                  <div className="font-bold px-3 py-1 rounded-full bg-[rgb(var(--accent))] flex items-center justify-center text-white text-sm">
                    {formatAddress(user?.address || '')}
                  </div>
                  {isProfileMenuOpen ? (
                    <ChevronUp className="w-4 h-4 text-[rgb(var(--text-secondary))]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[rgb(var(--text-secondary))]" />
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
                    <button
                      onClick={disconnect}
                      className="w-full px-4 py-2 text-left text-sm text-[rgb(var(--text-primary))] hover:bg-[rgb(var(--bg-light))]"
                    >
                      Disconnect
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <button
              onClick={connect}
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