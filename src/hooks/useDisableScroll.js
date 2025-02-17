import { useEffect } from 'react'

export function useDisableScroll({ isMenuOpen }) {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => (document.body.style.overflow = 'auto')
  }, [isMenuOpen])
}
