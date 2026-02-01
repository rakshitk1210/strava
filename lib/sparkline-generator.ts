import { StravaActivity } from './strava';
import { subDays, format, startOfDay } from 'date-fns';

interface SparklineData {
  values: number[];
  min: number;
  max: number;
}

/**
 * Generate sparkline SVG path from data points
 */
export function generateSparklinePath(
  values: number[],
  width: number = 231.536,
  height: number = 50.5742
): { stroke: string; fill: string } {
  if (values.length === 0) {
    return { stroke: '', fill: '' };
  }

  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1; // Avoid division by zero

  // Generate points
  const points: [number, number][] = values.map((value, index) => {
    const x = (index / (values.length - 1)) * width;
    const y = height - ((value - min) / range) * height;
    return [x, y];
  });

  // Generate stroke path (line)
  const strokePath = points
    .map((point, index) => {
      if (index === 0) {
        return `M ${point[0]} ${point[1]}`;
      }
      return `L ${point[0]} ${point[1]}`;
    })
    .join(' ');

  // Generate fill path (area under curve)
  const fillPath =
    strokePath +
    ` L ${width} ${height} L 0 ${height} Z`;

  return {
    stroke: strokePath,
    fill: fillPath,
  };
}

/**
 * Aggregate runs into time buckets for sparkline visualization
 */
export function getSparklineData(
  runs: StravaActivity[],
  metricType: 'pace' | 'distance' | 'time' | 'elevation' | 'sessions',
  unit: 'Km' | 'Miles' = 'Km',
  numBuckets: number = 20
): { stroke: string; fill: string } {
  if (runs.length === 0) {
    return { stroke: '', fill: '' };
  }

  // Sort runs by date (oldest first for time series)
  const sortedRuns = [...runs].sort(
    (a, b) => new Date(a.start_date_local).getTime() - new Date(b.start_date_local).getTime()
  );

  // Get date range
  const oldestDate = new Date(sortedRuns[0].start_date_local);
  const newestDate = new Date(sortedRuns[sortedRuns.length - 1].start_date_local);
  const totalDays = Math.max(
    1,
    Math.ceil((newestDate.getTime() - oldestDate.getTime()) / (1000 * 60 * 60 * 24))
  );

  // If we have very few runs or short time span, use daily buckets
  const daysPerBucket = Math.max(1, Math.ceil(totalDays / numBuckets));

  // Create buckets
  const buckets: number[] = new Array(numBuckets).fill(0);
  const bucketCounts: number[] = new Array(numBuckets).fill(0);

  sortedRuns.forEach((run) => {
    const runDate = new Date(run.start_date_local);
    const daysSinceStart = Math.floor(
      (runDate.getTime() - oldestDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    const bucketIndex = Math.min(Math.floor(daysSinceStart / daysPerBucket), numBuckets - 1);

    switch (metricType) {
      case 'pace':
        // Average pace in min/km or min/mile
        const distanceInUnits = unit === 'Km' ? run.distance / 1000 : run.distance / 1609.34;
        const paceMinPerUnit = run.moving_time / 60 / distanceInUnits;
        if (isFinite(paceMinPerUnit) && paceMinPerUnit > 0) {
          buckets[bucketIndex] += paceMinPerUnit;
          bucketCounts[bucketIndex]++;
        }
        break;
      case 'distance':
        // Total distance per bucket
        buckets[bucketIndex] += unit === 'Km' ? run.distance / 1000 : run.distance / 1609.34;
        bucketCounts[bucketIndex]++;
        break;
      case 'time':
        // Total time per bucket (in hours)
        buckets[bucketIndex] += run.moving_time / 3600;
        bucketCounts[bucketIndex]++;
        break;
      case 'elevation':
        // Total elevation per bucket
        buckets[bucketIndex] += run.total_elevation_gain || 0;
        bucketCounts[bucketIndex]++;
        break;
      case 'sessions':
        // Count of sessions per bucket
        buckets[bucketIndex]++;
        bucketCounts[bucketIndex] = 1; // Don't divide by count for sessions
        break;
    }
  });

  // Calculate averages for pace, or keep totals for others
  const values = buckets.map((sum, index) => {
    if (bucketCounts[index] === 0) return 0;
    return metricType === 'pace' || metricType === 'sessions' 
      ? sum / (metricType === 'pace' ? bucketCounts[index] : 1)
      : sum;
  });

  // Fill empty buckets with interpolated values
  for (let i = 0; i < values.length; i++) {
    if (values[i] === 0 && bucketCounts[i] === 0) {
      // Find previous and next non-zero values
      let prevValue = 0;
      let nextValue = 0;
      
      for (let j = i - 1; j >= 0; j--) {
        if (values[j] > 0) {
          prevValue = values[j];
          break;
        }
      }
      
      for (let j = i + 1; j < values.length; j++) {
        if (values[j] > 0) {
          nextValue = values[j];
          break;
        }
      }
      
      values[i] = prevValue > 0 ? prevValue : nextValue;
    }
  }

  return generateSparklinePath(values);
}
