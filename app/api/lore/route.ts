import { NextResponse } from 'next/server'
import { getLoreEntryDetailsByUser } from '../lib/services/lore-entries'

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
    const loreEntries = await getLoreEntryDetailsByUser(userId);

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

export async function POST(request: Request) {
  // Create new lore entry
  const body = await request.json()
  return NextResponse.json({ message: 'Create lore entry', data: body })
}

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