import { Poppins, Scheherazade_New } from 'next/font/google'

export const scheherazade = Scheherazade_New({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-scheherazade',
})

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
})
