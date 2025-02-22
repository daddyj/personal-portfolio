'use client'

import { About } from "@/app/sections/About";
import { Contact } from "@/app/sections/Contact";
import { Hero } from "@/app/sections/Hero";
import { Projects } from "@/app/sections/Projects";
import { Skills } from "@/app/sections/Skills";
import { TopNavigation } from "@/app/components/TopNavigation";
import { useState } from "react";
import { HomeSection } from "./lib/types";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<HomeSection>('hero')
  const [fullyVisible, setFullyVisible] = useState<HomeSection>('hero')


  console.log('current section changed to: ', currentSection)
  console.log('fully visible? ', fullyVisible)

  return (
    <div className="bg-blue-400">
      <TopNavigation currentSection={currentSection} fullyVisible={fullyVisible} />

      <Hero onEnter={setCurrentSection} onFullyVisible={setFullyVisible} />
      <About onEnter={setCurrentSection} onFullyVisible={setFullyVisible} />
      <Skills onEnter={setCurrentSection} onFullyVisible={setFullyVisible} />
      <Projects onEnter={setCurrentSection} onFullyVisible={setFullyVisible} />
      <Contact onEnter={setCurrentSection} onFullyVisible={setFullyVisible} />
    </div>
  );
}