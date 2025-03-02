import { Dispatch, SetStateAction } from 'react'

export const sections = [
  'hero',
  'about',
  'skillsTech',
  'skillsSocial',
  'skillsCv',
  'projects',
  'contact',
] as const

export type HomeSection = (typeof sections)[number]

export type ScrollDirection = 'up' | 'down'

export interface NavigationContextProps {
  currentSection: HomeSection
  setCurrentSection: Dispatch<SetStateAction<HomeSection>>
  fullyVisible: HomeSection
  setFullyVisible: Dispatch<SetStateAction<HomeSection>>
  scrollDirection: ScrollDirection
  setScrollDirection: Dispatch<SetStateAction<ScrollDirection>>
}
