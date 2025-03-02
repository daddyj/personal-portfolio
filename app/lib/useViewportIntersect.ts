import { RefObject, useEffect, useState } from 'react'

export const useViewportIntersect = (
  elementRef: RefObject<HTMLDivElement | null>
) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isFullyVisible, setIsFullyVisible] = useState(false)

  useEffect(() => {
    const currentElement = elementRef.current
    const observerEntry = new IntersectionObserver(
      (entries) => {
        // entries[0] is single observed element instance
        const entry = entries[0]
        const isIntersecting = entry.isIntersecting
        setIsVisible(isIntersecting)
        if (isIntersecting) console.log({ isIntersecting })
      },
      {
        root: null, // observing viewport
        rootMargin: '0px',
        threshold: 0.1, // Trigger when at least 42% of the element is visible
      }
    )
    const observerFullVisible = new IntersectionObserver(
      (entries) => {
        // entries[0] is single observed element instance
        const entry = entries[0]
        const isIntersecting = entry.isIntersecting
        // console.log('full visible interaction?', isIntersecting)
        setIsFullyVisible(entry.isIntersecting)
        if (isIntersecting) console.log({ isIntersecting })
      },
      {
        root: null, // observing viewport
        rootMargin: '0px',
        threshold: 0.9, // Trigger when page fully visible
      }
    )

    if (elementRef.current) {
      observerEntry.observe(elementRef.current)
      observerFullVisible.observe(elementRef.current)
    }

    return () => {
      if (currentElement) {
        observerEntry.unobserve(currentElement)
        observerFullVisible.unobserve(currentElement)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    isVisible,
    isFullyVisible,
  }
}
