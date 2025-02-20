import { PropsWithChildren } from "react"

type GridProps = PropsWithChildren & {
  rows?: number | string;
  className?: string;
}

const Grid = ({ children, rows, className }: GridProps) => {
  let defaultClassnames = "p-16 py-18 grid grid-cols-10 w-screen h-screen gap-4 bg-black relative max-w-[120rem] m-auto shadow-xl shadow-white"
  defaultClassnames += ` grid-rows-${(rows || 1).toString()}`

  return (
    <div className={`${defaultClassnames} ${className}`}>
      {children}
    </div>
  )
}

export default Grid