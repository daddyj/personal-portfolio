import { Montserrat } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // This creates a CSS variable
})