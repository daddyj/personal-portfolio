import { createContext, useContext } from 'react'

import { NavigationContextProps } from './types'

export const NavigationContext = createContext<NavigationContextProps>({
  currentSection: 'hero',
  setCurrentSection: () => {
    console.log('TBD')
  },
  fullyVisible: 'hero',
  setFullyVisible: () => {
    console.log('TBD')
  },
})

export const useNavigationContext = () => {
  const { currentSection, setCurrentSection, fullyVisible, setFullyVisible } =
    useContext(NavigationContext)

  return {
    currentSection,
    setCurrentSection,
    fullyVisible,
    setFullyVisible,
  }
}
