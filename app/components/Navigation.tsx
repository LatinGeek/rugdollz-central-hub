'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ExternalLink, ChevronDown } from 'lucide-react'

const HARDCODED_ADDRESS = '0x158a9e87156B6605B6f23bb8f4A8E4F47fc67f1c'

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Store', href: '/store' },
  { name: 'User Profile', href: `/profile/${HARDCODED_ADDRESS}` },
  { name: 'NFT Customization', href: '/nft-customization' },
  { name: 'NFT Lore', href: '/nft-lore' },
  { name: 'Lore Discovery', href: '/lore-discovery' },
  { name: 'Raffle Discovery', href: '/raffle-discovery' },
  { name: 'Leadership', href: '/leadership' },
]

const externalLinks = [
  { name: 'Stake', href: 'https://stake.rugdollz.com', icon: ExternalLink },
  { name: 'Merch', href: 'https://merch.rugdollz.com', icon: ExternalLink },
]

const buyLinks = [
  { name: 'RugDollz OG', href: 'https://opensea.io/collection/officialrugdollz', icon: ExternalLink },
  { name: 'RugDollz 3D', href: 'https://opensea.io/collection/rugdollz-3d', icon: ExternalLink },
  { name: 'RugDollz Social', href: 'https://opensea.io/collection/rugdollz-social', icon: ExternalLink },
  { name: 'RugDollz Exclusive', href: 'https://opensea.io/collection/rugdollz-exclusive', icon: ExternalLink },
  { name: 'Doruzu', href: 'https://magiceden.io/collections/apechain/0x125e213B5CfC84dBaD82BEDeF7B2e28697f62b3C', icon: ExternalLink },
]

const adminNavigation = [
  { name: 'Admin Dashboard', href: '/admin-dashboard' },
  { name: 'Badge Management', href: '/badge-management' },
  { name: 'Raffle Management', href: '/raffle-management' },
  { name: 'Purchase Management', href: '/purchase-management' },
  { name: 'Lore Moderation', href: '/lore-moderation' },
]

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false)
  const [isBuyMenuOpen, setIsBuyMenuOpen] = useState(false)

  const isAdminPath = pathname.startsWith('/admin') || 
                     pathname.startsWith('/badge-management') || 
                     pathname.startsWith('/raffle-management')

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-[rgb(var(--bg-darker))] border-[rgb(var(--border-dark))]">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <h1 className="text-2xl font-bold text-[rgb(var(--text-primary))]">RugDollz Hub</h1>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-[rgb(var(--bg-light))] text-[rgb(var(--primary-orange))]'
                        : 'text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-light))] hover:text-[rgb(var(--text-primary))]'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}

                 {/* Admin Menu */}
                 <div className="mt-4">
                <button
                  onClick={() => setIsAdminMenuOpen(!isAdminMenuOpen)}
                  className={`w-full flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isAdminPath
                      ? 'bg-[rgb(var(--bg-light))] text-[rgb(var(--primary-orange))]'
                      : 'text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-light))] hover:text-[rgb(var(--text-primary))]'
                  }`}
                >
                  <span>Admin Dashboard</span>
                  <svg
                    className={`ml-2 h-4 w-4 transition-transform ${isAdminMenuOpen ? 'rotate-90' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                {isAdminMenuOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {adminNavigation.map((item) => {
                      const isActive = pathname === item.href
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`block px-2 py-2 text-sm font-medium rounded-md ${
                            isActive
                              ? 'bg-[rgb(var(--bg-light))] text-[rgb(var(--primary-orange))]'
                              : 'text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-light))] hover:text-[rgb(var(--text-primary))]'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
              {/* External Links */}
              <div className="pt-4 border-t border-[rgb(var(--border-dark))]">
                {/* Buy Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsBuyMenuOpen(!isBuyMenuOpen)}
                    className="w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-light))] hover:text-[rgb(var(--text-primary))]"
                  >
                    <span>Buy</span>
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isBuyMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isBuyMenuOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {buyLinks.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-light))] hover:text-[rgb(var(--text-primary))]"
                        >
                          <span>{item.name}</span>
                          <item.icon className="ml-2 h-4 w-4 text-[rgb(var(--text-secondary))] group-hover:text-[rgb(var(--text-primary))]" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Other External Links */}
                {externalLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-light))] hover:text-[rgb(var(--text-primary))]"
                  >
                    <span>{item.name}</span>
                    <item.icon className="ml-2 h-4 w-4 text-[rgb(var(--text-secondary))] group-hover:text-[rgb(var(--text-primary))]" />
                  </a>
                ))}
              </div>

           
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[rgb(var(--bg-darker))] border-b border-[rgb(var(--border-dark))]">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-bold text-[rgb(var(--text-primary))]">RugDollz Hub</h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] hover:bg-[rgb(var(--bg-light))] focus:outline-none"
          >
            <span className="sr-only">Open menu</span>
            {/* Hamburger icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <nav className="px-2 pt-2 pb-3 space-y-1 bg-[rgb(var(--bg-darker))]">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-[rgb(var(--bg-light))] text-[rgb(var(--primary-orange))]'
                      : 'text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-light))] hover:text-[rgb(var(--text-primary))]'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}

            {/* Mobile External Links */}
            <div className="pt-4 border-t border-[rgb(var(--border-dark))]">
              {/* Mobile Buy Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsBuyMenuOpen(!isBuyMenuOpen)}
                  className="w-full flex items-center px-3 py-2 text-base font-medium rounded-md text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-light))] hover:text-[rgb(var(--text-primary))]"
                >
                  <span>Buy</span>
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isBuyMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {isBuyMenuOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {buyLinks.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 text-base font-medium rounded-md text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-light))] hover:text-[rgb(var(--text-primary))]"
                      >
                        <span>{item.name}</span>
                        <item.icon className="ml-2 h-4 w-4 text-[rgb(var(--text-secondary))]" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Mobile External Links */}
              {externalLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-base font-medium rounded-md text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-light))] hover:text-[rgb(var(--text-primary))]"
                >
                  <span>{item.name}</span>
                  <item.icon className="ml-2 h-4 w-4 text-[rgb(var(--text-secondary))]" />
                </a>
              ))}
            </div>

            {/* Mobile Admin Menu */}
            <div className="mt-4">
              <button
                onClick={() => setIsAdminMenuOpen(!isAdminMenuOpen)}
                className={`w-full flex items-center px-3 py-2 text-base font-medium rounded-md ${
                  isAdminPath
                    ? 'bg-[rgb(var(--bg-light))] text-[rgb(var(--primary-orange))]'
                    : 'text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-light))] hover:text-[rgb(var(--text-primary))]'
                }`}
              >
                <span>Admin Dashboard</span>
                <svg
                  className={`ml-2 h-4 w-4 transition-transform ${isAdminMenuOpen ? 'rotate-90' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              {isAdminMenuOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {adminNavigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-3 py-2 text-base font-medium rounded-md ${
                          isActive
                            ? 'bg-[rgb(var(--bg-light))] text-[rgb(var(--primary-orange))]'
                            : 'text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-light))] hover:text-[rgb(var(--text-primary))]'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </>
  )
} 