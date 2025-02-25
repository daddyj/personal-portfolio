interface NavItemProps { label: string, selected: boolean; onClick: () => void }

export const NavItem = ({ label, selected, onClick }: NavItemProps) => {
  const fontColor = selected ? 'text-blue-500' : 'text-gray-500'
  const hoverClasses = selected ? '' : 'hover:cursor-pointer hover:text-white'

  return (
    <p onClick={onClick} className={`${fontColor} ${hoverClasses} transition-all`}>{label}</p>
  )
}
