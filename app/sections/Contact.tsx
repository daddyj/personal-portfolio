import { Grid, GridItem } from "@/app/components/Grid"
import { EnvelopeIcon } from "@heroicons/react/24/outline"
import { useEffect, useRef } from "react"
import { useNavigationContext } from "../lib/useNavigationContext"
import { useViewportIntersect } from "../lib/useViewportIntersect"

export const Contact = () => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()
  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)

  useEffect(() => {
    if (isVisible) setCurrentSection('contact')
    if (isFullyVisible) setFullyVisible('contact')
  }, [isFullyVisible, isVisible, setCurrentSection, setFullyVisible])

  return (
    <Grid ref={gridWrapper} id="contact" className="grid-rows-[auto_auto_auto] sm:grid-rows-[auto_1fr_auto] h-screen">
      <GridItem className="col-span-10 flex">
        <p className="text-4xl sm:text-6xl">Lust auf einen Austausch?</p>
      </GridItem>
      <GridItem className="col-span-10 flex justify-center items-center">
        <a href="mailto:acun.guersoy@gmail.com" className="text-md sm:text-6xl flex gap-2 items-center uppercase border-b-2 transition-all duration-210 hover:text-xl sm:hover:text-7xl hover:rotate-2 hover:border-2 hover:p-16 hover:text-blue-500"><EnvelopeIcon className="size-12 sm:size-24" /> Schreib eine E-Mail</a>
      </GridItem>
      <GridItem className="col-span-10 flex justify-center items-end sm:items-start text-sm sm:text-2xl">
        <p>Mit 💙 von Grund auf selbst entwickelt.</p>
      </GridItem>


    </Grid>
  )
}