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
    console.log('hero', { isVisible, isFullyVisible })
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
        <h1 className="text-4xl uppercase sm:text-8xl">Software Entwickler</h1>
        <h2 className="text-xl uppercase">Web / Mobile</h2>
      </GridItem>
      <GridItem className="col-span-2" />

      <GridItem className="col-span-10" />

      <GridItem className="col-span-6" />
      <GridItem className="animate-fade-up animate-once animate-duration-1200 animate-ease-out animate-delay-720 col-span-4 flex items-end justify-end gap-4 p-1 px-2">
        <h2 className="text-end text-xl sm:text-8xl">Acun Gürsoy</h2>
        {/* <a href="#" className="text-4xl font-bold border-b-2 transition-all duration-120 hover:text-6xl hover:rotate-[-2deg] hover:border-2 hover:p-4 animate-pulse hover:animate-none">Hier lang</a> */}
      </GridItem>
    </Grid>
  )
}
