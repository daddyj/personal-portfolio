'use client'

import { ProjectsContainer } from './components/ProjectsContainer'
import { Section } from './components/Section'
import { useScrollProgress } from './hooks/useScrollProgress'
import { SECTIONS } from './lib/constants/sections'

export default function Home() {
  const { scrollProgress, containerRef } = useScrollProgress()

  return (
    <div className="relative h-[600vh] w-full">
      <div ref={containerRef} className="fixed top-0 left-0 h-screen w-full">
        {SECTIONS.map((section, index) => (
          <Section
            key={section.id}
            index={index}
            zIndex={section.zIndex}
            title={section.title}
            scrollProgress={scrollProgress}
          >
            {section.id === 'projects' ? (
              <ProjectsContainer
                subsectionProgress={scrollProgress.subsectionProgress}
              />
            ) : (
              section.component
            )}
          </Section>
        ))}
      </div>
    </div>
  )
}
