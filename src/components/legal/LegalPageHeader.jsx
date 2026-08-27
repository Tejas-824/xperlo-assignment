import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default function LegalPageHeader({ title, crumbs }) {
  return (
    <section className="border-b border-white/10 bg-brand-panel/40 px-4 py-14 text-center sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">{title}</h1>
      <nav aria-label="Breadcrumb" className="mt-2 text-sm text-brand-muted">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <Fragment key={crumb.label}>
              {i > 0 && <span className="mx-2">/</span>}
              {isLast || !crumb.to ? (
                <span className="text-white">{crumb.label}</span>
              ) : (
                <NavLink to={crumb.to} className="hover:text-white">
                  {crumb.label}
                </NavLink>
              )}
            </Fragment>
          );
        })}
      </nav>
    </section>
  );
}
