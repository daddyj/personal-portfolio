import { PropsWithChildren, useState } from 'react'

import { HomeSection, ScrollDirection } from '@/app/lib/types'
import { NavigationContext } from '@/app/lib/useNavigationContext'

export const NavigationWrapper = ({ children }: PropsWithChildren) => {
  const [currentSection, setCurrentSection] = useState<HomeSection>('hero')
  const [fullyVisible, setFullyVisible] = useState<HomeSection>('hero')
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirection>('down')

  return (
    <NavigationContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        fullyVisible,
        setFullyVisible,
        scrollDirection,
        setScrollDirection,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
