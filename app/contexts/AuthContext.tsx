'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useAccount, useConnect, useDisconnect, useSignMessage } from 'wagmi'
import { injected } from 'wagmi/connectors'
import { useRouter } from 'next/navigation'

interface User {
  address: string
  balance: string
  chainId: number
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  connect: () => Promise<void>
  disconnect: () => void
  signMessage: (message: string) => Promise<string>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const { address, isConnected, chainId } = useAccount()
  const { connect: connectWallet } = useConnect()
  const { disconnect: disconnectWallet } = useDisconnect()
  const { signMessageAsync } = useSignMessage()

  useEffect(() => {
    if (isConnected && address) {
      // Fetch user balance and other details
      fetchUserDetails()
    } else {
      setUser(null)
    }
    setIsLoading(false)
  }, [isConnected, address, chainId])

  const fetchUserDetails = async () => {
    if (!address) return

    try {
      // Here you would typically fetch user details from your backend
      // For now, we'll just set the basic wallet info
      setUser({
        address,
        balance: '0', // You would fetch this from your backend
        chainId: chainId || 1,
      })
    } catch (error) {
      console.error('Error fetching user details:', error)
      setUser(null)
    }
  }

  const connect = async () => {
    try {
      await connectWallet({ connector: injected() })
    } catch (error) {
      console.error('Error connecting wallet:', error)
    }
  }

  const disconnect = () => {
    disconnectWallet()
    setUser(null)
    router.push('/')
  }

  const signMessage = async (message: string) => {
    if (!address) throw new Error('No wallet connected')
    return signMessageAsync({ message })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        connect,
        disconnect,
        signMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 