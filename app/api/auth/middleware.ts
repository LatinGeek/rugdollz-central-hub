import { NextRequest, NextResponse } from 'next/server'
import { ethers } from 'ethers'
import jwt from 'jsonwebtoken'
interface JWTPayload {
  address: string
  timestamp: number
}

export async function verifyWalletSignature(
  address: string,
  message: string,
  signature: string
): Promise<boolean> {
  try {
    // Recover the address from the signature
    const recoveredAddress = ethers.verifyMessage(Buffer.from(message, 'base64').toString('utf-8'), signature)
    
    // Check if the recovered address matches the claimed address
    return recoveredAddress.toLowerCase() === address.toLowerCase()
  } catch (error) {
    console.error('Signature verification failed:', error)
    return false
  }
}

export function withAuth(handler: (req: NextRequest, context: { user: { address: string } }) => Promise<NextResponse>) {
  return async (req: NextRequest) => {
    try {
      // First try JWT token authentication
      const authHeader = req.headers.get('Authorization')
      if (authHeader?.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1]
        try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload
          return handler(req, { user: { address: decoded.address } })
        } catch (error) {
          console.error('JWT verification failed:', error)
          // If JWT fails, fall back to wallet signature
        }
      }

      // Fall back to wallet signature authentication
      const headers = req.headers
      const address = headers.get('x-auth-address')
      const message = headers.get('x-auth-message')
      const signature = headers.get('x-auth-signature')
      
      // Check if all required headers are present
      if (!address || !message || !signature) {
        console.log("Missing Auth headers")
        return NextResponse.json({ error: 'Missing authentication headers' }, { status: 401 })
      }

      // Verify the signature
      const isValid = await verifyWalletSignature(
        address,
        message,
        signature
      )

      if (!isValid) {
        console.log("Invalid Signature")
        return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
      }

      // Call the handler with the verified user context
      return handler(req, { user: { address } })
    } catch (error) {
      console.error('Authentication error:', error)
      return NextResponse.json({ error: 'Authentication failed' }, { status: 401 })
    }
  }
} 