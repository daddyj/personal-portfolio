import { BaseIcon } from './BaseIcon'
import { IconProps } from './types'

export function Git(props: IconProps) {
  return (
    <BaseIcon
      href="https://git-scm.com/"
      name="Git"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      >
        <path d="M18 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-4V3" />
        <path d="M8 18h1c3.5 0 9-2.1 9-8.5V8" />
      </g>
    </BaseIcon>
  )
}
