export function scrollTop({ behavior = 'smooth' } = {}) {
  document.querySelector('html').scrollTo({ top: 0, behavior: behavior })
}
