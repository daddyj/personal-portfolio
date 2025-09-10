import { BaseIcon } from './BaseIcon'
import { IconProps } from './types'

export function Vscode(props: IconProps) {
  return (
    <BaseIcon
      href="https://code.visualstudio.com/"
      name="Vscode"
      viewBox="0 0 8 8"
      {...props}
    >
      <path
        fill="#007acc"
        fillRule="evenodd"
        d="m16 30l12-20v14zM4 10l12-8l12 8zm0 0l12 6v14L4 24z"
      />
      <path fill="#007acc" d="M6 2L0 7V6l6-6l2 1v6L6 8L0 2V1l6 5" />
    </BaseIcon>
  )
}

export const VscodeSvg = () => (
  // <!-- Icon from Pico-icon by Picon Contributors - https://github.com/yne/picon/blob/master/OFL.txt -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 8 8"
  >
    <path fill="#007acc" d="M6 2L0 7V6l6-6l2 1v6L6 8L0 2V1l6 5" />
  </svg>
)
