import { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'
import { verifyMessage } from 'viem'
import { syncUserNFTsFromProvider } from '../../lib/services/nfts'

export async function POST(request: NextRequest) {
  try {
    const message = Buffer.from(request.headers.get('X-Auth-Message') || '', 'base64').toString()
    const signature = request.headers.get('X-Auth-Signature')
    const address = request.headers.get('X-Auth-Address')

    if (!message || !signature || !address) {
      return new Response('Missing authentication headers', { status: 401 })
    }
    syncUserNFTsFromProvider(address).then(() => {
      console.log(`[GET /api/auth/token] Synced NFTs for address: ${address}`);
    });
    // Verify the signature
    const isValid = await verifyMessage({
      address: address as `0x${string}`,
      message,
      signature: signature as `0x${string}`
    })

    if (!isValid) {
      return new Response('Invalid signature', { status: 401 })
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        address: address.toLowerCase(),
        timestamp: Date.now()
      },
      process.env.JWT_SECRET!,
      { expiresIn: '24h' }
    )

    return new Response(JSON.stringify({
      token,
      expiresIn: 24 * 60 * 60 // 24 hours in seconds
    }), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error('Token generation error:', error)
    return new Response('Internal server error', { status: 500 })
  }
} 