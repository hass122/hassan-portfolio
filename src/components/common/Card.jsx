export default function Card({ as: Tag = 'div', hover = true, className = '', children, ...rest }) {
  const lift = hover ? 'transition-colors duration-200 hover:border-accent' : ''
  return (
    <Tag className={`surface-card ${lift} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
