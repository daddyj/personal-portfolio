import { GridItem } from "@/app/components/Grid";
import { React } from "@/app/components/Icons/React";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from 'next/image';
import { Fragment, JSX, useState } from "react";

interface ItemPreviewProps {
  role: string;
  techStack: JSX.Element[];
  images: string[];
  description: React.ReactNode
}

export const ItemPreview = ({
  role,
  techStack,
  images,
  description
}: ItemPreviewProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <>
      <GridItem className='col-span-10 sm:col-span-3 flex flex-col gap-8 animate-fade'>
        <div className='text-md sm:text-2xl flex flex-col gap-4'>
          <p className='font-bold'>Rolle in dem Projekt:</p>
          <p>{role}</p>
        </div>
        <div className='text-md sm:text-2xl flex flex-col gap-4'>
          <p className='font-bold'>Technologien:</p>
          <div className='flex flex-wrap gap-2 sm:gap-4 items-end font-bold text-sm'>
            {techStack.map((tech: JSX.Element) => (
              tech
            ))}
          </div>
        </div>
      </GridItem>
      <GridItem className="col-span-10 sm:col-span-4 h-60 sm:h-auto  flex-1 animate-fade relative flex justify-end">
        <ArrowLeftIcon className="size-12 hover:scale-[125%] transition-all z-11 self-center hover:cursor-pointer" onClick={() => setCurrentImageIndex((prevState) => (prevState - 1) < 0 ? images.length - 1 : prevState - 1)} />
        <div className="flex px-12 w-full sm:w-[496px] justify-start sm:justify-end items-start relative">
          {images.map((image, index) => {
            const offset = (index * 16) + 12
            const rotate = ((index + 1) * 8) - 16
            return (
              <div key={`${role}_image_${index}`} className={`sm:w-[400px] py-16 sm:py-0 border-[var(--background)] border-1 self-end right-0 top-0 rounded-sm overflow-hidden z-0 absolute`} style={{ right: offset, rotate: `${rotate}deg`, zIndex: index === currentImageIndex ? 10 : 0, opacity: index === currentImageIndex ? 1 : 0.21 }}>
                <Image src={image} alt={`Vorschaubild ${index}`} width={400} height={400} />
              </div>
            )
          })}
        </div>
        <ArrowRightIcon className="size-12 hover:scale-[125%] transition-all z-11 self-center hover:cursor-pointer" onClick={() => setCurrentImageIndex((prevState) => (prevState + 1) % images.length)} />
      </GridItem>
      <GridItem className='col-span-3' />
      <GridItem className='col-span-10 sm:col-span-7 flex items-end animate-fade' >
        <p className="text-md sm:text-2xl">{description}</p>
      </GridItem>
    </>
  )
}