import { useState, useEffect, useRef, Children, cloneElement } from 'react'

export function ObservedAnimatedComponent({
  children,
  classIfVisible = '',
  classIfNotVisible = '',
  threshold = 0.2,
}) {
  const [isVisible, setIsVisible] = useState(false)
  const compRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold }
    )

    if (compRef.current) {
      observer.observe(compRef.current)
    }

    return () => observer.disconnect()
  }, [children])

  const child = Children.only(children)

  if (!child || typeof child !== 'object' || !child.type) {
    console.error('ObservedAnimatedComponent must have a single child')
    return null
  }

  const className = `${child.props.className || ''} ${
    isVisible ? classIfVisible : classIfNotVisible
  }`.trim()

  return cloneElement(child, { ref: compRef, className })
}
