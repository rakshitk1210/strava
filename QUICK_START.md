# 🚀 Quick Start Guide

## Get Your Dashboard Running in 5 Minutes!

### Step 1: Install Dependencies

```bash
cd strava-dashboard
npm install
```

### Step 2: Create Environment File

Create a file named `.env.local` in the `strava-dashboard` folder:

```bash
# Strava API Credentials
NEXT_PUBLIC_STRAVA_CLIENT_ID=171739
STRAVA_CLIENT_SECRET=6bbc3630ca8513bf2add58085e272aee294abf3f

# Access Tokens (Leave empty for now)
STRAVA_ACCESS_TOKEN=
STRAVA_REFRESH_TOKEN=

# Mapbox Token (Optional - for maps)
NEXT_PUBLIC_MAPBOX_TOKEN=
```

**⚠️ IMPORTANT:** Never commit this file to Git. It's already in `.gitignore`.

### Step 3: Start the Development Server

```bash
npm run dev
```

The app will start at: **http://localhost:3000**

### Step 4: Get Your Strava Tokens

1. Visit: **http://localhost:3000/auth**
2. Click "Authorize with Strava"
3. Log in to Strava and authorize the app
4. Copy the displayed tokens
5. Paste them into your `.env.local` file:
   - `STRAVA_ACCESS_TOKEN=paste_here`
   - `STRAVA_REFRESH_TOKEN=paste_here`
6. **Restart the server** (Ctrl+C, then `npm run dev` again)

### Step 5: Enjoy Your Dashboard! 🎉

Visit **http://localhost:3000** and you'll see:
- ✅ Your running statistics
- ✅ Interactive map with all your routes
- ✅ Weekly/monthly charts
- ✅ Personal records
- ✅ Activity heatmap

---

## 🗺️ About Mapbox Token (Optional)

The map currently uses Mapbox which requires a token. You have two options:

### Option A: Get a Free Mapbox Token (Recommended)
1. Go to: https://account.mapbox.com/access-tokens/
2. Sign up (free tier is generous)
3. Create a token
4. Add it to `.env.local`: `NEXT_PUBLIC_MAPBOX_TOKEN=your_token_here`

### Option B: Switch to Leaflet (No Token Needed)
If you prefer not to use Mapbox, we can switch to Leaflet/OpenStreetMap which is completely free. Just let me know!

---

## 🎨 Features Available

### 1. Map View
- See all your running routes on an interactive map
- Click markers to see run details
- Zoom and pan around

### 2. Charts View
- Weekly and monthly distance trends
- Pace trends over time
- Number of runs per period
- Time spent running

### 3. Personal Records
- Longest run
- Best pace
- Most elevation gain
- Longest duration
- Highest max speed

### 4. Heatmap View
- Visualize your most frequented running areas
- See where you run most often
- Beautiful color-coded overlay

---

## 🐛 Troubleshooting

### "Failed to load activities"
- Make sure you completed Step 4 (got Strava tokens)
- Check that tokens are in `.env.local`
- Restart the dev server after adding tokens

### Map not showing
- You need a Mapbox token (see Option A above)
- Or we can switch to Leaflet (free)

### "No runs available"
- Make sure you have activities on Strava from the last year
- Check that your Strava account has running activities
- Try refreshing with the Refresh button

---

## 📱 Navigation

Use the tabs at the top to switch between views:
- 🗺️ **Map** - Interactive route map
- 📊 **Charts** - Performance trends
- 🏆 **Records** - Personal bests
- 🔥 **Heatmap** - Activity density

---

## 🔄 Daily Use

Every time you want to use the dashboard:

```bash
cd strava-dashboard
npm run dev
```

Open http://localhost:3000 in your browser. That's it!

The dashboard automatically refreshes your token, so you only need to authorize once.

---

## 📚 Learn More

- `ENVIRONMENT_SETUP.md` - Detailed environment setup
- `PROJECT_SUMMARY.md` - Complete project overview
- `README.md` - Full documentation

---

## 🎯 Next Steps

1. **Customize Colors**: Edit `tailwind.config.ts` to change the color scheme
2. **Add More Stats**: Modify `StatsPanel.tsx` to add custom calculations
3. **Deploy**: Use Vercel, Netlify, or another platform to host online

Enjoy tracking your runs! 🏃‍♂️💨

