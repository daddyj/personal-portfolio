import { HomeSection } from '@/app/lib/types'

export interface NavigationItemProps {
  isSelected: boolean
  onClick: (toSection?: HomeSection) => () => void
  label: string
  section: HomeSection
}

export const TopNavigationItem = ({
  isSelected,
  onClick,
  label,
  section,
}: NavigationItemProps) => {
  return (
    <div
      onClick={onClick(section)}
      className={`border-b-2 border-transparent transition-all hover:cursor-pointer hover:border-b-blue-500 hover:text-blue-500 ${isSelected ? 'border-b-blue-500 text-blue-500' : ''}`}
    >
      {label}
    </div>
  )
}
