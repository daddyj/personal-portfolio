'use client'

import { ProjectsContainer } from '@/app/components/ProjectsContainer'
import type { Section } from '@/app/lib/types'
import { About, Hero, Skills } from '@/app/sections'
import { Mindset } from '@/app/sections/Mindset'

export const SECTIONS: Section[] = [
  {
    id: 'hero',
    component: <Hero />,
    zIndex: 10,
  },
  {
    id: 'mindset',
    component: <Mindset />,
    zIndex: 20,
  },
  {
    id: 'about',
    component: <About />,
    zIndex: 20,
  },
  {
    id: 'skills',
    component: <Skills />,
    zIndex: 30,
  },
  {
    id: 'projects',
    component: <ProjectsContainer subsectionProgress={[]} />,
    zIndex: 40,
    title: 'Projects',
  },
  {
    id: 'contact',
    component: null,
    zIndex: 50,
    title: 'Contact',
  },
]

export const getSectionIndex = (sectionId: string): number =>
  SECTIONS.findIndex((section) => section.id === sectionId)
