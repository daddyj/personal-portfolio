import { PropsWithChildren } from "react"

type GridProps = PropsWithChildren & {
  rows?: React.ReactNode
}

const Grid = ({ children, rows }: GridProps) => {
  let defaultClassnames = "p-16 grid grid-cols-10 w-screen h-screen gap-4 bg-black relative"
  if (rows) {
    defaultClassnames += ` grid-rows-${rows.toString()}`
  }

  return (
    <div className={defaultClassnames}>
      {children}
    </div>
  )
}

export default Grid