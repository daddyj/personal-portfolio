export const iconsKey = [
  'Canvas',
  'Firebase',
  'GCloud',
  'Nextjs',
  'React',
  'React-Native',
  'Tamagui',
] as const
export type TechIcon = (typeof iconsKey)[number]

export * from './Canvas'
export * from './Firebase'
export * from './GCloud'
export * from './Nextjs'
export * from './React'
export * from './ReactNative'
export * from './Tamagui'
