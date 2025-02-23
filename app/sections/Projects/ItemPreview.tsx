import { GridItem } from "@/app/components/Grid";
import Image from 'next/image';
import { Fragment } from "react";

interface ItemPreviewProps {
  role: string;
  techStack: React.ReactNode[];
  images: string[];
  description: React.ReactNode
}

export const ItemPreview = ({
  role,
  techStack,
  images,
  description
}: ItemPreviewProps) => {
  return (
    <>
      <GridItem className='col-span-10 sm:col-span-3 flex flex-col gap-8 animate-fade'>
        <div className='text-md sm:text-2xl'>
          <p className='font-bold'>Rolle in dem Projekt:</p>
          <p>{role}</p>
        </div>
        <div className='text-md sm:text-2xl'>
          <p className='font-bold'>TechStack (TODO use icons with animation effect):</p>
          <div className='flex flex-wrap gap-2'>
            {techStack.map((tech: React.ReactNode, index) => (
              <Fragment key={tech?.toString()}>
                <p>{tech}</p>
                {index < techStack.length - 1 && <p>#</p>}
              </Fragment>
            ))}
          </div>
        </div>
      </GridItem>
      <GridItem className='col-span-10 sm:col-span-4 flex justify-start sm:justify-end items-start animate-fade relative'>
        {images.map((image, index) => {
          const offset = index * 16
          const rotate = ((index + 1) * 8) - 16
          return (
            <div key={`${role}_image_${index}`} className={`self-start py-16 sm:py-0 border-black border-1 self-end right-0 top-0 rounded-sm overflow-hidden shadow-sm z-0 hover:z-10`} style={{ right: offset, rotate: `${rotate}deg`, position: index === 0 ? 'relative' : 'absolute' }}>
              <Image src={image} alt={`Vorschaubild ${index}`} width={400} height={400} />
            </div>
          )
        })}
      </GridItem>
      <GridItem className='col-span-3' />
      <GridItem className='col-span-10 sm:col-span-7 flex items-end animate-fade' >
        <p className="text-md sm:text-2xl">{description}</p>
      </GridItem>
    </>
  )
}