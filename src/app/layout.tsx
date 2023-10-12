import './globals.css'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import fonts from '@/defaults/fonts'
import AppThemeProvider from '@/components/theme'




export const metadata: Metadata = {
  title: 'Advice Care',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(fonts.jakarta.variable, fonts.inter.variable, fonts.manrope.variable, fonts.montserrat)}>
      <body className='font-jakarta bg-white min-h-screen'>
        <AppThemeProvider>
          {children}
        </AppThemeProvider>
      </body>
    </html>
  )
}
