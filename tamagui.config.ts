import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui' // or '@tamagui/core'
// fonts.ts
import { Montserrat } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // This creates a CSS variable
})
const customConfig = {
  ...defaultConfig,
  fonts: {
    ...defaultConfig.fonts,
    body: {
      ...defaultConfig.fonts.body,
      family: 'var(--font-montserrat)', // Use the CSS variable here
    },
    heading: {
      ...defaultConfig.fonts.heading,
      family: 'var(--font-montserrat)',
    },
  },
}
const appConfig = createTamagui(customConfig)

export type AppConfig = typeof appConfig

declare module 'tamagui' {
  // or '@tamagui/core'
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig { }
}

export default appConfig