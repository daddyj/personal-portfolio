import {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { useNavigationContext } from './useNavigationContext'

const THRESHOLD_PAGE_EDGE_VERTICAL = 100

export const useViewportIntersect = (
  elementRef: RefObject<HTMLDivElement | null>
) => {
  const { setScrollDirection } = useNavigationContext()
  const [isVisible, setIsVisible] = useState(false)
  const [isFullyVisible, setIsFullyVisible] = useState(false)

  const lastIntersectionScrollY = useRef(0)

  const syncScrollDirection = useCallback(() => {
    const currentScrollY = window.scrollY
    const isScrollingUp = currentScrollY < lastIntersectionScrollY.current
    const isTopOfPage = currentScrollY < THRESHOLD_PAGE_EDGE_VERTICAL
    const pageHeight = window.document.body.offsetHeight
    const scrollYSectionEnd =
      currentScrollY + (elementRef.current?.offsetHeight ?? 0)
    const isBottomOfPage =
      pageHeight - scrollYSectionEnd <= THRESHOLD_PAGE_EDGE_VERTICAL

    console.log({
      currentScrollY,
      lastIntersectionScrollY: lastIntersectionScrollY.current,
    })

    if ((isScrollingUp && !isTopOfPage) || isBottomOfPage) {
      setScrollDirection('up')
    } else {
      setScrollDirection('down')
    }
    lastIntersectionScrollY.current = currentScrollY
  }, [elementRef, setScrollDirection])

  useEffect(() => {
    const currentElement = elementRef.current

    const onIntersect = (
      entry: IntersectionObserverEntry[],
      setStateCallback: Dispatch<SetStateAction<boolean>>
    ) => {
      const isIntersecting = entry[0].isIntersecting
      setStateCallback(isIntersecting)
      syncScrollDirection()
    }

    const observerEntry = new IntersectionObserver(
      (entries) => {
        onIntersect(entries, setIsVisible)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    )
    const observerFullVisible = new IntersectionObserver(
      (entries) => {
        onIntersect(entries, setIsFullyVisible)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.9,
      }
    )

    if (currentElement) {
      observerEntry.observe(currentElement)
      observerFullVisible.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observerEntry.unobserve(currentElement)
        observerFullVisible.unobserve(currentElement)
      }
    }
  }, [elementRef, syncScrollDirection])

  return {
    isVisible,
    isFullyVisible,
  }
}
