import { NextResponse } from 'next/server'

export async function GET() {
  // Get all store items
  return NextResponse.json({ message: 'Get all store items' })
}

export async function POST(request: Request) {
  // Create new store item
  const body = await request.json()
  return NextResponse.json({ message: 'Create store item', data: body })
}

export async function PUT(request: Request) {
  // Update store item
  const body = await request.json()
  return NextResponse.json({ message: 'Update store item', data: body })
}

export async function DELETE(request: Request) {
  // Delete store item
  const body = await request.json()
  return NextResponse.json({ message: 'Delete store item', data: body })
} 