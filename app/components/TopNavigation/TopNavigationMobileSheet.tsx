import { XMarkIcon } from '@heroicons/react/24/outline'

import { HomeSection } from '@/app/lib/types'

import { NavigationItemList } from './NavigationItemList'
import { NavigationItemProps } from './TopNavigationItem'

type TopNavigationMobileSheetProps = Pick<NavigationItemProps, 'onClick'> & {
  currentSection: HomeSection
  open: boolean
}

export const TopNavigationMobileSheet = ({
  open,
  currentSection,
  onClick,
}: TopNavigationMobileSheetProps) => {
  if (!open) return null

  return (
    <div className="animate-fade animate-duration-420 fixed top-0 left-0 z-1 flex h-screen w-screen flex-col items-center gap-4 bg-[var(--background)] p-8 text-4xl">
      <div className="flex w-full justify-end" onClick={onClick()}>
        <XMarkIcon className="size-24" />
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <NavigationItemList onClick={onClick} currentSection={currentSection} />
      </div>
    </div>
  )
}
