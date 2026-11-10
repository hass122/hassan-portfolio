export default function SectionHeading({ note, title, description, className = '' }) {
  return (
    <div className={`mb-10 max-w-2xl ${className}`}>
      {note && <p className="eyebrow mb-2">{note}</p>}
      <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">{title}</h2>
      <span className="mt-5 block h-1 w-14 rounded-full bg-grad-primary" aria-hidden="true" />
      {description && <p className="mt-5 text-muted">{description}</p>}
    </div>
  )
}
