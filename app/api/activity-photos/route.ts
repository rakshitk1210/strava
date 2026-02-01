import { NextResponse } from 'next/server'
import { fetchActivities, fetchActivityPhotos, refreshAccessToken } from '@/lib/strava'

let cachedToken: string | undefined = process.env.STRAVA_ACCESS_TOKEN
let cachedRefreshToken: string | undefined = process.env.STRAVA_REFRESH_TOKEN
let tokenExpiry = Date.now()

/**
 * Fetch activities with photos for the photo gallery
 * This endpoint fetches activities and their associated photos
 */
export async function GET() {
  try {
    // Try to refresh token if expired or about to expire
    if (!cachedToken || Date.now() >= tokenExpiry - 300000) {
      console.log('Token expired or missing, refreshing...')
      
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
        console.log('Token refreshed successfully')
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError)
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

    // Fetch all activities
    const activities = await fetchActivities(cachedToken)
    
    // Sort by date (newest first) and take first 20 activities to check for photos
    const recentActivities = activities
      .sort((a, b) => new Date(b.start_date_local).getTime() - new Date(a.start_date_local).getTime())
      .slice(0, 20)

    // Fetch photos for each recent activity
    const activitiesWithPhotos = await Promise.all(
      recentActivities.map(async (activity) => {
        try {
          const photos = await fetchActivityPhotos(cachedToken!, activity.id)
          return {
            ...activity,
            photos: photos.length > 0 ? {
              primary: photos[0],
              count: photos.length
            } : undefined,
            total_photo_count: photos.length
          }
        } catch (error) {
          console.error(`Failed to fetch photos for activity ${activity.id}:`, error)
          // Return activity without photos if fetch fails
          return activity
        }
      })
    )

    // Filter to only activities with photos
    const activitiesWithActualPhotos = activitiesWithPhotos.filter(
      activity => activity.total_photo_count && activity.total_photo_count > 0
    )

    return NextResponse.json({ 
      activities: activitiesWithActualPhotos
    })
  } catch (error: any) {
    console.error('Failed to fetch activity photos:', error)
    
    return NextResponse.json(
      { error: 'Failed to fetch activity photos from Strava.' },
      { status: 500 }
    )
  }
}

export const revalidate = 3600 // Cache for 1 hour
