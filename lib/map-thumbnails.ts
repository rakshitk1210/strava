import { StravaActivity } from './strava';

export interface RunThumbnail {
  run: StravaActivity;
  thumbnailUrl: string;
}

/**
 * Generate a Mapbox static map thumbnail URL from a polyline
 * @param summaryPolyline - Encoded polyline from Strava activity
 * @param width - Image width in pixels (default: 300)
 * @param height - Image height in pixels (default: 200)
 * @param theme - Map theme, 'dark' or 'light' (default: 'dark')
 * @returns URL string for the static map image
 */
export function generateMapThumbnail(
  summaryPolyline: string,
  width: number = 300,
  height: number = 200,
  theme: 'dark' | 'light' = 'dark'
): string {
  if (!summaryPolyline || summaryPolyline.length === 0) {
    // Return a placeholder or empty map if no polyline
    return generatePlaceholderThumbnail(width, height, theme);
  }

  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  
  if (!mapboxToken) {
    console.warn('Mapbox token not found');
    return generatePlaceholderThumbnail(width, height, theme);
  }

  // Choose map style based on theme
  const style = theme === 'dark' ? 'mapbox/dark-v11' : 'mapbox/streets-v12';
  
  // Encode the polyline path for Mapbox Static API
  // Format: path-{strokeWidth}+{strokeColor}-{strokeOpacity}({polyline})
  const strokeColor = '04b488'; // Green accent color
  const strokeOpacity = '0.8';
  const strokeWidth = '3';
  
  const pathString = `path-${strokeWidth}+${strokeColor}-${strokeOpacity}(${encodeURIComponent(summaryPolyline)})`;
  
  // Construct the Mapbox Static API URL
  // Format: /styles/v1/{style}/static/{overlay}/auto/{width}x{height}@2x
  const url = `https://api.mapbox.com/styles/v1/${style}/static/${pathString}/auto/${width}x${height}@2x?access_token=${mapboxToken}`;
  
  return url;
}

/**
 * Generate a placeholder thumbnail for activities without polyline data
 */
function generatePlaceholderThumbnail(
  width: number,
  height: number,
  theme: 'dark' | 'light'
): string {
  // Return a simple colored rectangle as SVG data URL
  const bgColor = theme === 'dark' ? '%231f2425' : '%23f5f5f5';
  const textColor = theme === 'dark' ? '%23696e70' : '%23999999';
  
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${bgColor}"/>
      <text x="50%" y="50%" font-family="Arial" font-size="14" fill="${textColor}" text-anchor="middle" dy=".3em">No route data</text>
    </svg>
  `)}`;
}

/**
 * Get thumbnails for a list of runs
 * @param runs - Array of Strava activities
 * @param limit - Maximum number of thumbnails to generate (default: 10)
 * @param width - Thumbnail width (default: 300)
 * @param height - Thumbnail height (default: 200)
 * @param theme - Map theme (default: 'dark')
 * @returns Array of run thumbnail objects
 */
export function getRunThumbnails(
  runs: StravaActivity[],
  limit: number = 10,
  width: number = 300,
  height: number = 200,
  theme: 'dark' | 'light' = 'dark'
): RunThumbnail[] {
  // Sort runs by date (most recent first) and take the limit
  const sortedRuns = [...runs]
    .sort((a, b) => 
      new Date(b.start_date_local).getTime() - new Date(a.start_date_local).getTime()
    )
    .slice(0, limit);
  
  return sortedRuns
    .filter(run => run.map && run.map.summary_polyline) // Only include runs with map data
    .map(run => ({
      run,
      thumbnailUrl: generateMapThumbnail(
        run.map.summary_polyline!,
        width,
        height,
        theme
      )
    }));
}

/**
 * Generate a thumbnail for a specific run
 * @param run - Strava activity
 * @param width - Thumbnail width (default: 300)
 * @param height - Thumbnail height (default: 200)
 * @param theme - Map theme (default: 'dark')
 * @returns Thumbnail URL
 */
export function getRunThumbnail(
  run: StravaActivity,
  width: number = 300,
  height: number = 200,
  theme: 'dark' | 'light' = 'dark'
): string {
  if (!run.map || !run.map.summary_polyline) {
    return generatePlaceholderThumbnail(width, height, theme);
  }
  
  return generateMapThumbnail(run.map.summary_polyline, width, height, theme);
}
