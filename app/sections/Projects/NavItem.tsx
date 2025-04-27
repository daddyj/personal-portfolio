interface NavItemProps {
  label: string
  selected: boolean
  onClick: () => void
}

export const NavItem = ({ label, selected, onClick }: NavItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 text-lg font-medium transition-all ${
        selected
          ? 'text-white'
          : 'text-gray-300 hover:cursor-pointer hover:text-white'
      }`}
    >
      {label}
      {selected && (
        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-white transition-all" />
      )}
    </button>
  )
}
