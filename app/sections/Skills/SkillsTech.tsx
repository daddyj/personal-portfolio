import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'

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
import { MaterialUi } from '@/app/components/Icons/MaterialUi'
import { TailwindCss } from '@/app/components/Icons/TailwindCss'

import { SkillsWrapper } from './SkillsWrapper'

interface SkillWithIcon {
  name: string
  Icon: React.ComponentType<{ className?: string }>
  hasIcon: true
}

interface SkillWithoutIcon {
  name: string
  hasIcon: false
}

type Skill = SkillWithIcon | SkillWithoutIcon

const skills: Skill[] = [
  { name: 'Javascript', hasIcon: false },
  { name: 'Typescript', hasIcon: false },
  { name: 'HTML', hasIcon: false },
  { name: 'CSS / SCSS', hasIcon: false },
  { name: 'SASS / CSS-in-JS', hasIcon: false },
  { name: 'React-Native', Icon: ReactNative, hasIcon: true },
  { name: 'React', Icon: React, hasIcon: true },
  { name: 'NextJS', Icon: Nextjs, hasIcon: true },
  { name: 'Tamagui UI', Icon: Tamagui, hasIcon: true },
  { name: 'Firebase', Icon: Firebase, hasIcon: true },
  { name: 'Google Cloud', Icon: GCloud, hasIcon: true },
  { name: 'Git', hasIcon: false },
  { name: 'Github / GitLab', hasIcon: false },
  { name: 'Material UI', Icon: MaterialUi, hasIcon: true },
  { name: 'Tailwind CSS', Icon: TailwindCss, hasIcon: true },
  { name: 'Canvas', Icon: Canvas, hasIcon: true },
]

export const SkillsTech = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const isScrollingRef = useRef(false)

  const startScrolling = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return

    const scrollAmount = 200 // pixels to scroll per interval
    const scrollSpeed = 16 // approximately 60fps for smooth animation
    isScrollingRef.current = true

    const animate = () => {
      if (!scrollContainerRef.current || !isScrollingRef.current) return

      const currentScroll = scrollContainerRef.current.scrollLeft
      const newScroll =
        direction === 'left'
          ? currentScroll - scrollAmount / (1000 / scrollSpeed)
          : currentScroll + scrollAmount / (1000 / scrollSpeed)

      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'auto', // Using 'auto' for immediate response
      })

      if (isScrollingRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)
  }

  const stopScrolling = () => {
    isScrollingRef.current = false
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
  }

  return (
    <SkillsWrapper skillsKey="skillsTech" className="grid-rows-[auto_auto_1fr]">
      <GridItem className="col-span-10 sm:col-span-4">
        <h2 className="text-4xl font-bold sm:text-6xl sm:font-normal">
          Technologien
        </h2>
      </GridItem>
      <GridItem className="col-span-10 sm:col-span-6">
        <p className="text-xl sm:text-2xl">
          Ich habe über die Jahre eine Reihe von Technologien für die Web- und
          Appentwicklung genutzt und mich über die Zeit auf einen Techstack
          fokussiert um optimale Ergebnisse erzielen zu können. Dabei hat sich
          React als meine Kern-Bibliothek im Frontend herausgestellt um maximale
          Wiederverwendbarkeit auf unterschiedlichen Plattformen zu
          gewährleisten: Das Web, nativ auf iOS und nativ auf Android. Ich liebe
          es immer wieder neue Sachen auszuprobieren und mich immer wieder von
          Kolleg:innen inspirieren zu lassen!
        </p>
      </GridItem>

      <GridItem className="col-span-10 mt-8">
        <div className="relative px-4">
          <button
            onMouseEnter={() => startScrolling('left')}
            onMouseLeave={stopScrolling}
            className="absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-all hover:bg-gray-50"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
          </button>

          <div
            ref={scrollContainerRef}
            className="scrollbar-hide flex gap-4 overflow-x-auto overflow-y-visible p-4"
          >
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group relative flex min-w-32 cursor-pointer items-center justify-center rounded-lg bg-white px-6 py-8 shadow-sm transition-all duration-300 hover:scale-[1.08] hover:shadow-md"
                title={skill.name}
              >
                {skill.hasIcon ? (
                  <div className="h-full w-full text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                    <skill.Icon className="h-full w-full" />
                  </div>
                ) : (
                  <span className="text-center text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                    {skill.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          <button
            onMouseEnter={() => startScrolling('right')}
            onMouseLeave={stopScrolling}
            className="absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-all hover:bg-gray-50"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-600" />
          </button>
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
