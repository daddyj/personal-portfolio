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
    <html lang="de" className="lg:overflow-hidden">
      <body style={montserrat.style}>{children}</body>
    </html>
  )
}
