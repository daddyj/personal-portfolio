import {
  EnvelopeIcon,
  EnvelopeOpenIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { useEffect, useRef } from 'react'

import { Grid, GridItem } from '@/app/components/Grid'
import { useNavigationContext } from '@/app/lib/useNavigationContext'
import { useViewportIntersect } from '@/app/lib/useViewportIntersect'

export const Contact = () => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()
  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)

  useEffect(() => {
    if (isVisible) setCurrentSection('contact')
    if (isFullyVisible) setFullyVisible('contact')
  }, [isFullyVisible, isVisible, setCurrentSection, setFullyVisible])

  return (
    <>
      <Grid
        ref={gridWrapper}
        id="contact"
        className="relative h-screen grid-rows-[auto_auto_auto] lg:grid-rows-[auto_1fr_auto]"
      >
        <GridItem className="animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-240 col-span-10 flex">
          <p className="text-4xl lg:text-5xl">
            Lass uns über dein Projekt reden
          </p>
        </GridItem>
        <GridItem className="animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-440 col-span-10 flex items-center justify-center sm:col-span-5">
          <a
            href="mailto:acun.guersoy@gmail.com"
            className="group text-md flex min-w-40 items-center justify-center gap-2 border-b-2 uppercase transition-all duration-210 hover:-rotate-2 hover:border-2 hover:bg-black hover:p-16 hover:text-xl hover:text-blue-500 lg:text-6xl lg:hover:text-7xl"
          >
            <div className="block transition-opacity duration-210 group-hover:hidden">
              <EnvelopeIcon className="size-12 lg:size-24" />
            </div>
            <div className="hidden group-hover:block">
              <EnvelopeOpenIcon className="size-12 lg:size-24" />
            </div>
            <p>E-Mail</p>
          </a>
        </GridItem>
        <GridItem className="animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-440 col-span-10 flex items-center justify-center sm:col-span-5">
          <a
            href="tel:+4915258517763"
            className="group text-md flex min-w-40 items-center justify-center gap-2 border-b-2 uppercase transition-all duration-210 hover:rotate-2 hover:border-2 hover:bg-black hover:p-16 hover:text-xl hover:text-blue-500 lg:text-6xl lg:hover:text-7xl"
          >
            <PhoneIcon className="size-12 transition-transform duration-210 group-hover:rotate-42 lg:size-24" />
            <p>Telefon</p>
          </a>
        </GridItem>
        <GridItem className="animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-640 col-span-10 flex items-end justify-center text-sm lg:items-start lg:text-2xl">
          <p>Mit 🤍 von Grund auf selbst entwickelt.</p>
        </GridItem>
      </Grid>
    </>
  )
}
