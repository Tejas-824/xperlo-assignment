export default function BulletSection({ heading, body }) {
  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <li className="space-y-2">
      {heading && (
        <h2 className="flex items-start gap-2 text-xl font-semibold">
          <span aria-hidden="true">•</span>
          <span>{heading}</span>
        </h2>
      )}
      <div className={heading ? 'space-y-2 pl-6 text-sm text-brand-muted' : 'space-y-2 text-sm text-brand-muted'}>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </li>
  );
}