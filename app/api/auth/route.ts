import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, ...credentials } = body

    if (action === 'login') {
      // Handle login
      return NextResponse.json({ 
        message: 'Login successful', 
        data: credentials 
      })
    } 
    
    if (action === 'register') {
      // Handle registration
      return NextResponse.json({ 
        message: 'Registration successful', 
        data: credentials 
      })
    }

    return NextResponse.json(
      { error: 'Invalid action' }, 
      { status: 400 }
    )
  } catch {
    return NextResponse.json({ message: 'Authentication failed' }, { status: 401 })
  }
} 