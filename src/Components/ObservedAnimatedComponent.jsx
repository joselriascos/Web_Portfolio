import {
  useState,
  useEffect,
  useRef,
  Children,
  forwardRef,
  cloneElement,
} from 'react'

export const ObservedAnimatedComponent = forwardRef(
  (
    { children, classIfVisible = '', classIfNotVisible = '', threshold = 0.2 },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false)
    const localRef = useRef(null)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting)
        },
        { threshold }
      )

      if (localRef.current) {
        observer.observe(localRef.current)
      }

      return () => observer.disconnect()
    }, [])

    const mergedRef = (node) => {
      localRef.current = node
      if (ref) {
        if (typeof ref === 'function') {
          ref(node)
        } else {
          ref.current = node
        }
      }
    }

    const child = Children.only(children)
    if (!child || typeof child !== 'object' || !child.type) {
      console.error('ObservedAnimatedComponent must have a single child')
      return null
    }

    const className = `${child.props.className || ''} ${
      isVisible ? classIfVisible : classIfNotVisible
    }`.trim()

    return cloneElement(child, { ref: mergedRef, className })
  }
)
