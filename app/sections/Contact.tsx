import { EnvelopeIcon } from '@heroicons/react/24/outline'
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 h-screen w-screen"
      >
        <PixelGlitchScreen interval={840} gridSize={10} />
      </motion.div>
      <Grid
        ref={gridWrapper}
        id="contact"
        className="h-screen grid-rows-[auto_auto_auto] bg-transparent lg:grid-rows-[auto_1fr_auto]"
      >
        <GridItem className="col-span-10 flex">
          <p className="text-4xl lg:text-6xl">Lust auf einen Austausch?</p>
        </GridItem>
        <GridItem className="col-span-10 flex items-center justify-center">
          <a
            href="mailto:acun.guersoy@gmail.com"
            className="text-md flex items-center gap-2 border-b-2 uppercase transition-all duration-210 hover:rotate-2 hover:border-2 hover:p-16 hover:text-xl hover:text-blue-500 lg:text-6xl lg:hover:text-7xl"
          >
            <EnvelopeIcon className="size-12 lg:size-24" /> Schreib eine E-Mail
          </a>
        </GridItem>
        <GridItem className="col-span-10 flex items-end justify-center text-sm lg:items-start lg:text-2xl">
          <p>Mit 🤍 von Grund auf selbst entwickelt.</p>
        </GridItem>
      </Grid>
    </>
  )
}
