import { Grid } from "@/app/components/Grid"
import { HomeSection } from "@/app/lib/types"
import { useNavigationContext } from "@/app/lib/useNavigationContext"
import { useViewportIntersect } from "@/app/lib/useViewportIntersect"
import { useRef, useEffect, PropsWithChildren } from "react"

export const SkillsWrapper = ({ skillsKey, children }: { skillsKey: HomeSection } & PropsWithChildren) => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()

  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)

  useEffect(() => {
    if (isVisible) setCurrentSection(skillsKey)
    if (isFullyVisible) setFullyVisible(skillsKey)
  }, [isFullyVisible, isVisible, setCurrentSection, setFullyVisible, skillsKey])

  return (
    <Grid ref={gridWrapper} id={skillsKey} rows={2} className="">
      {children}
    </Grid>
  )
}