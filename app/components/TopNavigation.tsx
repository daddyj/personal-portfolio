import {
  ArrowDownIcon,
  ArrowUpIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { useCallback, useState } from 'react'

import { HomeSection, sections } from '@/app/lib/types'
import { useNavigationContext } from '@/app/lib/useNavigationContext'

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
    const nextIndex =
      fullyVisible === currentSection ? currentIndex + 1 : currentIndex
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
        <div
          className="animate animate-fade fixed bottom-4 left-4 hidden sm:bottom-16 sm:left-16 sm:block"
          onClick={handleArrowDownClick}
        >
          <ArrowDownIcon className="hover:animate-infinite animate-once size-32 animate-pulse hover:cursor-pointer hover:text-blue-500" />
        </div>
      )}
      {scrollDirection === 'up' && (
        <div
          className="animate animate-fade fixed bottom-4 left-4 hidden sm:bottom-16 sm:left-16 sm:block"
          onClick={handleArrowUpClick}
        >
          <ArrowUpIcon className="hover:animate-infinite animate-once size-32 animate-pulse hover:cursor-pointer hover:text-blue-500" />
        </div>
      )}
    </nav>
  )
}

interface NavigationItemProps {
  isSelected: boolean
  onClick: (toSection?: HomeSection) => () => void
  label: string
  section: HomeSection
}

const TopNavigationItem = ({
  isSelected,
  onClick,
  label,
  section,
}: NavigationItemProps) => {
  return (
    <div
      onClick={onClick(section)}
      className={`border-b-2 border-transparent transition-all hover:cursor-pointer hover:border-b-blue-500 hover:text-blue-500 ${isSelected ? 'border-b-blue-500 text-blue-500' : ''}`}
    >
      {label}
    </div>
  )
}

const TopNavigationMobileSheet = ({
  open,
  currentSection,
  onClick,
}: Pick<NavigationItemProps, 'onClick'> & {
  currentSection: HomeSection
  open: boolean
}) => {
  if (!open) return null

  return (
    <div className="animate-fade animate-duration-420 fixed top-0 left-0 flex h-screen w-screen flex-col items-center gap-4 bg-[var(--background)] p-8 text-4xl">
      <div className="flex w-full justify-end" onClick={onClick()}>
        <XMarkIcon className="size-24" />
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <TopNavigationItem
          isSelected={currentSection === 'projects'}
          label="projekte"
          onClick={onClick}
          section="projects"
        />
        <TopNavigationItem
          isSelected={currentSection === 'about'}
          label="über mich"
          onClick={onClick}
          section="about"
        />
        <TopNavigationItem
          isSelected={currentSection === 'skillsTech'}
          label="kompetenzen"
          onClick={onClick}
          section="skillsTech"
        />
        <TopNavigationItem
          isSelected={currentSection === 'contact'}
          label="kontakt"
          onClick={onClick}
          section="contact"
        />
      </div>
    </div>
  )
}
