import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StickyFooter from '@/components/StickyFooter'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Salary Calc',
  description: 'Calculate your take home salary after tax and other deductions in Sri Lanka',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <StickyFooter />
      </body>
    </html>
  )
}
