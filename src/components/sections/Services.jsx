import { Code2, Smartphone, Server, Database, Layout, Wrench } from 'lucide-react'
import services from '../../data/services.js'
import Section from '../layout/Section.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import Card from '../common/Card.jsx'
import Reveal from '../common/Reveal.jsx'

const icons = { code: Code2, smartphone: Smartphone, server: Server, database: Database, layout: Layout, wrench: Wrench }

export default function Services() {
  return (
    <Section id="services" alt>
      <Reveal>
        <SectionHeading note="how I can help" title="Things I can build for you" />
      </Reveal>
      <ul className="flex flex-wrap justify-center gap-5">
        {services.map(({ id, icon, title, description, tech }, i) => {
          const Icon = icons[icon]
          return (
            <li key={id} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
              <Reveal delay={(i % 3) * 0.07} className="h-full">
                <Card className="h-full">
                  <Icon size={24} className="text-cyan" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-muted">{description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {tech.map((t) => (
                      <li key={t} className="tag !text-xs">{t}</li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
