import { motion, useInView, useMotionValue } from 'framer-motion'
import { useEffect, useRef } from 'react'

import { type Skill } from './SkillsTech'

interface SkillItemProps {
  skill: Skill
  index: number
}

export const SkillItem = ({ skill, index }: SkillItemProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: false,
    margin: '-50px 0px',
  })

  // Motion values for rotation
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!element || !isInView) return

      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate mouse position relative to center of element
      const relativeX = e.clientX - centerX
      const relativeY = e.clientY - centerY

      // Calculate distance from center (0 to 1)
      const distanceX = Math.min(Math.abs(relativeX) / (rect.width / 2), 1)
      const distanceY = Math.min(Math.abs(relativeY) / (rect.height / 2), 1)

      // Calculate rotation angles with easing
      // Using a quadratic easing function for smoother movement

      // Limit rotation to prevent flipping (max 15 degrees)
      const maxRotation = 7
      // Keep X rotation as is, invert only Y rotation
      const newRotateX = distanceY * maxRotation * (relativeY > 0 ? -1 : 1)
      const newRotateY = distanceX * maxRotation * (relativeX > 0 ? 1 : -1) // Inverted Y rotation

      // Apply rotation with smooth transition
      rotateX.set(newRotateX)
      rotateY.set(newRotateY)
    }

    const handleMouseLeave = () => {
      // Smoothly reset rotation
      rotateX.set(0)
      rotateY.set(0)
    }

    if (isInView) {
      window.addEventListener('mousemove', handleMouseMove)
      element.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
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
      className="relative flex min-w-32 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 p-2 px-6 py-8 shadow-sm dark:from-blue-950 dark:via-blue-900 dark:to-indigo-900"
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
          <div className="h-full w-full text-gray-700 dark:text-gray-300">
            <skill.Icon className="h-full w-full" />
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
