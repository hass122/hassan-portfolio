import projects from '../../data/projects.js'
import Section from '../layout/Section.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import ProjectCard from '../common/ProjectCard.jsx'
import Reveal from '../common/Reveal.jsx'

// Featured projects first, then the rest. Cards are full width and alternate image side.
export default function Projects() {
  const ordered = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured))
  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading note="things I’ve made" title="Selected projects" />
      </Reveal>
      <div className="space-y-8">
        {ordered.map((p, i) => (
          <Reveal key={p.id}>
            <ProjectCard project={p} reverse={i % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
