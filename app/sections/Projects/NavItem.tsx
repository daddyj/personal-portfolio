interface NavItemProps { label: string, selected: boolean; onClick: () => void }

export const NavItem = ({ label, selected, onClick }: NavItemProps) => {
  const fontColor = selected ? 'text-blue-500' : 'text-gray-500'
  const borderColor = selected ? 'border-b-blue-500' : 'border-b-transparent'
  const hoverClasses = selected ? '' : 'hover:cursor-pointer hover:border-b-2 hover:border-white hover:text-white'

  return (
    <p onClick={onClick} className={`${fontColor} border-b-2 ${borderColor} ${hoverClasses} transition-all`}>{label}</p>
  )
}
