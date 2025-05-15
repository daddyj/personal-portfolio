'use client'

import { useEffect, useRef, useState } from 'react'

import { ANIMATION_CONSTANTS } from '@/app/lib/constants/animation'
import { getSectionIndex, SECTIONS } from '@/app/lib/constants/sections'
import { ScrollProgress } from '@/app/lib/types'

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState<ScrollProgress>({
    sectionProgress: 0,
    subsectionProgress: [0, 0, 0, 0],
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
        const isProjectsSectionInView =
          viewportProgress[projectsSectionIndex] >=
          ANIMATION_CONSTANTS.VIEWPORT_THRESHOLD

        const subsectionProgress = [0, 1, 2, 3].map((index) => {
          if (!isProjectsSectionInView) return 0

          const subsectionStart =
            index *
            (ANIMATION_CONSTANTS.SUBSECTION_DURATION +
              ANIMATION_CONSTANTS.PAUSE_DURATION)

          const projectsSectionEntryPoint =
            projectsSectionIndex * sectionHeight -
            (1 - ANIMATION_CONSTANTS.VIEWPORT_THRESHOLD) * sectionHeight

          const adjustedScrollY = scrollY - projectsSectionEntryPoint
          const progress =
            (adjustedScrollY / sectionHeight - subsectionStart) /
            ANIMATION_CONSTANTS.SUBSECTION_DURATION

          return Math.max(0, Math.min(1, progress))
        })

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
