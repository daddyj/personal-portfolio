'use client'

import { useEffect, useState } from 'react'

import { ProjectSubsectionProps } from '@/app/lib/types'

export const ProjectSubsection: React.FC<ProjectSubsectionProps> = ({
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
