import experience from '../../data/experience.js'
import Section from '../layout/Section.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import Card from '../common/Card.jsx'
import Reveal from '../common/Reveal.jsx'

export default function Experience() {
  return (
    <Section id="experience" alt>
      <Reveal>
        <SectionHeading note="where I’ve worked" title="Experience" />
      </Reveal>
      <ol className="relative space-y-8 border-l-2 border-field pl-8">
        {experience.map((item) => (
          <li key={item.id} className="relative">
            <span
              className="absolute -left-[41px] top-7 h-4 w-4 rounded-full border-4 border-surface bg-cyan"
              aria-hidden="true"
            />
            <Reveal>
              <Card>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold">{item.role}</h3>
                    <p className="mt-1 text-muted">{item.company}</p>
                    {item.dates && <p className="mt-1 text-sm text-muted">{item.dates}</p>}
                  </div>
                  <span className="tag">{item.duration}</span>
                </div>
                <ul className="mt-5 list-disc space-y-1 pl-5 text-sm text-muted">
                  {item.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <li key={t} className="tag !text-xs">{t}</li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
