import { GraduationCap, Briefcase, Hammer, Sparkles, Languages } from 'lucide-react'
import personal from '../../data/personal.js'
import experience from '../../data/experience.js'
import Section from '../layout/Section.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import Card from '../common/Card.jsx'
import Reveal from '../common/Reveal.jsx'

const highlights = [
  { Icon: GraduationCap, title: 'Education', text: `${personal.degree}, ${personal.semester}` },
  { Icon: Briefcase, title: 'Experience', text: `${experience[0].duration.toLowerCase()} as a ${experience[0].role}` },
  { Icon: Hammer, title: 'Learning by doing', text: 'Project-based, with real bugs along the way' },
  { Icon: Sparkles, title: 'Interests', text: 'Frontend and full-stack web development' },
  { Icon: Languages, title: 'Languages', text: 'English, Urdu, Sindhi', wide: true },
]

export default function About() {
  return (
    <Section id="about" alt>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionHeading note="a bit about me" title="Student by day, builder always." className="!mb-6" />
          <div className="space-y-4 text-muted">
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

        <ul className="grid min-w-0 gap-4 sm:grid-cols-2">
          {highlights.map(({ Icon, title, text, wide }, i) => (
            <li key={title} className={wide ? 'sm:col-span-2' : ''}>
              <Reveal delay={i * 0.07} className="h-full">
                <Card className="h-full !p-5">
                  <Icon size={22} className="text-cyan" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-bold">{title}</h3>
                  <p className="mt-1 text-sm text-muted">{text}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
