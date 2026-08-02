import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { profile } from '../data/resume'
import { generateResumePdf } from '../utils/generateResumePdf'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#freelance', label: 'Freelance' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? 'border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90'
          : 'border-transparent bg-white dark:bg-slate-950'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight text-slate-900 dark:text-white">
          {profile.name}
        </a>

        <ul className="hidden gap-8 text-sm font-medium text-slate-600 dark:text-slate-400 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-slate-900 dark:hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            onClick={generateResumePdf}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 sm:flex"
          >
            <Download className="h-3.5 w-3.5" />
            Download CV
          </motion.button>

          <ThemeToggle />

          <button
            type="button"
            className="flex flex-col gap-1.5 p-2 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              className="block h-0.5 w-5 origin-center bg-slate-800 dark:bg-slate-200"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="block h-0.5 w-5 bg-slate-800 dark:bg-slate-200"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              className="block h-0.5 w-5 origin-center bg-slate-800 dark:bg-slate-200"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-1 overflow-hidden border-t border-slate-200 bg-white px-6 text-sm font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 md:hidden"
          >
            {links.map((link) => (
              <li key={link.href} className="py-2">
                <a href={link.href} className="block" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-2 sm:hidden">
              <button
                type="button"
                onClick={() => {
                  generateResumePdf()
                  setOpen(false)
                }}
                className="flex items-center gap-1.5 font-medium text-indigo-600 dark:text-indigo-400"
              >
                <Download className="h-3.5 w-3.5" />
                Download CV
              </button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
