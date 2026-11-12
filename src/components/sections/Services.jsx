import services from '../../data/services.js'
import Section from '../layout/Section.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import Reveal from '../common/Reveal.jsx'

// A simple numbered list of rows instead of a grid of identical cards.
export default function Services() {
  return (
    <Section id="services" alt>
      <Reveal>
        <SectionHeading note="how I can help" title="Things I can build for you" />
      </Reveal>
      <ol className="border-t border-line">
        {services.map(({ id, title, description, tech }, i) => (
          <li key={id} className="border-b border-line">
            <Reveal className="grid gap-3 py-7 md:grid-cols-[4rem_1fr_1.2fr] md:gap-8">
              <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-2xl">{title}</h3>
              <div className="min-w-0">
                <p className="text-muted">{description}</p>
                <p className="mt-3 font-mono text-xs text-muted">{tech.join(' · ')}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
