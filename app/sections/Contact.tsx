import { EnvelopeIcon, EnvelopeOpenIcon } from '@heroicons/react/24/outline'
import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

import { Grid, GridItem } from '@/app/components/Grid'
import { useNavigationContext } from '@/app/lib/useNavigationContext'
import { useViewportIntersect } from '@/app/lib/useViewportIntersect'

import { PixelGlitchScreen } from '../components/PixelGlitchScreen'

export const Contact = () => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()
  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)

  useEffect(() => {
    if (isVisible) setCurrentSection('contact')
    if (isFullyVisible) setFullyVisible('contact')
  }, [isFullyVisible, isVisible, setCurrentSection, setFullyVisible])

  const isInView = useInView(gridWrapper, {
    once: false,
    margin: '-100px 0px',
  })

  return (
    <>
      <Grid
        ref={gridWrapper}
        id="contact"
        className="relative h-screen grid-rows-[auto_auto_auto] lg:grid-rows-[auto_1fr_auto]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 h-screen w-screen"
        >
          <PixelGlitchScreen interval={42} gridSize={80} />
          <PixelGlitchScreen interval={420} gridSize={30} />
          <PixelGlitchScreen interval={840} gridSize={20} />
        </motion.div>
        <GridItem className="animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-240 col-span-10 flex">
          <p className="text-4xl lg:text-6xl">Lust auf einen Austausch?</p>
        </GridItem>
        <GridItem className="animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-440 col-span-10 flex items-center justify-center">
          <a
            href="mailto:acun.guersoy@gmail.com"
            className="group text-md flex items-center gap-2 border-b-2 uppercase transition-all duration-210 hover:rotate-2 hover:border-2 hover:bg-black hover:p-16 hover:text-xl hover:text-blue-500 lg:text-6xl lg:hover:text-7xl"
          >
            <div className="block transition-opacity duration-210 group-hover:hidden">
              <EnvelopeIcon className="size-12 lg:size-24" />
            </div>
            <div className="hidden group-hover:block">
              <EnvelopeOpenIcon className="size-12 lg:size-24" />
            </div>
            Schreib eine E-Mail
          </a>
        </GridItem>
        <GridItem className="animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-640 col-span-10 flex items-end justify-center text-sm lg:items-start lg:text-2xl">
          <p>Mit 🤍 von Grund auf selbst entwickelt.</p>
        </GridItem>
      </Grid>
    </>
  )
}
