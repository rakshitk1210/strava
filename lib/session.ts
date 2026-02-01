import { cookies } from 'next/headers'
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto'

const ALGORITHM = 'aes-256-gcm'
const IV_LENGTH = 16
const AUTH_TAG_LENGTH = 16
const SALT_LENGTH = 64

// Get encryption key from environment variable
function getEncryptionKey(): Buffer {
  const secret = process.env.SESSION_SECRET
  if (!secret) {
    throw new Error('SESSION_SECRET environment variable is required')
  }
  // Use first 32 bytes of secret for AES-256
  return Buffer.from(secret.padEnd(32, '0').slice(0, 32))
}

// Encrypt a string value
function encrypt(text: string): string {
  const key = getEncryptionKey()
  const iv = randomBytes(IV_LENGTH)
  const cipher = createCipheriv(ALGORITHM, key, iv)
  
  let encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  
  const authTag = cipher.getAuthTag()
  
  // Return: iv + authTag + encrypted (all hex encoded)
  return iv.toString('hex') + authTag.toString('hex') + encrypted
}

// Decrypt a string value
function decrypt(encryptedText: string): string {
  const key = getEncryptionKey()
  
  // Extract iv, authTag, and encrypted data
  const iv = Buffer.from(encryptedText.slice(0, IV_LENGTH * 2), 'hex')
  const authTag = Buffer.from(
    encryptedText.slice(IV_LENGTH * 2, IV_LENGTH * 2 + AUTH_TAG_LENGTH * 2),
    'hex'
  )
  const encrypted = encryptedText.slice(IV_LENGTH * 2 + AUTH_TAG_LENGTH * 2)
  
  const decipher = createDecipheriv(ALGORITHM, key, iv)
  decipher.setAuthTag(authTag)
  
  let decrypted = decipher.update(encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  
  return decrypted
}

// Store user tokens in encrypted cookies
export async function setUserTokens(
  accessToken: string,
  refreshToken: string,
  expiresAt: number
): Promise<void> {
  const cookieStore = await cookies()
  
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
  }
  
  // Encrypt and store tokens
  cookieStore.set('strava_access', encrypt(accessToken), cookieOptions)
  cookieStore.set('strava_refresh', encrypt(refreshToken), cookieOptions)
  cookieStore.set('strava_expires', expiresAt.toString(), {
    ...cookieOptions,
    httpOnly: false, // Allow reading expiry from client if needed
  })
}

// Retrieve user tokens from cookies
export async function getUserTokens(): Promise<{
  accessToken: string
  refreshToken: string
  expiresAt: number
} | null> {
  try {
    const cookieStore = await cookies()
    
    const accessTokenCookie = cookieStore.get('strava_access')
    const refreshTokenCookie = cookieStore.get('strava_refresh')
    const expiresAtCookie = cookieStore.get('strava_expires')
    
    if (!accessTokenCookie?.value || !refreshTokenCookie?.value || !expiresAtCookie?.value) {
      return null
    }
    
    // Decrypt tokens
    const accessToken = decrypt(accessTokenCookie.value)
    const refreshToken = decrypt(refreshTokenCookie.value)
    const expiresAt = parseInt(expiresAtCookie.value, 10)
    
    return {
      accessToken,
      refreshToken,
      expiresAt,
    }
  } catch (error) {
    console.error('Error retrieving user tokens:', error)
    return null
  }
}

// Clear user session cookies
export async function clearUserTokens(): Promise<void> {
  const cookieStore = await cookies()
  
  cookieStore.delete('strava_access')
  cookieStore.delete('strava_refresh')
  cookieStore.delete('strava_expires')
}

// Update tokens (for refresh flow)
export async function updateUserTokens(
  accessToken: string,
  refreshToken: string,
  expiresAt: number
): Promise<void> {
  await setUserTokens(accessToken, refreshToken, expiresAt)
}
