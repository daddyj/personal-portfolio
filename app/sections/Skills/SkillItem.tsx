import { motion, useInView } from 'framer-motion'
import { useEffect } from 'react'

import { useMouseFollow } from '@/app/hooks/useMouseFollow'

import { type Skill } from './SkillsTech'

interface SkillItemProps {
  skill: Skill
  index: number
}

export const SkillItem = ({ skill, index }: SkillItemProps) => {
  const { ref, rotateX, rotateY } = useMouseFollow({
    invertY: true, // Keep the inverted Y rotation for this component
  })
  const isInView = useInView(ref, {
    once: false,
    margin: '-50px 0px',
  })

  useEffect(() => {
    if (!isInView) {
      rotateX.set(0)
      rotateY.set(0)
    }
  }, [isInView, rotateX, rotateY])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
      }}
      style={{
        rotateX: isInView ? rotateX : 0,
        rotateY: isInView ? rotateY : 0,
        transformStyle: 'preserve-3d',
        perspective: 1200,
        transformOrigin: 'center center',
      }}
      className="relative flex min-h-48 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 p-2 px-6 py-8 shadow-sm dark:from-blue-950 dark:via-blue-900 dark:to-indigo-900"
      title={skill.name}
    >
      {/* Decorative gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          transform: 'translateZ(1px)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10"
        style={{
          transform: 'translateZ(30px)',
          backfaceVisibility: 'hidden',
        }}
      >
        {skill.hasIcon ? (
          <div className="flex h-16 w-16 items-center justify-center text-gray-700 dark:text-gray-300">
            <skill.Icon className="h-16 w-16" />
          </div>
        ) : (
          <span className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
            {skill.name}
          </span>
        )}
      </div>

      {/* Bottom accent border */}
      <div
        className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          transform: 'translateZ(15px)',
        }}
      />
    </motion.div>
  )
}
