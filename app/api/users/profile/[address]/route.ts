import { NextRequest, NextResponse } from 'next/server'
import { sampleUserProfileData } from '@/types/FormattedData/user-profile-data'

export async function GET(
  req: NextRequest,
  { params }: { params: { address: string } }
) {
  try {
    const resolvedParams = await params
    const address = resolvedParams.address
    console.log(address)
    // Find the user profile in the sample data
    const profile = sampleUserProfileData[0]

    if (!profile) {
      return NextResponse.json(
        { error: 'Profile not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(profile)
  } catch (error) {
    console.error('Error fetching profile:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 