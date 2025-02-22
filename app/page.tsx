'use client'

import { TopNavigation } from "@/app/components/TopNavigation";
import { About } from "@/app/sections/About";
import { Contact } from "@/app/sections/Contact";
import { Hero } from "@/app/sections/Hero";
import { Projects } from "@/app/sections/Projects";
import { Skills } from "@/app/sections/Skills";
import { useState } from "react";
import { HomeSection } from "./lib/types";
import { NavigationContext } from "./lib/useNavigationContext";


export default function Home() {
  const [currentSection, setCurrentSection] = useState<HomeSection>('hero')
  const [fullyVisible, setFullyVisible] = useState<HomeSection>('hero')

  console.log('current section changed to: ', currentSection)
  console.log('fully visible? ', fullyVisible)

  return (
    <NavigationContext.Provider value={{ currentSection, setCurrentSection, fullyVisible, setFullyVisible }} >
      <TopNavigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </NavigationContext.Provider>
  );
}