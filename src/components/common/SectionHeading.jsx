export default function SectionHeading({ note, title, description, className = '' }) {
  return (
    <div className={`mb-10 max-w-2xl ${className}`}>
      {note && <p className="eyebrow mb-3">{note}</p>}
      <h2 className="text-[2rem] leading-[1.1] sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      <span className="mt-5 block h-0.5 w-10 bg-clay" aria-hidden="true" />
      {description && <p className="mt-5 text-muted">{description}</p>}
    </div>
  )
}
