import Image from 'next/image'
import { useEffect, useRef } from 'react'

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
      <div className="absolute right-16 bottom-16">
        <Image
          src="/certified.png"
          alt="Certified"
          width={256}
          height={256}
          className="text-white-500"
        />
      </div>
    </Grid>
  )
}
