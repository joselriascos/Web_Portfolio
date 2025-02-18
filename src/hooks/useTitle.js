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

    if (textRef.current) {
      textRef.current.style.setProperty('--x', xPercentage)
      textRef.current.style.setProperty('--y', yPercentage)
      textRef.current.style.setProperty('--color', color)
    }
  }

  const handleMouseLeave = () => {
    if (textRef.current) {
      textRef.current.style.setProperty('--color', 'transparent')
    }
  }

  return { handleMouseLeave, handleMouseMove }
}
