'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useDisconnect, useSignMessage } from 'wagmi'
import { useRouter } from 'next/navigation'
import { User } from '@/types/Entities/user'
import { useAppKit, useAppKitAccount } from '@reown/appkit/react'
import { UserRole } from '@/types/enums/user-role'

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
  const { open } = useAppKit()

  const { address, isConnected } = useAppKitAccount()
  const { disconnect: disconnectWallet } = useDisconnect()
  const { signMessageAsync } = useSignMessage()

  useEffect(() => {
    if (isConnected && address) {
      fetchUserDetails()
    } else {
      setUser(null)
    }
    setIsLoading(false)
  }, [isConnected, address])

  const fetchUserDetails = async () => {
    if (!address) return

    try {
      // Check if we have a valid JWT token
      const token = localStorage.getItem('auth_token')
      const tokenExpiry = localStorage.getItem('auth_token_expiry')
      
      // If token exists and is not expired, use it
      if (token && tokenExpiry && new Date(tokenExpiry) > new Date()) {
        const response = await fetch(`/api/auth/user/${address}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        
        if (response.ok) {
          const userData = await response.json()
          setUser(userData)
          return
        }
      }

      // If no valid token, request a new one with wallet signature
      const message = `Authenticate to RugDollz Central Hub\nAddress: ${address}\nTimestamp: ${Date.now()}`
      const signature = await signMessageAsync({ message })

      // Get new JWT token
      const authResponse = await fetch('/api/auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Message': btoa(message),
          'X-Auth-Signature': signature,
          'X-Auth-Address': address.toLowerCase()
        }
      })

      if (!authResponse.ok) {
        throw new Error('Failed to get authentication token')
      }

      const { token: newToken, expiresIn } = await authResponse.json()
      
      // Store the token and its expiry
      const expiryDate = new Date(Date.now() + expiresIn * 1000)
      localStorage.setItem('auth_token', newToken)
      localStorage.setItem('auth_token_expiry', expiryDate.toISOString())

      // Now fetch user details with the new token
      const userResponse = await fetch(`/api/auth/user/${address}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${newToken}`
        }
      })
      
      if (!userResponse.ok) {
        // If user doesn't exist, create a new one
        const newUser: User = {
          id: address,
          address,
          points: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          achievements: 0,
          role: UserRole.user
        }
        setUser(newUser)
        return
      }

      const userData = await userResponse.json()
      setUser(userData)
    } catch (error) {
      console.error('Error fetching user details:', error)
      setUser(null)
    }
  }

  const connect = async () => {
    try {
      await open()
    } catch (error) {
      console.error('Error connecting wallet:', error)
    }
  }

  const disconnect = () => {
    disconnectWallet()
    setUser(null)
    localStorage.removeItem('auth_token')
    localStorage.removeItem('auth_token_expiry')
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