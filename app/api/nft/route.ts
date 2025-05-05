import { NextResponse } from 'next/server'
import { listNFTs, getNFTsByOwner, getNFTsByCollection } from '../lib/services/nfts'
import { handleDatabaseError } from '../lib/db'

export async function GET(request: Request) {
  console.log('[NFT API] GET /api/nft - Fetching NFTs')
  try {
    const { searchParams } = new URL(request.url)
    const owner = searchParams.get('owner')
    const collection = searchParams.get('collection')

    let nfts
    if (owner) {
      console.log(`[NFT API] Fetching NFTs for owner: ${owner}`)
      nfts = await getNFTsByOwner(owner)
    } else if (collection) {
      console.log(`[NFT API] Fetching NFTs for collection: ${collection}`)
      nfts = await getNFTsByCollection(collection)
    } else {
      console.log('[NFT API] Fetching all NFTs')
      nfts = await listNFTs()
    }

    console.log(`[NFT API] Successfully retrieved ${nfts.length} NFTs`)
    return NextResponse.json(nfts)
  } catch (error) {
    const errorMessage = await handleDatabaseError(error)
    console.error('[NFT API] Error fetching NFTs:', errorMessage)
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage 
      },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  console.log('[NFT API] POST /api/nft - Creating new NFT')
  try {
    const body = await request.json()
    console.log('[NFT API] Request body:', body)

    // TODO: Implement NFT creation
    return NextResponse.json({ message: 'Create NFT' })
  } catch (error) {
    const errorMessage = await handleDatabaseError(error)
    console.error('[NFT API] Error creating NFT:', errorMessage)
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage 
      },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  console.log('[NFT API] PUT /api/nft - Updating NFT')
  try {
    const body = await request.json()
    console.log('[NFT API] Request body:', body)

    // TODO: Implement NFT update
    return NextResponse.json({ message: 'Update NFT' })
  } catch (error) {
    const errorMessage = await handleDatabaseError(error)
    console.error('[NFT API] Error updating NFT:', errorMessage)
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage 
      },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  console.log('[NFT API] DELETE /api/nft - Deleting NFT')
  try {
    const body = await request.json()
    console.log('[NFT API] Request body:', body)

    // TODO: Implement NFT deletion
    return NextResponse.json({ message: 'Delete NFT' })
  } catch (error) {
    const errorMessage = await handleDatabaseError(error)
    console.error('[NFT API] Error deleting NFT:', errorMessage)
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage 
      },
      { status: 500 }
    )
  }
} 