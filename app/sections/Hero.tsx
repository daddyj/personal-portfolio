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

  return (
    <>
      <PixelGlitchScreen
        className="h-screen w-screen"
        interval={42}
        gridSize={80}
      />
      <Grid
        ref={gridWrapper}
        id="hero"
        className="rows-[auto_auto_auto] h-screen"
      >
        <GridItem className="col-span-10 flex items-center justify-center sm:justify-start">
          <div
            className="h-40 w-40 rounded-full bg-blue-500 bg-center bg-no-repeat sm:h-56 sm:w-56"
            style={{
              backgroundImage: 'url(/skills-cv-section-me.jpeg)',
              backgroundSize: '100%',
            }}
          />
        </GridItem>

        <GridItem className="animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-440 col-span-10 flex flex-col sm:col-span-8">
          <h1 className="text-4xl uppercase sm:text-6xl">Acun Gürsoy</h1>
          <h1 className="text-4xl uppercase sm:text-6xl">
            Freelance Web & Mobile Entwickler
          </h1>
          <h2 className="text-xl uppercase">React / React-Native</h2>
        </GridItem>
        <GridItem className="col-span-0 sm:col-span-2" />

        <GridItem className="col-span-10 flex items-end justify-end">
          <div
            className="h-40 w-40 rounded-full bg-center bg-no-repeat sm:my-0 sm:h-64 sm:w-64"
            style={{
              backgroundImage: 'url(/certified.png)',
              backgroundSize: '100%',
            }}
          />
        </GridItem>
      </Grid>
    </>
  )
}
