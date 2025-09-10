import './globals.css'

import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { ThemeProvider } from 'next-themes'

import { poppins, scheherazade } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'Naseh',
  description: 'Your Legal Needs, Covered in One Click!',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${scheherazade.variable} ${poppins.variable}`}
    >
      <head>
        <meta name='apple-mobile-web-app-title' content='Naseh' />
      </head>
      <body className='bg-white'>
        <ThemeProvider attribute='class' disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
