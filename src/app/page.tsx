'use client'

import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect, useRef, useState } from "react";
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
    const skillsSection = document.getElementById('skills')
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
    const observerSkills = new IntersectionObserver((entries) => {
      // entries[0] is our single observed element instance
      const entry = entries[0];
      if (entry.isIntersecting) { setCurrentSection('skills'); setIsChangedByScroll(true); setIsNextSectionAvailable(true) };
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
    if (skillsSection) {
      observerSkills.observe(skillsSection);
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
      if (skillsSection) {
        observerSkills.unobserve(skillsSection);
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


const useIntersector = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current
    const observer = new IntersectionObserver((entries) => {
      // entries[0] is our single observed element instance
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    }, {
      root: null, // observing for viewport
      rootMargin: '0px',
      threshold: 0.1 // Trigger when at least 10% of the element is visible
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef]); // Empty dependency array ensures the effect runs only once
}