'use client'

import { useState } from 'react'
import { Inter } from 'next/font/google'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleMenuClick = () => {
    console.log('Menu clicked')
    setIsSidebarOpen(prev => !prev)
    console.log('isSidebarOpen', isSidebarOpen)
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-[rgb(var(--bg-dark))]">
          <div className="flex h-screen">
            <Navigation isOpen={isSidebarOpen} onClose={handleMenuClick} />
            {/* Main content */}
            <div className="md:pl-64 flex flex-col flex-1">
              <Header 
                isAuthenticated={true}
                userBalance={1000}
                username="User"
                onMenuClick={handleMenuClick}
                isOpen={isSidebarOpen}
              />
              <main className="flex-1 mt-0 md:mt-6">
                <div className="py-0 md:py-6">
                  <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
                    {/* Add top padding on mobile to account for the fixed header */}
                    <div className="md:pt-0 pt-16">
                      {children}
                    </div>
                  </div>
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
} 