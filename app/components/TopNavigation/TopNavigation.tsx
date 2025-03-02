import { Bars3Icon } from '@heroicons/react/24/outline'
import { useCallback, useState } from 'react'

import { sections } from '@/app/lib/constants'
import { HomeSection } from '@/app/lib/types'
import { useNavigationContext } from '@/app/lib/useNavigationContext'

import { ArrowIcon } from './ArrowIcon'
import { TopNavigationItem } from './TopNavigationItem'
import { TopNavigationMobileSheet } from './TopNavigationMobileSheet'

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (section) {
    const top = section.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export const TopNavigation = () => {
  const { currentSection, fullyVisible, scrollDirection } =
    useNavigationContext()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleArrowDownClick = useCallback(() => {
    const currentIndex = sections.findIndex(
      (section) => currentSection === section
    )
    const isCurrentSectionFullyRendered = fullyVisible === currentSection
    const nextIndex = isCurrentSectionFullyRendered
      ? currentIndex + 1
      : currentIndex
    scrollToSection(sections[nextIndex])
  }, [currentSection, fullyVisible])

  const handleArrowUpClick = () => {
    scrollToSection('hero')
  }

  const handleTopNavigationClick = (section?: HomeSection) => () => {
    if (section) scrollToSection(section)
  }

  const handleTopNavigationMobileClick = (section?: HomeSection) => () => {
    if (section) scrollToSection(section)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed z-10 flex w-screen items-center gap-4 bg-[var(--background)] p-4 px-8 text-sm sm:gap-8 sm:px-16 sm:text-2xl">
      <div
        className="flex sm:hidden"
        onClick={() => {
          setIsMobileMenuOpen(true)
        }}
      >
        <Bars3Icon className="size-10" />
      </div>
      <div
        onClick={() => {
          scrollToSection('hero')
        }}
        className="hover:cursor-pointer"
      >
        <p>acun gürsoy</p>
      </div>

      <div className="flex">
        <div className="flex flex-1 items-center gap-2 rounded-full border-1 p-2 sm:px-4">
          <div className="flex h-4 w-4 animate-pulse rounded-full bg-lime-500" />
          <p className="text-center text-xs sm:text-sm">Offen für Projekte!</p>
        </div>
      </div>

      <div className="hidden flex-1 justify-end gap-4 sm:flex">
        <TopNavigationItem
          isSelected={currentSection === 'projects'}
          label="projekte"
          onClick={handleTopNavigationClick}
          section="projects"
        />
        <TopNavigationItem
          isSelected={currentSection === 'about'}
          label="über mich"
          onClick={handleTopNavigationClick}
          section="about"
        />
        <TopNavigationItem
          isSelected={
            currentSection &&
            ['skillsTech', 'skillsSocial', 'skillsCv'].includes(currentSection)
          }
          label="kompetenzen"
          onClick={handleTopNavigationClick}
          section="skillsTech"
        />
        <TopNavigationItem
          isSelected={currentSection === 'contact'}
          label="kontakt"
          onClick={handleTopNavigationClick}
          section="contact"
        />
      </div>

      <TopNavigationMobileSheet
        open={isMobileMenuOpen}
        currentSection={currentSection}
        onClick={handleTopNavigationMobileClick}
      />

      {scrollDirection === 'down' && (
        <ArrowIcon direction="down" onClick={handleArrowDownClick} />
      )}
      {scrollDirection === 'up' && (
        <ArrowIcon direction="up" onClick={handleArrowUpClick} />
      )}
    </nav>
  )
}
