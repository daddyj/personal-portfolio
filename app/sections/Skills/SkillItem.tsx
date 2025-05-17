import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import { type Skill } from './SkillsTech'

interface SkillItemProps {
  skill: Skill
  index: number
}

export const SkillItem = ({ skill, index }: SkillItemProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: false,
    margin: '-50px 0px',
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group relative flex min-w-32 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 p-2 px-6 py-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(59,130,246,0.15)] dark:from-blue-950 dark:via-blue-900 dark:to-indigo-900"
      title={skill.name}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10">
        {skill.hasIcon ? (
          <div className="h-full w-full text-gray-700 transition-colors duration-300 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-400">
            <skill.Icon className="h-full w-full" />
          </div>
        ) : (
          <span className="text-center text-lg font-semibold text-gray-700 transition-colors duration-300 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-400">
            {skill.name}
          </span>
        )}
      </div>

      {/* Bottom accent border */}
      <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  )
}
