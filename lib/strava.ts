const STRAVA_API_BASE = 'https://www.strava.com/api/v3'

export interface StravaPhoto {
  id: number
  unique_id: string
  urls: {
    '100': string
    '600': string
  }
  source: number
  uploaded_at: string
}

export interface StravaActivity {
  id: number
  name: string
  distance: number
  moving_time: number
  elapsed_time: number
  total_elevation_gain: number
  type: string
  start_date: string
  start_date_local: string
  timezone: string
  start_latlng: [number, number] | null
  end_latlng: [number, number] | null
  map: {
    id: string
    summary_polyline: string | null
    polyline?: string | null
  }
  average_speed: number
  max_speed: number
  average_heartrate?: number
  max_heartrate?: number
  calories?: number
  total_photo_count?: number
  photos?: {
    primary?: StravaPhoto
    count?: number
  }
}

export interface AthleteStats {
  all_run_totals: {
    count: number
    distance: number
    moving_time: number
    elapsed_time: number
    elevation_gain: number
  }
}

export async function fetchActivities(accessToken: string): Promise<StravaActivity[]> {
  // Fetch activities from the last 3 years to capture all personal records
  const threeYearsAgo = Math.floor(Date.now() / 1000) - (3 * 365 * 24 * 60 * 60)
  let page = 1
  let allActivities: StravaActivity[] = []
  let hasMore = true

  while (hasMore) {
    const response = await fetch(
      `${STRAVA_API_BASE}/athlete/activities?after=${threeYearsAgo}&per_page=200&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch activities: ${response.statusText}`)
    }

    const activities: StravaActivity[] = await response.json()
    
    const runs = activities.filter(
      activity => activity.type === 'Run' || activity.type === 'TrailRun'
    )
    
    allActivities = [...allActivities, ...runs]
    
    if (activities.length < 200) {
      hasMore = false
    } else {
      page++
    }
  }

  return allActivities
}

export async function fetchActivityDetail(
  accessToken: string,
  activityId: number
): Promise<StravaActivity> {
  const response = await fetch(
    `${STRAVA_API_BASE}/activities/${activityId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch activity details: ${response.statusText}`)
  }

  return response.json()
}

export async function fetchActivityPhotos(
  accessToken: string,
  activityId: number
): Promise<StravaPhoto[]> {
  const response = await fetch(
    `${STRAVA_API_BASE}/activities/${activityId}/photos?size=600`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )

  if (!response.ok) {
    // Photos endpoint might fail if no photos exist, return empty array
    if (response.status === 404) {
      return []
    }
    throw new Error(`Failed to fetch activity photos: ${response.statusText}`)
  }

  return response.json()
}

export async function fetchAthleteStats(
  accessToken: string,
  athleteId: number
): Promise<AthleteStats> {
  const response = await fetch(
    `${STRAVA_API_BASE}/athletes/${athleteId}/stats`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch athlete stats: ${response.statusText}`)
  }

  return response.json()
}

export async function exchangeToken(code: string) {
  const response = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      code: code,
      grant_type: 'authorization_code',
    }),
  })

  if (!response.ok) {
    throw new Error(`Failed to exchange token: ${response.statusText}`)
  }

  return response.json()
}

export async function refreshAccessToken(refreshToken: string) {
  const response = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
  })

  if (!response.ok) {
    throw new Error(`Failed to refresh token: ${response.statusText}`)
  }

  return response.json()
}

