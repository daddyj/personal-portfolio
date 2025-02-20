import { PropsWithChildren } from "react"

type GridItemProps = PropsWithChildren & {
  colSpan: number;
  className?: string;
}

const GridItem = ({ children, colSpan, className = "" }: GridItemProps) => {
  return (
    <div className={`col-span-${colSpan.toString()} ${className}`}>
      {children}
    </div>
  )
}

export default GridItem