import { Grid, GridItem } from "@/app/components/Grid"
import { useEffect, useRef } from "react"
import { useNavigationContext } from "../lib/useNavigationContext"
import { useViewportIntersect } from "../lib/useViewportIntersect"

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
        <h1 className="bold text-9xl text-center sm:text-left">Hi!</h1>
      </GridItem>
      <GridItem className="py-16 sm:py-0 col-span-10 h-auto w-auto sm:col-span-4 flex justify-center sm:justify-end animate-fade animate-once animate-duration-1500 animate-ease-out">
        <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-center bg-no-repeat" style={{ backgroundImage: 'url(/about-me.png)', backgroundSize: "200%", backgroundPositionY: -100 }}>
        </div>
      </GridItem>
      <GridItem className="col-[none] sm:col-span-10" />
      <GridItem className="col-[none] sm:col-span-10" />
      <GridItem className="col-[none] sm:col-span-10" />
      <GridItem className="col-[none] sm:col-span-4" />
      <GridItem className="col-span-10 sm:col-span-6 flex items-end justify-end" >
        <h2 className="text-xl sm:text-2xl bg-black animate-fade-left animate-once">
          Ich bin Acun. Ich bin seit über 15 Jahren in der Industrie als Software Entwickler tätig, sowohl Fullstack als auch mit Fokus im Frontend. <br />
          Ich unterstütze Entwicklungsteams sowohl aktiv bei der Entwicklung im Web- und App-Bereich als auch organisatorisch als Team Lead mit agilen Methodiken. <br />
          Ach ja, und ich liebe es zu reisen.
        </h2>
      </GridItem>
    </Grid>
  )
}