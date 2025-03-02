import { useEffect, useRef } from 'react'

import { Grid, GridItem } from '@/app/components/Grid'
import { useNavigationContext } from '@/app/lib/useNavigationContext'
import { useViewportIntersect } from '@/app/lib/useViewportIntersect'

export const About = () => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()
  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)

  useEffect(() => {
    console.log('about', { isVisible, isFullyVisible })
    if (isVisible) setCurrentSection('about')
    if (isFullyVisible) setFullyVisible('about')
  }, [isFullyVisible, isVisible, setCurrentSection, setFullyVisible])

  return (
    <Grid id="about" ref={gridWrapper}>
      <GridItem className="col-span-10" />
      <GridItem className="col-span-10 sm:col-span-6">
        <h1 className="bold block rotate-[-6deg] text-9xl sm:hidden">Hi!</h1>
      </GridItem>
      <GridItem className="animate-fade animate-once animate-duration-1500 animate-ease-out col-span-10 flex h-auto w-auto justify-start pt-8 sm:col-span-4 sm:justify-end sm:pt-0">
        <div
          className="block h-56 w-56 rounded-full bg-center bg-no-repeat sm:hidden sm:h-64 sm:w-64"
          style={{
            backgroundImage: 'url(/about-me.jpeg)',
            backgroundSize: '200%',
            backgroundPositionY: -100,
          }}
        ></div>
      </GridItem>
      <GridItem className="col-[none] sm:col-span-10" />
      <GridItem className="col-[none] sm:col-span-10" />
      <GridItem className="col-[none] sm:col-span-3" />
      <GridItem className="col-[none] flex gap-8 sm:col-span-7">
        <h1 className="bold hidden rotate-[-6deg] text-9xl sm:block">Hi!</h1>
        <div
          className="hidden h-56 w-56 rounded-full bg-center bg-no-repeat sm:block sm:h-64 sm:w-64"
          style={{
            backgroundImage: 'url(/about-me.jpeg)',
            backgroundSize: '200%',
            backgroundPositionY: -100,
          }}
        ></div>
      </GridItem>

      <GridItem className="col-[none] sm:col-span-4" />
      <GridItem className="col-span-10 flex items-end justify-end sm:col-span-6">
        <h2 className="animate-fade-left animate-once bg-[var(--background)] text-xl sm:text-2xl">
          Ich bin Acun. Ich bin seit über 15 Jahren in der Industrie als
          Software Entwickler tätig, sowohl Fullstack als auch mit Fokus im
          Frontend. <br />
          Ich unterstütze Entwicklungsteams sowohl aktiv bei der Entwicklung im
          Web- und App-Bereich als auch organisatorisch als Team Lead mit agilen
          Methodiken. <br />
          Ach ja, und ich liebe es zu reisen.
        </h2>
      </GridItem>
    </Grid>
  )
}
