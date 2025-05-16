'use client'

import { useEffect, useState } from 'react'

import { SECTIONS } from '@/app/lib/constants/sections'
import { SectionProps } from '@/app/lib/types'

export const Section: React.FC<SectionProps> = ({
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
          visibility:
            scrollProgress.sectionOpacities[index] > 0 ? 'visible' : 'hidden',
        }
      }

      if (index === SECTIONS.length - 1) {
        const translateY =
          window.innerHeight -
          scrollProgress.contactSectionProgress * window.innerHeight
        return {
          transform: `translateY(${translateY}px)`,
          opacity: scrollProgress.sectionOpacities[index],
          visibility:
            scrollProgress.sectionOpacities[index] > 0 ? 'visible' : 'hidden',
        }
      }

      const currentSectionProgress = Math.max(
        0,
        Math.min(1, scrollProgress.sectionProgress - (index - 1))
      )

      // Calculate translateY based on viewport height and progress
      const translateY = window.innerHeight * (1 - currentSectionProgress)

      return {
        transform: `translateY(${translateY}px)`,
        opacity: scrollProgress.sectionOpacities[index],
        visibility:
          scrollProgress.sectionOpacities[index] > 0 ? 'visible' : 'hidden',
      }
    }

    setSectionStyle(getSectionStyle(index))
  }, [index, scrollProgress])

  return (
    <section
      className="will-change-opacity absolute top-0 left-0 h-screen w-full bg-black transition-transform duration-300 ease-out will-change-transform"
      style={{
        ...sectionStyle,
        zIndex,
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: `${sectionStyle.transform} translateZ(0)`,
      }}
    >
      <div className="h-full w-full">
        {title && (
          <h2 className="mb-8 text-4xl font-bold text-white">{title}</h2>
        )}
        {children}
      </div>
    </section>
  )
}
