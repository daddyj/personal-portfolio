'use client'

import '@tamagui/core/reset.css'
import '@tamagui/polyfill-dev'

import { ReactNode } from 'react'
import { NextThemeProvider } from '@tamagui/next-theme'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '../../../tamagui.config'
import { useServerInsertedHTML } from 'next/navigation'

export const NextTamaguiProvider = ({ children }: { children: ReactNode }) => {
  useServerInsertedHTML(() => {
    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            // the first time this runs you'll get the full CSS including all themes
            // after that, it will only return CSS generated since the last call
            __html: tamaguiConfig.getNewCSS(),
          }}
        />
      </>
    )
  })

  return (
    <NextThemeProvider skipNextHead>
      <TamaguiProvider config={tamaguiConfig} disableRootThemeClass>
        {children}
      </TamaguiProvider>
    </NextThemeProvider>
  )
}