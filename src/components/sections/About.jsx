import personal from '../../data/personal.js'
import experience from '../../data/experience.js'
import Section from '../layout/Section.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import Reveal from '../common/Reveal.jsx'

const facts = [
  { title: 'Education', text: `${personal.degree}, ${personal.semester}` },
  { title: 'Experience', text: `${experience[0].duration.toLowerCase()} as a ${experience[0].role}` },
  { title: 'Learning by doing', text: 'Project-based, with real bugs along the way' },
  { title: 'Interests', text: 'Frontend and full-stack web development' },
  { title: 'Languages', text: 'English, Urdu, Sindhi' },
]

export default function About() {
  return (
    <Section id="about" alt>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal>
          <SectionHeading note="a bit about me" title="Student by day, builder always." className="!mb-6" />
          <div className="max-w-xl space-y-4 text-ink/80">
            <p>
              I’m a Software Engineering student and aspiring full-stack developer with five months of front-end
              internship experience. I build responsive web interfaces and web applications with HTML, CSS,
              JavaScript, TypeScript, React.js, Tailwind CSS, Node.js, PHP and MySQL.
            </p>
            <p>
              I’m passionate about practical, user-friendly digital solutions and keep working on advancing my skills,
              one project at a time.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="min-w-0 lg:pt-10">
          <dl className="divide-y divide-line border-y border-line">
            {facts.map(({ title, text }) => (
              <div key={title} className="grid gap-1 py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-6">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted sm:pt-1">{title}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
