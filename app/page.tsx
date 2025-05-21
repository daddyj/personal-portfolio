'use client'

import { TopNavigation } from '@/app/components/TopNavigation'

import { PixelGlitchScreen } from './components/PixelGlitchScreen'
import { Contact, Hero, Projects } from './sections'
import { Mindset } from './sections/Mindset'
import { SkillsCv } from './sections/Skills/SkillsCv'
import { SkillsTech } from './sections/Skills/SkillsTech'
import { NavigationWrapper } from './wrappers/NavigationWrapper'

export default function Home() {
  return (
    <NavigationWrapper>
      <PixelGlitchScreen
        className="h-full w-screen"
        interval={42}
        gridSize={80}
      />
      <TopNavigation />
      <Hero />
      <Mindset />
      <SkillsCv />
      <SkillsTech />
      <Projects />
      <Contact />
    </NavigationWrapper>
  )
}
