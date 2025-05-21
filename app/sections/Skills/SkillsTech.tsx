import { useState } from 'react'

import { GridItem } from '@/app/components/Grid'
import {
  Canvas,
  Firebase,
  GCloud,
  Nextjs,
  React,
  ReactNative,
  Tamagui,
} from '@/app/components/Icons'
import { Css } from '@/app/components/Icons/CSS'
import { Git } from '@/app/components/Icons/Git'
import { Github } from '@/app/components/Icons/Github'
import { Html } from '@/app/components/Icons/Html'
import { Javascript } from '@/app/components/Icons/Javascript'
import { MaterialUi } from '@/app/components/Icons/MaterialUi'
import { TailwindCss } from '@/app/components/Icons/TailwindCss'
import { Typescript } from '@/app/components/Icons/Typescript'

import { SkillItem } from './SkillItem'
import { SkillsWrapper } from './SkillsWrapper'

type TechCategory = 'frontend' | 'backend' | 'tool'

interface SkillWithIcon {
  name: string
  Icon: React.ComponentType<{ className?: string }>
  hasIcon: true
  categories: TechCategory[]
}

interface SkillWithoutIcon {
  name: string
  hasIcon: false
  categories: TechCategory[]
}

export type Skill = SkillWithIcon | SkillWithoutIcon

const skills: Skill[] = [
  {
    name: 'Javascript',
    Icon: Javascript,
    hasIcon: true,
    categories: ['frontend', 'backend'],
  },
  {
    name: 'Typescript',
    Icon: Typescript,
    hasIcon: true,
    categories: ['frontend', 'backend'],
  },
  { name: 'HTML', Icon: Html, hasIcon: true, categories: ['frontend'] },
  { name: 'CSS / SCSS', Icon: Css, hasIcon: true, categories: ['frontend'] },
  {
    name: 'React-Native',
    Icon: ReactNative,
    hasIcon: true,
    categories: ['frontend'],
  },
  { name: 'React', Icon: React, hasIcon: true, categories: ['frontend'] },
  {
    name: 'NextJS',
    Icon: Nextjs,
    hasIcon: true,
    categories: ['frontend', 'backend'],
  },
  {
    name: 'Tamagui UI',
    Icon: Tamagui,
    hasIcon: true,
    categories: ['frontend'],
  },
  { name: 'Firebase', Icon: Firebase, hasIcon: true, categories: ['backend'] },
  {
    name: 'Google Cloud',
    Icon: GCloud,
    hasIcon: true,
    categories: ['backend'],
  },
  {
    name: 'Git',
    Icon: Git,
    hasIcon: true,
    categories: ['frontend', 'backend', 'tool'],
  },
  {
    name: 'Github / GitLab',
    Icon: Github,
    hasIcon: true,
    categories: ['frontend', 'backend', 'tool'],
  },
  {
    name: 'Material UI',
    Icon: MaterialUi,
    hasIcon: true,
    categories: ['frontend'],
  },
  {
    name: 'Tailwind CSS',
    Icon: TailwindCss,
    hasIcon: true,
    categories: ['frontend'],
  },
  { name: 'Canvas', Icon: Canvas, hasIcon: true, categories: ['frontend'] },
]

type FilterCategory = 'all' | 'frontend' | 'backend'

export const SkillsTech = () => {
  const [filter, setFilter] = useState<FilterCategory>('all')

  const filteredSkills = skills.filter((skill) =>
    filter === 'all' ? true : skill.categories.includes(filter)
  )

  return (
    <SkillsWrapper
      skillsKey="skillsTech"
      className="grid-rows-[auto_auto_auto_1fr]"
    >
      <GridItem className="col-span-10 sm:col-span-3">
        <h2 className="text-4xl font-bold sm:text-6xl sm:font-normal">
          Smart entwickeln.
        </h2>
      </GridItem>
      <GridItem className="col-span-0 sm:col-span-1" />
      <GridItem className="col-span-10 sm:col-span-6">
        <p className="text-xl sm:text-2xl">
          Ich habe viele Technologien ausprobiert und meinen Fokus bewusst auf
          einen modernen Stack rund um React gelegt – für wiederverwendbare
          Lösungen im Web und auf mobilen Plattformen. Neues auszuprobieren und
          mich von Kolleg:innen inspirieren zu lassen, gehört für mich einfach
          dazu.
        </p>
      </GridItem>
      <GridItem className="col-span-10 mt-8 flex flex-col gap-4">
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`rounded-full px-6 py-2 transition-all ${
              filter === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Alle
          </button>
          <button
            onClick={() => setFilter('frontend')}
            className={`rounded-full px-6 py-2 transition-all ${
              filter === 'frontend'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter('backend')}
            className={`rounded-full px-6 py-2 transition-all ${
              filter === 'backend'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Backend
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredSkills.map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </GridItem>
    </SkillsWrapper>
  )
}

// Add this to your global CSS file (app/globals.css)
// .scrollbar-hide {
//   -ms-overflow-style: none;  /* IE and Edge */
//   scrollbar-width: none;  /* Firefox */
// }
// .scrollbar-hide::-webkit-scrollbar {
//   display: none;  /* Chrome, Safari and Opera */
// }
