import { PropsWithChildren, RefObject } from 'react'

type GridItemProps = PropsWithChildren & {
  colSpan?: number
  className?: string
  ref?: RefObject<HTMLDivElement | null>
}

const GridItem = ({ children, className = '', ref }: GridItemProps) => {
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default GridItem
