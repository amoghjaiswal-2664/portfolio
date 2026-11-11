import { useEffect, useState } from 'react'
import { site } from '../data/site'

const MIN_MS = 1050 // keep in sync with the 1.4s in --animate-load

export default function Preloader() {
  const [done, setDone] = useState(false) // start fading out
  const [gone, setGone] = useState(false) // remove from the page

  // Wait for the page to finish loading AND for the minimum time to pass.
  useEffect(() => {
    const start = performance.now()
    let timer = 0

    const finish = () => {
      const wait = Math.max(0, MIN_MS - (performance.now() - start))
      timer = window.setTimeout(() => setDone(true), wait)
    }

    if (document.readyState === 'complete') finish()
    else window.addEventListener('load', finish, { once: true })

    return () => {
      window.removeEventListener('load', finish)
      window.clearTimeout(timer)
    }
  }, [])

  // After the fade-out finishes, take the overlay out of the page entirely.
  useEffect(() => {
    if (!done) return
    const timer = window.setTimeout(() => setGone(true), 600)
    return () => window.clearTimeout(timer)
  }, [done])

  // Stop the page scrolling underneath while the overlay is up.
  useEffect(() => {
    if (gone) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [gone])

  if (gone) return null

  return (
    <div
      role="status"
      className={`fixed inset-0 z-[100] grid place-items-center bg-bg transition-opacity duration-500 ${
        done ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <span className="sr-only">Loading…</span>
      <div className="text-center" aria-hidden="true">
        <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{site.name}</p>
        <div className="mx-auto mt-6 h-0.5 w-52 overflow-hidden rounded-full bg-line">
          <div className="h-full w-2/5 animate-slide rounded-full bg-accent motion-reduce:w-full motion-reduce:animate-none" />
        </div>
      </div>
    </div>
  )
}