import { useEffect, useRef } from 'react'

import { GlitchCanvas } from '@/app/components/GlitchCanvas'
import { Grid, GridItem } from '@/app/components/Grid'
import { useNavigationContext } from '@/app/lib/useNavigationContext'
import { useViewportIntersect } from '@/app/lib/useViewportIntersect'

export const Hero = () => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()
  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)

  useEffect(() => {
    if (isVisible) setCurrentSection('hero')
    if (isFullyVisible) setFullyVisible('hero')
  }, [isFullyVisible, isVisible, setCurrentSection, setFullyVisible])

  return (
    <Grid
      ref={gridWrapper}
      id="hero"
      rows={`[auto_auto_auto_auto]`}
      className="h-screen"
    >
      <div className="absolute h-screen w-screen">
        <GlitchCanvas mode="pixel" />
      </div>

      <GridItem className="col-span-10" />

      <GridItem className="animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-440 col-span-8 flex flex-col">
        <h1 className="text-4xl uppercase sm:text-6xl">Acun Gürsoy</h1>
        <h1 className="text-4xl uppercase sm:text-6xl">
          Freelance Web & Mobile Entwickler
        </h1>
        <h2 className="text-xl uppercase">React / React-Native</h2>
      </GridItem>
      <GridItem className="col-span-2" />

      <GridItem className="col-span-10" />

      {/* <GridItem className="col-span-0 sm:col-span-4" /> */}
      {/* <GridItem className="animate-fade-up animate-once animate-duration-1200 animate-ease-out animate-delay-720 col-span-10 flex items-end justify-end gap-4 p-1 px-2 sm:col-span-4 sm:col-span-6">
        <h2 className="text-end text-xl">
          Agil denken. Klar kommunizieren. Smart entwickeln.
        </h2>
      </GridItem> */}
    </Grid>
  )
}
