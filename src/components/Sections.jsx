import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Link,
  ArrowUpRight,
  Award,
  FolderOpen,
  User,
  Briefcase,
  Layers,
  MessageCircle,
  Send,
} from 'lucide-react'
import { profile, skills, experience, education, certifications, freelance } from '../data/resume'
import Reveal, { staggerContainer, staggerItem } from './Reveal'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const heroStats = [
  { value: '10+', label: 'Years in software' },
  { value: '6', label: 'Companies' },
  { value: '3', label: 'Industries' },
]

const dailyDrivers = ['C# / .NET', 'React', 'SQL Server', 'Azure', 'Electron', 'Claude Code', 'Postman', 'Git']

export const sectionClass = 'scroll-mt-20 rounded-3xl border border-line bg-surface p-6 shadow-sm md:p-10 lg:scroll-mt-6'

export function SectionHeading({ eyebrow, title, children }) {
  return (
    <>
      <Reveal as={motion.h2} className="text-sm font-bold uppercase tracking-widest text-accent">
        {eyebrow}
      </Reveal>
      <Reveal as={motion.p} delay={0.05} className="mt-2 text-3xl font-extrabold tracking-tight text-ink">
        {title}
      </Reveal>
      {children && (
        <Reveal as={motion.p} delay={0.1} className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
          {children}
        </Reveal>
      )}
    </>
  )
}

function IconChip({ icon: Icon }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-fg">
      <Icon className="h-4.5 w-4.5" />
    </span>
  )
}

function BentoCard({ href, icon, title, desc, className = '', media, children }) {
  return (
    <motion.a
      href={href}
      variants={staggerItem}
      whileHover={{ y: -3 }}
      className={`group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface p-5 shadow-sm transition-shadow hover:shadow-md ${media ? 'sm:flex-row sm:gap-5' : ''} ${className}`}
    >
      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-3">
          <IconChip icon={icon} />
          <h3 className="text-base font-extrabold uppercase tracking-wide text-ink">{title}</h3>
          <ArrowUpRight className="ml-auto h-4 w-4 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{desc}</p>
        <div className="mt-4 flex flex-1 flex-col">{children}</div>
      </div>
      {media && <div className="mt-4 sm:mt-0 sm:w-3/5 sm:shrink-0">{media}</div>}
    </motion.a>
  )
}

