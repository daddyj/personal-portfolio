import {
  DocumentArrowDownIcon,
  EnvelopeIcon,
  EnvelopeOpenIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { motion, useInView } from 'framer-motion'
import { GlobeIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'

import { Grid, GridItem } from '@/app/components/Grid'
import { useNavigationContext } from '@/app/lib/useNavigationContext'
import { useViewportIntersect } from '@/app/lib/useViewportIntersect'

import { PixelGlitchScreen } from '../components/PixelGlitchScreen'

export const Contact = () => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()
  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)

  const isInView = useInView(gridWrapper, {
    once: false,
    margin: '-100px 0px',
  })

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
        <motion.div
          className="absolute inset-0 hidden sm:block"
          animate={isInView ? 'visible' : 'hidden'}
          initial="hidden"
        >
          <PixelGlitchScreen interval={1260} gridSize={8} />
          <PixelGlitchScreen interval={420} gridSize={30} />
          <PixelGlitchScreen interval={840} gridSize={20} />
        </motion.div>
        <GridItem className="animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-240 col-span-10 flex">
          <p className="hidden text-4xl sm:block lg:text-6xl">
            Kontaktmöglichkeiten
          </p>
          <p className="block text-4xl sm:hidden lg:text-6xl">Kontakt</p>
        </GridItem>
        <GridItem className="animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-440 col-span-10 flex flex-col gap-8 py-16 sm:col-span-10">
          <a
            href="mailto:acun.guersoy@gmail.com"
            className="group text-md lg:hover:text-7x flex items-center gap-4 uppercase transition-all duration-210 hover:bg-black hover:text-blue-500 lg:text-6xl"
          >
            <div className="block transition-opacity duration-210 group-hover:hidden">
              <EnvelopeIcon className="size-12 lg:size-24" />
            </div>
            <div className="hidden group-hover:block">
              <EnvelopeOpenIcon className="size-12 lg:size-24" />
            </div>
            <p className="group-hover:font-bold sm:font-thin">E-Mail</p>
          </a>
          <a
            href="tel:+4915258517763"
            className="group text-md lg:hover:text-7x flex items-center gap-4 uppercase transition-all duration-210 hover:bg-black hover:text-blue-500 lg:text-6xl"
          >
            <PhoneIcon className="size-12 rotate-136 transition-transform duration-210 group-hover:rotate-24 lg:size-24" />
            <p className="group-hover:font-bold sm:font-thin">Telefon</p>
          </a>
          <a
            href="https://www.linkedin.com/in/acun-g%C3%BCrsoy-83b8ab139/"
            target="_blank"
            className="group text-md lg:hover:text-7x flex items-center gap-4 uppercase transition-all duration-210 hover:bg-black hover:text-blue-500 lg:text-6xl"
          >
            <GlobeIcon className="size-12 transition-transform duration-210 group-hover:rotate-180 lg:size-24" />
            <p className="group-hover:font-bold sm:font-thin">LinkedIn</p>
          </a>
          <a
            href="/docs/acun_guersoy_cv_25.pdf"
            target="_blank"
            className="group text-md lg:hover:text-7x flex items-center gap-4 uppercase transition-all duration-210 hover:bg-black hover:text-blue-500 lg:text-6xl"
          >
            <DocumentArrowDownIcon className="size-12 transition-transform duration-210 group-hover:scale-125 lg:size-24" />
            <p className="group-hover:font-bold sm:font-thin">Lebenslauf</p>
          </a>
        </GridItem>
        <GridItem className="animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-640 col-span-10 flex items-end justify-center text-sm lg:items-start lg:text-2xl">
          <p>Mit 🤍 von Grund auf selbst entwickelt.</p>
        </GridItem>
      </Grid>
    </>
  )
}
