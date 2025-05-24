import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline'

import { ScrollDirection } from '@/app/lib/types'
import { cn } from '@/app/lib/utils'

interface ArrowIconProps {
  onClick: () => void
  direction: ScrollDirection
  className?: string
}

export const ArrowIcon = ({
  onClick,
  direction,
  className,
}: ArrowIconProps) => {
  const ArrowDirectionComponent =
    direction === 'up' ? ArrowUpIcon : ArrowDownIcon
  return (
    <div
      className={cn(
        'animate animate-fade fixed bottom-4 left-4 hidden',
        className
      )}
      onClick={onClick}
    >
      <ArrowDirectionComponent className="animate-once size-16 scale-100 animate-pulse stroke-blue-500 transition-all hover:scale-150 hover:cursor-pointer" />
    </div>
  )
}
