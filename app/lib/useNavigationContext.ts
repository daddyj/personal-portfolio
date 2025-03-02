import { createContext, useContext } from 'react'

import { NavigationContextProps } from './types'

export const NavigationContext = createContext<NavigationContextProps>({
  currentSection: 'hero',
  setCurrentSection: () => {
    console.log('TBD setCurrentSection')
  },
  fullyVisible: 'hero',
  setFullyVisible: () => {
    console.log('TBD setFullyVisible')
  },
  scrollDirection: 'down',
  setScrollDirection: () => {
    console.log('TBD setScrollDirection')
  },
})

export const useNavigationContext = () => {
  const contextProps = useContext(NavigationContext)

  return contextProps
}
