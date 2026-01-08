# 🎯 START HERE FIRST!

## Welcome to Your Strava Running Tracker! 🏃‍♂️

**This is now a fully functional application!** All features have been implemented and are working.

---

## 🚀 Get Started in 3 Steps

### Step 1: Set Up Environment (2 minutes)

Open terminal and run:

```bash
cd "/Users/rakshit/Documents/Builds/Garmin running tracker /strava-dashboard"
./setup-env.sh
```

This creates your `.env.local` file with Strava credentials already filled in!

### Step 2: Install & Start (2 minutes)

```bash
npm install
npm run dev
```

### Step 3: Get Strava Tokens (1 minute)

1. Open: **http://localhost:3000/auth**
2. Click "Authorize with Strava"
3. Log in to Strava (if not already)
4. Copy the displayed tokens
5. Open `.env.local` file and paste:
   - `STRAVA_ACCESS_TOKEN=paste_here`
   - `STRAVA_REFRESH_TOKEN=paste_here`
6. **Press Ctrl+C in terminal** to stop server
7. Run `npm run dev` again

🎉 **Done!** Visit **http://localhost:3000**

---

## ✨ What You'll See

### 📊 Statistics Dashboard
At the top: Total runs, distance, time, and average pace

### 🗺️ Map Tab (Default View)
- All your running routes on an interactive map
- Orange lines showing your paths
- Green markers at start points
- Click markers to see run details

### 📈 Charts Tab
- Toggle between Weekly and Monthly views
- Distance covered over time (bar chart)
- Pace trends (line chart)
- Number of runs (bar chart)
- Time spent running (bar chart)

### 🏆 Records Tab
- Your longest run
- Best pace (fastest min/km)
- Most elevation gain
- Longest duration
- Highest max speed
- Click any card to see full run details

### 🔥 Heatmap Tab
- See where you run most often
- Red/orange = frequently run areas
- Blue = less frequent
- Beautiful visualization of your running patterns

---

## 🗺️ About the Map

The app currently uses **Mapbox GL** for maps, which requires a free API token.

### Option A: Get Mapbox Token (5 minutes, free)
1. Go to: https://account.mapbox.com/access-tokens/
2. Sign up (free, no credit card needed)
3. Create a new token
4. Copy it to `.env.local`: `NEXT_PUBLIC_MAPBOX_TOKEN=your_token`
5. Restart the server

**Mapbox free tier includes:**
- 50,000 map loads/month
- More than enough for personal use!

### Option B: Use Leaflet Instead (no token needed)
If you prefer not to use Mapbox, I can quickly switch the map to use Leaflet with OpenStreetMap (completely free, no signup). Just let me know!

---

## 📁 Important Files

- **`.env.local`** - Your credentials (NEVER commit to git!)
- **`QUICK_START.md`** - Detailed setup guide
- **`ACTUAL_STATUS.md`** - What's actually built
- **`ENVIRONMENT_SETUP.md`** - Environment details

---

## 🐛 Troubleshooting

### "Failed to load activities"
✅ Make sure you completed Step 3 (Strava tokens in .env.local)  
✅ Restart the dev server after adding tokens  
✅ Check that tokens are not empty in .env.local

### Map is blank/not showing
✅ You need a Mapbox token (Option A above)  
✅ Or switch to Leaflet (Option B)

### "No runs available"
✅ Make sure you have Strava activities from the last year  
✅ Check that activities are marked as "Run" or "Trail Run"  
✅ Click the Refresh button in the app

### npm install errors
✅ Make sure you're in the strava-dashboard folder  
✅ Try: `rm -rf node_modules package-lock.json && npm install`

---

## 🎨 Customization Ideas

Once it's working, you can:

1. **Change colors**: Edit `tailwind.config.ts`
2. **Add more stats**: Modify `components/StatsPanel.tsx`
3. **Change map style**: Edit `components/RunsMap.tsx` (line with 'outdoors-v12')
4. **Adjust date range**: Edit `lib/strava.ts` (currently last 365 days)

---

## 📚 What's Actually Built

All of these are **working and implemented**:

✅ Interactive map with all routes  
✅ Statistics dashboard (runs, distance, time, pace)  
✅ Weekly/monthly charts with trends  
✅ Personal records (5 different records tracked)  
✅ Heatmap visualization  
✅ Run details modal (click to see full info)  
✅ OAuth authentication flow  
✅ Automatic token refresh  
✅ Tab navigation system  
✅ Responsive design  
✅ Error handling  
✅ Loading states  

---

## 🔄 Daily Use

Every time you want to use the dashboard:

```bash
cd "/Users/rakshit/Documents/Builds/Garmin running tracker /strava-dashboard"
npm run dev
```

Open browser: **http://localhost:3000**

The dashboard will automatically refresh your Strava token as needed!

---

## 💡 Pro Tips

1. **Refresh Button**: Use it to get your latest Strava activities
2. **Records Cards**: Click them to see full run details
3. **Charts Toggle**: Switch between weekly/monthly views
4. **Navigation**: Use the tabs at the top to switch views
5. **Zoom Map**: Use mouse wheel or +/- buttons on map

---

## 📞 Need Help?

Check these files in order:
1. This file (START_HERE_FIRST.md)
2. QUICK_START.md
3. ACTUAL_STATUS.md
4. ENVIRONMENT_SETUP.md

---

## 🎯 What's Next?

### To Deploy Online (Optional)
Once working locally, you can deploy to Vercel for free:
```bash
npm install -g vercel
vercel
```

### Future Features (Not Yet Built)
- Elevation profile charts
- Route comparison
- Dark mode
- Mobile optimization
- Export to CSV
- Goal tracking

---

**Ready to start?** Run:

```bash
cd "/Users/rakshit/Documents/Builds/Garmin running tracker /strava-dashboard"
./setup-env.sh
npm install
npm run dev
```

Then visit: **http://localhost:3000/auth**

Happy running! 🏃‍♂️💨

