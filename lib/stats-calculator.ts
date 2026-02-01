import { StravaActivity } from './strava';
import { format } from 'date-fns';

// Unit conversion
export function metersToKm(meters: number): number {
  return meters / 1000;
}

export function metersToMiles(meters: number): number {
  return meters / 1609.34;
}

export function convertDistance(meters: number, unit: 'Km' | 'Miles'): number {
  return unit === 'Km' ? metersToKm(meters) : metersToMiles(meters);
}

// Time formatting
export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

export function formatPace(metersPerSecond: number, unit: 'Km' | 'Miles'): string {
  const distance = unit === 'Km' ? 1000 : 1609.34;
  const secondsPerUnit = distance / metersPerSecond;
  const minutes = Math.floor(secondsPerUnit / 60);
  const seconds = Math.floor(secondsPerUnit % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

// Metric calculations for DashboardMetrics
export function calculateAveragePace(runs: StravaActivity[], unit: 'Km' | 'Miles' = 'Km'): string {
  if (runs.length === 0) return '0:00';
  
  const totalDistance = runs.reduce((sum, run) => sum + run.distance, 0);
  const totalTime = runs.reduce((sum, run) => sum + run.moving_time, 0);
  
  if (totalDistance === 0) return '0:00';
  
  const avgSpeed = totalDistance / totalTime;
  return formatPace(avgSpeed, unit);
}

export function calculateTotalDistance(runs: StravaActivity[], unit: 'Km' | 'Miles' = 'Km'): number {
  const totalMeters = runs.reduce((sum, run) => sum + run.distance, 0);
  return Math.round(convertDistance(totalMeters, unit));
}

export function calculateTotalTime(runs: StravaActivity[]): number {
  const totalSeconds = runs.reduce((sum, run) => sum + run.moving_time, 0);
  return Math.round(totalSeconds / 3600); // Convert to hours
}

export function calculateTotalElevation(runs: StravaActivity[], unit: 'Km' | 'Miles' = 'Km'): number {
  const totalMeters = runs.reduce((sum, run) => sum + run.total_elevation_gain, 0);
  // For elevation, keep in meters regardless of unit preference (standard practice)
  return Math.round(totalMeters);
}

export function calculateTotalSessions(runs: StravaActivity[]): number {
  return runs.length;
}

// Performance PRs for PerformanceCard
interface BestTime {
  time: string;
  date: string;
  pace: string;
}

const DISTANCE_TARGETS = {
  '5K': 5000,
  '10K': 10000,
  '15K': 15000,
  'HM': 21097.5, // Half marathon
  '30K': 30000,
  'FM': 42195, // Full marathon
};

export function findBestTime(
  runs: StravaActivity[], 
  targetDistance: number,
  unit: 'Km' | 'Miles' = 'Km'
): BestTime | null {
  // Find runs within 10% of target distance (increased tolerance for GPS inaccuracies)
  // This is especially important for longer distances like half marathons
  const tolerance = targetDistance * 0.10;
  const matchingRuns = runs.filter(run => 
    Math.abs(run.distance - targetDistance) <= tolerance
  );
  
  if (matchingRuns.length === 0) {
    // Fallback: Look for longer runs that covered this distance
    // For example, if no 15K race exists, use HM or FM data
    const longerRuns = runs.filter(run => run.distance > targetDistance);
    
    if (longerRuns.length === 0) return null;
    
    // Find the run with the best pace that covered this distance
    const bestPacedRun = longerRuns.reduce((best, run) => {
      const currentPace = run.moving_time / run.distance;
      const bestPace = best ? best.moving_time / best.distance : Infinity;
      return currentPace < bestPace ? run : best;
    }, longerRuns[0]);
    
    // Calculate the projected time at target distance using the pace from the longer run
    const projectedTime = (bestPacedRun.moving_time / bestPacedRun.distance) * targetDistance;
    
    return {
      time: formatTime(Math.round(projectedTime)),
      date: format(new Date(bestPacedRun.start_date_local), "do MMM"),
      pace: formatPace(bestPacedRun.average_speed, unit)
    };
  }
  
  // Find the fastest run at the target distance
  const fastest = matchingRuns.reduce((best, run) => {
    const currentPace = run.moving_time / run.distance;
    const bestPace = best.moving_time / best.distance;
    return currentPace < bestPace ? run : best;
  });
  
  return {
    time: formatTime(fastest.moving_time),
    date: format(new Date(fastest.start_date_local), "do MMM"),
    pace: formatPace(fastest.average_speed, unit)
  };
}

export function getAllPRs(runs: StravaActivity[], unit: 'Km' | 'Miles' = 'Km') {
  return {
    '5K': findBestTime(runs, DISTANCE_TARGETS['5K'], unit),
    '10K': findBestTime(runs, DISTANCE_TARGETS['10K'], unit),
    '15K': findBestTime(runs, DISTANCE_TARGETS['15K'], unit),
    'HM': findBestTime(runs, DISTANCE_TARGETS['HM'], unit),
    '30K': findBestTime(runs, DISTANCE_TARGETS['30K'], unit),
    'FM': findBestTime(runs, DISTANCE_TARGETS['FM'], unit),
  };
}

// Records for RecordsCard
export function findBestPace(runs: StravaActivity[], unit: 'Km' | 'Miles' = 'Km'): string {
  if (runs.length === 0) return '0:00';
  
  const fastest = runs.reduce((best, run) => 
    run.average_speed > best.average_speed ? run : best
  );
  
  return formatPace(fastest.average_speed, unit);
}

export function findMostElevation(runs: StravaActivity[]): number {
  if (runs.length === 0) return 0;
  
  const highest = runs.reduce((best, run) => 
    run.total_elevation_gain > best.total_elevation_gain ? run : best
  );
  
  return Math.round(highest.total_elevation_gain);
}

export function findHighestMaxSpeed(runs: StravaActivity[], unit: 'Km' | 'Miles' = 'Km'): number {
  if (runs.length === 0) return 0;
  
  const fastest = runs.reduce((best, run) => 
    run.max_speed > best.max_speed ? run : best
  );
  
  // Convert m/s to km/h or mph
  const speedInKmh = fastest.max_speed * 3.6;
  if (unit === 'Miles') {
    return Math.round(speedInKmh * 0.621371 * 10) / 10;
  }
  return Math.round(speedInKmh * 10) / 10;
}

export function findLongestDuration(runs: StravaActivity[]): string {
  if (runs.length === 0) return '0:00';
  
  const longest = runs.reduce((best, run) => 
    run.moving_time > best.moving_time ? run : best
  );
  
  return formatTime(longest.moving_time);
}

// Trends for RunningTrends
interface TrendDataPoint {
  date: string;
  value: number;
}

export function aggregateTrendsByDate(
  runs: StravaActivity[],
  metric: 'pace' | 'distance' | 'elevation',
  unit: 'Km' | 'Miles' = 'Km'
): TrendDataPoint[] {
  if (runs.length === 0) {
    // Return 12 months with zero values if no data
    const result: TrendDataPoint[] = [];
    const today = new Date();
    const currentYear = today.getFullYear();
    for (let month = 0; month < 12; month++) {
      const monthDate = new Date(currentYear, month, 1);
      result.push({
        date: format(monthDate, 'MMM'),
        value: 0
      });
    }
    return result;
  }
  
  // Determine the year from the runs data (use the most recent run's year)
  const sortedRuns = [...runs].sort((a, b) => 
    new Date(b.start_date_local).getTime() - new Date(a.start_date_local).getTime()
  );
  const targetYear = new Date(sortedRuns[0].start_date_local).getFullYear();
  
  // Group runs by month
  const monthlyData: { [key: string]: { runs: StravaActivity[], monthDate: Date } } = {};
  
  runs.forEach(run => {
    const runDate = new Date(run.start_date_local);
    const monthKey = format(runDate, 'yyyy-MM');
    
    if (!monthlyData[monthKey]) {
      monthlyData[monthKey] = {
        runs: [],
        monthDate: new Date(runDate.getFullYear(), runDate.getMonth(), 1)
      };
    }
    monthlyData[monthKey].runs.push(run);
  });
  
  // Get all 12 months of the target year (Jan to Dec)
  const result: TrendDataPoint[] = [];
  
  for (let month = 0; month < 12; month++) {
    const monthDate = new Date(targetYear, month, 1);
    const monthKey = format(monthDate, 'yyyy-MM');
    const monthRuns = monthlyData[monthKey]?.runs || [];
    
    let value = 0;
    
    if (monthRuns.length > 0) {
      switch (metric) {
        case 'pace':
          // Calculate average pace for the month
          const totalDistance = monthRuns.reduce((sum, run) => sum + run.distance, 0);
          const totalTime = monthRuns.reduce((sum, run) => sum + run.moving_time, 0);
          if (totalDistance > 0) {
            const avgSpeed = totalDistance / totalTime;
            const distanceUnit = unit === 'Km' ? 1000 : 1609.34;
            const secondsPerUnit = distanceUnit / avgSpeed;
            value = secondsPerUnit / 60; // Convert to decimal minutes
          }
          break;
        
        case 'distance':
          // Sum total distance for the month
          const monthlyDistance = monthRuns.reduce((sum, run) => sum + run.distance, 0);
          value = convertDistance(monthlyDistance, unit);
          break;
        
        case 'elevation':
          // Sum total elevation for the month
          value = monthRuns.reduce((sum, run) => sum + run.total_elevation_gain, 0);
          break;
      }
    }
    
    result.push({
      date: format(monthDate, 'MMM'),
      value: Math.round(value * 100) / 100
    });
  }
  
  return result;
}

// Streak for MonthlyStreak
export function getActivityDates(runs: StravaActivity[]): Date[] {
  return runs.map(run => new Date(run.start_date_local));
}

export function calculateCurrentStreak(runs: StravaActivity[]): number {
  if (runs.length === 0) return 0;
  
  const dates = getActivityDates(runs)
    .map(date => format(date, 'yyyy-MM-dd'))
    .sort()
    .reverse(); // Most recent first
  
  const uniqueDates = [...new Set(dates)];
  
  let streak = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  for (let i = 0; i < uniqueDates.length; i++) {
    const checkDate = new Date(today);
    checkDate.setDate(checkDate.getDate() - i);
    const checkDateStr = format(checkDate, 'yyyy-MM-dd');
    
    if (uniqueDates.includes(checkDateStr)) {
      streak++;
    } else if (i > 0) {
      // If we miss a day after starting the streak, break
      break;
    }
  }
  
  return streak;
}

// Sparkline data generation
export function generateSparklineData(
  runs: StravaActivity[],
  metric: 'pace' | 'distance' | 'elevation',
  unit: 'Km' | 'Miles' = 'Km'
): number[] {
  if (runs.length === 0) return Array(20).fill(0);
  
  // Sort and take last 20 runs
  const sortedRuns = [...runs].sort((a, b) => 
    new Date(a.start_date_local).getTime() - new Date(b.start_date_local).getTime()
  ).slice(-20);
  
  return sortedRuns.map(run => {
    switch (metric) {
      case 'pace':
        return run.distance / run.moving_time;
      case 'distance':
        return convertDistance(run.distance, unit);
      case 'elevation':
        return run.total_elevation_gain;
      default:
        return 0;
    }
  });
}
