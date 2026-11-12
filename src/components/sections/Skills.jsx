import skills from '../../data/skills.js'
import Section from '../layout/Section.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import Reveal from '../common/Reveal.jsx'

export default function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <SectionHeading
          note="what I work with"
          title="Tools I actually use"
          description="No bars or percentages. Just the things I’ve built with and can explain."
        />
      </Reveal>
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ category, items }, i) => (
          <Reveal key={category} delay={i * 0.06} className="min-w-0">
            <h3 className="text-2xl">{category}</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {items.map((name) => (
                <li key={name} className="py-2.5 text-ink/80">{name}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
