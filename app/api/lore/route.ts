import { NextResponse } from 'next/server'

export async function GET() {
  // Get all lore entries
  return NextResponse.json({ message: 'Get all lore entries' })
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