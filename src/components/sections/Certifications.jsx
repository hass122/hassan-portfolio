import certifications from '../../data/certifications.js'
import Section from '../layout/Section.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import Card from '../common/Card.jsx'
import Button from '../common/Button.jsx'

// Hidden completely until real certificates are added to data/certifications.js.
export default function Certifications() {
  if (certifications.length === 0) return null
  return (
    <Section id="certifications" alt>
      <SectionHeading note="things I’ve completed" title="Certifications" />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <li key={c.id}>
            <Card className="h-full">
              {c.image && <img src={c.image} alt={`${c.title} certificate`} loading="lazy" className="mb-4 rounded-lg" />}
              <h3 className="text-xl">{c.title}</h3>
              <p className="mt-1 text-sm text-muted">{c.issuer}{c.date ? ` · ${c.date}` : ''}</p>
              {c.credentialUrl && (
                <Button href={c.credentialUrl} external variant="secondary" className="mt-4">View certificate</Button>
              )}
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  )
}
