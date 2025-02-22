'use client'

import { TopNavigation } from "@/app/components/TopNavigation";
import { useState } from "react";
import { HomeSection } from "./lib/types";
import { NavigationContext } from "./lib/useNavigationContext";
import { About, Contact, Hero, Projects, Skills } from "./sections";


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