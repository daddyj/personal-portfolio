import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline'

import { ScrollDirection } from '@/app/lib/types'

interface ArrowIconProps {
  onClick: () => void
  direction: ScrollDirection
}

export const ArrowIcon = ({ onClick, direction }: ArrowIconProps) => {
  const ArrowDirectionComponent =
    direction === 'up' ? ArrowUpIcon : ArrowDownIcon
  return (
    <div
      className="animate animate-fade fixed bottom-4 left-4 hidden sm:bottom-16 sm:left-16 sm:block"
      onClick={onClick}
    >
      <ArrowDirectionComponent className="hover:animate-infinite animate-once size-32 animate-pulse hover:cursor-pointer hover:text-blue-500" />
    </div>
  )
}
