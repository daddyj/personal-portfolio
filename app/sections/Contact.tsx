import { EnvelopeIcon } from "@heroicons/react/24/outline"
import { Grid, GridItem } from "@/app/components/Grid"
import { HomeSectionProps } from "../lib/types"
import { useRef, useEffect } from "react"
import { useViewportIntersect } from "../lib/useViewportIntersect"

export const Contact = ({ onEnter, onFullyVisible }: HomeSectionProps) => {
  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)

  useEffect(() => {
    if (isVisible) onEnter('contact')
    if (isFullyVisible) onFullyVisible('contact')
  }, [isFullyVisible, isVisible, onEnter, onFullyVisible])

  return (
    <Grid ref={gridWrapper} id="contact" className="grid-rows-[auto_1fr_auto]">
      <GridItem className="col-span-10 flex">
        <p className="text-6xl">Lust auf einen Austausch?</p>
      </GridItem>
      <GridItem className="col-span-10 flex justify-center items-center">
        <a href="mailto:acun.guersoy@gmail.com" className="text-6xl flex gap-2 items-center uppercase border-b-2 transition-all duration-210 hover:text-7xl hover:rotate-2 hover:border-2 hover:p-16 hover:text-blue-500"><EnvelopeIcon className="size-24" /> Schreib eine E-Mail</a>
      </GridItem>
      <GridItem className="col-span-10 flex justify-center text-2xl">
        <p>Mit 💙 von Grund auf selbst entwickelt.</p>
      </GridItem>


    </Grid>
  )
}