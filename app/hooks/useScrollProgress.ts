'use client'

import { useEffect, useRef, useState } from 'react'

import { ANIMATION_CONSTANTS } from '@/app/lib/constants/animation'
import { SECTIONS } from '@/app/lib/constants/sections'
import { ScrollProgress } from '@/app/lib/types'

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState<ScrollProgress>({
    sectionProgress: 0,
    contactSectionProgress: 0,
    sectionOpacities: Array(SECTIONS.length).fill(1),
    viewportProgress: Array(SECTIONS.length).fill(0),
  })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const calculateSectionViewportProgress = (
      scrollY: number,
      sectionIndex: number,
      sectionElement: HTMLElement
    ): number => {
      const sectionRect = sectionElement.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const sectionHeight = sectionRect.height

      // Calculate the section's position relative to the viewport
      const sectionTop = sectionRect.top
      const sectionBottom = sectionRect.bottom

      // If section is completely out of view
      if (sectionBottom <= 0 || sectionTop >= viewportHeight) return 0

      // Calculate visible portion
      const visibleTop = Math.max(0, sectionTop)
      const visibleBottom = Math.min(viewportHeight, sectionBottom)
      const visibleHeight = visibleBottom - visibleTop

      return visibleHeight / sectionHeight
    }

    let ticking = false
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      if (!ticking) {
        const currentScrollY = window.scrollY
        // Only update if we've scrolled more than 1px
        if (Math.abs(currentScrollY - lastScrollY) > 1) {
          lastScrollY = currentScrollY
          window.requestAnimationFrame(() => {
            if (!containerRef.current) return

            const scrollY = currentScrollY
            const sections = Array.from(
              containerRef.current.children
            ) as HTMLElement[]
            const totalHeight = window.document.body.offsetHeight
            const viewportHeight = window.innerHeight

            // Calculate viewport progress for each section
            const viewportProgress = sections.map((section, index) =>
              calculateSectionViewportProgress(scrollY, index, section)
            )

            // Calculate overall progress based on scroll position relative to total scrollable height
            const maxScroll = totalHeight - viewportHeight
            const rawProgress = scrollY / maxScroll
            const sectionProgress = Math.min(
              Math.max(rawProgress * (SECTIONS.length - 1), 0),
              SECTIONS.length - 2
            )

            const sectionOpacities = Array(SECTIONS.length).fill(0)

            // Calculate opacity for each section based on its position in the scroll sequence
            for (let i = 0; i < SECTIONS.length; i++) {
              const sectionIndex = i
              const progress = sectionProgress - sectionIndex + 1

              if (progress <= 0) {
                // Section is not yet in view
                sectionOpacities[i] = 0
              } else if (progress >= 1) {
                // Section is fully in view
                sectionOpacities[i] = 1
              } else {
                // Section is transitioning
                sectionOpacities[i] = progress
              }
            }

            // Ensure the last section is always visible when scrolled to
            if (scrollY >= maxScroll * 0.9) {
              sectionOpacities[SECTIONS.length - 1] = 1
            }

            const contactSection = sections[sections.length - 1]
            const contactSectionRect = contactSection.getBoundingClientRect()
            const contactSectionStart = contactSectionRect.top + window.scrollY
            const contactSectionProgress = Math.max(
              0,
              Math.min(
                1,
                (scrollY - contactSectionStart) /
                  (contactSectionRect.height *
                    ANIMATION_CONSTANTS.CONTACT_SECTION_HEIGHT_MULTIPLIER)
              )
            )

            setScrollProgress({
              sectionProgress,
              contactSectionProgress,
              sectionOpacities,
              viewportProgress,
            })
            ticking = false
          })
          ticking = true
        }
      }
    }

    // Use passive scroll listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollProgress, containerRef }
}
