'use client'

import { Grid, GridItem } from "@/app/components/Grid"
import { useEffect, useRef } from "react"
import { HomeSectionProps } from "../lib/types"
import { useViewportIntersect } from "../lib/useViewportIntersect"

export const About = ({ onEnter, onFullyVisible }: HomeSectionProps) => {
  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)

  useEffect(() => {
    if (isVisible) onEnter('about')
    if (isFullyVisible) onFullyVisible('about')
  }, [isFullyVisible, isVisible, onEnter, onFullyVisible])

  return (
    <Grid id="about" rows={6} ref={gridWrapper}>
      <GridItem className="col-span-10" />
      <GridItem className="col-span-6">
        <div className="">
          <h1 className="bold text-9xl">Hi!</h1>
        </div>
      </GridItem>
      <GridItem className="col-span-4 flex justify-end animate-fade animate-once animate-duration-1500 animate-ease-out">
        <div className="w-64 h-64 rounded-full bg-center bg-no-repeat" style={{ backgroundImage: 'url(/about-me.png)', backgroundSize: "200%", backgroundPositionY: -100 }}>
        </div>
      </GridItem>
      <GridItem className="col-span-10" />
      <GridItem className="col-span-10" />
      <GridItem className="col-span-10" />
      <GridItem className="col-span-4" />
      <GridItem className="col-span-6 flex items-end justify-end" >
        <h2 className="text-2xl bg-black animate-fade-left animate-once">
          Ich bin Acun. Ich bin seit über 15 Jahren in der Industrie als Software Entwickler tätig, sowohl Fullstack als auch mit Fokus im Frontend. <br />
          Ich unterstütze Entwicklungsteams sowohl aktiv bei der Entwicklung im Web- und App-Bereich als auch organisatorisch als Team Lead mit agilen Methodiken. <br />
          Ach ja, und ich liebe es zu reisen.
        </h2>
      </GridItem>
    </Grid>
  )
}