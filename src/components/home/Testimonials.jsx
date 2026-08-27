import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';
import LazyImage from '../ui/LazyImage';
import { testimonials } from '../../data/content';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  function goTo(i) {
    setIndex((i + testimonials.length) % testimonials.length);
  }

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" aria-label="What our customers say">
      <SectionHeading title="Happy Customers Say" />

      <div className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl bg-[#111113] p-6 pt-16 sm:p-12 sm:pt-20">
        {/* Dot + arrow controls */}
        <div className="absolute right-6 top-6 flex items-center gap-3 sm:right-10 sm:top-10">
          <div className="flex gap-1.5">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 w-2 rounded-full transition-colors ${i === index ? 'bg-white' : 'bg-white/25'}`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(index - 1)}
            className="grid h-8 w-8 place-items-center rounded-full bg-white text-brand-bg"
          >
            <Icon name="chevronLeft" className="h-4 w-4" strokeWidth={2.5} />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(index + 1)}
            className="grid h-8 w-8 place-items-center rounded-full bg-white text-brand-bg"
          >
            <Icon name="chevronRight" className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
          {testimonials.map((t) => (
            <figure key={t.id} className="rounded-2xl bg-white/5 p-6">
              <div className="flex items-center gap-4">
                <LazyImage
                  src={t.avatar}
                  alt=""
                  className="-mt-12 h-16 w-16 shrink-0 rounded-full object-cover ring-4 ring-[#1c1d21] grayscale"
                  width={64}
                  height={64}
                />
                <figcaption>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-brand-muted">{t.role}</p>
                </figcaption>
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-white/80">{t.quote}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}