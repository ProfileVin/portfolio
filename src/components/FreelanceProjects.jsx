import { motion } from 'framer-motion'
import { Building2, Mail, PhoneCall, RefreshCw, Heart } from 'lucide-react'
import { freelance } from '../data/resume'
import Reveal, { staggerContainer, staggerItem } from './Reveal'

const icons = { Building2, Mail, PhoneCall, RefreshCw, Heart }

const gradients = [
  'from-indigo-500 to-blue-500',
  'from-rose-500 to-orange-400',
  'from-emerald-500 to-teal-500',
  'from-violet-500 to-fuchsia-500',
  'from-amber-500 to-pink-500',
]

const accents = [
  {
    badge: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400',
    bar: 'bg-indigo-500',
    soft: 'bg-indigo-100 dark:bg-indigo-500/20',
  },
  {
    badge: 'bg-rose-50 text-rose-600 dark:bg-rose-500/15 dark:text-rose-400',
    bar: 'bg-rose-500',
    soft: 'bg-rose-100 dark:bg-rose-500/20',
  },
  {
    badge: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400',
    bar: 'bg-emerald-500',
    soft: 'bg-emerald-100 dark:bg-emerald-500/20',
  },
  {
    badge: 'bg-violet-50 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400',
    bar: 'bg-violet-500',
    soft: 'bg-violet-100 dark:bg-violet-500/20',
  },
  {
    badge: 'bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400',
    bar: 'bg-amber-500',
    soft: 'bg-amber-100 dark:bg-amber-500/20',
  },
]

const statWidths = ['w-6', 'w-10', 'w-8']
const rowWidths = ['w-3/4', 'w-1/2', 'w-2/3']

function BrowserMockup({ project, gradient, accent }) {
  const Icon = icons[project.icon]
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm dark:border-slate-800">
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-3 py-2 dark:border-slate-800 dark:bg-slate-800">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 flex flex-1 items-center gap-1.5 truncate rounded-md bg-white px-3 py-0.5 text-[11px] text-slate-400 dark:bg-slate-900 dark:text-slate-500">
          <span className={`h-2.5 w-2.5 shrink-0 rounded-sm bg-linear-to-br ${gradient}`} />
          {project.name.toLowerCase().replace(/[^a-z0-9]+/g, '') + '.app'}
        </span>
      </div>

      {/* abstract app UI preview */}
      <div className="relative h-44 overflow-hidden bg-white p-4 dark:bg-slate-950">
        <div
          className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-linear-to-br ${gradient} opacity-10 blur-2xl`}
        />

        {/* top bar */}
        <div className="flex items-center gap-2.5">
          <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${accent.badge}`}>
            <Icon className="h-3.5 w-3.5" strokeWidth={2} />
          </span>
          <div className="flex flex-1 gap-1.5">
            <span className="h-2 w-10 rounded-full bg-slate-200 dark:bg-slate-800" />
            <span className="h-2 w-8 rounded-full bg-slate-100 dark:bg-slate-800/70" />
            <span className="h-2 w-8 rounded-full bg-slate-100 dark:bg-slate-800/70" />
          </div>
          <span className="h-5 w-5 shrink-0 rounded-full bg-slate-200 dark:bg-slate-700" />
        </div>

        {/* stat tiles */}
        <div className="mt-3.5 grid grid-cols-3 gap-2">
          {statWidths.map((w, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-slate-100 bg-slate-50 p-2 dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="block h-1.5 w-6 rounded-full bg-slate-200 dark:bg-slate-700" />
              <span className={`mt-1.5 block h-2 rounded-full ${w} ${accent.bar} opacity-80`} />
            </div>
          ))}
        </div>

        {/* list rows */}
        <div className="mt-3 space-y-1.5">
          {rowWidths.map((w, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className={`h-4 w-4 shrink-0 rounded ${accent.soft}`} />
              <span className={`h-1.5 flex-1 rounded-full bg-slate-100 dark:bg-slate-800 ${w}`} />
              <span className={`h-1.5 w-5 shrink-0 rounded-full ${accent.bar} opacity-60`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TagGroup({ label, items }) {
  if (!items.length) return null
  return (
    <div className="mt-3">
      <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
        {label}
      </span>
      <div className="mt-1.5 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function FreelanceProjects() {
  return (
    <section id="freelance" className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <Reveal as={motion.h2} className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          Freelance Projects
        </Reveal>
        <Reveal
          as={motion.p}
          delay={0.05}
          className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          Independent client work · May 2026 – Present
        </Reveal>
        <Reveal as={motion.p} delay={0.1} className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
          Alongside full-time work, I design and build full stack applications for independent
          clients — from public-facing portals to desktop tools — owning everything from
          architecture and data modeling to UI and deployment.
        </Reveal>

        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {freelance.map((project, i) => (
            <motion.article
              key={project.name}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
            >
              <BrowserMockup
                project={project}
                gradient={gradients[i % gradients.length]}
                accent={accents[i % accents.length]}
              />

              <div className="mt-5 flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{project.name}</h3>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{project.period}</span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-indigo-600 dark:text-indigo-400">{project.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>

              <ul className="mt-4 space-y-1.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
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
      </div>
    </section>
  )
}
