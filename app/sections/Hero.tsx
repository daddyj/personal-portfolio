import { Grid, GridItem } from "@/app/components/Grid";
import { useViewportIntersect } from "@/app/lib/useViewportIntersect";
import { useEffect, useRef } from "react";
import { useNavigationContext } from "../lib/useNavigationContext";
import { GlitchCanvas } from "../components/GlitchCanvas";


export const Hero = () => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()
  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)

  useEffect(() => {
    if (isVisible) setCurrentSection('hero')
    if (isFullyVisible) setFullyVisible('hero')
  }, [isFullyVisible, isVisible, setCurrentSection, setFullyVisible])

  return (
    <Grid ref={gridWrapper} id="hero" rows={`[auto_auto_auto_auto]`}>
      <div className="absolute w-screen h-screen">
        <GlitchCanvas mode="pixel" />
      </div>
      <GridItem colSpan={10} />

      <GridItem colSpan={8} className="flex flex-col animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-440">
        <h1 className="text-8xl uppercase">Software Entwickler</h1>
        <h2 className="text-xl uppercase">Web / Mobile</h2>
      </GridItem>
      <GridItem colSpan={2} />

      <GridItem colSpan={10} />

      <GridItem colSpan={6} />
      <GridItem colSpan={4} className="flex items-end justify-end p-1 px-2 gap-4 animate-fade-up animate-once animate-duration-1200 animate-ease-out animate-delay-720" >
        <h2 className="text-8xl text-end">Acun Gürsoy</h2>
      </GridItem>
    </Grid>
  )
}