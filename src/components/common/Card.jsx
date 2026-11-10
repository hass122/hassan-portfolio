export default function Card({ as: Tag = 'div', hover = true, className = '', children, ...rest }) {
  const lift = hover
    ? 'transition duration-200 hover:-translate-y-1 hover:border-indigo hover:shadow-glow'
    : ''
  return (
    <Tag className={`surface-card ${lift} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
