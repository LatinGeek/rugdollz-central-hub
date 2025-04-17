'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Store', href: '/store' },
  { name: 'Profile', href: '/profile' },
  { name: 'NFT Customization', href: '/nft-customization' },
  { name: 'NFT Lore', href: '/nft-lore' },
  { name: 'Lore Discovery', href: '/lore-discovery' },
  { name: 'Raffle Discovery', href: '/raffle-discovery' },
  { name: 'Leadership', href: '/leadership' },
]

const adminNavigation = [
  { name: 'Admin Dashboard', href: '/admin/dashboard' },
  { name: 'Badge Management', href: '/admin/badge-management' },
  { name: 'Raffle Management', href: '/admin/raffle-management' },
]

export function Navigation() {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith('/admin')
  const navItems = isAdmin ? adminNavigation : navigation

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold">RugDollz Hub</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      isActive
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 