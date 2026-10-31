import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Palette } from 'lucide-react'

// Keep ids and hexes in sync with the [data-palette] rules in index.css.
const palettes = [
  { id: 'teal', name: 'Deep Teal / Soft Sage', dark: '#152d35', light: '#d4ecdd' },
  { id: 'black', name: 'Zero Black / Ghost Green', dark: '#050505', light: '#d7ffe0' },
  { id: 'blue', name: 'Quantum Blue / Ice Glass', dark: '#2457ff', light: '#dff7ff' },
  { id: 'fir', name: 'Deep Fir / Sulu', dark: '#163300', light: '#9fe870' },
  { id: 'iris', name: 'Royal Iris / Butter Yellow', dark: '#3a0ca3', light: '#fff275' },
  { id: 'graphite', name: 'Deep Graphite / Lime Compute', dark: '#1f2329', light: '#b6ff2e' },
  { id: 'navy', name: 'Midnight Navy / Lime Glow', dark: '#071a52', light: '#a7ff83' },
]

function getInitialPalette() {
  return localStorage.getItem('palette') || 'teal'
}

export default function PaletteSwitcher({ align = 'left' }) {
  const [palette, setPalette] = useState(getInitialPalette)
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    document.documentElement.dataset.palette = palette
    localStorage.setItem('palette', palette)
  }, [palette])

  useEffect(() => {
    if (!open) return
    const onPointer = (e) => !rootRef.current?.contains(e.target) && setOpen(false)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={rootRef} className="relative">
      <motion.button
        type="button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Choose color palette"
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-accent"
      >
        <Palette className="h-4 w-4" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className={`absolute top-11 z-50 w-64 rounded-2xl border border-line bg-surface p-2 shadow-xl ${
              align === 'right' ? 'right-0' : 'left-0'
            }`}
          >
            <p className="px-2 pt-1 pb-2 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
              Color palette
            </p>
            {palettes.map((p) => (
              <button
                key={p.id}
                type="button"
                aria-label={p.name}
                aria-pressed={palette === p.id}
                onClick={() => {
                  setPalette(p.id)
                  setOpen(false)
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-2 py-1.5 text-left text-xs font-medium text-ink transition-colors hover:bg-accent-soft ${
                  palette === p.id ? 'bg-accent-soft' : ''
                }`}
              >
                <span className="flex h-6 w-10 shrink-0 overflow-hidden rounded-md border border-line">
                  <span className="flex-1" style={{ background: p.dark }} />
                  <span className="flex-1" style={{ background: p.light }} />
                </span>
                {p.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
