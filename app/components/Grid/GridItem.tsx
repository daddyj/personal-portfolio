import { PropsWithChildren } from "react"

type GridItemProps = PropsWithChildren & {
  colSpan?: number;
  className?: string;
}

const GridItem = ({ children, colSpan, className = "" }: GridItemProps) => {
  const colSpanClassName = `col-span-${colSpan?.toString()}`
  return (
    <div className={[className, colSpanClassName].join(' ')}>
      {children}
    </div>
  )
}

export default GridItem