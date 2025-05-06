import { NextRequest, NextResponse } from 'next/server'
import { getUserDetailsByAddress } from '@/app/api/lib/services/users'
import { getUserBadgeDetails } from '@/app/api/lib/services/badges'
import { getNFTsByOwner } from '@/app/api/lib/services/nfts'
import { UserProfileData } from '@/types/FormattedData/user-profile-data'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ address: string }> }
) {
  try {
    const resolvedParams = await params
    const address = resolvedParams.address
    console.log(`[GET /api/users/profile/${address}] Fetching user profile`)

    // Fetch user from Firestore
    const userDetails = await getUserDetailsByAddress(address)

    if (!userDetails) {
      return NextResponse.json(
        { error: 'Profile not found' },
        { status: 404 }
      )
    }

    //Fetch user BadgeDetails
    const badgeDetails = await getUserBadgeDetails(userDetails.id)
    const userNFTs = await getNFTsByOwner(address);

    const userProfileData: UserProfileData = {user: userDetails, badges: badgeDetails, nfts: userNFTs};

    return NextResponse.json(userProfileData)
  } catch (error) {
    console.error('Error fetching profile:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 