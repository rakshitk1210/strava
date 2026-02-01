import { NextResponse } from 'next/server'
import { clearUserTokens } from '@/lib/session'

export async function POST() {
  try {
    // Clear session cookies
    await clearUserTokens()
    
    console.log('User session cleared successfully')
    
    return NextResponse.json({ 
      success: true,
      message: 'Disconnected from Strava' 
    })
  } catch (error: any) {
    console.error('Error disconnecting:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to disconnect' 
      },
      { status: 500 }
    )
  }
}
