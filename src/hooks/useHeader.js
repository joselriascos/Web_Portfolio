import { useEffect, useState, useRef, useMemo } from 'react'
import { MOBILE_WIDTH } from '../utils/consts'
import { useLocation } from 'react-router'

export function useHeader() {
  const [shouldBeVisible, setShouldBeVisible] = useState(true)
  const [headerAboveTitle, setHeaderAboveTitle] = useState(true)
  const location = useLocation()
  const lastScrollY = useRef(window.scrollY)
  const lastTime = useRef(Date.now())

  // Detects if the device is touch
  const isTouch = useMemo(() => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0
  }, [window, navigator])

  /* Checks if the user has scrolled up or down fast to show or hide the header
  Also checks if the user has scrolled above or below the next section.
  In the same way, ir checks if the user has scrolled above or below the title and sets
  the headerAboveTitle state accordingly -> it will be used to hide the small title in the header
  */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const currentTime = Date.now()
      const deltaY = currentScrollY - lastScrollY.current
      const deltaTime = currentTime - lastTime.current

      if (location.pathname === '/') {
        const scrollSpeed = Math.abs(deltaY / deltaTime)

        const titlePosY = document
          .querySelector('.app .title')
          .getBoundingClientRect().top

        const isBelowTitle =
          isTouch && window.innerWidth < MOBILE_WIDTH
            ? currentScrollY > titlePosY + 100
            : currentScrollY >= titlePosY + 200
        const isAboveTitle = !isBelowTitle
        setHeaderAboveTitle(isAboveTitle ? true : false)

        const speedLimit = isTouch ? 1.8 : 2.7

        // Scroll down
        if (deltaY > 0) {
          if (isBelowTitle) {
            setShouldBeVisible(false)
          }
          //Scroll up
        } else {
          if (isAboveTitle) {
            setShouldBeVisible(true)
          } else if (scrollSpeed > speedLimit) {
            setShouldBeVisible(true)
          }
        }
        // For any path different from the home page
      } else {
        const LIMIT = 50
        const currentScrollY = window.scrollY

        if (currentScrollY > LIMIT) {
          //Scroll down
          if (deltaY > 0) {
            setShouldBeVisible(false)
            //Scroll up
          } else {
            setShouldBeVisible(true)
          }
        } else {
          setShouldBeVisible(true)
        }
      }
      lastScrollY.current = currentScrollY
      lastTime.current = currentTime
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname, isTouch])

  return { shouldBeVisible, headerAboveTitle }
}
