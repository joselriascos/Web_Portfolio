/* hook to handle animations in title on hover and touch */
export function useTitle({ textRef }) {
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const color = `rgb(${(x / rect.width) * 255}, ${
      (y / rect.height) * 255
    }, 250)`
    const xPercentage = Math.round((x / rect.width) * 100) + '%'
    const yPercentage = Math.round((y / rect.height) * 100) + '%'

    setTimeout(() => {
      if (textRef.current) {
        textRef.current.style.setProperty('--x', xPercentage)
        textRef.current.style.setProperty('--y', yPercentage)
        textRef.current.style.setProperty('--color', color)
      }
    }, 100)
  }

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (textRef.current) {
        textRef.current.style.setProperty('--color', 'transparent')
      }
    }, 101)
  }

  /* Simulates touch on touch devices */
  const handleClick = (e) => {
    if (!textRef.current) return
    e.preventDefault()

    const { clientX, clientY } = e
    const { left, top, width, height } = textRef.current.getBoundingClientRect()

    const x = clientX - left
    const y = clientY - top
    const color = `rgb(${(x / width) * 255}, ${(y / height) * 255}, 250)`

    textRef.current.style.setProperty('--x', `${(x / width) * 100}%`)
    textRef.current.style.setProperty('--y', `${(y / height) * 100}%`)
    textRef.current.style.setProperty('--color', color)
  }

  return { handleMouseLeave, handleMouseMove, handleClick }
}
