import { useState } from 'react';
import Icon from '../ui/Icon';

const TOTAL_PAGES = 30;
const VISIBLE_PAGES = [1, 2, 3, 4, 5];

export default function Pagination() {
  const [page, setPage] = useState(1);

  function goTo(p) {
    setPage(Math.min(Math.max(p, 1), TOTAL_PAGES));
  }

  return (
    <nav aria-label="Vehicle results pages" className="mt-10 flex items-center justify-center gap-2">
      <button
        type="button"
        aria-label="Previous page"
        onClick={() => goTo(page - 1)}
        disabled={page === 1}
        className="grid h-9 w-9 place-items-center rounded-md border border-white/15 text-brand-muted hover:bg-white/10 disabled:opacity-40"
      >
        <Icon name="chevronLeft" className="h-4 w-4" />
      </button>

      {VISIBLE_PAGES.map((p) => (
        <button
          key={p}
          type="button"
          aria-current={page === p ? 'page' : undefined}
          onClick={() => goTo(p)}
          className={`grid h-9 w-9 place-items-center rounded-md text-sm font-medium ${
            page === p ? 'brand-gradient text-white' : 'text-brand-muted hover:bg-white/10'
          }`}
        >
          {p}
        </button>
      ))}

      <span className="px-1 text-brand-muted">…</span>

      <button
        type="button"
        aria-current={page === TOTAL_PAGES ? 'page' : undefined}
        onClick={() => goTo(TOTAL_PAGES)}
        className={`grid h-9 w-9 place-items-center rounded-md text-sm font-medium ${
          page === TOTAL_PAGES ? 'brand-gradient text-white' : 'text-brand-muted hover:bg-white/10'
        }`}
      >
        {TOTAL_PAGES}
      </button>

      <button
        type="button"
        aria-label="Next page"
        onClick={() => goTo(page + 1)}
        disabled={page === TOTAL_PAGES}
        className="grid h-9 w-9 place-items-center rounded-md border border-white/15 text-brand-muted hover:bg-white/10 disabled:opacity-40"
      >
        <Icon name="chevronRight" className="h-4 w-4" />
      </button>
    </nav>
  );
}
