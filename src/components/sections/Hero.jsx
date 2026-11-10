import { motion, useReducedMotion } from 'framer-motion'
import personal from '../../data/personal.js'
import Button from '../common/Button.jsx'
import SocialLinks from '../common/SocialLinks.jsx'

const chips = [
  { label: 'React', cls: '-left-3 top-8 sm:-left-6' },
  { label: 'Tailwind CSS', cls: '-right-2 top-24 sm:-right-8', delay: '1.5s' },
  { label: 'PHP', cls: 'bottom-10 -left-2 sm:-left-8', delay: '3s' },
]

export default function Hero() {
  const reduce = useReducedMotion()
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  }
  const group = { hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.1 } } }

  return (
    <section id="home" className="relative overflow-hidden py-14 lg:py-24">
      <div className="bg-dots absolute inset-0 -z-10" aria-hidden="true" />
      <div className="ambient left-[-10%] top-[-10%] h-72 w-72 bg-indigo/20" aria-hidden="true" />
      <div className="ambient bottom-[-15%] right-[-5%] h-80 w-80 bg-cyan/15" aria-hidden="true" />

      <div className="mx-auto grid max-w-content items-center gap-16 px-6 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div variants={group} initial="hidden" animate="show" className="min-w-0">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 text-sm text-muted"
          >
            <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
            Open to internships, jobs and freelance work
          </motion.span>

          <motion.p variants={item} className="eyebrow mt-6">
            Hello, I’m {personal.name}
          </motion.p>

          <motion.h1 variants={item} className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Building Digital Experiences <span className="text-gradient">That Matter.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 font-display text-lg font-semibold text-sub sm:text-xl">
            {personal.title}
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-xl text-body">
            I enjoy building modern, responsive, and user-friendly web experiences using creative ideas and
            practical development skills.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#projects">Explore My Work</Button>
            <Button href="#contact" variant="secondary">Contact Me</Button>
            {personal.resumeUrl ? (
              <Button href={personal.resumeUrl} download="Hassan_Raza_CV.pdf" variant="accent">Download CV</Button>
            ) : (
              <Button disabled variant="accent">CV coming soon</Button>
            )}
          </motion.div>

          <motion.div variants={item} className="mt-8">
            <SocialLinks showEmailText withLabels />
          </motion.div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[300px] lg:ml-auto">
          <div className="absolute -inset-4 -z-10 rounded-[32px] bg-grad-primary opacity-20 blur-2xl" aria-hidden="true" />
          <div className="spin-border">
            {personal.photo ? (
              <img
                src={personal.photo}
                alt="Portrait of Hassan Raza"
                width="720"
                height="900"
                fetchPriority="high"
                className="relative block aspect-[4/5] w-full rounded-[26px] object-cover"
              />
            ) : (
              <div className="relative grid aspect-[4/5] place-items-center rounded-[26px] bg-card p-6 text-center">
                <div>
                  <p className="text-gradient font-display text-6xl font-extrabold">{personal.initials}</p>
                  <p className="mt-3 text-sm text-muted">Profile photo goes here</p>
                </div>
              </div>
            )}
          </div>
          {chips.map(({ label, cls, delay }) => (
            <span
              key={label}
              style={delay ? { animationDelay: delay } : undefined}
              className={`float-slow absolute hidden rounded-full border border-line bg-card px-3 py-1 text-xs text-ink shadow-soft sm:block ${cls}`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
