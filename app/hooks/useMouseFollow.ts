import { useMotionValue } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface UseMouseFollowOptions {
  maxRotation?: number
  invertX?: boolean
  invertY?: boolean
  enabled?: boolean
}

export const useMouseFollow = ({
  maxRotation = 7,
  invertX = false,
  invertY = false,
  enabled = true,
}: UseMouseFollowOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  useEffect(() => {
    const element = ref.current
    if (!element || !enabled) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const relativeX = e.clientX - centerX
      const relativeY = e.clientY - centerY

      const distanceX = Math.min(Math.abs(relativeX) / (rect.width / 2), 1)
      const distanceY = Math.min(Math.abs(relativeY) / (rect.height / 2), 1)

      const newRotateX =
        distanceY * maxRotation * (relativeY > 0 ? -1 : 1) * (invertX ? -1 : 1)
      const newRotateY =
        distanceX * maxRotation * (relativeX > 0 ? 1 : -1) * (invertY ? -1 : 1)

      rotateX.set(newRotateX)
      rotateY.set(newRotateY)
    }

    const handleMouseLeave = () => {
      rotateX.set(0)
      rotateY.set(0)
    }

    window.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
      rotateX.set(0)
      rotateY.set(0)
    }
  }, [enabled, invertX, invertY, maxRotation, rotateX, rotateY])

  return {
    ref,
    rotateX,
    rotateY,
  }
}
