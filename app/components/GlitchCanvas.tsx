import React, { useEffect, useRef } from 'react'

import { PixelGlitchScreen } from './PixelGlitchScreen'

interface GlitchCanvasProps {
  mode: 'skills' | 'pixel'
  rows?: number
  cols?: number
  /**
   * Optional interval override (in ms). For mode "skills" this is the interval between glitches.
   * For mode "pixel", if not provided a random value is used.
   */
  interval?: number
  /**
   * Only used in "skills" mode. A function that returns the text to display in a cell.
   * It receives the row and column indices.
   */
  getLabel?: (row: number, col: number) => string
  /**
   * Optional class name for the container div.
   */
  containerClassName?: string
}

export const GlitchCanvas: React.FC<GlitchCanvasProps> = ({
  mode,
  rows,
  cols,
  interval,
  getLabel,
  containerClassName,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = window.innerWidth
    const height = window.innerHeight
    canvas.width = width
    canvas.height = height

    let intervalId: number | NodeJS.Timeout

    if (mode === 'skills') {
      // Default to a 5x3 grid for "skills" mode unless overridden
      const gridRows = rows ?? 5
      const gridCols = cols ?? 3
      const cellWidth = width / gridCols
      const cellHeight = height / gridRows

      // Helper function to "glitch" a cell by drawing a colored rectangle and overlay text.
      function glitchCell(
        row: number,
        col: number,
        label: string,
        timeout: number
      ) {
        if (!ctx) return
        const x = Math.round(col * cellWidth)
        const y = Math.round(row * cellHeight)
        const w = Math.ceil(cellWidth) - 1
        const h = Math.ceil(cellHeight) - 1

        // Draw colored rectangle.
        ctx.fillStyle = '#2B7FFF'
        ctx.fillRect(x, y, w, h)

        // Draw centered text.
        ctx.fillStyle = 'white'
        ctx.font = '32px sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(
          label,
          x + w / 2,
          y + h / 2,
          ctx.measureText(label).width * 0.88
        )

        // Clear the cell after the given timeout.
        setTimeout(() => {
          ctx.clearRect(x, y, w, h)
        }, timeout)
      }

      // Use a fixed interval (default 1000ms) to randomly glitch two cells.
      const glitchInterval = interval ?? 1000
      intervalId = setInterval(() => {
        const randomCol = Math.floor(Math.random() * gridCols)
        const randomRow = Math.floor(Math.random() * gridRows)
        const randomCol2 = Math.floor(Math.random() * gridCols)
        const randomRow2 = Math.floor(Math.random() * gridRows)

        // If a getLabel function is provided, use it; otherwise default to "glitch!"
        const label1 = getLabel ? getLabel(randomRow, randomCol) : 'glitch!'
        const label2 = getLabel ? getLabel(randomRow2, randomCol2) : 'glitch!'

        glitchCell(randomRow, randomCol, label1, 2000)
        glitchCell(randomRow2, randomCol2, label2, 1750)
      }, glitchInterval)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [mode, rows, cols, interval, getLabel])

  if (mode === 'pixel') {
    return (
      <PixelGlitchScreen
        className={containerClassName}
        interval={interval}
        gridSize={rows ?? 20}
      />
    )
  }

  const defaultContainerClass =
    mode === 'skills'
      ? 'relative w-full h-full overflow-hidden border border-blue-500 animate-fade'
      : 'relative w-screen h-screen overflow-hidden'

  return (
    <div className={containerClassName || defaultContainerClass}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute top-0 left-0 h-full w-full"
      />
    </div>
  )
}
