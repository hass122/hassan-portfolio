// Shared wrapper: consistent id, spacing, max width, a divider line and an optional alternate surface.
export default function Section({ id, alt = false, className = '', children }) {
  return (
    <section id={id} className={`border-t border-line py-14 sm:py-20 lg:py-24 ${alt ? 'bg-surface' : ''} ${className}`}>
      <div className="mx-auto w-full max-w-content px-6">{children}</div>
    </section>
  )
}
