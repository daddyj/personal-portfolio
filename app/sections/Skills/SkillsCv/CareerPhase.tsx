import { useState } from 'react'

import { cn } from '@/app/lib/utils'

import { CareerPhaseModal, type CareerPhaseProps } from './CareerPhaseModal'

export const CareerPhase = ({
  title,
  period,
  type,
  description,
  technologies,
  achievements,
  customerBenefits,
  moreInformation,
  className,
}: CareerPhaseProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        className={cn(
          'group relative flex cursor-pointer flex-col rounded-xl bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 p-2 px-6 py-8 text-gray-700 shadow-sm transition-all duration-300 hover:shadow-md lg:min-h-0 lg:w-[500px]',
          className
        )}
        onClick={() => setIsModalOpen(true)}
      >
        <div>
          <h3 className="mb-2 text-lg font-bold lg:text-xl">{title}</h3>
          <p className="mb-2 text-sm lg:text-base">{period}</p>
        </div>

        <p className="text-sm lg:text-base">{description}</p>
        <div className="flex flex-1" />
        <p className="mt-4 self-center border-b-2 border-transparent font-semibold transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-2deg] group-hover:border-black">
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
          moreInformation,
        }}
      />
    </>
  )
}
