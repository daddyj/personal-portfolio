import { useMotionValue } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface UseMouseFollowOptions {
  maxRotation?: number
  invertX?: boolean
  invertY?: boolean
  enabled?: boolean
}

export const useMouseFollow = ({
  maxRotation = 15,
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

      // Calculate normalized position (-1 to 1) relative to center
      // -1 means left/top, +1 means right/bottom
      const normalizedX = (e.clientX - centerX) / (rect.width / 2)
      const normalizedY = (e.clientY - centerY) / (rect.height / 2)

      // Clamp values between -1 and 1
      const clampedX = Math.max(Math.min(normalizedX, 1), -1)
      const clampedY = Math.max(Math.min(normalizedY, 1), -1)

      // For X rotation (vertical mouse movement):
      // - Mouse at top (negative Y) → Card leans back (negative X rotation)
      // - Mouse at bottom (positive Y) → Card leans forward (positive X rotation)
      // We invert the Y value to maintain correct vertical behavior
      const newRotateX = -clampedY * maxRotation * (invertX ? -1 : 1)

      // For Y rotation (horizontal mouse movement):
      // - Mouse at left (negative X) → Left edge back, right edge forward (positive Y rotation)
      // - Mouse at right (positive X) → Left edge forward, right edge back (negative Y rotation)
      // We invert the X value to make the card face the mouse
      const newRotateY = -clampedX * maxRotation * (invertY ? -1 : 1)

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
