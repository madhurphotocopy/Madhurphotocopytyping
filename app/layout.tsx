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

const BASE_URL = 'https://madhurphotocopytyping.vercel.app/' // 👈 change this to your actual Vercel URL after deploy // 👈 replace with your real domain

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────
  title: {
    default: 'Madhur Photocopy & Typing – Indore | Photocopy, Printing, Govt Services',
    template: '%s | Madhur Photocopy & Typing Indore',
  },
  description:
    'Madhur Photocopy & Typing — 5★ rated shop in Indore offering photocopy, printing, scanning, lamination, typing, Photoshop editing, Samagra ID, PAN card, MS Word/Excel & agreements. Near Unique Hospital, Annapurna Road.',

  // ── Keywords ──────────────────────────────────────────────
  keywords: [
    'photocopy indore',
    'typing indore',
    'scanning indore',
    'lamination indore',
    'samagra id indore',
    'pan card indore',
    'govt form filling indore',
    'ms word excel indore',
    'agreement typing indore',
    'photoshop editing indore',
    'annapurna road indore',
    'near unique hospital indore',
    'madhur photocopy',
    'Madhur Photocopy',
    'document services indore',
    'printing shop indore',
  ],

  // ── Authors & Creator ──────────────────────────────────────
  authors: [{ name: 'Madhur Photocopy & Typing' }],
  creator: 'Madhur Photocopy & Typing',
  publisher: 'Madhur Photocopy & Typing',

  // ── Canonical URL ─────────────────────────────────────────
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/' },

  // ── Open Graph (Facebook, WhatsApp previews) ──────────────
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'Madhur Photocopy & Typing',
    title: 'Madhur Photocopy & Typing – Best Document Services in Indore',
    description:
      '5★ rated shop near Unique Hospital, Annapurna Road Indore. Photocopy, printing, Samagra ID, PAN card, MS Word/Excel, Photoshop editing & more.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Madhur Photocopy & Typing – Indore',
      },
    ],
  },

  // ── Twitter / X card ──────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Madhur Photocopy & Typing – Indore',
    description:
      '5★ rated document & govt services shop near Unique Hospital, Annapurna Road Indore.',
    images: ['/og-image.jpg'],
  },

  // ── Favicon & Icons ───────────────────────────────────────
  icons: {
    icon: [
      { url: '/favicon.ico',        sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png',  sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png',  sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },

  // ── Robots ────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'r3anZaFa4i28_Rt6XA6K-hdxR4La5are8DJ1Nl0BrFk',
  },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Local Business JSON-LD — huge for Google local search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Madhur Photocopy & Typing',
              image: `${BASE_URL}/og-image.jpg`,
              '@id': BASE_URL,
              url: BASE_URL,
              telephone: '+919424512228',
              priceRange: '₹',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'LG-1, Annapurna Regency, Annapurna Road, near Unique Hospital',
                addressLocality: 'Indore',
                addressRegion: 'Madhya Pradesh',
                postalCode: '452009',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 22.6954925,
                longitude: 75.8388115,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
                  opens: '09:30',
                  closes: '19:00',
                },
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: '14',
              },
              hasMap: 'https://www.google.com/maps/place/Madhur+Photocopy+%26+Typing/@22.6954925,75.8362366,17z',
              sameAs: [
                'https://www.google.com/maps/place/Madhur+Photocopy+%26+Typing/@22.6954925,75.8362366,17z',
              ],
            }),
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${playfair.variable} bg-surface text-ink font-sans antialiased overflow-x-hidden`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}