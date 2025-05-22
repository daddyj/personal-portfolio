export type Technology = {
  name: string
  icon?: React.ReactNode
  level: 'expert' | 'advanced' | 'intermediate'
}

export const TechnologyBadge = ({ name, icon, level }: Technology) => (
  <div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5">
    {icon && <div className="relative h-5 w-5">{icon}</div>}
    <span className="text-sm font-medium">{name}</span>
    <span
      className={`rounded-full px-2 py-0.5 text-xs ${
        level === 'expert'
          ? 'bg-blue-100 text-blue-700'
          : level === 'advanced'
            ? 'bg-green-100 text-green-700'
            : 'bg-gray-100 text-gray-700'
      }`}
    >
      {level}
    </span>
  </div>
)
