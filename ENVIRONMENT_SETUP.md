# Environment Setup Guide

## Step 1: Create .env.local file

In the `strava-dashboard` folder, create a file named `.env.local` with the following content:

```bash
# Strava API Credentials
NEXT_PUBLIC_STRAVA_CLIENT_ID=171739
STRAVA_CLIENT_SECRET=6bbc3630ca8513bf2add58085e272aee294abf3f

# Access Tokens (Get these by visiting http://localhost:3000/auth after running the app)
STRAVA_ACCESS_TOKEN=
STRAVA_REFRESH_TOKEN=

# Mapbox Token (Optional - if you want to use Mapbox for maps)
# Get free token at https://account.mapbox.com/access-tokens/
NEXT_PUBLIC_MAPBOX_TOKEN=
```

## Step 2: Get Strava Access Tokens

1. Start the development server: `npm run dev`
2. Visit: `http://localhost:3000/auth`
3. Click "Authorize with Strava"
4. After authorization, copy the `STRAVA_ACCESS_TOKEN` and `STRAVA_REFRESH_TOKEN`
5. Paste them into your `.env.local` file
6. Restart the server

## Step 3: (Optional) Get Mapbox Token

If you want to use Mapbox maps:
1. Go to: https://account.mapbox.com/access-tokens/
2. Create a free account
3. Create a new token
4. Copy it to `NEXT_PUBLIC_MAPBOX_TOKEN` in `.env.local`

**OR** use Leaflet (free, no token needed) - the app will work with basic OpenStreetMap tiles without any token.

