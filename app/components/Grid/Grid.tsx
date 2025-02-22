import { PropsWithChildren, RefObject } from "react"

type GridProps = PropsWithChildren & {
  rows?: number | string;
  className?: string;
  id?: string;
  ref?: RefObject<HTMLDivElement | null>;
}

const Grid = ({ id = "", children, rows, className, ref }: GridProps) => {
  let defaultClassnames = "p-12 py-16 sm:p-16 sm:py-18 grid grid-cols-10 w-screen sm:h-screen gap-4 bg-black relative max-w-[120rem] m-auto shadow-xl shadow-white"
  defaultClassnames += ` grid-rows-${(rows || 1).toString()}`

  return (
    <div ref={ref} id={id} className={`${defaultClassnames} ${className}`}>
      {children}
    </div>
  )
}

export default Grid