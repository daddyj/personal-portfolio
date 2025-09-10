'use client'

import { TopNavigation } from '@/app/components/TopNavigation'

import { Contact, Hero, Projects } from './sections'
import { Mindset } from './sections/Mindset'
import { SkillsCv } from './sections/Skills/SkillsCv'
import { SkillsTech } from './sections/Skills/SkillsTech'
import { NavigationWrapper } from './wrappers/NavigationWrapper'

export default function Home() {
  return (
    <NavigationWrapper>
      <TopNavigation />
      <Hero />
      <Mindset />
      <SkillsTech />
      <Projects />
      <SkillsCv />
      {/* <Testimonials /> */}
      <Contact />
    </NavigationWrapper>
  )
}
