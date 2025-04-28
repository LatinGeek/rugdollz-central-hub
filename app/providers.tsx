'use client'

import { AppKitProvider } from './contexts/AppKitProvider'
import { AuthProvider } from './contexts/AuthContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppKitProvider cookies={null}>
      <AuthProvider>{children}</AuthProvider>
    </AppKitProvider>
  )
} 