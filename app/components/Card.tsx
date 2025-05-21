import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  icon?: React.ComponentType<{ className?: string }>
  title: string
  children: ReactNode
  delay?: number
  isInView?: boolean
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export const Card = ({
  icon: Icon,
  title,
  children,
  delay = 0,
  isInView = true,
}: CardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className="group relative overflow-hidden p-6 transition-all"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="p-2 text-blue-500 transition-colors group-hover:bg-blue-200 group-hover:text-blue-500 dark:text-blue-300">
          {Icon && <Icon className="h-8 w-8" />}
        </div>
        <h3 className="text-3xl font-semibold">{title}</h3>
      </div>
      <div className="text-xl text-gray-600 dark:text-gray-300">{children}</div>
    </motion.div>
  )
}
