import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Michigan Web Ring - UMich CS Students & Alumni',
  description: 'A collection of personal websites from University of Michigan Computer Science students and alumni.',
  keywords: ['University of Michigan', 'Computer Science', 'Web Ring', 'Students', 'Portfolio'],
  authors: [{ name: 'UMich CS Community' }],
  openGraph: {
    title: 'Michigan Web Ring',
    description: 'Personal websites from University of Michigan CS students and alumni',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}