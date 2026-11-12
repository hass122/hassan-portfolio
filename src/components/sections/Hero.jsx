import { motion, useReducedMotion } from 'framer-motion'
import personal from '../../data/personal.js'
import Button from '../common/Button.jsx'
import SocialLinks from '../common/SocialLinks.jsx'

export default function Hero() {
  const reduce = useReducedMotion()
  // A short fade-and-rise on first load only. Skipped when reduced motion is preferred.
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }
  const group = { hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.08 } } }

  return (
    <section id="home" className="py-14 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-content items-center gap-14 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <motion.div variants={group} initial="hidden" animate="show" className="min-w-0">
          <motion.p variants={item} className="eyebrow">
            Hello, I’m {personal.name}
          </motion.p>

          <motion.h1 variants={item} className="mt-5 text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-[4.5rem]">
            Building Digital Experiences <em className="text-accent">That Matter.</em>
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-lg font-medium sm:text-xl">
            {personal.title}
          </motion.p>

          <motion.p variants={item} className="mt-4 max-w-xl text-ink/80">
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

          <motion.p variants={item} className="mt-8 flex items-center gap-2 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
            Open to internships, jobs and freelance work
          </motion.p>

          <motion.div variants={item} className="mt-3">
            <SocialLinks showEmailText withLabels />
          </motion.div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[320px] lg:ml-auto">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border border-clay/60" aria-hidden="true" />
          {personal.photo ? (
            <img
              src={personal.photo}
              alt="Portrait of Hassan Raza"
              width="720"
              height="900"
              fetchPriority="high"
              className="relative block aspect-[4/5] w-full rounded-xl border border-line object-cover"
            />
          ) : (
            <div className="relative grid aspect-[4/5] place-items-center rounded-xl border border-line bg-card p-6 text-center">
              <div>
                <p className="font-display text-6xl">{personal.initials}</p>
                <p className="mt-3 text-sm text-muted">Profile photo goes here</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
