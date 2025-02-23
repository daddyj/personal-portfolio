import { GridItem } from "@/app/components/Grid";
import { Fragment, JSX } from "react";

export const ItemPreview = ({
  role,
  techStack,
  images,
  description
}: {
  role: string;
  techStack: React.ReactNode[];
  images: JSX.Element[];
  description: React.ReactNode
}) => {
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
      <GridItem className='col-span-10 sm:col-span-4 flex justify-start sm:justify-end items-start animate-fade'>
        {images.map((image, index) => (
          <div key={`${role}_image_${index}`} className="flex rounded-sm overflow-hidden">
            {image}
          </div>
        ))}
      </GridItem>
      <GridItem className='col-span-3' />
      <GridItem className='col-span-10 sm:col-span-7 flex items-end animate-fade' >
        <p className="text-md sm:text-2xl">{description}</p>
      </GridItem>
    </>
  )
}