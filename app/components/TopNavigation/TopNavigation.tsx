import { Bars3Icon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

import { sections } from '@/app/lib/constants'
import { HomeSection } from '@/app/lib/types'
import { useNavigationContext } from '@/app/lib/useNavigationContext'
import { cn } from '@/app/lib/utils'

import { ArrowIcon } from './ArrowIcon'
import { NavigationItemList } from './NavigationItemList'
import { TopNavigationMobileSheet } from './TopNavigationMobileSheet'

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (section) {
    const top = section.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export const TopNavigation = () => {
  const { currentSection } = useNavigationContext()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(
    sections.findIndex((section) => currentSection === section)
  )

  const isFirstSection = currentIndex === 0
  const isLastSection = currentIndex === sections.length - 1

  const handleArrowDownClick = useCallback(() => {
    const currentIndex = sections.findIndex(
      (section) => currentSection === section
    )
    const isCurrentSectionFullyRendered = fullyVisible === currentSection
    const nextIndex = isCurrentSectionFullyRendered
      ? currentIndex + 1
      : currentIndex

  const handleArrowDownClick = () => {
    if (currentIndex < sections.length - 1) {
      const nextIndex = currentIndex + 1
      setCurrentIndex(nextIndex)
      scrollToSection(sections[nextIndex])
    }
  }

  const handleArrowUpClick = () => {
    if (currentIndex > 0) {
      const nextIndex = currentIndex - 1
      setCurrentIndex(nextIndex)
    scrollToSection('hero')
      scrollToSection(sections[nextIndex])
    }
  }

  const handleNavigationItemClick = (section?: HomeSection) => () => {
    if (section) scrollToSection(section)
  }

  const handleNavigationItemMobileClick = (section?: HomeSection) => () => {
    if (section) scrollToSection(section)
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    setCurrentIndex(sections.findIndex((section) => currentSection === section))
  }, [currentSection])

  return (
    <nav className="fixed z-10 flex w-screen items-center gap-4 bg-black p-4 px-8 text-sm text-gray-300 sm:gap-8 sm:px-16 sm:text-2xl">
      <div
        className="flex sm:hidden"
        onClick={() => {
          setIsMobileMenuOpen(true)
        }}
      >
        <Bars3Icon className="size-10" />
      </div>
      <TopNavigationMobileSheet
        open={isMobileMenuOpen}
        currentSection={currentSection}
        onClick={handleNavigationItemMobileClick}
      />

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
          <div className="flex h-4 w-4 animate-pulse rounded-full bg-orange-500" />
          <p className="text-center text-xs sm:text-sm">
            In Teilzeit verfügbar
          </p>
        </div>
      </div>

      <div className="hidden flex-1 justify-end gap-4 sm:flex">
        <NavigationItemList
          onClick={handleNavigationItemClick}
          currentSection={currentSection}
        />
      </div>

      <ArrowIcon
        className={cn(
          'sm:bottom-32 sm:left-4 sm:block',
          isFirstSection && 'pointer-events-none !animate-none !opacity-15'
        )}
        direction="up"
        onClick={handleArrowUpClick}
      />
      <ArrowIcon
        className={cn(
          'sm:bottom-16 sm:left-4 sm:block',
          isLastSection && 'pointer-events-none !animate-none !opacity-15'
        )}
        direction="down"
        onClick={handleArrowDownClick}
      />
    </nav>
  )
}
