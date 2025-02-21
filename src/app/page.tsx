'use client'

import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect, useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

const sections = ['hero', 'about', 'skillsTech', 'skillsSocial', 'skillsCv', 'projects', 'contact']

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    // const offset = 70; // Adjust for the fixed navbar height
    const top = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export default function Home() {
  const [currentSection, setCurrentSection] = useState<string>('hero')
  const [isNextSectionAvailable, setIsNextSectionAvailable] = useState(true)
  const [isChangedByScroll, setIsChangedByScroll] = useState(false)

  const handleArrowClick = useCallback(() => {
    const currentIndex = sections.findIndex((section => currentSection === section))
    const nextIndex = isChangedByScroll ? currentIndex : currentIndex + 1
    console.log('handleArrowClick', { currentIndex, nextIndex, section: sections?.[nextIndex], isChangedByScroll })
    scrollToSection(sections[nextIndex])
    if (nextIndex < sections.length - 1) {
      setCurrentSection(sections[nextIndex])
    } else {
      setIsNextSectionAvailable(false)
    }
    setTimeout(() => setIsChangedByScroll(false), 500)
  }, [currentSection, isChangedByScroll])

  useEffect(() => {
    console.log({ currentSection })
  }, [currentSection])

  useEffect(() => {
    // const heroSection = document.getElementById('hero')
    const aboutSection = document.getElementById('about')
    const skillsTechSection = document.getElementById('skillsTech')
    const skillsSocialSection = document.getElementById('skillsSocial')
    const skillsCvSection = document.getElementById('skillsCv')
    const projectsSection = document.getElementById('projects')
    const contactSection = document.getElementById('contact')

    // const observerHero = new IntersectionObserver((entries) => {
    //   // entries[0] is our single observed element instance
    //   const entry = entries[0];
    //   if (entry.isIntersecting) { setCurrentSection('hero'); setIsChangedByScroll(true); setIsNextSectionAvailable(true) };
    // }, {
    //   root: null, // observing for viewport
    //   rootMargin: '0px',
    //   threshold: 0.1 // Trigger when at least 10% of the element is visible
    // });
    const observerAbout = new IntersectionObserver((entries) => {
      // entries[0] is our single observed element instance
      const entry = entries[0];
      if (entry.isIntersecting) { setCurrentSection('about'); setIsChangedByScroll(true); setIsNextSectionAvailable(true) };
    }, {
      root: null, // observing for viewport
      rootMargin: '0px',
      threshold: 0.1 // Trigger when at least 10% of the element is visible
    });
    const observerSkillsTech = new IntersectionObserver((entries) => {
      // entries[0] is our single observed element instance
      const entry = entries[0];
      if (entry.isIntersecting) { setCurrentSection('skillsTech'); setIsChangedByScroll(true); setIsNextSectionAvailable(true) };
    }, {
      root: null, // observing for viewport
      rootMargin: '0px',
      threshold: 0.1 // Trigger when at least 10% of the element is visible
    });
    const observerSkillsSocial = new IntersectionObserver((entries) => {
      // entries[0] is our single observed element instance
      const entry = entries[0];
      if (entry.isIntersecting) { setCurrentSection('skillsSocial'); setIsChangedByScroll(true); setIsNextSectionAvailable(true) };
    }, {
      root: null, // observing for viewport
      rootMargin: '0px',
      threshold: 0.1 // Trigger when at least 10% of the element is visible
    });
    const observerSkillsCv = new IntersectionObserver((entries) => {
      // entries[0] is our single observed element instance
      const entry = entries[0];
      if (entry.isIntersecting) { setCurrentSection('skillsCv'); setIsChangedByScroll(true); setIsNextSectionAvailable(true) };
    }, {
      root: null, // observing for viewport
      rootMargin: '0px',
      threshold: 0.1 // Trigger when at least 10% of the element is visible
    });
    const observerProjects = new IntersectionObserver((entries) => {
      // entries[0] is our single observed element instance
      const entry = entries[0];
      if (entry.isIntersecting) { setCurrentSection('projects'); setIsChangedByScroll(true); setIsNextSectionAvailable(true) };
    }, {
      root: null, // observing for viewport
      rootMargin: '0px',
      threshold: 0.1 // Trigger when at least 10% of the element is visible
    });
    const observerContact = new IntersectionObserver((entries) => {
      // entries[0] is our single observed element instance
      const entry = entries[0];
      if (entry.isIntersecting) { setCurrentSection('contact'); setIsChangedByScroll(true); setIsNextSectionAvailable(false) };
    }, {
      root: null, // observing for viewport
      rootMargin: '0px',
      threshold: 0.1 // Trigger when at least 10% of the element is visible
    });

    // if (heroSection) {
    //   observerHero.observe(heroSection);
    // }
    if (aboutSection) {
      observerAbout.observe(aboutSection);
    }
    if (skillsTechSection) {
      observerSkillsTech.observe(skillsTechSection);
    }
    if (skillsSocialSection) {
      observerSkillsSocial.observe(skillsSocialSection);
    }
    if (skillsCvSection) {
      observerSkillsCv.observe(skillsCvSection);
    }
    if (projectsSection) {
      observerProjects.observe(projectsSection);
    }
    if (contactSection) {
      observerContact.observe(contactSection);
    }

    // Clean up the observer on component unmount
    return () => {
      // if (heroSection) {
      //   observerHero.unobserve(heroSection);
      // }
      if (aboutSection) {
        observerAbout.unobserve(aboutSection);
      }
      if (skillsTechSection) {
        observerSkillsTech.unobserve(skillsTechSection);
      }
      if (skillsSocialSection) {
        observerSkillsSocial.unobserve(skillsSocialSection);
      }
      if (skillsCvSection) {
        observerSkillsCv.unobserve(skillsCvSection);
      }
      if (projectsSection) {
        observerProjects.unobserve(projectsSection);
      }
      if (contactSection) {
        observerContact.unobserve(contactSection);
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once


  return (
    <div className="bg-blue-400">
      <nav className="flex fixed z-10 w-screen gap-8 p-4 px-16 text-2xl bg-black items-center">
        <div>
          <p>acun gürsoy</p>
        </div>

        <div className="flex">
          <div className="flex p-2 rounded-full border-1 items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-lime-500 animate-pulse" />
            <p className="text-sm">Offen für Projekte!</p>
          </div>
        </div>

        <div className="flex flex-1 justify-end gap-4">
          <a href="#projects">projekte</a>
          <a href="#about">über mich</a>
          <a href="#skillsTech">kompetenzen</a>
          <a href="#contact">kontakt</a>
        </div>
      </nav>
      <Hero id="hero" />
      <About id="about" />
      <Skills />
      <Projects id="projects" />
      <Contact id="contact" />
      {
        isNextSectionAvailable && (
          <div className="fixed bottom-16 left-16 animate animate-fade" onClick={handleArrowClick}>
            <ArrowDownIcon className="size-32 hover:cursor-pointer" />
          </div>
        )
      }
      {
        !isNextSectionAvailable && (
          <div className="fixed bottom-16 left-16 animate animate-fade" onClick={() => { scrollToSection('hero'); setCurrentSection('hero'); setIsNextSectionAvailable(true) }}>
            <ArrowUpIcon className="size-32 hover:cursor-pointer" />
          </div>
        )
      }
    </div>
  );
}


// const useIntersector = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const elementRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     const currentElement = elementRef.current
//     const observer = new IntersectionObserver((entries) => {
//       // entries[0] is our single observed element instance
//       const entry = entries[0];
//       setIsVisible(entry.isIntersecting);
//     }, {
//       root: null, // observing for viewport
//       rootMargin: '0px',
//       threshold: 0.1 // Trigger when at least 10% of the element is visible
//     });

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     // Clean up the observer on component unmount
//     return () => {
//       if (currentElement) {
//         observer.unobserve(currentElement);
//       }
//     };
//   }, [elementRef]); // Empty dependency array ensures the effect runs only once
// }