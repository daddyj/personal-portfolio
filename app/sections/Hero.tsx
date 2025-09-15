import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

import { Grid, GridItem } from '@/app/components/Grid'
import { useNavigationContext } from '@/app/lib/useNavigationContext'
import { useViewportIntersect } from '@/app/lib/useViewportIntersect'

import { PixelGlitchScreen } from '../components/PixelGlitchScreen'

export const Hero = () => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()
  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)

  useEffect(() => {
    if (isVisible) setCurrentSection('hero')
    if (isFullyVisible) setFullyVisible('hero')
  }, [isFullyVisible, isVisible, setCurrentSection, setFullyVisible])

  const isInView = useInView(gridWrapper, {
    once: false,
    margin: '-100px 0px',
  })

  return (
    <Grid
      ref={gridWrapper}
      id="hero"
      className="rows-[auto_auto_auto] h-screen py-24 sm:py-0"
    >
      <motion.div
        className="absolute inset-0 hidden sm:block"
        animate={isInView ? 'visible' : 'hidden'}
        initial="hidden"
      >
        <PixelGlitchScreen interval={42} gridSize={80} className="" />
        <PixelGlitchScreen interval={420} gridSize={30} />
        <PixelGlitchScreen interval={840} gridSize={20} />
      </motion.div>
      <GridItem className="animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-240 col-span-10 flex items-center justify-center lg:col-span-2 lg:justify-start">
        <div className="relative h-40 w-40 overflow-hidden rounded-full lg:h-56 lg:w-56">
          <Image
            src="/skills-cv-section-me.jpeg"
            alt="Acun Gürsoy"
            loading="eager"
            sizes="(max-width: 1200px) 128px, 512px"
            className="rounded-full object-cover"
            fill
          />
        </div>
      </GridItem>
      <GridItem className="col-span-0 sm:hidden lg:col-span-8 lg:block" />

      <GridItem className="animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-440 col-span-10 flex flex-col sm:items-center lg:col-span-8 lg:items-start">
        <h1 className="text-4xl uppercase lg:text-6xl">Acun Gürsoy</h1>
        <h1 className="text-4xl uppercase lg:text-6xl">
          Web & Mobile Entwickler
        </h1>
        <h2 className="text-xl uppercase">React / React-Native</h2>
      </GridItem>
      <GridItem className="col-span-0 lg:col-span-2" />

      <GridItem className="animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-640 col-span-10 flex items-end justify-end">
        <div className="relative h-40 w-40 lg:my-0 lg:h-64 lg:w-64">
          <Image
            src="/certified.png"
            alt="certified"
            fill
            sizes="256px"
            className="rounded-full object-cover"
          />
        </div>
      </GridItem>
    </Grid>
  )
}
