import { Layout, Server, Database, Wrench } from 'lucide-react'
import skills from '../../data/skills.js'
import Section from '../layout/Section.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import Card from '../common/Card.jsx'
import Reveal from '../common/Reveal.jsx'

const icons = { layout: Layout, server: Server, database: Database, wrench: Wrench }

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
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ category, icon, items }, i) => {
          const Icon = icons[icon]
          return (
            <Reveal key={category} delay={i * 0.07} className="h-full">
              <Card className="h-full">
                <Icon size={24} className="text-indigo" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">{category}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((name) => (
                    <li key={name} className="tag">{name}</li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
