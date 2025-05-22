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
        className="group relative flex min-h-56 w-[400px] cursor-pointer flex-col rounded-xl bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 p-2 px-6 py-8 shadow-sm transition-all duration-300 hover:shadow-md"
        onClick={() => setIsModalOpen(true)}
      >
        <div>
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p className="mb-2 text-sm">{period}</p>
        </div>

        <p className="">{description}</p>
        <p className="my-2 self-center text-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
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
