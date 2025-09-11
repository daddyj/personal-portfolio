import 'atropos/css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './styles.css'

import { useEffect, useRef, useState } from 'react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { GridItem } from '@/app/components/Grid'
import {
  Canvas,
  Firebase,
  GCloud,
  NextJs,
  React,
  ReactNative,
  Tamagui,
} from '@/app/components/Icons'
import { Aws } from '@/app/components/Icons/Aws'
import { ChatGPT } from '@/app/components/Icons/ChatGPT'
import { Claude } from '@/app/components/Icons/Claude'
import { Css } from '@/app/components/Icons/CSS'
import { CursorAi } from '@/app/components/Icons/CursorAi'
import { Git } from '@/app/components/Icons/Git'
import { Github } from '@/app/components/Icons/Github'
import { Html } from '@/app/components/Icons/Html'
import { Javascript } from '@/app/components/Icons/Javascript'
import { MaterialUi } from '@/app/components/Icons/MaterialUi'
import { MySQL } from '@/app/components/Icons/MySQL'
import { PostgreSQL } from '@/app/components/Icons/PostgreSQL'
import { TailwindCss } from '@/app/components/Icons/TailwindCss'
import { Typescript } from '@/app/components/Icons/Typescript'
import { Vscode } from '@/app/components/Icons/Vscode'
import { PixelGlitchScreen } from '@/app/components/PixelGlitchScreen'
import { useNavigationContext } from '@/app/lib/useNavigationContext'
import { useViewportIntersect } from '@/app/lib/useViewportIntersect'

import { SkillItem } from './SkillItem'
import { SkillsWrapper } from './SkillsWrapper'

type TechCategory = 'frontend' | 'backend' | 'tool' | 'devops'

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
  { name: 'React', Icon: React, hasIcon: true, categories: ['frontend'] },
  {
    name: 'React-Native',
    Icon: ReactNative,
    hasIcon: true,
    categories: ['frontend'],
  },
  {
    name: 'NextJS',
    Icon: NextJs,
    hasIcon: true,
    categories: ['frontend', 'backend'],
  },
  {
    name: 'ChatGPT',
    Icon: ChatGPT,
    hasIcon: true,
    categories: ['tool'],
  },
  {
    name: 'Claude',
    Icon: Claude,
    hasIcon: true,
    categories: ['tool'],
  },
  {
    name: 'Tailwind CSS',
    Icon: TailwindCss,
    hasIcon: true,
    categories: ['frontend'],
  },
  {
    name: 'Tamagui UI',
    Icon: Tamagui,
    hasIcon: true,
    categories: ['frontend'],
  },
  {
    name: 'Material UI',
    Icon: MaterialUi,
    hasIcon: true,
    categories: ['frontend'],
  },
  { name: 'Firebase', Icon: Firebase, hasIcon: true, categories: ['backend'] },
  {
    name: 'Google Cloud',
    Icon: GCloud,
    hasIcon: true,
    categories: ['devops'],
  },
  {
    name: 'AWS',
    Icon: Aws,
    hasIcon: true,
    categories: ['devops'],
  },
  {
    name: 'PostgreSQL',
    Icon: PostgreSQL,
    hasIcon: true,
    categories: ['backend'],
  },
  {
    name: 'MySQL',
    Icon: MySQL,
    hasIcon: true,
    categories: ['backend'],
  },
  { name: 'HTML', Icon: Html, hasIcon: true, categories: ['frontend'] },
  { name: 'CSS / SCSS', Icon: Css, hasIcon: true, categories: ['frontend'] },
  { name: 'Canvas', Icon: Canvas, hasIcon: true, categories: ['frontend'] },
  {
    name: 'Git',
    Icon: Git,
    hasIcon: true,
    categories: ['tool'],
  },
  {
    name: 'Github / GitLab',
    Icon: Github,
    hasIcon: true,
    categories: ['tool'],
  },
  {
    name: 'Vscode',
    Icon: Vscode,
    hasIcon: true,
    categories: ['tool'],
  },
  {
    name: 'CursorAi',
    Icon: CursorAi,
    hasIcon: true,
    categories: ['tool'],
  },
]

