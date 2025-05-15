'use client'

import { useEffect, useRef, useState } from 'react'

import { ANIMATION_CONSTANTS } from '@/app/lib/constants/animation'
import { PROJECTS_COUNT } from '@/app/lib/constants/projects'
import { getSectionIndex, SECTIONS } from '@/app/lib/constants/sections'
import { ScrollProgress } from '@/app/lib/types'

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState<ScrollProgress>({
    sectionProgress: 0,
    subsectionProgress: Array(PROJECTS_COUNT).fill(0),
    contactSectionProgress: 0,
    sectionOpacities: Array(SECTIONS.length).fill(1),
    viewportProgress: Array(SECTIONS.length).fill(0),
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

      const sectionTop = sectionStart - scrollY
      const sectionBottom = sectionEnd - scrollY

      if (sectionBottom <= 0) return 0
      if (sectionTop >= viewportHeight) return 0

      const visibleTop = Math.max(0, sectionTop)
      const visibleBottom = Math.min(viewportHeight, sectionBottom)
      const visibleHeight = visibleBottom - visibleTop

      return visibleHeight / sectionHeight
    }

    const calculateSectionOpacity = (
      viewportProgress: number,
      nextSectionProgress: number
    ): number => {
      if (nextSectionProgress >= ANIMATION_CONSTANTS.FADE_OUT_THRESHOLD) {
        return 0
      }

      const normalizedProgress =
        nextSectionProgress / ANIMATION_CONSTANTS.FADE_OUT_THRESHOLD

      return 1 - normalizedProgress * normalizedProgress
    }

    const calculateSubsectionProgress = (
      scrollY: number,
      sectionHeight: number,
      projectsSectionIndex: number,
      viewportProgress: number[]
    ): number[] => {
      const isProjectsSectionInView =
        viewportProgress[projectsSectionIndex] >=
        ANIMATION_CONSTANTS.VIEWPORT_THRESHOLD

      if (!isProjectsSectionInView) return Array(PROJECTS_COUNT).fill(0)

      const projectsSectionEntryPoint =
        projectsSectionIndex * sectionHeight -
        (1 - ANIMATION_CONSTANTS.VIEWPORT_THRESHOLD) * sectionHeight

      const adjustedScrollY = scrollY - projectsSectionEntryPoint
      const totalDuration =
        ANIMATION_CONSTANTS.SUBSECTION_DURATION +
        ANIMATION_CONSTANTS.PAUSE_DURATION

      return Array.from({ length: PROJECTS_COUNT }, (_, index) => {
        const subsectionStart = index * totalDuration

        // Calculate progress relative to the current subsection's time window
        const progress =
          (adjustedScrollY / sectionHeight - subsectionStart) /
          ANIMATION_CONSTANTS.SUBSECTION_DURATION

        // Add easing to the progress calculation
        const easedProgress = Math.max(0, Math.min(1, progress))
        const easedValue =
          easedProgress < 0.5
            ? 2 * easedProgress * easedProgress
            : 1 - Math.pow(-2 * easedProgress + 2, 2) / 2

        return easedValue
      })
    }

    const handleScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        if (!containerRef.current) return

        const scrollY = window.scrollY
        const sectionHeight = window.innerHeight

        const viewportProgress = SECTIONS.map((_, index) =>
          calculateSectionViewportProgress(scrollY, index, sectionHeight)
        )

        const rawProgress = scrollY / sectionHeight
        const sectionProgress = Math.min(
          Math.max(rawProgress, 0),
          SECTIONS.length - 2
        )

        const sectionOpacities = Array(SECTIONS.length).fill(1)

        for (let i = 0; i < SECTIONS.length - 1; i++) {
          const nextSectionProgress = Math.max(
            0,
            Math.min(1, sectionProgress - i)
          )
          sectionOpacities[i] = calculateSectionOpacity(
            viewportProgress[i],
            nextSectionProgress
          )
        }

        sectionOpacities[SECTIONS.length - 1] = 1

        const projectsSectionIndex = getSectionIndex('projects')
        const subsectionProgress = calculateSubsectionProgress(
          scrollY,
          sectionHeight,
          projectsSectionIndex,
          viewportProgress
        )

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

  return { scrollProgress, containerRef }
}
