// app/layout.tsx — Server Component (no 'use client' here!)
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700', '900'],
})

export const metadata: Metadata = {
  title: 'Madhur Photocopy & Typing – Indore',
  description:
    'Professional photocopy, printing, typing, scanning, lamination, graphic design, and photo editing services in Indore. Rated 5★ on Google.',
  keywords: 'photocopy indore, typing indore, lamination, graphic design, scanning, annapurna road',
  openGraph: {
    title: 'Madhur Photocopy & Typing – Indore',
    description: '5★ rated document & creative services in Indore. Photocopy, typing, design, lamination & more.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="bg-surface text-ink font-sans antialiased overflow-x-hidden">
        {/* SmoothScroll is 'use client' internally — that's fine as a child */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}