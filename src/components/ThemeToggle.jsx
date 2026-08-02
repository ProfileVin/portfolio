import { useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { animate as fmAnimate, motion, useMotionValue, useTransform } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

function getInitialTheme() {
  const stored = localStorage.getItem('theme')
  if (stored) return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)
  const bulbRef = useRef(null)
  const pullY = useMotionValue(0)
  const cordScale = useTransform(pullY, [0, 32], [1, 2.4])
  const bulbGlow = useTransform(pullY, [0, 32], [0, 1])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const applyTheme = (next, origin) => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!document.startViewTransition || reduceMotion) {
      setTheme(next)
      return
    }

    const endRadius = Math.hypot(
      Math.max(origin.x, window.innerWidth - origin.x),
      Math.max(origin.y, window.innerHeight - origin.y),
    )
    document.documentElement.style.setProperty('--lamp-x', `${origin.x}px`)
    document.documentElement.style.setProperty('--lamp-y', `${origin.y}px`)
    document.documentElement.style.setProperty('--lamp-r', `${endRadius}px`)

    document.startViewTransition(() => {
      flushSync(() => setTheme(next))
    })
  }

  const bulbOrigin = () => {
    const rect = bulbRef.current?.getBoundingClientRect()
    return rect ? { x: rect.left + rect.width / 2, y: rect.bottom } : { x: window.innerWidth / 2, y: 0 }
  }

  const toggleFromEvent = (event) => {
    applyTheme(theme === 'dark' ? 'light' : 'dark', { x: event.clientX, y: event.clientY })
  }

  const handleDragEnd = (_, info) => {
    if (info.offset.y > 18) {
      applyTheme(theme === 'dark' ? 'light' : 'dark', bulbOrigin())
    }
    fmAnimate(pullY, 0, { type: 'spring', stiffness: 500, damping: 22 })
  }

  const handleKnobKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      applyTheme(theme === 'dark' ? 'light' : 'dark', bulbOrigin())
    }
  }

  return (
    <div className="relative h-9 w-9">
      <motion.button
        ref={bulbRef}
        type="button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={toggleFromEvent}
        aria-label="Toggle theme"
        className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-slate-400 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500"
        style={{ boxShadow: useTransform(bulbGlow, (v) => `0 0 ${v * 14}px ${v * 3}px rgba(250, 204, 21, ${v * 0.45})`) }}
      >
        {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </motion.button>

      <div className="absolute top-full left-1/2 flex -translate-x-1/2 flex-col items-center">
        <motion.span
          style={{ scaleY: cordScale }}
          className="h-2.5 w-px origin-top bg-slate-300 dark:bg-slate-600"
        />
        <motion.div
          role="button"
          tabIndex={0}
          aria-label="Pull to toggle theme"
          onKeyDown={handleKnobKeyDown}
          drag="y"
          dragConstraints={{ top: 0, bottom: 32 }}
          dragElastic={0.12}
          style={{ y: pullY }}
          onDragEnd={handleDragEnd}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 1.25 }}
          className="-mt-0.5 h-2.5 w-2.5 cursor-grab touch-none rounded-full bg-slate-400 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 active:cursor-grabbing dark:bg-slate-500"
        />
      </div>
    </div>
  )
}
