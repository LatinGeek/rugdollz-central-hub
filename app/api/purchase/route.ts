import { NextRequest, NextResponse } from 'next/server'
import { withAuth } from '../auth/middleware'
import { createPurchase } from '../lib/services/purchases'

export const POST = withAuth(async (req: NextRequest, { user }) => {
  try {
    const body = await req.json()
    // Attach buyerId from authenticated user
    const purchaseData = {
      ...body,
      buyerId: user.address,
    }
    const purchase = await createPurchase(purchaseData)
    return NextResponse.json({ success: true, purchase })
  } catch (error) {
    console.error('[POST /api/purchase] Error:', error)
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 })
  }
}) 