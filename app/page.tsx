'use client'

import { useEffect, useRef, useState } from 'react'

import { Hero } from './sections'

// Types
type ScrollProgress = {
  sectionProgress: number
  subsectionProgress: number[]
  section5Progress: number
}

type SectionProps = {
  index: number
  title?: string
  zIndex: number
  scrollProgress: ScrollProgress
  children?: React.ReactNode
}

type ProjectSubsectionProps = {
  title: string
  progress: number
  zIndex: number
}

// Animation Constants
const ANIMATION_CONSTANTS = {
  PAUSE_DURATION: 0.1,
  SUBSECTION_DURATION: 0.15,
  SECTION_HEIGHT_MULTIPLIER: 0.6,
  SECTION5_HEIGHT_MULTIPLIER: 0.4,
} as const

// Reusable Components
const Section: React.FC<SectionProps> = ({
  index,
  title,
  zIndex,
  scrollProgress,
  children,
}) => {
  const getSectionStyle = (index: number) => {
    if (index === 0) return { transform: 'translateY(0)' }
    if (index === 4) {
      const translateY =
        window.innerHeight -
        scrollProgress.section5Progress * window.innerHeight
      return { transform: `translateY(${translateY}px)` }
    }

    const progress = Math.max(
      0,
      Math.min(1, scrollProgress.sectionProgress - (index - 1))
    )
    const translateY = window.innerHeight - progress * window.innerHeight
    return { transform: `translateY(${translateY}px)` }
  }

  return (
    <section
      className="absolute top-0 left-0 h-screen w-full bg-black"
      style={{ ...getSectionStyle(index), zIndex }}
    >
      {title && <h2 className="mb-8 text-4xl font-bold text-white">{title}</h2>}
      {children}
    </section>
  )
}

const ProjectSubsection: React.FC<ProjectSubsectionProps> = ({
  title,
  progress,
  zIndex,
}) => {
  const getSubsectionStyle = () => {
    const startPosition = window.innerWidth
    const endPosition = 0
    const currentPosition =
      startPosition - progress * (startPosition - endPosition)

    return {
      transform: `translateX(${currentPosition}px)`,
      opacity: progress,
      zIndex,
    }
  }

  return (
    <div
      className="absolute top-0 left-0 h-full w-full rounded-xl border border-white bg-gray-800 p-6 transition-all duration-300"
      style={getSubsectionStyle()}
    >
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
  )
}

const ProjectsContainer: React.FC<{ subsectionProgress: number[] }> = ({
  subsectionProgress,
}) => {
  return (
    <div className="relative h-[calc(100%-6rem)]">
      {[0, 1, 2, 3].map((index) => (
        <ProjectSubsection
          key={index}
          title={`Project ${index + 1}`}
          progress={subsectionProgress[index]}
          zIndex={40 + index}
        />
      ))}
    </div>
  )
}

// Main Page Component
export default function Home() {
  const [scrollProgress, setScrollProgress] = useState<ScrollProgress>({
    sectionProgress: 0,
    subsectionProgress: [0, 0, 0, 0],
    section5Progress: 0,
  })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const scrollY = window.scrollY
      const sectionHeight = window.innerHeight
      const totalSections = 5

      // Calculate overall section progress
      const rawProgress = scrollY / sectionHeight
      const sectionProgress = Math.min(
        Math.max(rawProgress, 0),
        totalSections - 2
      )

      // Calculate subsection progress for section 4
      const section4Start = 3 * sectionHeight
      const section4TotalRange =
        sectionHeight * ANIMATION_CONSTANTS.SECTION_HEIGHT_MULTIPLIER
      const section4Progress = Math.max(
        0,
        Math.min(1, (scrollY - section4Start) / section4TotalRange)
      )

      // Calculate subsection progress with pauses
      const TOTAL_SUBSECTION_RANGE =
        (ANIMATION_CONSTANTS.SUBSECTION_DURATION +
          ANIMATION_CONSTANTS.PAUSE_DURATION) *
        4

      const subsectionProgress = [0, 1, 2, 3].map((index) => {
        const subsectionStart =
          index *
          (ANIMATION_CONSTANTS.SUBSECTION_DURATION +
            ANIMATION_CONSTANTS.PAUSE_DURATION)
        const progress =
          (section4Progress - subsectionStart) /
          ANIMATION_CONSTANTS.SUBSECTION_DURATION
        return Math.max(0, Math.min(1, progress))
      })

      // Calculate Section 5 progress
      const section5Start =
        section4Start + section4TotalRange * TOTAL_SUBSECTION_RANGE
      const section5Progress = Math.max(
        0,
        Math.min(
          1,
          (scrollY - section5Start) /
            (sectionHeight * ANIMATION_CONSTANTS.SECTION5_HEIGHT_MULTIPLIER)
        )
      )

      setScrollProgress({
        sectionProgress,
        subsectionProgress,
        section5Progress,
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative h-[500vh] w-full">
      <div ref={containerRef} className="fixed top-0 left-0 h-screen w-full">
        <Section index={0} zIndex={10} scrollProgress={scrollProgress}>
          <Hero />
        </Section>

        <Section
          index={1}
          title="Section 2"
          zIndex={20}
          scrollProgress={scrollProgress}
        />

        <Section
          index={2}
          title="Section 3"
          zIndex={30}
          scrollProgress={scrollProgress}
        />

        <Section
          index={3}
          title="Section 4 - Projects"
          zIndex={40}
          scrollProgress={scrollProgress}
        >
          <ProjectsContainer
            subsectionProgress={scrollProgress.subsectionProgress}
          />
        </Section>

        <Section
          index={4}
          title="Section 5"
          zIndex={50}
          scrollProgress={scrollProgress}
        />
      </div>
    </div>
  )
}
