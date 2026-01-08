#!/bin/bash

# Setup script for .env.local file
# This creates your environment configuration file

echo "🚀 Setting up your Strava Dashboard environment..."
echo ""

# Create .env.local file
cat > .env.local << 'EOF'
# Strava API Credentials
NEXT_PUBLIC_STRAVA_CLIENT_ID=171739
STRAVA_CLIENT_SECRET=6bbc3630ca8513bf2add58085e272aee294abf3f

# Access Tokens (Get these by visiting http://localhost:3000/auth after running the app)
STRAVA_ACCESS_TOKEN=
STRAVA_REFRESH_TOKEN=

# Mapbox Token (Optional - if you want to use Mapbox for maps)
# Get free token at https://account.mapbox.com/access-tokens/
NEXT_PUBLIC_MAPBOX_TOKEN=
EOF

echo "✅ Created .env.local file!"
echo ""
echo "📝 Next steps:"
echo "1. Run: npm install"
echo "2. Run: npm run dev"
echo "3. Visit: http://localhost:3000/auth to get your Strava tokens"
echo "4. Copy the tokens and paste them into .env.local"
echo "5. Restart the server and enjoy! 🎉"
echo ""
echo "🔒 Note: .env.local is automatically ignored by git for security."

