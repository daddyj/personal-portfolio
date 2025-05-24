import { XMarkIcon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

import { type Technology, TechnologyBadge } from './TechnologyBadge'

export type Achievement = {
  title: string
  description: string
  impact: string
}

export type CareerPhaseProps = {
  title: string
  period: string
  type: 'freelance' | 'employed'
  description: React.ReactNode
  moreInformation?: React.ReactNode
  technologies: Technology[]
  achievements: Achievement[]
  customerBenefits: string[]
  className?: string
}

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  careerPhase: CareerPhaseProps
}

const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (!isLocked) return

    // Save the current scroll position
    const scrollY = window.scrollY
    const body = document.body

    // Lock the scroll
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.width = '100%'

    return () => {
      // Restore the scroll position
      body.style.position = ''
      body.style.top = ''
      body.style.width = ''
      window.scrollTo(0, scrollY)
    }
  }, [isLocked])
}

export const CareerPhaseModal = ({
  isOpen,
  onClose,
  careerPhase,
}: ModalProps) => {
  useScrollLock(isOpen)

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 hover:cursor-pointer"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative mx-4 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg border-2 border-blue-500 bg-black p-6 shadow-xl hover:cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full border-1 border-transparent p-1 hover:cursor-pointer hover:border-gray-300"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold">{careerPhase.title}</h3>
                <p className="mt-2 text-sm">{careerPhase.period}</p>
              </div>

              <p className="">
                {careerPhase.description}{' '}
                {careerPhase.moreInformation && (
                  <span>
                    {careerPhase.moreInformation}
                    <br />
                  </span>
                )}
              </p>
              {/* Technologies Section */}
              <div>
                <h4 className="mb-3 text-sm font-semibold text-gray-400">
                  Technologien & Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {careerPhase.technologies.map((tech) => (
                    <TechnologyBadge key={tech.name} {...tech} />
                  ))}
                </div>
              </div>

              {/* Achievements Section */}
              <div>
                <h4 className="mb-3 text-sm font-semibold text-gray-400">
                  Wichtige Erfolge
                </h4>
                <div className="space-y-3">
                  {careerPhase.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-gray-700 bg-gray-900 p-3"
                    >
                      <h5 className="font-medium text-blue-400">
                        {achievement.title}
                      </h5>
                      <p className="mt-1 text-sm text-gray-300">
                        {achievement.description}
                      </p>
                      <p className="mt-2 text-sm text-green-400">
                        <span className="font-medium">Impact:</span>{' '}
                        {achievement.impact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Benefits Section */}
              <div>
                <h4 className="mb-3 text-sm font-semibold text-gray-400">
                  Ihr Vorteil
                </h4>
                <ul className="space-y-2">
                  {careerPhase.customerBenefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <span className="mt-1 text-blue-400">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
