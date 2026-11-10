import { useState } from 'react'
import { Github, ExternalLink, ChevronDown } from 'lucide-react'
import Card from './Card.jsx'
import Button from './Button.jsx'

export default function ProjectCard({ project, reverse = false }) {
  const [open, setOpen] = useState(false)
  const { id, title, category, description, features, technologies, images = [], githubUrl, liveUrl, featured } = project
  const [shot, setShot] = useState(0)
  const current = images[shot]
  const panelId = `details-${id}`

  return (
    <Card
      className={`group grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:!p-8 ${
        featured ? 'border-indigo/40 shadow-glow' : ''
      }`}
    >
      <div className={`min-w-0 ${reverse ? 'lg:order-2' : ''}`}>
        <div className="overflow-hidden rounded-xl border border-line bg-bg">
          {current ? (
            <img
              key={current.src}
              src={current.src}
              alt={current.alt || `${title} screenshot`}
              width="1280"
              height="800"
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="grid aspect-[16/10] place-items-center bg-dots p-4 text-center text-sm text-muted">
              <span>
                {title} screenshot
                <br />
                (real screenshot to be added)
              </span>
            </div>
          )}
        </div>
        {images.length > 1 && (
          <div className="mt-3 flex gap-2" role="group" aria-label={`${title} screenshots`}>
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setShot(i)}
                aria-pressed={i === shot}
                className={`min-h-[40px] rounded-btn border px-4 text-sm font-medium transition-colors ${
                  i === shot ? 'border-indigo bg-indigo/10 text-indigo' : 'border-field text-muted hover:text-ink'
                }`}
              >
                {img.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="min-w-0">
        {featured && <p className="eyebrow mb-1">featured project</p>}
        <p className="text-sm text-cyan">{category}</p>
        <h3 className={`mt-1 font-extrabold ${featured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>{title}</h3>
        <p className="mt-3 text-muted">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {technologies.map((t) => (
            <li key={t} className="tag !text-xs">{t}</li>
          ))}
        </ul>

        {open && (
          <ul id={panelId} className="mt-5 list-disc space-y-1 pl-5 text-sm text-muted">
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button variant="secondary" aria-expanded={open} aria-controls={open ? panelId : undefined} onClick={() => setOpen((o) => !o)}>
            {open ? 'Hide details' : 'View details'}
            <ChevronDown size={16} aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`} />
          </Button>
          {githubUrl && (
            <Button href={githubUrl} external variant="ghost" aria-label={`${title} on GitHub`}>
              <Github size={18} aria-hidden="true" /> GitHub
            </Button>
          )}
          {liveUrl && (
            <Button href={liveUrl} external variant="ghost" aria-label={`${title} live demo`}>
              <ExternalLink size={18} aria-hidden="true" /> Live demo
            </Button>
          )}
          {!githubUrl && !liveUrl && <span className="text-sm text-muted">Links coming soon</span>}
        </div>
      </div>
    </Card>
  )
}
