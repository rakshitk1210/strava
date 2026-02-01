import { NextRequest, NextResponse } from 'next/server'
import { exchangeToken } from '@/lib/strava'
import { setUserTokens } from '@/lib/session'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code')
    
    if (!code) {
      console.error('No authorization code provided')
      return NextResponse.redirect(
        new URL('/?error=no_code', request.url)
      )
    }
    
    // Exchange authorization code for tokens
    const tokenData = await exchangeToken(code)
    
    if (!tokenData.access_token || !tokenData.refresh_token) {
      console.error('Invalid token data received from Strava')
      return NextResponse.redirect(
        new URL('/?error=invalid_tokens', request.url)
      )
    }
    
    // Store tokens in encrypted session cookies
    await setUserTokens(
      tokenData.access_token,
      tokenData.refresh_token,
      tokenData.expires_at
    )
    
    console.log('Successfully stored user tokens in session')
    
    // Redirect to home page - user will now see their own data
    return NextResponse.redirect(new URL('/', request.url))
  } catch (error: any) {
    console.error('OAuth callback error:', error)
    return NextResponse.redirect(
      new URL('/?error=auth_failed', request.url)
    )
  }
}
