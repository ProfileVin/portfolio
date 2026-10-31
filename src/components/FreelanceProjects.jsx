import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  ChevronLeft,
  ChevronRight,
  HardHat,
  Images,
  Landmark,
  LayoutTemplate,
  MessagesSquare,
  Music,
  Phone,
  ScanLine,
  X,
} from 'lucide-react'
import { freelance } from '../data/resume'
import { staggerContainer, staggerItem } from './Reveal'
import { SectionHeading, sectionClass } from './Sections'

const icons = { Bot, HardHat, Landmark, LayoutTemplate, MessagesSquare, Music, Phone, ScanLine }

const statWidths = ['w-6', 'w-10', 'w-8']
const rowWidths = ['w-3/4', 'w-1/2', 'w-2/3']

function BrowserChrome({ project }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-line bg-page px-3 py-2">
      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      <span className="ml-3 flex-1 truncate rounded-md bg-surface px-3 py-0.5 text-[11px] text-slate-400">
        {project.slug}.app
      </span>
    </div>
  )
}

// Placeholder for projects that have a UI but no screenshots yet.
function MockupPreview({ project }) {
  const Icon = icons[project.icon]
  return (
    <div className="relative h-44 overflow-hidden bg-surface p-4">
      <div className="flex items-center gap-2.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-fg">
          <Icon className="h-3.5 w-3.5" strokeWidth={2} />
        </span>
        <div className="flex flex-1 gap-1.5">
          <span className="h-2 w-10 rounded-full bg-accent-soft" />
          <span className="h-2 w-8 rounded-full bg-accent-soft" />
          <span className="h-2 w-8 rounded-full bg-accent-soft" />
        </div>
      </div>
      <div className="mt-3.5 grid grid-cols-3 gap-2">
        {statWidths.map((w) => (
          <div key={w} className="rounded-lg border border-line bg-page p-2">
            <span className="block h-1.5 w-6 rounded-full bg-accent-soft" />
            <span className={`mt-1.5 block h-2 rounded-full ${w} bg-accent opacity-70`} />
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-1.5">
        {rowWidths.map((w) => (
          <div key={w} className="flex items-center gap-2">
            <span className="h-4 w-4 shrink-0 rounded bg-accent-soft" />
            <span className={`h-1.5 rounded-full bg-accent-soft ${w}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

function FlowPreview({ project }) {
  const Icon = icons[project.icon]
  return (
    <div className="flex h-full min-h-44 flex-col justify-center gap-4 rounded-2xl border border-line bg-surface p-5">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-accent-fg">
        <Icon className="h-5 w-5" />
      </span>
      <ol className="flex flex-wrap items-center gap-1.5">
        {project.flow.map((step, i) => (
          <li key={step} className="flex items-center gap-1.5">
            {i > 0 && <ArrowRight className="h-3.5 w-3.5 text-slate-400" aria-hidden />}
            <span className="rounded-full border border-line bg-page px-2.5 py-1 text-xs font-semibold text-ink">
              {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Cover({ project, onOpen }) {
  if (project.flow) return <FlowPreview project={project} />

  const [first] = project.images
  return (
    <div className="overflow-hidden rounded-2xl border border-line shadow-sm">
      <BrowserChrome project={project} />
      {first ? (
        <button type="button" onClick={onOpen} className="group relative block w-full" aria-label={`Open ${project.name} gallery`}>
          <img
            src={first.src}
            alt={first.caption}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <span className="absolute right-3 bottom-3 flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-fg shadow-md">
            <Images className="h-3.5 w-3.5" />
            {project.images.length} screenshots
          </span>
        </button>
      ) : (
        <MockupPreview project={project} />
      )}
    </div>
  )
}

function Gallery({ project, onClose }) {
  const dialogRef = useRef(null)
  const [index, setIndex] = useState(0)
  const count = project.images.length
  const image = project.images[index]
  const go = (step) => setIndex((i) => (i + step + count) % count)

  // Native modal dialog: Esc, focus containment and focus return come from the browser.
  useEffect(() => {
    dialogRef.current.showModal()
  }, [])

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && dialogRef.current.close()}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(1)
        if (e.key === 'ArrowLeft') go(-1)
      }}
      aria-label={`${project.name} screenshots`}
      className="m-auto w-[min(1200px,94vw)] rounded-3xl border border-line bg-surface p-0 text-ink backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
        <div className="min-w-0">
          <p className="truncate font-bold">{project.name}</p>
          <p className="text-xs text-slate-500">
            {image.caption} · {index + 1} / {count}
          </p>
        </div>
        <button
          type="button"
          onClick={() => dialogRef.current.close()}
          aria-label="Close gallery"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line hover:border-accent"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="relative bg-page">
        <img src={image.src} alt={image.caption} className="max-h-[70vh] w-full object-contain" />
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous screenshot"
              className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-fg shadow-md"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next screenshot"
              className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-fg shadow-md"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="flex gap-2 overflow-x-auto p-3">
          {project.images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${img.caption}`}
              aria-current={i === index ? 'true' : undefined}
              className={`shrink-0 overflow-hidden rounded-lg border-2 transition-opacity ${
                i === index ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img.src} alt="" className="h-14 w-24 object-cover object-top" />
            </button>
          ))}
        </div>
      )}
    </dialog>
  )
}

function TagGroup({ label, items }) {
  if (!items.length) return null
  return (
    <div className="mt-3">
      <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">{label}</span>
      <div className="mt-1.5 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span key={item} className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-ink">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function FreelanceProjects() {
  const [gallery, setGallery] = useState(null)

  return (
    <section id="freelance" className={sectionClass}>
      <SectionHeading eyebrow="Freelance Projects" title="Freelance · Mar 2026 – Present">
        Alongside full-time work, I design and build software for independent clients — from web portals and desktop
        tools to voice and messaging integrations — owning everything from architecture and data modeling to UI and
        deployment.
      </SectionHeading>

      <motion.div
        className="mt-10 grid gap-5 md:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        variants={staggerContainer}
      >
        {freelance.map((project) => (
          <motion.article
            key={project.slug}
            variants={staggerItem}
            className="flex flex-col rounded-3xl border border-line bg-page p-5 transition-shadow hover:shadow-md"
          >
            <Cover project={project} onOpen={() => setGallery(project)} />

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-accent-fg">
                {project.kind}
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{project.period}</span>
            </div>
            <h3 className="mt-2 text-lg font-bold text-ink">{project.name}</h3>
            <p className="text-sm font-semibold text-accent">{project.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>

            <ul className="mt-4 space-y-1.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <TagGroup label="Frontend" items={project.frontend} />
            <TagGroup label="Backend" items={project.backend} />
            <TagGroup label="Other" items={project.other} />
          </motion.article>
        ))}
      </motion.div>

      {gallery && <Gallery project={gallery} onClose={() => setGallery(null)} />}
    </section>
  )
}
