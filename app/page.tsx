'use client'

import { useEffect, useRef, useState } from 'react'

type ScrollProgress = {
  sectionProgress: number
  subsectionProgress: number[]
  section5Progress: number
}

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

      // Calculate overall section progress (0 to totalSections - 1)
      const rawProgress = scrollY / sectionHeight
      const sectionProgress = Math.min(
        Math.max(rawProgress, 0),
        totalSections - 2
      ) // Cap at section 4

      // Calculate subsection progress for section 4
      const section4Start = 3 * sectionHeight // Section 4 starts at index 3
      const section4TotalRange = sectionHeight * 0.6 // Increased range to accommodate pauses
      const section4Progress = Math.max(
        0,
        Math.min(1, (scrollY - section4Start) / section4TotalRange)
      )

      // Constants for timing
      const PAUSE_DURATION = 0.1 // 10% of the total range for each pause
      const SUBSECTION_DURATION = 0.15 // 15% of the total range for each subsection animation
      const TOTAL_SUBSECTION_RANGE = (SUBSECTION_DURATION + PAUSE_DURATION) * 4 // Total range for all subsections

      // Calculate individual subsection progress with pauses
      const subsectionProgress = [0, 1, 2, 3].map((index) => {
        const subsectionStart = index * (SUBSECTION_DURATION + PAUSE_DURATION)
        const progress =
          (section4Progress - subsectionStart) / SUBSECTION_DURATION
        // Only show progress during the animation phase, not during pauses
        return Math.max(0, Math.min(1, progress))
      })

      // Calculate Section 5 progress with a pause after the last subsection
      const section5Start =
        section4Start + section4TotalRange * TOTAL_SUBSECTION_RANGE
      const section5Progress = Math.max(
        0,
        Math.min(1, (scrollY - section5Start) / (sectionHeight * 0.4))
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

  const getSectionStyle = (index: number) => {
    if (index === 0) return { transform: 'translateY(0)' }
    if (index === 4) {
      // Special handling for Section 5
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

  const getSubsectionStyle = (index: number) => {
    const progress = scrollProgress.subsectionProgress[index]
    // Calculate linear movement from right to left
    const startPosition = window.innerWidth
    const endPosition = 0
    const currentPosition =
      startPosition - progress * (startPosition - endPosition)

    return {
      transform: `translateX(${currentPosition}px)`,
      opacity: progress,
      zIndex: 40 + index, // Ensure proper stacking
    }
  }

  return (
    <div className="relative h-[500vh] w-full">
      <div ref={containerRef} className="fixed top-0 left-0 h-screen w-full">
        {/* Main sections */}
        <section
          className="absolute top-0 left-0 z-10 h-screen w-full rounded-3xl border-2 border-white bg-black p-8"
          style={getSectionStyle(0)}
        >
          <h2 className="text-4xl font-bold text-white">Section 1</h2>
        </section>

        <section
          className="absolute top-0 left-0 z-20 h-screen w-full rounded-3xl border-2 border-white bg-black p-8"
          style={getSectionStyle(1)}
        >
          <h2 className="text-4xl font-bold text-white">Section 2</h2>
        </section>

        <section
          className="absolute top-0 left-0 z-30 h-screen w-full rounded-3xl border-2 border-white bg-black p-8"
          style={getSectionStyle(2)}
        >
          <h2 className="text-4xl font-bold text-white">Section 3</h2>
        </section>

        <section
          className="absolute top-0 left-0 z-40 h-screen w-full rounded-3xl border-2 border-white bg-black p-8"
          style={getSectionStyle(3)}
        >
          <h2 className="mb-8 text-4xl font-bold text-white">
            Section 4 - Projects
          </h2>

          {/* Project subsections */}
          <div className="relative h-[calc(100%-6rem)]">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className="absolute top-0 left-0 h-full w-full rounded-xl border border-white bg-gray-800 p-6 transition-all duration-300"
                style={getSubsectionStyle(index)}
              >
                <h3 className="text-2xl font-bold text-white">
                  Project {index + 1}
                </h3>
              </div>
            ))}
          </div>
        </section>

        <section
          className="absolute top-0 left-0 z-50 h-screen w-full rounded-3xl border-2 border-white bg-black p-8"
          style={getSectionStyle(4)}
        >
          <h2 className="text-4xl font-bold text-white">Section 5</h2>
        </section>
      </div>
    </div>
  )
}
