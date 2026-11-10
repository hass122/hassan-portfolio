const base = {
  primary: 'border-transparent bg-grad-primary text-white',
  secondary: 'border-btn2border bg-card text-btn2text',
  accent: 'border-transparent bg-cyan text-oncyan',
  ghost: 'border-transparent text-muted',
}
const hover = {
  primary: 'hover:scale-[1.03] hover:shadow-glow',
  secondary: 'hover:bg-indigo/10 hover:border-indigo',
  accent: 'hover:brightness-110 hover:shadow-soft',
  ghost: 'hover:text-ink',
}

/**
 * Renders a link when `href` is given, otherwise a button.
 * Variants: primary (gradient), secondary, accent (Download CV), ghost.
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
    'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-btn border px-6 py-3 text-[15px] font-semibold transition duration-200',
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
