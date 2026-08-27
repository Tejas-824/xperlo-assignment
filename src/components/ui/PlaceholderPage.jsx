import Seo from '../layout/Seo';

export default function PlaceholderPage({ title, description, path }) {
  return (
    <>
      <Seo title={title} description={description} path={path} />
      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-wider brand-gradient-text">Coming soon</span>
        <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h1>
        <p className="mt-4 text-brand-muted">{description}</p>
      </section>
    </>
  );
}
