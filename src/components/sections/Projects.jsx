import projects from '../../data/projects.js'
import Section from '../layout/Section.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import ProjectCard from '../common/ProjectCard.jsx'
import Reveal from '../common/Reveal.jsx'

// Featured projects first, then the rest. The image side alternates; projects are separated by a divider.
export default function Projects() {
  const ordered = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured))
  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading note="things I’ve made" title="Selected projects" />
      </Reveal>
      <div className="space-y-14 lg:space-y-20">
        {ordered.map((p, i) => (
          <Reveal key={p.id} className={i > 0 ? 'border-t border-line pt-14 lg:pt-20' : ''}>
            <ProjectCard project={p} reverse={i % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
