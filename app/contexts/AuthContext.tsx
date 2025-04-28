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
      // Create a message to sign
      const message = `Authenticate to RugDollz Central Hub\nAddress: ${address}}`
      
      // Sign the message
      const signature = await signMessageAsync({ message })

      // Make the authenticated request
      const response = await fetch(`/api/auth/user/${address}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Message': btoa(message),
          'X-Auth-Address': address.toLowerCase(),
          'X-Auth-Signature': signature
        }
      })
      
      if (!response.ok) {
        console.log(response);

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

      const userData = await response.json()
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