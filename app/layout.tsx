import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const InterFont = Inter()

export const metadata: Metadata = {
  title: 'さくらいろ',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${InterFont.className}`}>
        {children}
      </body>
    </html>
  )
}
