import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Spring Street — Global Stage for Indian Capital',
    template: '%s | Spring Street',
  },
  description:
    'Institutional-grade global investing for resident Indians. Access world markets with the discipline of a sovereign fund.',
  keywords: [
    'global investing India', 'LRS investment', 'international ETF India',
    'SEBI investment adviser', 'global portfolio India', 'wealth management India',
  ],
  authors: [{ name: 'Spring Street Wealth Pvt. Ltd.' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://springstreet.in',
    siteName: 'Spring Street',
    title: 'Spring Street — Global Stage for Indian Capital',
    description: 'Institutional-grade global investing for resident Indians.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spring Street — Global Stage for Indian Capital',
    description: 'Institutional-grade global investing for resident Indians.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#0D1B2A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
