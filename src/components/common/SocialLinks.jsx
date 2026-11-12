import socialLinks from '../../data/socialLinks.js'

// showEmailText: email shown with the address. skipEmail: leave email out (when shown elsewhere).
// withLabels: show a text label next to each icon (plain text links); otherwise small outlined icon buttons.
export default function SocialLinks({ className = '', showEmailText = false, skipEmail = false, withLabels = false }) {
  const items = socialLinks.filter((i) => !(skipEmail && i.label === 'Email'))
  if (items.length === 0) return null

  return (
    <ul className={`flex flex-wrap items-center gap-x-6 gap-y-2 ${className}`}>
      {items.map(({ label, href, text, Icon }) => {
        const external = !href.startsWith('mailto:')
        const asText = withLabels || (showEmailText && label === 'Email')
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={
                asText
                  ? 'inline-flex min-h-[44px] items-center gap-2 text-sm text-ink/80 underline-offset-4 transition-colors hover:text-accent hover:underline'
                  : 'grid h-11 w-11 place-items-center rounded-btn border border-line text-ink/80 transition-colors hover:border-accent hover:text-accent'
              }
            >
              <Icon size={asText ? 18 : 20} aria-hidden="true" />
              {asText && <span className="break-all">{text}</span>}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
