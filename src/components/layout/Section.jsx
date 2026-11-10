// Shared wrapper: consistent id, spacing, max width and optional alternate background.
export default function Section({ id, alt = false, className = '', children }) {
  return (
    <section id={id} className={`py-16 lg:py-24 ${alt ? 'bg-surface' : ''} ${className}`}>
      <div className="mx-auto w-full max-w-content px-6">{children}</div>
    </section>
  )
}
