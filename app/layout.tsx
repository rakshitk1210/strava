import type { Metadata } from "next"
import { Inter, Titillium_Web } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  variable: '--font-titillium-web',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: "Strava Running Tracker",
  description: "Track and visualize your running activities from Strava",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: '#060809',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.variable} ${titilliumWeb.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
