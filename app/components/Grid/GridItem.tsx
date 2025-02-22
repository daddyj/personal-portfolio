import { PropsWithChildren } from "react"

type GridItemProps = PropsWithChildren & {
  colSpan?: number;
  className?: string;
}

const GridItem = ({ children, className = "" }: GridItemProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default GridItem