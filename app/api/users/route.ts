import { NextResponse } from 'next/server'

export async function GET() {
  // Get all users
  return NextResponse.json({ message: 'Get all users' })
}

export async function POST(request: Request) {
  // Create new user
  const body = await request.json()
  return NextResponse.json({ message: 'Create user', data: body })
}

export async function PUT(request: Request) {
  // Update user
  const body = await request.json()
  return NextResponse.json({ message: 'Update user', data: body })
}

export async function DELETE(request: Request) {
  // Delete user
  const body = await request.json()
  return NextResponse.json({ message: 'Delete user', data: body })
} 