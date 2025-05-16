'use client'

import { TopNavigation } from '@/app/components/TopNavigation'

import { PixelGlitchScreen } from './components/PixelGlitchScreen'
import { Contact, Hero, Projects } from './sections'
import { Mindset } from './sections/Mindset'
import { SkillsCv } from './sections/Skills/SkillsCv'
import { SkillsSocial } from './sections/Skills/SkillsSocial'
import { SkillsTech } from './sections/Skills/SkillsTech'
import { NavigationWrapper } from './wrappers/NavigationWrapper'

export default function Home() {
  return (
    <NavigationWrapper>
      <PixelGlitchScreen
        className="h-screen w-screen"
        interval={730}
        gridSize={12}
      />
      <TopNavigation />
      <Hero />
      <Mindset />
      <SkillsTech />
      <SkillsSocial />
      <SkillsCv />
      <Projects />
      <Contact />
    </NavigationWrapper>
  )
}
