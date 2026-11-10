import socialLinks from '../../data/socialLinks.js'

// showEmailText: email shown as a pill with the address. skipEmail: leave email out (when shown elsewhere).
export default function SocialLinks({ className = '', showEmailText = false, skipEmail = false, withLabels = false }) {
  const items = socialLinks.filter((i) => !(skipEmail && i.label === 'Email'))
  if (items.length === 0) return null
  const box = 'border border-field bg-card text-body transition-colors hover:border-cyan hover:text-cyan rounded-btn'

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {items.map(({ label, href, text, Icon }) => {
        const external = !href.startsWith('mailto:')
        const asPill = withLabels || (showEmailText && label === 'Email')
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`${box} ${asPill ? 'inline-flex h-11 items-center gap-2 px-4 text-sm' : 'grid h-11 w-11 place-items-center'}`}
            >
              <Icon size={20} aria-hidden="true" />
              {asPill && <span className="break-all">{text}</span>}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
