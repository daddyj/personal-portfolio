import { PropsWithChildren, RefObject } from 'react'

type GridProps = PropsWithChildren & {
  rows?: number | string
  className?: string
  id?: string
  ref?: RefObject<HTMLDivElement | null>
}

const Grid = ({ id = '', children, rows, className, ref }: GridProps) => {
  let defaultClassnames =
    'p-12 lg:p-16 py-18 lg:pt-24 grid grid-cols-10 w-screen gap-4 lg:min-h-screen relative m-auto max-w-[120rem] lg:bg-black text-gray-300'
  defaultClassnames += ` grid-rows-${(rows || 1).toString()}`

  return (
    <div ref={ref} id={id} className={`${defaultClassnames} ${className}`}>
      {children}
    </div>
  )
}

export default Grid
