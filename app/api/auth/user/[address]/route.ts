import { NextRequest, NextResponse } from 'next/server'
import { withAuth } from '../../middleware'
import { sampleUsers } from '@/types/Entities/user'

export const GET = withAuth(async (req: NextRequest, { user }) => {
  try {
    const { address } = user
    // Find the user in the sample data
    const userData = sampleUsers.find(
      u => u.address.toLowerCase() === address.toLowerCase()
    )

    if (!userData) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(userData)
  } catch (error) {
    console.error('Error fetching user:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}) 