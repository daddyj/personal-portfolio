import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect, useState } from "react";
import { sections } from "../lib/types";
import { useNavigationContext } from "../lib/useNavigationContext";

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    // const offset = 70; // Adjust for the fixed navbar height
    const top = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export const TopNavigation = () => {
  const { currentSection, fullyVisible } = useNavigationContext()
  // const [currentSection, setCurrentSection] = useState<string>('hero')
  const [isNextSectionAvailable, setIsNextSectionAvailable] = useState(true)
  // const [isChangedByScroll, setIsChangedByScroll] = useState(false)

  const handleArrowClick = useCallback(() => {
    console.log('arrow click action with current section', currentSection)
    const currentIndex = sections.findIndex((section => currentSection === section))
    const nextIndex = fullyVisible === currentSection ? currentIndex + 1 : currentIndex
    // console.log('handleArrowClick', { currentIndex, nextIndex, section: sections?.[nextIndex], isChangedByScroll })
    scrollToSection(sections[nextIndex])
    if (nextIndex === sections.length - 1) {
      setIsNextSectionAvailable(false)
    }
    // setTimeout(() => setIsChangedByScroll(false), 500)
  }, [currentSection, fullyVisible])

  useEffect(() => {
    console.log({ currentSection })
  }, [currentSection])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsChangedByScroll(false)
  //   }, 500)
  // })

  return (
    <nav className="flex fixed z-10 w-screen gap-8 p-4 px-8 sm:px-16 text-md sm:text-2xl bg-black items-center">
      <div onClick={() => { scrollToSection('hero') }} className="hover:cursor-pointer">
        <p>acun gürsoy</p>
      </div>

      <div className="flex">
        <div className="flex p-2 px-4 rounded-full border-1 items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-lime-500 animate-pulse" />
          <p className="text-sm">Offen für Projekte!</p>
        </div>
      </div>

      <div className="hidden sm:flex flex-1 justify-end gap-4">
        <div onClick={() => { scrollToSection('projects') }} className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${currentSection === 'projects' ? 'border-b-blue-500 text-blue-500' : ''}`}>projekte</div>
        <div onClick={() => { scrollToSection('about') }} className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${currentSection === 'about' ? 'border-b-blue-500 text-blue-500' : ''}`}>über mich</div>
        <div onClick={() => { scrollToSection('skillsTech') }} className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${currentSection && ['skillsTech', 'skillsSocial', 'skillsCv'].includes(currentSection) ? 'border-b-blue-500 text-blue-500' : ''}`}>kompetenzen</div>
        <div onClick={() => { scrollToSection('contact') }} className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${currentSection === 'contact' ? 'border-b-blue-500 text-blue-500' : ''}`}>kontakt</div>
      </div>

      {
        isNextSectionAvailable && (
          <div className="hidden sm:block fixed bottom-16 left-16 animate animate-fade" onClick={handleArrowClick}>
            <ArrowDownIcon className="size-32 hover:cursor-pointer hover:animate-infinite animate-pulse animate-once hover:text-blue-500" />
          </div>
        )
      }
      {
        !isNextSectionAvailable && (
          <div
            className="hidden sm:block fixed bottom-16 left-16 animate animate-fade"
            onClick={() => {
              scrollToSection('hero');
              setIsNextSectionAvailable(true);
              // setTimeout(() => { setIsChangedByScroll(false) }, 1000)
            }}>
            <ArrowUpIcon className="size-32 hover:cursor-pointer hover:animate-infinite animate-pulse animate-once hover:text-blue-500" />
          </div>
        )
      }
    </nav>
  )
}