import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  if (!visible) return null
  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-btn border border-line bg-card text-ink shadow-soft transition-colors hover:border-accent hover:text-accent"
      style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  )
}
