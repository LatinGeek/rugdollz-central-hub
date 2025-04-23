'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ExternalLink, ChevronDown, Sword, ShoppingBasket, Rabbit } from 'lucide-react'

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

const socialLinks = [
  {
    name: 'Discord',
    href: 'https://discord.gg/ZPgc2CVnBg',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515a.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0a12.64 12.64 0 00-.617-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057a19.9 19.9 0 005.993 3.03a.078.078 0 00.084-.028a14.09 14.09 0 001.226-1.994a.076.076 0 00-.041-.106a13.107 13.107 0 01-1.872-.892a.077.077 0 01-.008-.128a10.2 10.2 0 00.372-.292a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127a12.299 12.299 0 01-1.873.892a.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028a19.839 19.839 0 006.002-3.03a.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    name: 'RugDollz X',
    href: 'https://x.com/RugdollzNFT',
    icon: Rabbit
  },
  {
    name: 'Doruzu X',
    href: 'https://x.com/DollzOnApe',
    icon: Sword
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/rugdollz.eth',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'Store',
    href: 'https://ruglabsnft.myshopify.com/',
    icon: ShoppingBasket
  },
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
            <nav className="mt-5 flex-1 px-2 space-y-1 overflow-y-auto">
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
                <h3 className="px-2 text-sm font-semibold text-[rgb(var(--text-primary))] tracking-wider uppercase mb-2">
                  External
                </h3>
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

              {/* Social Links */}
              <div className="mt-auto pt-4 border-t border-[rgb(var(--border-dark))]">
                <h3 className="px-2 pb-2 text-sm font-semibold text-[rgb(var(--text-primary))] tracking-wider uppercase mb-2">
                  Socials
                </h3>
                <div className="flex flex-wrap gap-4 px-2">
                  {socialLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary-orange))] transition-colors"
                      title={item.name}
                    >
                      <item.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
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
          <nav className="px-2 pt-2 pb-3 space-y-1 bg-[rgb(var(--bg-darker))] max-h-[calc(100vh-4rem)] overflow-y-auto z-1000">
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

            {/* Mobile External Links */}
            <div className="pt-4 border-t border-[rgb(var(--border-dark))]">
              <h3 className="px-3 text-sm font-semibold text-[rgb(var(--text-primary))] tracking-wider uppercase mb-2">
                External
              </h3>
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

            {/* Mobile Social Links */}
            <div className="mt-4 pt-4 border-t border-[rgb(var(--border-dark))]">
              <h3 className="px-3 text-sm font-semibold text-[rgb(var(--text-primary))] tracking-wider uppercase mb-2">
                Socials
              </h3>
              <div className="flex flex-wrap gap-6 px-3 py-4 mb-6">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--primary-orange))] transition-colors"
                    title={item.name}
                  >
                    <item.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </>
  )
} 