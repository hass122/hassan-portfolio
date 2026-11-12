import experience from '../../data/experience.js'
import Section from '../layout/Section.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import Reveal from '../common/Reveal.jsx'

export default function Experience() {
  return (
    <Section id="experience" alt>
      <Reveal>
        <SectionHeading note="where I’ve worked" title="Experience" />
      </Reveal>
      <ol className="relative space-y-12 border-l border-field pl-8">
        {experience.map((item) => (
          <li key={item.id} className="relative">
            <span className="absolute -left-[37px] top-2.5 h-2.5 w-2.5 rounded-full bg-clay" aria-hidden="true" />
            <Reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-2xl sm:text-3xl">{item.role}</h3>
                <span className="tag">{item.duration}</span>
              </div>
              <p className="mt-1 text-muted">{item.company}</p>
              {item.dates && <p className="mt-1 font-mono text-xs text-muted">{item.dates}</p>}
              <ul className="mt-5 max-w-3xl list-disc space-y-1.5 pl-5 text-ink/80">
                {item.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
                {item.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
