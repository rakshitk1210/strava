'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

function AuthContent() {
  const searchParams = useSearchParams()
  const [tokens, setTokens] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const code = searchParams.get('code')
    if (code) {
      exchangeToken(code)
    }
  }, [searchParams])

  const exchangeToken = async (code: string) => {
    try {
      const response = await fetch('/api/auth/exchange', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      })

      if (!response.ok) {
        throw new Error('Failed to exchange token')
      }

      const data = await response.json()
      setTokens(data)
    } catch (err) {
      setError('Failed to get tokens')
    }
  }

  const handleLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID || '171739'
    const redirectUri = `${window.location.origin}/auth`
    const scope = 'read,activity:read_all'
    
    window.location.href = `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`
  }

  if (tokens) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <Card className="p-8 max-w-2xl w-full">
          <h1 className="text-2xl font-bold mb-4">✅ Authentication Successful!</h1>
          <p className="mb-4">Copy these values and update your <code className="bg-gray-100 px-2 py-1 rounded">.env.local</code> file:</p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4 font-mono text-sm">
            <div className="mb-2">
              <strong>STRAVA_ACCESS_TOKEN=</strong>{tokens.access_token}
            </div>
            <div className="mb-2">
              <strong>STRAVA_REFRESH_TOKEN=</strong>{tokens.refresh_token}
            </div>
            <div>
              <strong>Expires at:</strong> {new Date(tokens.expires_at * 1000).toLocaleString()}
            </div>
          </div>

          <Button onClick={() => window.location.href = '/'}>
            Go to Dashboard
          </Button>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <Card className="p-8 max-w-md w-full text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={handleLogin}>Try Again</Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Get Fresh Strava Tokens</h1>
        <p className="mb-6 text-muted-foreground">
          Click below to authorize with Strava and get new access tokens for your dashboard.
        </p>
        <Button onClick={handleLogin} className="w-full">
          Authorize with Strava
        </Button>
      </Card>
    </div>
  )
}

export default function AuthPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">Loading...</p>
        </div>
      </div>
    }>
      <AuthContent />
    </Suspense>
  )
}