type FilterCategory = 'all' | 'frontend' | 'backend' | 'devops' | 'tool'

export const SkillsTech = () => {
  const [filter, setFilter] = useState<FilterCategory>('all')

  const filteredSkills = skills.filter((skill) =>
    filter === 'all' ? true : skill.categories.includes(filter)
  )

  const gridWrapper = useRef<HTMLDivElement>(null)
  const { setCurrentSection, setFullyVisible } = useNavigationContext()
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)

  useEffect(() => {
    if (isVisible) setCurrentSection('skillsTech')
    if (isFullyVisible) setFullyVisible('skillsTech')
  }, [isFullyVisible, isVisible, setCurrentSection, setFullyVisible])

  return (
    <>
      <SkillsWrapper
        skillsKey="skillsTech"
        ref={gridWrapper}
        className="relative grid-rows-[auto_1fr]"
      >
        <PixelGlitchScreen interval={750} gridSize={25} />
        <PixelGlitchScreen interval={1250} gridSize={10} />
        <GridItem className="z-1 col-span-10 lg:col-span-3">
          <h2 className="text-4xl font-bold lg:text-6xl lg:font-normal">
            Smart entwickeln.
          </h2>
        </GridItem>
        <GridItem className="col-span-0 lg:col-span-1" />
        <GridItem className="z-1 col-span-10 lg:col-span-6">
          <p className="text-xl lg:text-2xl">
            Ich habe meinen Fokus auf einen modernen Stack rund um React gelegt
            – so biete ich wiederverwendbare Lösungen im Web und auf mobilen
            Plattformen. Durch meine Erfahrungen in DevOps Tätigkeiten und
            Zusammenarbeiten mit ehemaligen Kollegen kann ich das Produkt von
            der Entwicklung bis zur Auslieferung vollständig betreuen.
            Zusätzlich zu meiner Erfahrung nutze ich moderne Tools mit KI für
            eine effiziente Bearbeitung der Themen.
          </p>
        </GridItem>
        <GridItem className="animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-240 col-span-10 flex flex-col gap-4">
          <Swiper
            effect={'coverflow'}
            centeredSlides={true}
            navigation
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiperSkillsTech"
          >
            <SwiperSlide>
              <div className="flex h-full w-full flex-col items-center gap-2 rounded-2xl border-1 border-blue-500/20 p-8 text-4xl leading-20 text-white">
                <div className="p-8">
                  <h3 className="text-6xl font-bold text-blue-500">
                    Leistungen
                  </h3>
                </div>
                <p>Frontend Entwicklung</p>
                <p>Fullstack Entwicklung</p>
                <p>DevOps</p>
                <p>Teamleitung</p>
                <p>Agile Methoden</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-full w-full flex-col gap-2 rounded-2xl border-1 border-blue-500/20 p-8">
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setFilter('all')}
                    className={`rounded-full px-6 py-2 transition-all ${
                      filter === 'all'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:cursor-pointer hover:bg-gray-200'
                    }`}
                  >
                    Alle
                  </button>
                  <button
                    onClick={() => setFilter('frontend')}
                    className={`rounded-full px-6 py-2 transition-all ${
                      filter === 'frontend'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:cursor-pointer hover:bg-gray-200'
                    }`}
                  >
                    Frontend
                  </button>
                  <button
                    onClick={() => setFilter('backend')}
                    className={`rounded-full px-6 py-2 transition-all ${
                      filter === 'backend'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:cursor-pointer hover:bg-gray-200'
                    }`}
                  >
                    Backend
                  </button>
                  <button
                    onClick={() => setFilter('devops')}
                    className={`rounded-full px-6 py-2 transition-all ${
                      filter === 'devops'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:cursor-pointer hover:bg-gray-200'
                    }`}
                  >
                    DevOps
                  </button>
                  <button
                    onClick={() => setFilter('tool')}
                    className={`rounded-full px-6 py-2 transition-all ${
                      filter === 'tool'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:cursor-pointer hover:bg-gray-200'
                    }`}
                  >
                    Tools
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
                  {filteredSkills.map((skill, index) => (
                    <SkillItem key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </GridItem>
      </SkillsWrapper>
    </>
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
