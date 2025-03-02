import { EnvelopeIcon } from '@heroicons/react/24/outline'
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
    <Grid
      ref={gridWrapper}
      id="contact"
      className="h-screen grid-rows-[auto_auto_auto] sm:grid-rows-[auto_1fr_auto]"
    >
      <GridItem className="col-span-10 flex">
        <p className="text-4xl sm:text-6xl">Lust auf einen Austausch?</p>
      </GridItem>
      <GridItem className="col-span-10 flex items-center justify-center">
        <a
          href="mailto:acun.guersoy@gmail.com"
          className="text-md flex items-center gap-2 border-b-2 uppercase transition-all duration-210 hover:rotate-2 hover:border-2 hover:p-16 hover:text-xl hover:text-blue-500 sm:text-6xl sm:hover:text-7xl"
        >
          <EnvelopeIcon className="size-12 sm:size-24" /> Schreib eine E-Mail
        </a>
      </GridItem>
      <GridItem className="col-span-10 flex items-end justify-center text-sm sm:items-start sm:text-2xl">
        <p>Mit 🤍 von Grund auf selbst entwickelt.</p>
      </GridItem>
    </Grid>
  )
}
