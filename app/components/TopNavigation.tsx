import {
  ArrowDownIcon,
  ArrowUpIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { useCallback, useEffect, useState } from 'react'

import { sections } from '@/app/lib/types'
import { useNavigationContext } from '@/app/lib/useNavigationContext'

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (section) {
    const top = section.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export const TopNavigation = () => {
  const { currentSection, fullyVisible } = useNavigationContext()
  const [isNextSectionAvailable, setIsNextSectionAvailable] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleArrowClick = useCallback(() => {
    console.log('arrow click action with current section', currentSection)
    const currentIndex = sections.findIndex(
      (section) => currentSection === section
    )
    const nextIndex =
      fullyVisible === currentSection ? currentIndex + 1 : currentIndex
    scrollToSection(sections[nextIndex])
    if (nextIndex === sections.length - 1) {
      setIsNextSectionAvailable(false)
    }
  }, [currentSection, fullyVisible])

  useEffect(() => {
    console.log({ currentSection })
  }, [currentSection])

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
        <div
          onClick={() => {
            scrollToSection('projects')
          }}
          className={`border-b-2 border-transparent transition-all hover:cursor-pointer hover:border-b-blue-500 hover:text-blue-500 ${currentSection === 'projects' ? 'border-b-blue-500 text-blue-500' : ''}`}
        >
          projekte
        </div>
        <div
          onClick={() => {
            scrollToSection('about')
          }}
          className={`border-b-2 border-transparent transition-all hover:cursor-pointer hover:border-b-blue-500 hover:text-blue-500 ${currentSection === 'about' ? 'border-b-blue-500 text-blue-500' : ''}`}
        >
          über mich
        </div>
        <div
          onClick={() => {
            scrollToSection('skillsTech')
          }}
          className={`border-b-2 border-transparent transition-all hover:cursor-pointer hover:border-b-blue-500 hover:text-blue-500 ${currentSection && ['skillsTech', 'skillsSocial', 'skillsCv'].includes(currentSection) ? 'border-b-blue-500 text-blue-500' : ''}`}
        >
          kompetenzen
        </div>
        <div
          onClick={() => {
            scrollToSection('contact')
          }}
          className={`border-b-2 border-transparent transition-all hover:cursor-pointer hover:border-b-blue-500 hover:text-blue-500 ${currentSection === 'contact' ? 'border-b-blue-500 text-blue-500' : ''}`}
        >
          kontakt
        </div>
      </div>

      {isNextSectionAvailable && (
        <div
          className="animate animate-fade fixed bottom-16 left-16 hidden sm:block"
          onClick={handleArrowClick}
        >
          <ArrowDownIcon className="hover:animate-infinite animate-once size-32 animate-pulse hover:cursor-pointer hover:text-blue-500" />
        </div>
      )}
      {!isNextSectionAvailable && (
        <div
          className="animate animate-fade fixed bottom-16 left-16 hidden sm:block"
          onClick={() => {
            scrollToSection('hero')
            setIsNextSectionAvailable(true)
            // setTimeout(() => { setIsChangedByScroll(false) }, 1000)
          }}
        >
          <ArrowUpIcon className="hover:animate-infinite animate-once size-32 animate-pulse hover:cursor-pointer hover:text-blue-500" />
        </div>
      )}
      {isMobileMenuOpen && (
        <div className="animate-fade animate-duration-420 fixed top-0 left-0 flex h-screen w-screen flex-col items-center gap-4 bg-[var(--background)] p-8 text-4xl">
          <div
            className="flex w-full justify-end"
            onClick={() => {
              setIsMobileMenuOpen(false)
            }}
          >
            <XMarkIcon className="size-24" />
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <div
              onClick={() => {
                scrollToSection('projects')
                setIsMobileMenuOpen(false)
              }}
              className={`border-b-2 border-transparent transition-all hover:cursor-pointer hover:border-b-blue-500 hover:text-blue-500 ${currentSection === 'projects' ? 'border-b-blue-500 text-blue-500' : ''}`}
            >
              projekte
            </div>
            <div
              onClick={() => {
                scrollToSection('about')
                setIsMobileMenuOpen(false)
              }}
              className={`border-b-2 border-transparent transition-all hover:cursor-pointer hover:border-b-blue-500 hover:text-blue-500 ${currentSection === 'about' ? 'border-b-blue-500 text-blue-500' : ''}`}
            >
              über mich
            </div>
            <div
              onClick={() => {
                scrollToSection('skillsTech')
                setIsMobileMenuOpen(false)
              }}
              className={`border-b-2 border-transparent transition-all hover:cursor-pointer hover:border-b-blue-500 hover:text-blue-500 ${currentSection && ['skillsTech', 'skillsSocial', 'skillsCv'].includes(currentSection) ? 'border-b-blue-500 text-blue-500' : ''}`}
            >
              kompetenzen
            </div>
            <div
              onClick={() => {
                scrollToSection('contact')
                setIsMobileMenuOpen(false)
              }}
              className={`border-b-2 border-transparent transition-all hover:cursor-pointer hover:border-b-blue-500 hover:text-blue-500 ${currentSection === 'contact' ? 'border-b-blue-500 text-blue-500' : ''}`}
            >
              kontakt
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
