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
const INTERSECTION_THRESHOLD = 0.2 // Lower threshold for initial visibility
const FULL_VISIBILITY_THRESHOLD = 0.7 // Lower threshold for full visibility
const ROOT_MARGIN_PERCENTAGE = 0.1 // 10% of viewport height for root margin

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
    const viewportHeight = window.innerHeight
    const elementHeight = elementRef.current?.offsetHeight ?? 0
    const scrollYSectionEnd = currentScrollY + elementHeight
    const isBottomOfPage =
      pageHeight - scrollYSectionEnd <= THRESHOLD_PAGE_EDGE_VERTICAL

    // Use viewportHeight to determine if we're near the bottom of the viewport
    const isNearBottomOfViewport =
      elementRef.current &&
      elementRef.current.getBoundingClientRect().bottom <=
        viewportHeight + THRESHOLD_PAGE_EDGE_VERTICAL

    if (
      (isScrollingUp && !isTopOfPage) ||
      isBottomOfPage ||
      isNearBottomOfViewport
    ) {
      setScrollDirection('up')
    } else {
      setScrollDirection('down')
    }
    lastIntersectionScrollY.current = currentScrollY
  }, [elementRef, setScrollDirection])

  useEffect(() => {
    const currentElement = elementRef.current
    if (!currentElement) return

    const viewportHeight = window.innerHeight
    const rootMargin = `${Math.round(viewportHeight * ROOT_MARGIN_PERCENTAGE)}px`

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
        rootMargin,
        threshold: INTERSECTION_THRESHOLD,
      }
    )
    const observerFullVisible = new IntersectionObserver(
      (entries) => {
        onIntersect(entries, setIsFullyVisible)
      },
      {
        root: null,
        rootMargin,
        threshold: FULL_VISIBILITY_THRESHOLD,
      }
    )

    observerEntry.observe(currentElement)
    observerFullVisible.observe(currentElement)

    return () => {
      observerEntry.unobserve(currentElement)
      observerFullVisible.unobserve(currentElement)
    }
  }, [elementRef, syncScrollDirection])

  return {
    isVisible,
    isFullyVisible,
  }
}
