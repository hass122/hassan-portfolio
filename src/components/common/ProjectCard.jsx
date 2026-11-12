import { useState } from 'react'
import { Github, ExternalLink, ChevronDown } from 'lucide-react'
import Button from './Button.jsx'

// Image-led editorial layout (no card box). The featured project gets a larger image column.
export default function ProjectCard({ project, reverse = false }) {
  const [open, setOpen] = useState(false)
  const { id, title, category, description, features, technologies, images = [], githubUrl, liveUrl, featured } = project
  const [shot, setShot] = useState(0)
  const current = images[shot]
  const panelId = `details-${id}`

  return (
    <article
      className={`grid gap-8 lg:items-center lg:gap-14 ${featured ? 'lg:grid-cols-[1.4fr_1fr]' : 'lg:grid-cols-[1fr_1fr]'}`}
    >
      <div className={`min-w-0 ${reverse ? 'lg:order-2' : ''}`}>
        <div className="overflow-hidden rounded-xl border border-line bg-surface">
          {current ? (
            <img
              key={current.src}
              src={current.src}
              alt={current.alt || `${title} screenshot`}
              width="1280"
              height="800"
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover"
            />
          ) : (
            <div className="grid aspect-[16/10] place-items-center p-6 text-center">
              <span>
                <span className="block font-display text-3xl text-muted">{title}</span>
                <span className="mt-2 block font-mono text-xs text-muted">(real screenshot to be added)</span>
              </span>
            </div>
          )}
        </div>
        {images.length > 1 && (
          <div className="mt-3 flex gap-5" role="group" aria-label={`${title} screenshots`}>
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setShot(i)}
                aria-pressed={i === shot}
                className={`min-h-[40px] border-b-2 text-sm font-medium transition-colors ${
                  i === shot ? 'border-accent text-ink' : 'border-transparent text-muted hover:text-ink'
                }`}
              >
                {img.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="min-w-0">
        {featured && <p className="eyebrow mb-2">featured project</p>}
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{category}</p>
        <h3 className={`mt-2 ${featured ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'}`}>{title}</h3>
        <p className="mt-4 text-ink/80">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
          {technologies.map((t) => (
            <li key={t}>{t}</li>
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
    </article>
  )
}
