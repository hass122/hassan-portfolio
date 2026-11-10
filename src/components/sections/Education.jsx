import { GraduationCap } from 'lucide-react'
import education from '../../data/education.js'
import Section from '../layout/Section.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import Card from '../common/Card.jsx'
import Reveal from '../common/Reveal.jsx'

export default function Education() {
  return (
    <Section id="education">
      <Reveal>
        <SectionHeading note="where I’m studying" title="Education" />
      </Reveal>
      <div className="space-y-5">
        {education.map((e) => (
          <Reveal key={e.id}>
            <Card className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-indigo/15 text-indigo">
                <GraduationCap size={28} aria-hidden="true" />
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-bold">{e.degree}</h3>
                <p className="mt-1 text-muted">{e.university}</p>
                {e.meta && <p className="mt-1 text-sm text-muted">{e.meta}</p>}
              </div>
              <span className="tag self-start sm:self-center">{e.status}</span>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
