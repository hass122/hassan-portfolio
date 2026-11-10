import { ArrowUp } from 'lucide-react'
import personal from '../../data/personal.js'
import navLinks from '../../data/navLinks.js'
import socialLinks from '../../data/socialLinks.js'

// Education has its own section but no navbar link, so it is added here.
const exploreLinks = [
  ...navLinks.filter((l) => l.id !== 'home'),
  { id: 'education', label: 'Education' },
].sort((a, b) => {
  const order = ['about', 'skills', 'services', 'projects', 'experience', 'education', 'contact']
  return order.indexOf(a.id) - order.indexOf(b.id)
})

const linkCls = 'inline-flex items-center gap-2 py-1.5 text-sm text-muted transition-colors hover:text-ink'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg">
      <div className="absolute inset-x-0 top-0 h-px bg-grad-primary opacity-60" aria-hidden="true" />
      <div className="ambient -bottom-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 bg-indigo/10" aria-hidden="true" />

      <div className="mx-auto max-w-content px-6 pt-14">
        {/* Columns */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3 font-display text-lg font-extrabold">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-grad-primary text-sm text-white">{personal.initials}</span>
              {personal.name}
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Software Engineering student and web developer, building things that work.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-muted">
              <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
              Available for work
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink">Explore</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 sm:grid-cols-1">
              {exploreLinks.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className={linkCls}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink">Connect</h3>
            <ul className="mt-4">
              {socialLinks.map(({ label, href, text, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                    className={`${linkCls} break-all`}
                  >
                    <Icon size={16} className="shrink-0 text-cyan" aria-hidden="true" />
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-3 px-6 py-5 text-sm text-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p className="hidden md:block">Built with React, Tailwind CSS and Framer Motion</p>
          <a href="#home" className="inline-flex items-center gap-2 hover:text-ink">
            Back to top <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
