import { NextRequest, NextResponse } from 'next/server'
// Removed unused interface AuthHeaders
import { ethers } from 'ethers'

export async function verifyWalletSignature(
  address: string,
  timestamp: string,
  signature: string
): Promise<boolean> {
  try {
    // Recover the address from the signature
    const recoveredAddress = ethers.verifyMessage(timestamp, signature)
    
    // Check if the recovered address matches the claimed address
    return recoveredAddress.toLowerCase() === address.toLowerCase()
  } catch (error) {
    console.error('Signature verification failed:', error)
    return false
  }
}

export function withAuth(handler: (req: NextRequest, context: { user: { address: string } }) => Promise<NextResponse>) {
  return async (req: NextRequest) => {
    const headers = req.headers
    const address = headers.get('x-auth-address')
    const timestamp = headers.get('x-auth-timestamp')
    const signature = headers.get('x-auth-signature')
    
    // Check if all required headers are present
    if (!address || !timestamp || !signature) {
      return NextResponse.json({ error: 'Missing authentication headers' }, { status: 401 })
    }

    // Verify the signature
    const isValid = await verifyWalletSignature(
      address,
      timestamp,
      signature
    )

    if (!isValid) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    // Call the handler with the verified user context
    return handler(req, { user: { address } })
  }
} 