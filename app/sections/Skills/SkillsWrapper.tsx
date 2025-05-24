import { PropsWithChildren, useEffect, useRef } from 'react'

import { Grid } from '@/app/components/Grid'
import { HomeSection } from '@/app/lib/types'
import { useNavigationContext } from '@/app/lib/useNavigationContext'
import { useViewportIntersect } from '@/app/lib/useViewportIntersect'

export const SkillsWrapper = ({
  skillsKey,
  className = '',
  children,
  ref,
}: {
  skillsKey: HomeSection
  className?: string
  ref?: React.RefObject<HTMLDivElement | null>
} & PropsWithChildren) => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()

  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)

  useEffect(() => {
    if (isVisible) setCurrentSection(skillsKey)
    if (isFullyVisible) setFullyVisible(skillsKey)
  }, [isFullyVisible, isVisible, setCurrentSection, setFullyVisible, skillsKey])

  return (
    <Grid ref={ref ?? gridWrapper} id={skillsKey} className={className}>
      {children}
    </Grid>
  )
}
