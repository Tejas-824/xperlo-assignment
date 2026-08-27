import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import LazyImage from '../ui/LazyImage';
import { vehicles } from '../../data/vehicles';

export default function RentalFleet() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = vehicles[activeIndex];

  function goTo(index) {
    setActiveIndex((index + vehicles.length) % vehicles.length);
  }

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" aria-label="Our rental fleet">
      <SectionHeading
        title="Our Rental Fleet"
        description="A hand-picked lineup of campers and cars, serviced between every trip and ready whenever you are."
      />

      <div className="mx-auto mt-12 max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-8 rounded-2xl bg-brand-panel p-6 sm:p-10 lg:grid-cols-[auto_1fr_auto]">
          {/* Thumbnails */}
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {active.thumbnails.map((thumb, i) => (
              <button
                key={i}
                type="button"
                aria-label={`View image ${i + 1} of ${active.name}`}
                className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-brand-panel-2"
              >
                <LazyImage src={thumb} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="order-1 overflow-hidden rounded-xl lg:order-2">
            <LazyImage
              src={active.image}
              alt={active.name}
              className="aspect-video w-full object-cover"
              width={640}
              height={360}
            />
          </div>

          {/* Details */}
          <div className="order-3 min-w-[220px]">
            <h3 className="font-display text-xl font-semibold">{active.name}</h3>
            <dl className="mt-4 space-y-2 text-sm text-brand-muted">
              <div className="flex justify-between gap-6">
                <dt>Model:</dt>
                <dd className="text-white">{active.model}</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt>Doors:</dt>
                <dd className="text-white">{active.doors}</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt>Seats:</dt>
                <dd className="text-white">{active.seats}</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt>Transmission:</dt>
                <dd className="text-white">{active.transmission}</dd>
              </div>
            </dl>
            <p className="mt-5 text-xl font-bold">
              ${active.pricePerDay.toFixed(2)} <span className="text-sm font-normal text-brand-muted">/day</span>
            </p>
            <Button as={NavLink} to={`/vehicles`} className="mt-4 w-full sm:w-auto">
              Book Now
            </Button>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous vehicle"
            onClick={() => goTo(activeIndex - 1)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/20 hover:bg-white/10"
          >
            <Icon name="chevronLeft" className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {vehicles.map((v, i) => (
              <button
                key={v.id}
                type="button"
                aria-label={`Go to ${v.name}`}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === activeIndex ? 'brand-gradient' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next vehicle"
            onClick={() => goTo(activeIndex + 1)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/20 hover:bg-white/10"
          >
            <Icon name="chevronRight" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
