export default function SectionHeading({ eyebrow, title, description, align = 'center', className = '' }) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wider brand-gradient-text">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && <p className="text-brand-muted">{description}</p>}
    </div>
  );
}
