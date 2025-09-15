import { useRouter } from 'next/navigation'

import { HomeSection } from '@/app/lib/types'

export interface NavigationItemProps {
  isSelected: boolean
  onClick: (toSection?: HomeSection) => () => void
  label: string
  section?: HomeSection
}

export const TopNavigationItem = ({
  isSelected,
  onClick,
  label,
  section,
}: NavigationItemProps) => {
  const router = useRouter()

  const handleItemClick = () => {
    if (section) {
      onClick(section)()
    } else router.push('impressum')
  }

  return (
    <button
      onClick={handleItemClick}
      className={`border-b-2 border-transparent transition-all hover:cursor-pointer hover:border-b-blue-500 hover:text-blue-500 ${isSelected ? 'border-b-blue-500 text-blue-500' : ''}`}
    >
      {label}
    </button>
  )
}
