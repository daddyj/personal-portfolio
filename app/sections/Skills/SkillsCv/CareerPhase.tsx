import { useState } from 'react'

import { CareerPhaseModal, type CareerPhaseProps } from './CareerPhaseModal'

export const CareerPhase = ({
  title,
  period,
  type,
  description,
  technologies,
  achievements,
  customerBenefits,
}: CareerPhaseProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        className="group relative flex min-h-56 w-[400px] cursor-pointer flex-col rounded-xl bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 p-2 px-6 py-8 shadow-sm transition-all duration-300 hover:shadow-md dark:from-blue-950 dark:via-blue-900 dark:to-indigo-900"
        onClick={() => setIsModalOpen(true)}
      >
        <div>
          <h3 className="mb-2 text-xl font-bold text-[var(--foreground)]">
            {title}
          </h3>
          <p className="mb-2 text-sm text-[var(--foreground)]">{period}</p>
        </div>

        <p className="text-[var(--foreground)]">{description}</p>
        <p className="my-2 self-center text-sm text-[var(--foreground)] opacity-0 transition-all duration-300 group-hover:opacity-100">
          Mehr erfahren
        </p>
      </div>

      <CareerPhaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        careerPhase={{
          title,
          period,
          type,
          description,
          technologies,
          achievements,
          customerBenefits,
        }}
      />
    </>
  )
}
