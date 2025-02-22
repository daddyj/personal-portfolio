import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { useCallback, useState } from "react";
import { HomeSection, sections } from "../lib/types";
import { useNavigationContext } from "../lib/useNavigationContext";

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const top = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export const TopNavigation = () => {
  const { currentSection, fullyVisible } = useNavigationContext()
  const [isNextSectionAvailable, setIsNextSectionAvailable] = useState(true)

  const handleArrowDownClick = useCallback(() => {
    console.log('arrow click action with current section', currentSection)
    const currentIndex = sections.findIndex((section => currentSection === section))
    const nextIndex = fullyVisible === currentSection ? currentIndex + 1 : currentIndex
    scrollToSection(sections[nextIndex])
    if (nextIndex === sections.length - 1) {
      setIsNextSectionAvailable(false)
    }
  }, [currentSection, fullyVisible])

  const handleArrowUpClick = () => {
    scrollToSection('hero');
    setIsNextSectionAvailable(true);
  }

  const handleTopNavigationClick = (section: HomeSection) => () => scrollToSection(section)

  return (
    <nav className="flex fixed z-10 w-screen gap-8 p-4 px-16 text-2xl bg-black items-center">
      <div onClick={handleTopNavigationClick('hero')} className="hover:cursor-pointer">
        <p>acun gürsoy</p>
      </div>

      <div className="flex">
        <div className="flex p-2 px-4 rounded-full border-1 items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-lime-500 animate-pulse" />
          <p className="text-sm">Offen für Projekte!</p>
        </div>
      </div>

      <div className="flex flex-1 justify-end gap-4">
        <div onClick={handleTopNavigationClick('projects')} className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${currentSection === 'projects' ? 'border-b-blue-500 text-blue-500' : ''}`}>projekte</div>
        <div onClick={handleTopNavigationClick('about')} className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${currentSection === 'about' ? 'border-b-blue-500 text-blue-500' : ''}`}>über mich</div>
        <div onClick={handleTopNavigationClick('skillsTech')} className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${currentSection && ['skillsTech', 'skillsSocial', 'skillsCv'].includes(currentSection) ? 'border-b-blue-500 text-blue-500' : ''}`}>kompetenzen</div>
        <div onClick={handleTopNavigationClick('contact')} className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${currentSection === 'contact' ? 'border-b-blue-500 text-blue-500' : ''}`}>kontakt</div>
      </div>

      {
        isNextSectionAvailable && (
          <div className="fixed bottom-16 left-16 animate animate-fade" onClick={handleArrowDownClick}>
            <ArrowDownIcon className="size-32 hover:cursor-pointer hover:animate-infinite animate-pulse animate-once hover:text-blue-500" />
          </div>
        )
      }
      {
        !isNextSectionAvailable && (
          <div
            className="fixed bottom-16 left-16 animate animate-fade"
            onClick={handleArrowUpClick}>
            <ArrowUpIcon className="size-32 hover:cursor-pointer hover:animate-infinite animate-pulse animate-once hover:text-blue-500" />
          </div>
        )
      }
    </nav>
  )
}