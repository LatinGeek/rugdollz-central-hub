import { NextResponse } from 'next/server'

export async function GET() {
  // Get all badges
  return NextResponse.json({ message: 'Get all badges' })
}

export async function POST(request: Request) {
  // Create new badge
  const body = await request.json()
  return NextResponse.json({ message: 'Create badge', data: body })
}

export async function PUT(request: Request) {
  // Update badge
  const body = await request.json()
  return NextResponse.json({ message: 'Update badge', data: body })
}

export async function DELETE(request: Request) {
  // Delete badge
  const body = await request.json()
  return NextResponse.json({ message: 'Delete badge', data: body })
} 