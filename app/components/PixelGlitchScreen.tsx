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
}

export const PixelGlitchScreen: React.FC<PixelGlitchScreenProps> = ({
  className,
  interval,
  gridSize = 20,
  maxEffects = 10,
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
  const generateNoiseFrame = () => {
    const canvas = noiseCanvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const imageData = ctx.createImageData(512, 512)
    const data = imageData.data

    // Create more intense noise pattern
    for (let i = 0; i < data.length; i += 4) {
      if (Math.random() > 0.5) {
        // Much higher density (was 0.7)
        const intensity = Math.random() * 255
        data[i] = data[i + 1] = data[i + 2] = intensity
        data[i + 3] = Math.random() * 100 // Higher opacity (was 60)
      }
    }
    ctx.putImageData(imageData, 0, 0)
  }

  // Generate a glitch color with RGB splitting - reduced offset for subtler effect
  const generateGlitchColor = () => {
    const baseHue = 210 // Blue
    const hueVariation = Math.random() * 20 - 10 // Reduced variation
    const saturation = 85 + Math.random() * 15
    const lightness = 45 + Math.random() * 15
    return {
      base: `hsl(${baseHue + hueVariation}, ${saturation}%, ${lightness}%)`,
      rgbOffset: {
        r: Math.random() * 6 - 3, // Reduced offset
        g: Math.random() * 6 - 3,
        b: Math.random() * 6 - 3,
      },
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
      const { base, rgbOffset } = generateGlitchColor()
      return {
        x,
        y,
        width,
        height,
        color: base,
        rgbOffset,
        scale: 0.9 + Math.random() * 0.2,
        rotation: (Math.random() - 0.5) * 0.05,
        opacity: 0.6 + Math.random() * 0.2,
        lifetime: 200 + Math.random() * 150,
        createdAt: Date.now(),
      }
    }

    const noiseUpdateInterval = setInterval(generateNoiseFrame, 50) // Update noise every 50ms

    // Animation loop
    const animate = (timestamp: number) => {
      if (!ctx) return

      // Limit frame rate to 30fps for better performance
      if (timestamp - lastFrameTimeRef.current < 33) {
        animationFrameId = requestAnimationFrame(animate)
        return
      }
      lastFrameTimeRef.current = timestamp

      // Use dynamic background color based on color scheme
      ctx.fillStyle = isDarkMode.current
        ? 'rgba(0, 0, 0, 0.15)'
        : 'rgba(255, 255, 255, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw effects
      const currentTime = Date.now()
      effectsRef.current = effectsRef.current.filter((effect) => {
        const age = currentTime - effect.createdAt
        if (age > effect.lifetime) return false

        const progress = age / effect.lifetime
        const currentOpacity = effect.opacity * (1 - progress)

        // Draw RGB split effect
        ctx.save()
        ctx.translate(effect.x + effect.width / 2, effect.y + effect.height / 2)
        ctx.rotate(effect.rotation)
        ctx.scale(effect.scale, effect.scale)
        ctx.translate(-effect.width / 2, -effect.height / 2)

        // Draw all channels at once for better performance
        ctx.globalCompositeOperation = 'lighter'
        ctx.fillStyle = effect.color
        ctx.globalAlpha = currentOpacity * 0.2
        ctx.fillRect(effect.rgbOffset.r, 0, effect.width, effect.height)
        ctx.fillRect(effect.rgbOffset.g, 0, effect.width, effect.height)
        ctx.fillRect(effect.rgbOffset.b, 0, effect.width, effect.height)

        // Main color
        ctx.globalCompositeOperation = 'source-over'
        ctx.fillStyle = effect.color
        ctx.globalAlpha = currentOpacity
        ctx.fillRect(0, 0, effect.width, effect.height)

        ctx.restore()
        return true
      })

      // // Draw scanline
      // const scanlineY = ((timestamp % 3000) / 3000) * canvas.height
      // // Update scanline color based on color scheme
      // const scanlineColor = isDarkMode.current
      //   ? 'rgba(255, 255, 255, 0.03)'
      //   : 'rgba(0, 0, 0, 0.03)'
      // ctx.fillStyle = scanlineColor
      // ctx.fillRect(0, scanlineY, canvas.width, 1)

      // // Draw animated noise texture with stronger effect
      // if (noiseCanvasRef.current) {
      //   // First pass - multiply blend for better visibility on white
      //   ctx.globalCompositeOperation = 'multiply'
      //   ctx.globalAlpha = 0.4 // Increased from 0.25
      //   ctx.drawImage(noiseCanvasRef.current, 0, 0, canvas.width, canvas.height)

      //   // Second pass - overlay blend for texture
      //   ctx.globalCompositeOperation = 'overlay'
      //   ctx.globalAlpha = 0.3 // Increased from 0.15
      //   ctx.drawImage(noiseCanvasRef.current, 2, 2, canvas.width, canvas.height)

      //   // Third pass - screen blend for highlights
      //   ctx.globalCompositeOperation = 'screen'
      //   ctx.globalAlpha = 0.2 // Increased from 0.1
      //   ctx.drawImage(
      //     noiseCanvasRef.current,
      //     -2,
      //     -2,
      //     canvas.width,
      //     canvas.height
      //   )

      //   ctx.globalCompositeOperation = 'source-over'
      //   ctx.globalAlpha = 1
      // }

      animationFrameId = requestAnimationFrame(animate)
    }

    // Start animation loop
    animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      clearInterval(intervalId)
      clearInterval(noiseUpdateInterval)
    }
  }, [interval, gridSize, maxEffects])

  return (
    <div className={`fixed inset-0 min-h-screen w-full ${className ?? ''}`}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute top-0 left-0 h-full w-full mix-blend-overlay"
      />
    </div>
  )
}
