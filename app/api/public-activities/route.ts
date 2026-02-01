import { NextResponse } from 'next/server'
import { fetchActivities, refreshAccessToken } from '@/lib/strava'
import { getUserTokens, updateUserTokens } from '@/lib/session'

let cachedToken: string | undefined = process.env.STRAVA_ACCESS_TOKEN
let cachedRefreshToken: string | undefined = process.env.STRAVA_REFRESH_TOKEN
let tokenExpiry = Date.now()

export async function GET() {
  try {
    // PRIORITY 1: Check for user session tokens (visitor connected their Strava)
    const userTokens = await getUserTokens()
    
    if (userTokens) {
      console.log('Fetching activities for connected user from session')
      
      // Check if user's token needs refresh
      if (Date.now() >= userTokens.expiresAt * 1000 - 300000) {
        console.log('User token expired, refreshing...')
        try {
          const tokenData = await refreshAccessToken(userTokens.refreshToken)
          await updateUserTokens(
            tokenData.access_token,
            tokenData.refresh_token,
            tokenData.expires_at
          )
          const activities = await fetchActivities(tokenData.access_token)
          return NextResponse.json({ 
            activities,
            isOwnData: true
          })
        } catch (refreshError) {
          console.error('User token refresh failed:', refreshError)
          // Fall through to demo data
        }
      } else {
        // User token is valid
        const activities = await fetchActivities(userTokens.accessToken)
        return NextResponse.json({ 
          activities,
          isOwnData: true
        })
      }
    }
    
    // PRIORITY 2: Fallback to env tokens (demo data - site owner's data)
    console.log('No user session found, using demo data from env tokens')
    
    // Try to refresh token if expired or about to expire
    if (!cachedToken || Date.now() >= tokenExpiry - 300000) {
      console.log('Env token expired or missing, refreshing...')
      
      if (!cachedRefreshToken) {
        return NextResponse.json(
          { error: 'No refresh token available. Please re-authenticate with Strava.' },
          { status: 401 }
        )
      }
      
      try {
        const tokenData = await refreshAccessToken(cachedRefreshToken)
        cachedToken = tokenData.access_token
        cachedRefreshToken = tokenData.refresh_token
        tokenExpiry = tokenData.expires_at * 1000
        console.log('Env token refreshed successfully')
      } catch (refreshError) {
        console.error('Env token refresh failed:', refreshError)
        return NextResponse.json(
          { error: 'Failed to refresh access token. Please re-authenticate with Strava.' },
          { status: 401 }
        )
      }
    }

    if (!cachedToken) {
      return NextResponse.json(
        { error: 'No access token available' },
        { status: 401 }
      )
    }

    const activities = await fetchActivities(cachedToken)
    return NextResponse.json({ 
      activities,
      isDemo: true
    })
  } catch (error: any) {
    console.error('Failed to fetch activities:', error)
    
    // If unauthorized, try refreshing token once more
    if (error.message?.includes('Unauthorized') && cachedRefreshToken) {
      try {
        console.log('Unauthorized error, attempting token refresh...')
        const tokenData = await refreshAccessToken(cachedRefreshToken)
        cachedToken = tokenData.access_token
        cachedRefreshToken = tokenData.refresh_token
        tokenExpiry = tokenData.expires_at * 1000
        
        // Check if token was successfully refreshed
        if (!cachedToken) {
          throw new Error('Failed to obtain access token after refresh')
        }
        
        // Retry fetching activities
        const activities = await fetchActivities(cachedToken)
        return NextResponse.json({ 
          activities,
          isDemo: true
        })
      } catch (retryError) {
        console.error('Retry after refresh failed:', retryError)
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to fetch activities from Strava. Your token may have expired.' },
      { status: 500 }
    )
  }
}

export const revalidate = 3600
