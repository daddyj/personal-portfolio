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
        }
      }

      if (index === SECTIONS.length - 1) {
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
