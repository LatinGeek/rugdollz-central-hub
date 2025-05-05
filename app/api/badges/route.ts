import { NextResponse } from 'next/server'
import { getUserBadgeDetails } from '../lib/services/badges'
import { withAuth } from '../auth/middleware'

// Wrap the GET handler with withAuth middleware
export const GET = withAuth(async (req, { user }) => {
  try {
    // Get user's badge details using their wallet address
    const badgeDetails = await getUserBadgeDetails(user.address)
    return NextResponse.json({ badgeDetails })
  } catch (error) {
    console.error('Error fetching badge details:', error)
    return NextResponse.json(
      { error: 'Failed to fetch badge details' },
      { status: 500 }
    )
  }
})

// Wrap other methods with withAuth as well
export const POST = withAuth(async (req, { }) => {
  const body = await req.json()
  return NextResponse.json({ message: 'Create badge', data: body })
})

export const PUT = withAuth(async (req, { }) => {

  const body = await req.json()
  return NextResponse.json({ message: 'Update badge', data: body })
})

export const DELETE = withAuth(async (req, { }) => {
  const body = await req.json()
  return NextResponse.json({ message: 'Delete badge', data: body })
}) 