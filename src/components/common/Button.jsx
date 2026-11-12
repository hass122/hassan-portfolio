const base = {
  primary: 'border-accent bg-accent text-onaccent',
  secondary: 'border-line bg-card text-ink',
  accent: 'border-accent bg-transparent text-accent',
  ghost: 'border-transparent text-muted',
}
const hover = {
  primary: 'hover:opacity-90',
  secondary: 'hover:border-accent hover:text-accent',
  accent: 'hover:bg-accent hover:text-onaccent',
  ghost: 'hover:text-accent',
}

/**
 * Renders a link when `href` is given, otherwise a button.
 * Variants: primary (solid), secondary (outline), accent (Download CV), ghost.
 * Disabled buttons are for features that are not ready yet (never fake actions).
 */
export default function Button({
  href,
  variant = 'primary',
  disabled = false,
  external = false,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-btn border px-6 py-3 text-[15px] font-medium transition-colors duration-200',
    base[variant],
    disabled ? 'cursor-not-allowed opacity-50' : hover[variant],
    className,
  ].join(' ')

  if (href && !disabled) {
    const extra = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
      <a href={href} className={cls} {...extra} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} disabled={disabled} className={cls} {...rest}>
      {children}
    </button>
  )
}
