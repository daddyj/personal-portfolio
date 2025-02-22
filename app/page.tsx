'use client'

import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect, useState } from "react";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

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
    setTimeout(() => {
      setIsChangedByScroll(false)
    }, 500)
  })

  useEffect(() => {
    const heroSection = document.getElementById('hero')
    const aboutSection = document.getElementById('about')
    const skillsTechSection = document.getElementById('skillsTech')
    const skillsSocialSection = document.getElementById('skillsSocial')
    const skillsCvSection = document.getElementById('skillsCv')
    const projectsSection = document.getElementById('projects')
    const contactSection = document.getElementById('contact')

    const observerHero = new IntersectionObserver((entries) => {
      // entries[0] is our single observed element instance
      const entry = entries[0];
      if (entry.isIntersecting) { setCurrentSection('hero'); setIsChangedByScroll(true); setIsNextSectionAvailable(true) };
    }, {
      root: null, // observing for viewport
      rootMargin: '0px',
      threshold: 0.1 // Trigger when at least 10% of the element is visible
    });
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

    if (heroSection) {
      observerHero.observe(heroSection);
    }
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
      if (heroSection) {
        observerHero.unobserve(heroSection);
      }
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
        <div onClick={() => { scrollToSection('hero') }} className="hover:cursor-pointer">
          <p>acun gürsoy</p>
        </div>

        <div className="flex">
          <div className="flex p-2 px-4 rounded-full border-1 items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-lime-500 animate-pulse" />
            <p className="text-sm">Offen für Projekte!</p>
          </div>
        </div>

        <div className="flex flex-1 justify-end gap-4">
          <div onClick={() => { scrollToSection('projects') }} className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${currentSection === 'projects' ? 'border-b-blue-500 text-blue-500' : ''}`}>projekte</div>
          <div onClick={() => { scrollToSection('about') }} className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${currentSection === 'about' ? 'border-b-blue-500 text-blue-500' : ''}`}>über mich</div>
          <div onClick={() => { scrollToSection('skillsTech') }} className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${['skillsTech', 'skillsSocial', 'skillsCv'].includes(currentSection) ? 'border-b-blue-500 text-blue-500' : ''}`}>kompetenzen</div>
          <div onClick={() => { scrollToSection('contact') }} className={`transition-all border-b-2 border-transparent hover:text-blue-500 hover:border-b-blue-500 hover:cursor-pointer ${currentSection === 'contact' ? 'border-b-blue-500 text-blue-500' : ''}`}>kontakt</div>
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
            <ArrowDownIcon className="size-32 hover:cursor-pointer hover:animate-infinite animate-pulse animate-once hover:text-blue-500" />
          </div>
        )
      }
      {
        !isNextSectionAvailable && (
          <div className="fixed bottom-16 left-16 animate animate-fade" onClick={() => { scrollToSection('hero'); setCurrentSection('hero'); setIsNextSectionAvailable(true); setTimeout(() => { setIsChangedByScroll(false) }, 1000) }}>
            <ArrowUpIcon className="size-32 hover:cursor-pointer hover:animate-infinite animate-pulse animate-once hover:text-blue-500" />
          </div>
        )
      }
    </div>
  );
}