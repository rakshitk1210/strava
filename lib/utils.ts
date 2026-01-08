import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDistance(meters: number): string {
  return (meters / 1000).toFixed(2)
}

export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = Math.floor(seconds % 60)
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }
  return `${minutes}:${secs.toString().padStart(2, '0')}`
}

export function calculatePace(distanceMeters: number, timeSeconds: number): string {
  const distanceKm = distanceMeters / 1000
  const paceMinPerKm = timeSeconds / distanceKm / 60
  
  const minutes = Math.floor(paceMinPerKm)
  const seconds = Math.floor((paceMinPerKm - minutes) * 60)
  
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}

export function formatDateTime(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export function metersToFeet(meters: number): number {
  return meters * 3.28084
}

export function getOneYearAgo(): Date {
  const date = new Date()
  date.setFullYear(date.getFullYear() - 1)
  return date
}

