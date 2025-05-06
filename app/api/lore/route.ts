import { NextResponse } from 'next/server'
import { getLoreEntryDetailsByUser, createLoreEntry } from '../lib/services/lore-entries'
import { getNFTsByOwner } from '../lib/services/nfts'
import { withAuth } from '../auth/middleware'
import { LoreEntry } from '@/types/Entities/lore-entry'
import { LoreEntryStatus } from '@/types/enums/lore-entry-status'
import { getUserByAddress } from '../lib/services/users'
import { LoreEntryDetails } from '@/types/FormattedData/lore-entry-details'

export async function GET(request: Request) {
  try {
    // Get userId from query parameters
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    // Get lore entries for the user
    const loreEntries: LoreEntryDetails[] = await getLoreEntryDetailsByUser(userId);

    return NextResponse.json(
      loreEntries,
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to get lore entries:', error);
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get lore entries' 
      },
      { status: 500 }
    );
  }
}

export const POST = withAuth(async (request: Request, { user }) => {
  try {
    const body = await request.json();
    const { title, content, nftId } = body;

    // Validate required fields
    if (!title || !content || !nftId) {
      return NextResponse.json(
        { error: 'Title, content, and NFT ID are required' },
        { status: 400 }
      );
    }

    // Get full user data
    const userData = await getUserByAddress(user.address);
    if (!userData || !userData.id) {
      return NextResponse.json(
        { error: 'User not found or invalid user data' },
        { status: 404 }
      );
    }

    // Get user's NFTs
    const userNFTs = await getNFTsByOwner(user.address);
    
    // Check if user owns the NFT
    const ownsNFT = userNFTs.some(nft => nft.id === nftId);
    if (!ownsNFT) {
      return NextResponse.json(
        { error: 'You can only create lore for NFTs you own' },
        { status: 403 }
      );
    }

    // Create new lore entry
    const loreEntry: Omit<LoreEntry, 'id'> = {
      title,
      content,
      nftId,
      authorId: userData.id,
      status: LoreEntryStatus.published,
      createdAt: new Date(),
      updatedAt: new Date(),
      votes: 0
    };

    const newEntry = await createLoreEntry(loreEntry);

    return NextResponse.json(
      { 
        success: true,
        data: newEntry 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Failed to create lore entry:', error);
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : 'Failed to create lore entry' 
      },
      { status: 500 }
    );
  }
});

export async function PUT(request: Request) {
  // Update lore entry
  const body = await request.json()
  return NextResponse.json({ message: 'Update lore entry', data: body })
}

export async function DELETE(request: Request) {
  // Delete lore entry
  const body = await request.json()
  return NextResponse.json({ message: 'Delete lore entry', data: body })
} 