import { NextResponse } from 'next/server'
import { listStoreItems, createStoreItem, updateStoreItem, deleteStoreItem } from '../lib/services/store-items'
import { handleDatabaseError } from '../lib/db'

export async function GET() {
  console.log('[Store API] GET /api/store - Fetching all store items')
  try {
    const storeItems = await listStoreItems()
    console.log(`[Store API] Successfully retrieved ${storeItems.length} store items`)
    return NextResponse.json(
      storeItems 
    )
  } catch (error) {
    const errorMessage = await handleDatabaseError(error)
    console.error('[Store API] Error fetching store items:', errorMessage)
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage 
      },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  console.log('[Store API] POST /api/store - Creating new store item')
  try {
    const body = await request.json()
    console.log('[Store API] Request body:', body)

    const newItem = await createStoreItem(body)
    console.log('[Store API] Successfully created store item:', newItem)

    return NextResponse.json({ 
      success: true,
      data: newItem 
    })
  } catch (error) {
    const errorMessage = await handleDatabaseError(error)
    console.error('[Store API] Error creating store item:', errorMessage)
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage 
      },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  console.log('[Store API] PUT /api/store - Updating store item')
  try {
    const body = await request.json()
    console.log('[Store API] Request body:', body)

    if (!body.id) {
      console.error('[Store API] Missing item ID in request')
      return NextResponse.json(
        { 
          success: false, 
          error: 'Item ID is required' 
        },
        { status: 400 }
      )
    }

    const updatedItem = await updateStoreItem(body.id, body)
    console.log('[Store API] Successfully updated store item:', updatedItem)

    return NextResponse.json({ 
      success: true,
      data: updatedItem 
    })
  } catch (error) {
    const errorMessage = await handleDatabaseError(error)
    console.error('[Store API] Error updating store item:', errorMessage)
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage 
      },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  console.log('[Store API] DELETE /api/store - Deleting store item')
  try {
    const body = await request.json()
    console.log('[Store API] Request body:', body)

    if (!body.id) {
      console.error('[Store API] Missing item ID in request')
      return NextResponse.json(
        { 
          success: false, 
          error: 'Item ID is required' 
        },
        { status: 400 }
      )
    }

    await deleteStoreItem(body.id)
    console.log('[Store API] Successfully deleted store item:', body.id)

    return NextResponse.json({ 
      success: true,
      message: 'Store item deleted successfully' 
    })
  } catch (error) {
    const errorMessage = await handleDatabaseError(error)
    console.error('[Store API] Error deleting store item:', errorMessage)
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage 
      },
      { status: 500 }
    )
  }
} 