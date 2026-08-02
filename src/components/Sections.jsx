import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Link, ArrowUpRight, Award } from 'lucide-react'
import { profile, skills, experience, education, certifications } from '../data/resume'
import Reveal, { staggerContainer, staggerItem } from './Reveal'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const heroStats = [
  { value: '10+', label: 'Years in software development' },
  { value: '6', label: 'Companies, from startups to enterprise' },
  { value: '3', label: 'Industries — banking, media, e-commerce' },
]

export function Hero() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-indigo-400/25 blur-[100px] dark:bg-indigo-500/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full bg-amber-300/25 blur-[100px] dark:bg-amber-400/15"
      />

      <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-14 md:pt-28 md:pb-20">
        <motion.div initial="hidden" animate="show" variants={staggerContainer}>
          <motion.p
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400"
          >
            {profile.title}
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-3xl font-display text-5xl font-medium tracking-tight text-slate-900 dark:text-white md:text-7xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {profile.summary}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Get in touch
            </motion.a>
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-amber-400 hover:text-amber-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-amber-400 dark:hover:text-amber-400"
            >
              View experience
            </motion.a>
          </motion.div>

          <motion.dl variants={fadeUp} className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-slate-200 pt-8 dark:border-slate-800">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl font-medium text-slate-900 dark:text-white md:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-slate-500 dark:text-slate-400">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience" className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <Reveal as={motion.h2} className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          Experience
        </Reveal>
        <Reveal
          as={motion.p}
          delay={0.05}
          className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          10+ years across banking, media, and e-commerce
        </Reveal>

        <motion.div
          className="relative mt-12 pl-8 md:pl-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-indigo-300 via-slate-200 to-transparent dark:from-indigo-500/40 dark:via-slate-800"
          />

          {experience.map((job, i) => (
            <motion.article key={job.company + job.period} variants={staggerItem} className="relative pb-10 last:pb-0">
              <span
                className={`absolute top-1.5 -left-8 flex h-3.5 w-3.5 items-center justify-center rounded-full ring-4 ring-white dark:ring-slate-950 md:-left-10 ${
                  i === 0 ? 'bg-amber-500' : 'bg-indigo-400'
                }`}
              />
              <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {job.role} · {job.company}
                </h3>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{job.period}</span>
              </div>
              <p className="mt-3 text-slate-600 dark:text-slate-400">{job.summary}</p>
              <ul className="mt-4 space-y-2">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl border-t border-slate-200 px-6 py-14 dark:border-slate-800">
      <Reveal as={motion.h2} className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
        Skills
      </Reveal>
      <Reveal
        as={motion.p}
        delay={0.05}
        className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white"
      >
        Tools and technologies
      </Reveal>

      <motion.div
        className="mt-10 grid gap-6 sm:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {skills.map((group) => (
          <motion.div
            key={group.category}
            variants={staggerItem}
            className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800"
          >
            <h3 className="font-semibold text-slate-900 dark:text-white">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-5xl border-t border-slate-200 px-6 py-14 dark:border-slate-800">
      <Reveal as={motion.h2} className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
        Certifications
      </Reveal>
      <Reveal
        as={motion.p}
        delay={0.05}
        className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white"
      >
        Continuous learning
      </Reveal>

      <motion.div
        className="mt-10 grid gap-6 sm:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {certifications.map((cert) => (
          <motion.a
            key={cert.title}
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            variants={staggerItem}
            whileHover={{ y: -3 }}
            className="flex flex-col rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-md dark:border-slate-800"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <Award className="h-5 w-5" />
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{cert.title}</h3>
            <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">{cert.issuer}</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {cert.instructor} · {cert.meta}
            </p>
            <p className="mt-1 text-xs font-medium text-slate-400 dark:text-slate-500">
              Completed {cert.date}
            </p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}

export function Education() {
  return (
    <section id="education" className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <Reveal as={motion.h2} className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          Education
        </Reveal>
        <Reveal
          delay={0.1}
          className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950 md:p-8"
        >
          <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{education.school}</h3>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{education.year}</span>
          </div>
          <p className="mt-2 text-slate-600 dark:text-slate-400">{education.degree}</p>
        </Reveal>
      </div>
    </section>
  )
}

export function Contact() {
  const cards = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      note: 'WhatsApp / Viber',
      href: `tel:${profile.phone.replace(/[^+\d]/g, '')}`,
    },
    { icon: Link, label: 'LinkedIn', value: 'LinkedIn', href: profile.linkedin, external: true },
    { icon: MapPin, label: 'Location', value: profile.location },
  ]

  return (
    <section id="contact" className="border-t border-slate-200 bg-white px-6 py-16 dark:border-slate-800 dark:bg-slate-950 md:py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal as={motion.p} className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          Let's Talk
        </Reveal>
        <Reveal
          as={motion.p}
          delay={0.05}
          className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl"
        >
          Get In Touch
        </Reveal>
        <Reveal as={motion.p} delay={0.1} className="mt-4 max-w-xl text-slate-600 dark:text-slate-400">
          Open to new full-time roles, contract work, and interesting freelance projects.
        </Reveal>

    

        <motion.div
          className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {cards.map(({ icon: Icon, label, value, note, href, external }) => {
            const Wrapper = href ? motion.a : motion.div
            return (
              <Wrapper
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                variants={staggerItem}
                whileHover={href ? { y: -2 } : undefined}
                className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                    {label}
                  </span>
                  <span className="mt-1 block truncate text-sm font-bold text-slate-900 dark:text-white">
                    {value}
                  </span>
                  {note && (
                    <span className="mt-0.5 block text-[11px] font-medium text-slate-400 dark:text-slate-500">
                      {note}
                    </span>
                  )}
                </span>
              </Wrapper>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto max-w-5xl px-6 text-center text-sm text-slate-500 dark:text-slate-500">
        © {new Date().getFullYear()} {profile.name}.
      </div>
    </footer>
  )
}
