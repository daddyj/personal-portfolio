'use client'

import { useEffect, useRef, useState } from 'react'

import { About, Hero, Skills } from './sections'

// Types
type ScrollProgress = {
  sectionProgress: number
  subsectionProgress: number[]
  section5Progress: number
  sectionOpacities: number[]
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
    if (index === 0) {
      return {
        transform: 'translateY(0)',
        opacity: scrollProgress.sectionOpacities[index],
      }
    }

    if (index === 4) {
      const translateY =
        window.innerHeight -
        scrollProgress.section5Progress * window.innerHeight
      return {
        transform: `translateY(${translateY}px)`,
        opacity: scrollProgress.sectionOpacities[index],
      }
    }

    const currentSectionProgress = Math.max(
      0,
      Math.min(1, scrollProgress.sectionProgress - (index - 1))
    )
    const translateY =
      window.innerHeight - currentSectionProgress * window.innerHeight

    return {
      transform: `translateY(${translateY}px)`,
      opacity: scrollProgress.sectionOpacities[index],
    }
  }

  return (
    <section
      className="will-change-opacity absolute top-0 left-0 h-screen w-full bg-black will-change-transform"
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
    sectionOpacities: [1, 1, 1, 1, 1],
  })
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const calculateOpacity = (nextSectionProgress: number): number => {
      // When next section is 50% in, current section should be fully transparent
      const fadeOutThreshold = 0.5
      if (nextSectionProgress >= fadeOutThreshold) return 0

      // Ease-out fade from 1 to 0 in the first 50% of next section's progress
      const normalizedProgress = nextSectionProgress / fadeOutThreshold
      // Using quadratic ease-out: 1 - t²
      return 1 - normalizedProgress * normalizedProgress
    }

    const calculateOpacities = (
      rawProgress: number,
      section4Progress: number,
      section5Progress: number
    ) => {
      const opacities = [1, 1, 1, 1, 1]

      // Calculate opacity for sections 1-3 based on the next section's progress
      for (let i = 0; i < 3; i++) {
        const nextSectionProgress = Math.max(0, Math.min(1, rawProgress - i))
        opacities[i] = calculateOpacity(nextSectionProgress)
      }

      // Special handling for Section 4 (index 3)
      // Only start fading out when Section 5 starts sliding in
      const allSubsectionsComplete = section4Progress >= 1
      if (allSubsectionsComplete) {
        opacities[3] = calculateOpacity(section5Progress)
      } else {
        opacities[3] = 1 // Keep fully visible while subsections are animating
      }

      // Last section doesn't fade out
      opacities[4] = 1

      return opacities
    }

    const handleScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      animationFrameRef.current = requestAnimationFrame(() => {
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

        // Calculate dynamic opacities with special handling for Section 4
        const sectionOpacities = calculateOpacities(
          rawProgress,
          section4Progress,
          section5Progress
        )

        setScrollProgress({
          sectionProgress,
          subsectionProgress,
          section5Progress,
          sectionOpacities,
        })
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div className="relative h-[500vh] w-full">
      <div ref={containerRef} className="fixed top-0 left-0 h-screen w-full">
        <Section index={0} zIndex={10} scrollProgress={scrollProgress}>
          <Hero />
        </Section>

        <Section index={1} zIndex={20} scrollProgress={scrollProgress}>
          <About />
        </Section>

        <Section index={2} zIndex={30} scrollProgress={scrollProgress}>
          <Skills />
        </Section>

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
