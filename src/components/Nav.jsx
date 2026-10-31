import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Award, Briefcase, Download, FolderOpen, GraduationCap, Home, Layers, Link, Mail, MessageCircle, Phone } from 'lucide-react'
import { profile } from '../data/resume'
import resumePdf from '../assets/resume/Resume - Alvin Baclagan.pdf'
import ThemeToggle from './ThemeToggle'
import PaletteSwitcher from './PaletteSwitcher'

const links = [
  { id: 'about', label: 'Home', icon: Home },
  { id: 'freelance', label: 'Projects', icon: FolderOpen },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Layers },
  { id: 'certifications', label: 'Credentials', icon: Award },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'contact', label: 'Contact', icon: MessageCircle },
]

const socials = [
  { href: profile.linkedin, label: 'LinkedIn', icon: Link, external: true },
  { href: `mailto:${profile.email}`, label: 'Email', icon: Mail },
  { href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`, label: 'Phone', icon: Phone },
]

const initials = profile.name
  .split(' ')
  .map((part) => part[0])
  .join('')

function useActiveSection() {
  const [active, setActive] = useState(links[0].id)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
  return active
}

function Avatar({ className }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-accent font-bold tracking-tight text-accent-fg ${className}`}
    >
      {initials}
    </span>
  )
}

function DownloadCv({ className = '', onDone }) {
  return (
    <motion.a
      href={resumePdf}
      download="Alvin-Baclagan-Resume.pdf"
      onClick={() => onDone?.()}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`flex items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-accent-fg transition-opacity hover:opacity-90 ${className}`}
    >
      <Download className="h-3.5 w-3.5" />
      Download CV
    </motion.a>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()

  return (
    <>
      {/* desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen flex-col overflow-y-auto px-6 py-8 lg:flex">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 text-3xl shadow-lg ring-4 ring-surface" />
          <p className="mt-4 text-lg font-bold text-ink">
            {profile.name}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">@alvinbaclagan</p>

          <div className="mt-5 flex items-center gap-2">
            {socials.map(({ href, label, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <ThemeToggle />
            <PaletteSwitcher />
          </div>
        </div>

        <nav className="mt-8 border-t border-line pt-6">
          <ul className="space-y-1">
            {links.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    active === id
                      ? 'bg-surface text-ink shadow-sm ring-1 ring-line'
                      : 'text-slate-600 hover:bg-accent-soft hover:text-ink dark:text-slate-400'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto pt-6">
          <DownloadCv className="w-full" />
          <p className="mt-4 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </aside>

      {/* mobile top bar */}
      <header className="sticky top-0 z-50 border-b border-line bg-page/90 backdrop-blur lg:hidden">
        <nav className="flex items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-2.5 font-bold tracking-tight text-ink">
            <Avatar className="h-8 w-8 text-xs" />
            {profile.name}
          </a>

          <div className="flex items-center gap-2">
            <PaletteSwitcher align="right" />
            <ThemeToggle />
            <button
              type="button"
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
                className="block h-0.5 w-5 origin-center bg-ink"
              />
              <motion.span animate={{ opacity: open ? 0 : 1 }} className="block h-0.5 w-5 bg-ink" />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
                className="block h-0.5 w-5 origin-center bg-ink"
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
              className="flex flex-col gap-1 overflow-hidden border-t border-line px-5 text-sm font-medium text-slate-600 dark:text-slate-400"
            >
              {links.map(({ id, label, icon: Icon }) => (
                <li key={id} className="py-1.5 first:pt-3">
                  <a href={`#${id}`} className="flex items-center gap-3" onClick={() => setOpen(false)}>
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                </li>
              ))}
              <li className="py-3">
                <DownloadCv onDone={() => setOpen(false)} />
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
