import { NextResponse } from 'next/server'

export async function GET() {
  // Get all raffles
  return NextResponse.json({ message: 'Get all raffles' })
}

export async function POST(request: Request) {
  // Create new raffle
  const body = await request.json()
  return NextResponse.json({ message: 'Create raffle', data: body })
}

export async function PUT(request: Request) {
  // Update raffle
  const body = await request.json()
  return NextResponse.json({ message: 'Update raffle', data: body })
}

export async function DELETE(request: Request) {
  // Delete raffle
  const body = await request.json()
  return NextResponse.json({ message: 'Delete raffle', data: body })
} 