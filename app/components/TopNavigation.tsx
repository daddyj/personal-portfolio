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
    <nav className="flex fixed z-10 w-screen gap-4 sm:gap-8 p-4 px-8 sm:px-16 text-sm sm:text-2xl bg-[var(--background)] items-center">
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
        <div className="flex flex-1 p-2 sm:px-4 rounded-full border-1 items-center gap-2">
          <div className="flex w-4 h-4 rounded-full bg-lime-500 animate-pulse" />
          <p className="text-xs sm:text-sm text-center ">Offen für Projekte!</p>
        </div>
      </div>

      <div className="hidden sm:flex flex-1 justify-end gap-4">
        <div
          onClick={() => {
            scrollToSection('projects')
          }}
          className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${currentSection === 'projects' ? 'border-b-blue-500 text-blue-500' : ''}`}
        >
          projekte
        </div>
        <div
          onClick={() => {
            scrollToSection('about')
          }}
          className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${currentSection === 'about' ? 'border-b-blue-500 text-blue-500' : ''}`}
        >
          über mich
        </div>
        <div
          onClick={() => {
            scrollToSection('skillsTech')
          }}
          className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${currentSection && ['skillsTech', 'skillsSocial', 'skillsCv'].includes(currentSection) ? 'border-b-blue-500 text-blue-500' : ''}`}
        >
          kompetenzen
        </div>
        <div
          onClick={() => {
            scrollToSection('contact')
          }}
          className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${currentSection === 'contact' ? 'border-b-blue-500 text-blue-500' : ''}`}
        >
          kontakt
        </div>
      </div>

      {isNextSectionAvailable && (
        <div
          className="hidden sm:block fixed bottom-16 left-16 animate animate-fade"
          onClick={handleArrowClick}
        >
          <ArrowDownIcon className="size-32 hover:cursor-pointer hover:animate-infinite animate-pulse animate-once hover:text-blue-500" />
        </div>
      )}
      {!isNextSectionAvailable && (
        <div
          className="hidden sm:block fixed bottom-16 left-16 animate animate-fade"
          onClick={() => {
            scrollToSection('hero')
            setIsNextSectionAvailable(true)
            // setTimeout(() => { setIsChangedByScroll(false) }, 1000)
          }}
        >
          <ArrowUpIcon className="size-32 hover:cursor-pointer hover:animate-infinite animate-pulse animate-once hover:text-blue-500" />
        </div>
      )}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 p-8 w-screen h-screen bg-[var(--background)] animate-fade animate-duration-420 flex flex-col items-center text-4xl gap-4">
          <div
            className="flex justify-end w-full"
            onClick={() => {
              setIsMobileMenuOpen(false)
            }}
          >
            <XMarkIcon className="size-24" />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div
              onClick={() => {
                scrollToSection('projects')
                setIsMobileMenuOpen(false)
              }}
              className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${currentSection === 'projects' ? 'border-b-blue-500 text-blue-500' : ''}`}
            >
              projekte
            </div>
            <div
              onClick={() => {
                scrollToSection('about')
                setIsMobileMenuOpen(false)
              }}
              className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${currentSection === 'about' ? 'border-b-blue-500 text-blue-500' : ''}`}
            >
              über mich
            </div>
            <div
              onClick={() => {
                scrollToSection('skillsTech')
                setIsMobileMenuOpen(false)
              }}
              className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${currentSection && ['skillsTech', 'skillsSocial', 'skillsCv'].includes(currentSection) ? 'border-b-blue-500 text-blue-500' : ''}`}
            >
              kompetenzen
            </div>
            <div
              onClick={() => {
                scrollToSection('contact')
                setIsMobileMenuOpen(false)
              }}
              className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${currentSection === 'contact' ? 'border-b-blue-500 text-blue-500' : ''}`}
            >
              kontakt
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
