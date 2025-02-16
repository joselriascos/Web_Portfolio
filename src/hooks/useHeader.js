import { useEffect, useState, useRef, useMemo } from 'react'

export function useHeader() {
  const [shouldBeVisible, setShouldBeVisible] = useState(true)
  const lastScrollY = useRef(window.scrollY)
  const lastTime = useRef(Date.now())

  // Detects if the device is touch
  const isTouch = useMemo(() => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0
  }, [window, navigator])

  /* Checks if the user has scrolled up or down fast to show or hide the header
  Also checks if the user has scrolled above or below the next section */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const currentTime = Date.now()
      const deltaY = currentScrollY - lastScrollY.current
      const deltaTime = currentTime - lastTime.current

      const scrollSpeed = Math.abs(deltaY / deltaTime)

      const titlePosY = document
        .querySelector('.work-section .title')
        .getBoundingClientRect().top

      const isBelowTitle = isTouch
        ? currentScrollY > titlePosY - 200
        : currentScrollY >= titlePosY
      const isAboveTitle = currentScrollY < titlePosY

      // Scroll down
      if (deltaY > 0) {
        if (isBelowTitle) {
          setShouldBeVisible(false)
        }
        //Scroll up
      } else {
        if (isAboveTitle) {
          setShouldBeVisible(true)
        } else if (scrollSpeed > 2.5) {
          setShouldBeVisible(true)
        }
      }

      lastScrollY.current = currentScrollY
      lastTime.current = currentTime
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return { shouldBeVisible }
}
