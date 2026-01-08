import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { code } = body

    if (!code) {
      return NextResponse.json(
        { error: 'No code provided' },
        { status: 400 }
      )
    }

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
      throw new Error(`Strava API error: ${response.statusText}`)
    }

    const data = await response.json()

    return NextResponse.json({
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      expires_at: data.expires_at,
      athlete: data.athlete
    })
  } catch (error: any) {
    console.error('Token exchange error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to exchange token' },
      { status: 500 }
    )
  }
}

