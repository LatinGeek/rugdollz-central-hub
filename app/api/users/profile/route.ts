import { NextRequest, NextResponse } from 'next/server'
import { withAuth } from '../../auth/middleware'

export const GET = withAuth(async (req: NextRequest, { user }) => {
  // Here you would typically fetch user data from your database
  const userData = {
    address: user.address,
    balance: '0', // Fetch from your database
    // Add other user data
  }

  return NextResponse.json(userData)
})

export const POST = withAuth(async (req: NextRequest, { user }) => {
  const data = await req.json()
  console.log(data)
  // Here you would typically update user data in your database
  // For example:
  // await db.users.update({ where: { address: user.address }, data })

  return NextResponse.json({ 
    message: 'Profile updated successfully',
    address: user.address 
  })
}) 