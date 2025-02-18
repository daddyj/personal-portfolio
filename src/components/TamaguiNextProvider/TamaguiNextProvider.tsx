import '@tamagui/core/reset.css'
import '@tamagui/polyfill-dev'

import { ReactNode } from 'react'
import { NextThemeProvider } from '@tamagui/next-theme'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '../../../tamagui.config'

export const NextTamaguiProvider = ({ children }: { children: ReactNode }) => {
  return (
    <NextThemeProvider skipNextHead>
      <TamaguiProvider config={tamaguiConfig} disableRootThemeClass>
        {children}
      </TamaguiProvider>
    </NextThemeProvider>
  )
}