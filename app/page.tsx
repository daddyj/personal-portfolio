'use client'

import { TopNavigation } from '@/app/components/TopNavigation'

import { About, Contact, Hero, Projects, Skills } from './sections'
import { NavigationWrapper } from './wrappers/NavigationWrapper'

export default function Home() {
  return (
    <NavigationWrapper>
      <TopNavigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </NavigationWrapper>
  )
}
