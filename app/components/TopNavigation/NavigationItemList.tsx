import { usePathname } from 'next/navigation'

import { HomeSection } from '@/app/lib/types'

import { NavigationItemProps, TopNavigationItem } from './TopNavigationItem'

type NavigationItemListProps = Pick<NavigationItemProps, 'onClick'> & {
  currentSection: HomeSection
}

export const NavigationItemList = ({
  currentSection,
  onClick,
}: NavigationItemListProps) => {
  const pathname = usePathname()

  return (
    <>
      <TopNavigationItem
        isSelected={currentSection === 'projects'}
        label="projekte"
        onClick={onClick}
        section="projects"
      />
      <TopNavigationItem
        isSelected={currentSection === 'mindset'}
        label="warum ich?"
        onClick={onClick}
        section="mindset"
      />
      <TopNavigationItem
        isSelected={
          currentSection && ['skillsTech', 'skillsCv'].includes(currentSection)
        }
        label="kompetenzen"
        onClick={onClick}
        section="skillsCv"
      />
      <TopNavigationItem
        isSelected={currentSection === 'contact'}
        label="kontakt"
        onClick={onClick}
        section="contact"
      />
      <TopNavigationItem
        isSelected={pathname.includes('impressum')}
        label="impressum"
        onClick={onClick}
      />
    </>
  )
}
