import React, { useEffect, useRef } from 'react'

interface PixelEffect {
  x: number
  y: number
  width: number
  height: number
  color: string
  rgbOffset: { r: number; g: number; b: number }
  scale: number
  rotation: number
  opacity: number
  lifetime: number
  createdAt: number
  pixelDisplacement: { x: number; y: number }
  glitchType: 'normal' | 'split' | 'distort'
  colorShift: number
  noiseIntensity: number
}

interface PixelGlitchScreenProps {
  /**
   * Optional class name for the container div
   */
  className?: string
  /**
   * Optional interval override (in ms) between glitch effects
   */
  interval?: number
  /**
   * Optional grid size override (default is 20x20)
   */
  gridSize?: number
  /**
   * Maximum number of active effects at once (default: 10)
   */
  maxEffects?: number
  /**
   * Optional ref to the element to track
   */
  ref?: React.RefObject<HTMLDivElement | null>
}

export const PixelGlitchScreen: React.FC<PixelGlitchScreenProps> = ({
  className,
  interval,
  gridSize = 20,
  maxEffects = 10,
  ref,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const effectsRef = useRef<PixelEffect[]>([])
  const lastFrameTimeRef = useRef<number>(0)
  const isDarkMode = useRef(false) // Initialize with default value
  const noiseCanvasRef = useRef<HTMLCanvasElement | null>(null)

  // Listen for color scheme changes
  useEffect(() => {
    // Set initial value
    isDarkMode.current = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      isDarkMode.current = e.matches
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Create noise canvas
  useEffect(() => {
    noiseCanvasRef.current = document.createElement('canvas')
    noiseCanvasRef.current.width = 512
    noiseCanvasRef.current.height = 512
  }, [])

  // Generate new noise frame
  // const generateNoiseFrame = () => {
  //   const canvas = noiseCanvasRef.current
  //   if (!canvas) return
  //   const ctx = canvas.getContext('2d')
  //   if (!ctx) return

  //   const imageData = ctx.createImageData(512, 512)
  //   const data = imageData.data

  //   // Create more intense noise pattern
  //   for (let i = 0; i < data.length; i += 4) {
  //     if (Math.random() > 0.5) {
  //       // Much higher density (was 0.7)
  //       const intensity = Math.random() * 255
  //       data[i] = data[i + 1] = data[i + 2] = intensity
  //       data[i + 3] = Math.random() * 100 // Higher opacity (was 60)
  //     }
  //   }
  //   ctx.putImageData(imageData, 0, 0)
  // }

  // Generate a glitch color with RGB splitting - reduced offset for subtler effect
  const generateGlitchColor = () => {
    // More varied color generation for glitch effects
    const glitchTypes = ['normal', 'split', 'distort'] as const
    const glitchType =
      glitchTypes[Math.floor(Math.random() * glitchTypes.length)]

    // Randomly choose between different color schemes
    const colorSchemes = [
      // White glitch
      { baseHue: 0, saturation: 0, lightness: 45 },
      // Cyan glitch
      { baseHue: 180, saturation: 100, lightness: 50 },
      // Magenta glitch
      { baseHue: 300, saturation: 100, lightness: 50 },
      // Yellow glitch
      { baseHue: 60, saturation: 100, lightness: 50 },
    ]

    const scheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
    const hueVariation = Math.random() * 40 - 20
    const saturation = scheme.saturation + Math.random() * 20
    const lightness = scheme.lightness + Math.random() * 20

    return {
      base: `hsl(${scheme.baseHue + hueVariation}, ${saturation}%, ${lightness}%)`,
      rgbOffset: {
        r: Math.random() * 12 - 6,
        g: Math.random() * 12 - 6,
        b: Math.random() * 12 - 6,
      },
      glitchType,
      colorShift: Math.random() * 360,
      noiseIntensity: Math.random() * 0.5 + 0.5,
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: false }) // Disable alpha for better performance
    if (!ctx) return

    // Function to update canvas size
    const updateCanvasSize = () => {
      const width = window.innerWidth
      const height = Math.max(
        window.innerHeight,
        document.documentElement.scrollHeight
      )
      canvas.width = width
      canvas.height = height
    }

    // Initial size setup
    updateCanvasSize()

    // Handle window resize
    const handleResize = () => {
      updateCanvasSize()
    }
    window.addEventListener('resize', handleResize)

    let animationFrameId: number

    const gridRows = gridSize
    const gridCols = gridSize
    const cellWidth = canvas.width / gridCols
    const cellHeight = canvas.height / gridRows

    // Create effects less frequently
    const pixelInterval = interval ?? Math.random() * 300 + 200
    const intervalId = setInterval(() => {
      // Only create new effects if we're below the maximum
      if (effectsRef.current.length >= maxEffects) return

      const randomCol = Math.floor(Math.random() * gridCols)
      const randomRow = Math.floor(Math.random() * gridRows)
      const x = Math.round(randomCol * cellWidth)
      const y = Math.round(randomRow * cellHeight)
      const w = Math.ceil(cellWidth)
      const h = Math.ceil(cellHeight)

      // Create only one effect per interval
      effectsRef.current.push(createPixelEffect(x, y, w, h))
    }, pixelInterval)

    // Move createPixelEffect inside useEffect
    const createPixelEffect = (
      x: number,
      y: number,
      width: number,
      height: number
    ): PixelEffect => {
      const { base, rgbOffset, glitchType, colorShift, noiseIntensity } =
        generateGlitchColor()

      // Create more dynamic pixel displacement
      const pixelDisplacement = {
        x: Math.random() * 10 - 5,
        y: Math.random() * 10 - 5,
      }

      return {
        x,
        y,
        width,
        height,
        color: base,
        rgbOffset,
        scale: 0.95 + Math.random() * 0.1, // More subtle scaling
        rotation: (Math.random() - 0.5) * 0.1, // Slightly more rotation
        opacity: 0.7 + Math.random() * 0.3,
        lifetime: 100 + Math.random() * 100, // Shorter lifetime for more abrupt effects
        createdAt: Date.now(),
        pixelDisplacement,
        glitchType,
        colorShift,
        noiseIntensity,
      }
    }

    // const noiseUpdateInterval = setInterval(generateNoiseFrame, 50) // Update noise every 50ms

    // Animation loop
    const animate = (timestamp: number) => {
      if (!ctx) return

      // Limit frame rate to 30fps for better performance
      if (timestamp - lastFrameTimeRef.current < 33) {
        animationFrameId = requestAnimationFrame(animate)
        return
      }
      lastFrameTimeRef.current = timestamp

      // Clear the entire canvas while maintaining transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw effects
      const currentTime = Date.now()
      effectsRef.current = effectsRef.current.filter((effect) => {
        const age = currentTime - effect.createdAt
        if (age > effect.lifetime) return false

        const progress = age / effect.lifetime
        const currentOpacity = effect.opacity * (1 - progress)

        ctx.save()

        // Apply base transformation
        ctx.translate(
          effect.x + effect.width / 2 + effect.pixelDisplacement.x,
          effect.y + effect.height / 2 + effect.pixelDisplacement.y
        )
        ctx.rotate(effect.rotation)
        ctx.scale(effect.scale, effect.scale)
        ctx.translate(-effect.width / 2, -effect.height / 2)

        // Draw based on glitch type
        switch (effect.glitchType) {
          case 'split':
            // RGB split effect
            ctx.globalCompositeOperation = 'lighter'
            ctx.globalAlpha = currentOpacity * 0.3

            // Draw each channel with offset
            const channels = [
              {
                offset: effect.rgbOffset.r,
                color: `hsl(${effect.colorShift}, 100%, 50%)`,
              },
              {
                offset: effect.rgbOffset.g,
                color: `hsl(${(effect.colorShift + 120) % 360}, 100%, 50%)`,
              },
              {
                offset: effect.rgbOffset.b,
                color: `hsl(${(effect.colorShift + 240) % 360}, 100%, 50%)`,
              },
            ]

            channels.forEach((channel) => {
              ctx.fillStyle = channel.color
              ctx.fillRect(channel.offset, 0, effect.width, effect.height)
            })
            break

          case 'distort':
            // Distorted pixel effect
            ctx.globalCompositeOperation = 'source-over'
            ctx.globalAlpha = currentOpacity

            // Create a distorted rectangle
            const segments = 4
            const segmentWidth = effect.width / segments

            for (let i = 0; i < segments; i++) {
              const distortion = Math.sin(progress * Math.PI * 2 + i) * 5
              ctx.fillStyle = effect.color
              ctx.fillRect(
                i * segmentWidth,
                distortion,
                segmentWidth,
                effect.height - distortion * 2
              )
            }
            break

          default:
            // Normal glitch with noise
            ctx.globalCompositeOperation = 'source-over'
            ctx.globalAlpha = currentOpacity
            ctx.fillStyle = effect.color

            // Add some noise to the rectangle
            const noise = Math.random() * effect.noiseIntensity
            ctx.fillRect(
              noise,
              noise,
              effect.width - noise * 2,
              effect.height - noise * 2
            )
        }

        ctx.restore()
        return true
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    // Start animation loop
    animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      clearInterval(intervalId)
      // clearInterval(noiseUpdateInterval)
    }
  }, [interval, gridSize, maxEffects])

  return (
    <div
      ref={ref}
      className={`fixed top-0 left-0 min-h-full w-full ${className ?? ''}`}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute top-0 left-0 h-full w-full"
      />
    </div>
  )
}
