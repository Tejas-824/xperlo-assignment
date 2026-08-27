export default function AboutIntro({ title, body, className = '' }) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <h2 className="font-display text-2xl font-bold sm:text-3xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">{body}</p>
    </div>
  );
}
