'use client'

import { useEffect, useRef, useState } from 'react'

import { About, Hero, Skills } from './sections'
import { Mindset } from './sections/Mindset'

// Types
type ScrollProgress = {
  sectionProgress: number
  subsectionProgress: number[]
  contactSectionProgress: number
  sectionOpacities: number[]
  viewportProgress: number[]
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
  PROJECTS_SECTION_HEIGHT_MULTIPLIER: 0.6,
  CONTACT_SECTION_HEIGHT_MULTIPLIER: 0.4,
  TOTAL_SECTIONS: 6,
  VIEWPORT_THRESHOLD: 0.8,
  FADE_OUT_THRESHOLD: 0.5,
} as const

// Reusable Components
const Section: React.FC<SectionProps> = ({
  index,
  title,
  zIndex,
  scrollProgress,
  children,
}) => {
  const [sectionStyle, setSectionStyle] = useState({
    transform: 'translateY(0)',
    opacity: 1,
  })

  useEffect(() => {
    const getSectionStyle = (index: number) => {
      if (index === 0) {
        return {
          transform: 'translateY(0)',
          opacity: scrollProgress.sectionOpacities[index],
        }
      }

      if (index === ANIMATION_CONSTANTS.TOTAL_SECTIONS - 1) {
        const translateY =
          window.innerHeight -
          scrollProgress.contactSectionProgress * window.innerHeight
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

    setSectionStyle(getSectionStyle(index))
  }, [index, scrollProgress])

  return (
    <section
      className="will-change-opacity absolute top-0 left-0 h-screen w-full bg-black will-change-transform"
      style={{ ...sectionStyle, zIndex }}
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
  const [subsectionStyle, setSubsectionStyle] = useState({
    transform: 'translateX(100%)',
    opacity: 0,
  })

  useEffect(() => {
    const getSubsectionStyle = () => {
      const startPosition = window.innerWidth
      const endPosition = 0
      const currentPosition =
        startPosition - progress * (startPosition - endPosition)

      return {
        transform: `translateX(${currentPosition}px)`,
        opacity: progress,
      }
    }

    setSubsectionStyle(getSubsectionStyle())
  }, [progress])

  return (
    <div
      className="absolute top-0 left-0 h-full w-full rounded-xl border border-white bg-gray-800 p-6 transition-all duration-300"
      style={{ ...subsectionStyle, zIndex }}
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
    contactSectionProgress: 0,
    sectionOpacities: Array(ANIMATION_CONSTANTS.TOTAL_SECTIONS).fill(1),
    viewportProgress: Array(ANIMATION_CONSTANTS.TOTAL_SECTIONS).fill(0),
  })
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const calculateSectionViewportProgress = (
      scrollY: number,
      sectionIndex: number,
      sectionHeight: number
    ): number => {
      const sectionStart = sectionIndex * sectionHeight
      const sectionEnd = (sectionIndex + 1) * sectionHeight
      const viewportHeight = window.innerHeight

      // Calculate how much of the section is in the viewport
      const sectionTop = sectionStart - scrollY
      const sectionBottom = sectionEnd - scrollY

      // If section is completely above viewport
      if (sectionBottom <= 0) return 0
      // If section is completely below viewport
      if (sectionTop >= viewportHeight) return 0

      // Calculate the visible portion of the section
      const visibleTop = Math.max(0, sectionTop)
      const visibleBottom = Math.min(viewportHeight, sectionBottom)
      const visibleHeight = visibleBottom - visibleTop

      return visibleHeight / sectionHeight
    }

    const calculateSectionOpacity = (
      viewportProgress: number,
      nextSectionProgress: number
    ): number => {
      // If next section is beyond fade out threshold, current section should be fully transparent
      if (nextSectionProgress >= ANIMATION_CONSTANTS.FADE_OUT_THRESHOLD) {
        return 0
      }

      // Calculate normalized progress for fade out (0 to 1)
      const normalizedProgress =
        nextSectionProgress / ANIMATION_CONSTANTS.FADE_OUT_THRESHOLD

      // Quadratic ease-out: 1 - t²
      // This gives us a smooth acceleration in the fade out
      return 1 - normalizedProgress * normalizedProgress
    }

    const handleScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        if (!containerRef.current) return

        const scrollY = window.scrollY
        const sectionHeight = window.innerHeight

        // Calculate viewport progress for each section
        const viewportProgress = Array(ANIMATION_CONSTANTS.TOTAL_SECTIONS)
          .fill(0)
          .map((_, index) =>
            calculateSectionViewportProgress(scrollY, index, sectionHeight)
          )

        // Calculate overall section progress for transitions
        const rawProgress = scrollY / sectionHeight
        const sectionProgress = Math.min(
          Math.max(rawProgress, 0),
          ANIMATION_CONSTANTS.TOTAL_SECTIONS - 2
        )

        // Calculate section opacities with ease-out curve
        const sectionOpacities = Array(ANIMATION_CONSTANTS.TOTAL_SECTIONS).fill(
          1
        )

        // Handle all sections except the last one (contact section)
        for (let i = 0; i < ANIMATION_CONSTANTS.TOTAL_SECTIONS - 1; i++) {
          const nextSectionProgress = Math.max(
            0,
            Math.min(1, sectionProgress - i)
          )
          sectionOpacities[i] = calculateSectionOpacity(
            viewportProgress[i],
            nextSectionProgress
          )
        }

        // Last section (contact) stays fully opaque
        sectionOpacities[ANIMATION_CONSTANTS.TOTAL_SECTIONS - 1] = 1

        // Projects section specific calculations
        const projectsSectionIndex = ANIMATION_CONSTANTS.TOTAL_SECTIONS - 2
        const isProjectsSectionInView =
          viewportProgress[projectsSectionIndex] >=
          ANIMATION_CONSTANTS.VIEWPORT_THRESHOLD

        // Calculate subsection progress only if projects section is properly in view
        const subsectionProgress = [0, 1, 2, 3].map((index) => {
          if (!isProjectsSectionInView) return 0

          const subsectionStart =
            index *
            (ANIMATION_CONSTANTS.SUBSECTION_DURATION +
              ANIMATION_CONSTANTS.PAUSE_DURATION)

          // Calculate progress relative to when projects section entered viewport
          const projectsSectionEntryPoint =
            projectsSectionIndex * sectionHeight -
            (1 - ANIMATION_CONSTANTS.VIEWPORT_THRESHOLD) * sectionHeight

          const adjustedScrollY = scrollY - projectsSectionEntryPoint
          const progress =
            (adjustedScrollY / sectionHeight - subsectionStart) /
            ANIMATION_CONSTANTS.SUBSECTION_DURATION

          return Math.max(0, Math.min(1, progress))
        })

        // Contact section calculations
        const contactSectionStart =
          projectsSectionIndex * sectionHeight +
          sectionHeight * ANIMATION_CONSTANTS.PROJECTS_SECTION_HEIGHT_MULTIPLIER
        const contactSectionProgress = Math.max(
          0,
          Math.min(
            1,
            (scrollY - contactSectionStart) /
              (sectionHeight *
                ANIMATION_CONSTANTS.CONTACT_SECTION_HEIGHT_MULTIPLIER)
          )
        )

        setScrollProgress({
          sectionProgress,
          subsectionProgress,
          contactSectionProgress,
          sectionOpacities,
          viewportProgress,
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
    <div className="relative h-[600vh] w-full">
      <div ref={containerRef} className="fixed top-0 left-0 h-screen w-full">
        <Section index={0} zIndex={10} scrollProgress={scrollProgress}>
          <Hero />
        </Section>

        <Section index={1} zIndex={20} scrollProgress={scrollProgress}>
          <Mindset />
        </Section>

        <Section index={2} zIndex={20} scrollProgress={scrollProgress}>
          <About />
        </Section>

        <Section index={3} zIndex={30} scrollProgress={scrollProgress}>
          <Skills />
        </Section>

        <Section
          index={4}
          title="Projects"
          zIndex={40}
          scrollProgress={scrollProgress}
        >
          <ProjectsContainer
            subsectionProgress={scrollProgress.subsectionProgress}
          />
        </Section>

        <Section
          index={5}
          title="Contact"
          zIndex={50}
          scrollProgress={scrollProgress}
        >
          {/* Contact section content will go here */}
        </Section>
      </div>
    </div>
  )
}