export function Hero() {
  const cover = freelance.find((p) => p.images.length)
  const current = experience[0]

  return (
    <section id="about" className="scroll-mt-20 lg:scroll-mt-6">
      <motion.div initial="hidden" animate="show" variants={staggerContainer} className="pt-6 lg:pt-4">
        <div className="flex items-start justify-between gap-6">
          <motion.h1
            variants={fadeUp}
            className="max-w-3xl font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            Your idea, shipped right.
          </motion.h1>
          <motion.a
            variants={fadeUp}
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden shrink-0 items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg shadow-sm sm:flex"
          >
            Get in touch
            <Send className="h-3.5 w-3.5" />
          </motion.a>
        </div>
        <motion.p variants={fadeUp} className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
          {profile.summary}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col gap-4 rounded-3xl border border-line bg-surface p-4 shadow-sm md:flex-row md:items-center"
        >
          <div className="shrink-0 md:border-r md:border-line md:pr-6 md:pl-2">
            <p className="text-[11px] font-bold uppercase tracking-widest text-accent">Daily drivers</p>
            <p className="font-extrabold text-ink">Tools I work with</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {dailyDrivers.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-line bg-page px-3.5 py-1.5 text-xs font-semibold text-ink"
              >
                {tool}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <BentoCard
          href="#freelance"
          icon={FolderOpen}
          title="Projects"
          desc="Web apps, desktop tools and integrations built for real clients."
          className="md:col-span-2"
          media={
            cover && (
              <div className="overflow-hidden rounded-2xl border border-line shadow-sm">
                <div className="flex items-center gap-1.5 border-b border-line bg-page px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <img
                  src={cover.images[0].src}
                  alt={cover.images[0].caption}
                  className="h-36 w-full object-cover object-top"
                />
              </div>
            )
          }
        >
          {!cover && <p className="mt-auto text-4xl font-extrabold text-ink">{freelance.length} projects</p>}
        </BentoCard>

        <BentoCard href="#about" icon={User} title="About" desc="Who I am and how I work.">
          <dl className="mt-auto grid grid-cols-3 gap-2">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-accent-soft p-3 text-center">
                <dt className="text-2xl font-extrabold text-ink">{stat.value}</dt>
                <dd className="mt-0.5 text-[11px] leading-tight text-slate-500 dark:text-slate-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </BentoCard>

        <BentoCard href="#experience" icon={Briefcase} title="Experience" desc="Banking, media and e-commerce.">
          <div className="mt-auto rounded-2xl border border-line bg-page p-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-accent">Latest</p>
            <p className="mt-1 text-sm font-bold text-ink">{current.role}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {current.company} · {current.period}
            </p>
          </div>
        </BentoCard>

        <BentoCard href="#certifications" icon={Award} title="Credentials" desc="Continuous learning, certified.">
          <ul className="mt-auto space-y-2">
            {certifications.map((cert) => (
              <li key={cert.title} className="rounded-xl border border-line bg-page px-3 py-2">
                <p className="truncate text-xs font-bold text-ink">{cert.title}</p>
                <p className="text-[11px] text-slate-500">{cert.issuer}</p>
              </li>
            ))}
          </ul>
        </BentoCard>

        <BentoCard href="#skills" icon={Layers} title="Skills" desc="What I build with.">
          <ol className="mt-auto divide-y divide-line">
            {skills.slice(0, 5).map((group, i) => (
              <li key={group.category} className="flex items-center justify-between py-1.5 text-xs font-semibold text-ink">
                {group.category}
                <span className="text-slate-400">{String(i + 1).padStart(2, '0')}</span>
              </li>
            ))}
          </ol>
        </BentoCard>

        <BentoCard
          href="#contact"
          icon={MessageCircle}
          title="Contact"
          desc="Open to full-time roles, contracts and freelance work."
          className="md:col-span-2"
        >
          <div className="mt-auto grid gap-2 sm:grid-cols-3">
            {[
              { icon: Mail, value: profile.email },
              { icon: Phone, value: profile.phone },
              { icon: MapPin, value: profile.location },
            ].map(({ icon: Icon, value }) => (
              <div key={value} className="flex items-center gap-2 rounded-xl border border-line bg-page px-3 py-2.5">
                <Icon className="h-4 w-4 shrink-0 text-accent" />
                <span className="truncate text-xs font-semibold text-ink">{value}</span>
              </div>
            ))}
          </div>
        </BentoCard>
      </motion.div>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience" className={sectionClass}>
      <SectionHeading eyebrow="Experience" title="10+ years across banking, media, and e-commerce" />

      <motion.div
        className="relative mt-12 pl-8 md:pl-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div aria-hidden className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-accent via-line to-transparent" />

        {experience.map((job, i) => (
          <motion.article key={job.company + job.period} variants={staggerItem} className="relative pb-10 last:pb-0">
            <span
              className={`absolute top-1.5 -left-8 flex h-3.5 w-3.5 items-center justify-center rounded-full ring-4 ring-surface md:-left-10 ${
                i === 0 ? 'bg-accent' : 'bg-slate-300 dark:bg-slate-600'
              }`}
            />
            <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
              <h3 className="text-lg font-bold text-ink">
                {job.role} · {job.company}
              </h3>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{job.period}</span>
            </div>
            <p className="mt-3 text-slate-600 dark:text-slate-400">{job.summary}</p>
            <ul className="mt-4 space-y-2">
              {job.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {job.tools.map((tool) => (
                <span key={tool} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-ink">
                  {tool}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills" className={sectionClass}>
      <SectionHeading eyebrow="Skills" title="Tools and technologies" />

      <motion.div
        className="mt-10 grid gap-4 sm:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {skills.map((group, i) => (
          <motion.div key={group.category} variants={staggerItem} className="rounded-2xl border border-line bg-page p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-ink">{group.category}</h3>
              <span className="text-xs font-semibold text-slate-400">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300"
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
    <section id="certifications" className={sectionClass}>
      <SectionHeading eyebrow="Credentials" title="Continuous learning" />

      <motion.div
        className="mt-10 grid gap-4 sm:grid-cols-2"
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
            className="flex flex-col rounded-2xl border border-line bg-page p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <IconChip icon={Award} />
              <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400" />
            </div>
            <h3 className="mt-4 font-bold text-ink">{cert.title}</h3>
            <p className="mt-1 text-sm font-semibold text-accent">{cert.issuer}</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {cert.instructor} · {cert.meta}
            </p>
            <p className="mt-1 text-xs font-medium text-slate-400 dark:text-slate-500">Completed {cert.date}</p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}

export function Education() {
  return (
    <section id="education" className={sectionClass}>
      <SectionHeading eyebrow="Education" title="Foundations" />
      <Reveal delay={0.1} className="mt-6 rounded-2xl border border-line bg-page p-6 md:p-8">
        <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
          <h3 className="text-lg font-bold text-ink">{education.school}</h3>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{education.year}</span>
        </div>
        <p className="mt-2 text-slate-600 dark:text-slate-400">{education.degree}</p>
      </Reveal>
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
    <section id="contact" className={sectionClass}>
      <SectionHeading eyebrow="Let's talk" title="Get in touch">
        Open to new full-time roles, contract work, and interesting freelance projects.
      </SectionHeading>

      <motion.div
        className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {cards.map(({ icon, label, value, note, href, external }) => {
          const Wrapper = href ? motion.a : motion.div
          return (
            <Wrapper
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              variants={staggerItem}
              whileHover={href ? { y: -2 } : undefined}
              className="flex flex-col gap-3 rounded-2xl border border-line bg-page p-5 transition-colors hover:border-accent"
            >
              <IconChip icon={icon} />
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-widest text-slate-500">{label}</span>
                <span className="mt-1 block truncate text-sm font-bold text-ink">{value}</span>
                {note && <span className="mt-0.5 block text-[11px] font-medium text-slate-400 dark:text-slate-500">{note}</span>}
              </span>
            </Wrapper>
          )
        })}
      </motion.div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-slate-500 lg:hidden">
      © {new Date().getFullYear()} {profile.name}.
    </footer>
  )
}
