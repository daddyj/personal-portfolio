'use client'

import { useEffect, useRef } from 'react'

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const handleScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        if (!sectionsRef.current) return

        const scrollY = window.scrollY
        const sections = sectionsRef.current.children
        const sectionHeight = window.innerHeight

        // Update each section's position based on scroll
        Array.from(sections).forEach((section, index) => {
          const sectionElement = section as HTMLElement

          if (index === 0) {
            // First section stays fixed at top
            sectionElement.style.transform = 'translateY(0)'
          } else {
            // Calculate progress based on scroll position relative to the previous section
            const previousSectionStart = (index - 1) * sectionHeight
            const progress = Math.min(
              Math.max(
                (scrollY - previousSectionStart) / (sectionHeight * 0.5),
                0
              ),
              1
            )

            // Other sections slide up from bottom
            const startPosition = sectionHeight // Start from bottom
            const endPosition = index * 5 // End with 5px offset per section
            const currentPosition =
              startPosition - progress * (startPosition - endPosition)

            console.log({
              index,
              startPosition,
              endPosition,
              currentPosition,
              progress,
              scrollY,
              previousSectionStart,
            })

            sectionElement.style.transform = `translateY(${currentPosition}px)`
          }
        })
      })
    }

    // Set initial positions
    if (sectionsRef.current) {
      const sections = sectionsRef.current.children
      Array.from(sections).forEach((section, index) => {
        const sectionElement = section as HTMLElement
        if (index === 0) {
          sectionElement.style.transform = 'translateY(0)'
        } else {
          sectionElement.style.transform = `translateY(${window.innerHeight}px)`
        }
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
      <div ref={sectionsRef} className="fixed top-0 left-0 h-screen w-full">
        <section className="absolute top-0 left-0 z-10 h-screen w-full rounded-3xl border-2 border-white bg-black p-8">
          <h2 className="text-4xl font-bold text-white">Section 1</h2>
        </section>
        <section className="absolute top-0 left-0 z-20 h-screen w-full rounded-3xl border-2 border-white bg-black p-8">
          <h2 className="text-4xl font-bold text-white">Section 2</h2>
        </section>
        <section className="absolute top-0 left-0 z-30 h-screen w-full rounded-3xl border-2 border-white bg-black p-8">
          <h2 className="text-4xl font-bold text-white">Section 3</h2>
        </section>
        <section className="absolute top-0 left-0 z-40 h-screen w-full rounded-3xl border-2 border-white bg-black p-8">
          <h2 className="text-4xl font-bold text-white">Section 4</h2>
        </section>
        <section className="absolute top-0 left-0 z-50 h-screen w-full rounded-3xl border-2 border-white bg-black p-8">
          <h2 className="text-4xl font-bold text-white">Section 5</h2>
        </section>
      </div>
    </div>
  )
}
