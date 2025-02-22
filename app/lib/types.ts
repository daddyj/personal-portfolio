export const sections = ['hero', 'about', 'skillsTech', 'skillsSocial', 'skillsCv', 'projects', 'contact'] as const

export type HomeSection = typeof sections[number]

export interface HomeSectionProps {
  onEnter: (section: HomeSection) => void
  onFullyVisible: (section: HomeSection) => void
}