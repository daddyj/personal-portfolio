'use client'

import { Section } from './components/Section'
import { useScrollProgress } from './hooks/useScrollProgress'
import { SECTIONS } from './lib/constants/sections'

export default function Home() {
  const { scrollProgress, containerRef } = useScrollProgress()

  return (
    <div className="relative w-full">
      <div className="h-[600vh]">
        <div ref={containerRef} className="fixed top-0 left-0 h-screen w-full">
          <div className="relative h-full w-full">
            {SECTIONS.map((section, index) => (
              <Section
                key={section.id}
                index={index}
                zIndex={section.zIndex}
                title={section.title}
                scrollProgress={scrollProgress}
              >
                {section.component}
              </Section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
