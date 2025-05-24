import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Fragment, JSX, useState } from 'react'

import { GridItem } from '@/app/components/Grid'
import { React } from '@/app/components/Icons/React'

interface ItemPreviewProps {
  role: string
  techStack: JSX.Element[]
  images: string[]
  description: React.ReactNode
}

export const ItemPreview = ({
  role,
  techStack,
  images,
  description,
}: ItemPreviewProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <>
      <GridItem className="animate-fade col-span-10 flex flex-col gap-8 lg:col-span-3">
        <div className="text-md flex flex-col gap-4 lg:min-h-28 lg:text-2xl">
          <p className="font-bold">Rolle in dem Projekt:</p>
          <p>{role}</p>
        </div>
        <div className="text-md flex flex-col gap-4 lg:text-2xl">
          <p className="font-bold">Technologien:</p>
          <div className="flex flex-wrap items-end gap-2 text-sm font-bold lg:gap-4">
            {techStack.map((tech: JSX.Element) => tech)}
          </div>
        </div>
      </GridItem>
      <GridItem className="animate-fade relative col-span-10 flex h-60 flex-1 justify-center lg:col-span-4 lg:h-auto lg:justify-end">
        <ArrowLeftIcon
          className="z-11 size-12 self-center transition-all hover:scale-[125%] hover:cursor-pointer"
          onClick={() =>
            setCurrentImageIndex((prevState) =>
              prevState - 1 < 0 ? images.length - 1 : prevState - 1
            )
          }
        />
        <div className="relative flex w-full items-start justify-start px-12 lg:w-[496px] lg:justify-end">
          {images.map((image, index) => {
            const offset = index * 16 + 12
            const rotate = (index + 1) * 8 - 16
            return (
              <div
                key={`${role}_image_${index}`}
                className={`absolute top-0 right-0 z-0 flex h-full items-center justify-center self-end lg:w-[400px]`}
                style={{
                  right: offset,
                  rotate: `${rotate}deg`,
                  zIndex: index === currentImageIndex ? 10 : 0,
                  opacity: index === currentImageIndex ? 1 : 0.21,
                }}
              >
                <Image
                  src={image}
                  alt={`Vorschaubild ${index}`}
                  width={400}
                  height={400}
                  className="overflow-hidden rounded-sm border-1 border-[var(--background)]"
                />
              </div>
            )
          })}
        </div>
        <ArrowRightIcon
          className="z-11 size-12 self-center transition-all hover:scale-[125%] hover:cursor-pointer"
          onClick={() =>
            setCurrentImageIndex((prevState) => (prevState + 1) % images.length)
          }
        />
      </GridItem>

      <GridItem className="col-span-10" />

      <GridItem className="col-span-3" />
      <GridItem className="animate-fade col-span-10 flex lg:col-span-7">
        <p className="text-md lg:text-2xl">{description}</p>
      </GridItem>
    </>
  )
}
