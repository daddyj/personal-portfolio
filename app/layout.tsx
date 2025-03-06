import './globals.css'

import type { Metadata } from 'next'

import { montserrat } from './fonts'

export const metadata: Metadata = {
  title: 'Acun Gürsoy Softwareentwicklung',
  description:
    'Software Web App Entwicklung React Native Frontend Fullstack Deutschland Nordrhein-Westfalen Rhein Main Remote Hybrid Agil',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {(process.env.NODE_ENV === 'development' ||
          process.env.VERCEL_ENV === 'preview') && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            data-recording-token="ubMfLSYJh79QDYOXbUfQn5OFoqUpYUNxXotiLcoD"
            data-is-production-environment="false"
            src="https://snippet.meticulous.ai/v1/meticulous.js"
          />
        )}
      </head>
      <body style={montserrat.style}>
        <div className="bg-blue-400">{children}</div>
      </body>
    </html>
  )
}
