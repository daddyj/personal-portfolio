import { Dispatch, SetStateAction } from 'react'

import { sections } from '../constants'

// Navigation types
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

// Scroll and section types
export type ScrollProgress = {
  sectionProgress: number
  subsectionProgress: number[]
  contactSectionProgress: number
  sectionOpacities: number[]
  viewportProgress: number[]
}

export type SectionProps = {
  index: number
  title?: string
  zIndex: number
  scrollProgress: ScrollProgress
  children?: React.ReactNode
}

export type ProjectSubsectionProps = {
  title: string
  progress: number
  zIndex: number
}

export type Section = {
  id: string
  component: React.ReactNode
  zIndex: number
  title?: string
}
