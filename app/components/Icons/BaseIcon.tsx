import { ReactNode } from 'react'

import { IconProps } from './types'

interface BaseIconProps extends IconProps {
  href: string
  name: string
  children: ReactNode
}

export function BaseIcon({
  name,
  children,
  className,
  ...props
}: BaseIconProps) {
  return (
    <div className="flex flex-col items-center gap-2 transition-all">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2rem"
        height="2rem"
        className={className}
        {...props}
      >
        {children}
      </svg>
      <p className="text-center text-sm font-semibold">{name}</p>
    </div>
  )
}
