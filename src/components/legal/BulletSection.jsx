export default function BulletSection({ heading, body }) {
  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <div>
      {heading && (
        <h2 className="flex items-start gap-2 font-display text-lg font-semibold sm:text-xl">
          <span aria-hidden="true" className="mt-1 text-brand-pink">
            •
          </span>
          {heading}
        </h2>
      )}
      <div className={`space-y-2 text-sm leading-relaxed text-brand-muted sm:text-base ${heading ? 'mt-2 pl-5' : ''}`}>
        {paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}