import education from '../../data/education.js'
import Section from '../layout/Section.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import Reveal from '../common/Reveal.jsx'

export default function Education() {
  return (
    <Section id="education">
      <Reveal>
        <SectionHeading note="where I’m studying" title="Education" />
      </Reveal>
      <div className="divide-y divide-line border-y border-line">
        {education.map((e) => (
          <Reveal key={e.id} className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
            <div className="min-w-0">
              <h3 className="text-xl sm:text-2xl">{e.degree}</h3>
              <p className="mt-1 text-muted">{e.university}</p>
              {e.meta && <p className="mt-1 font-mono text-xs text-muted">{e.meta}</p>}
            </div>
            <span className="tag shrink-0">{e.status}</span>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
