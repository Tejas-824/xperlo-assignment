import { NavLink } from 'react-router-dom';
import Button from '../ui/Button';
import LazyImage from '../ui/LazyImage';
import { PLACEHOLDER_IMAGE } from '../../constants/images';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <LazyImage
        src={PLACEHOLDER_IMAGE}
        alt="Camper van parked on a mountain road"
        priority
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-brand-bg" />

      <div className="mx-auto max-w-7xl px-4 pb-40 pt-20 sm:px-6 sm:pb-48 sm:pt-28 lg:px-8">
        <div className="max-w-xl">
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Luxury Car Rent
            <br />
            From <span className="brand-gradient-text">$19</span> Only
          </h1>
          <p className="mt-5 max-w-md text-brand-muted">
            Choose from a curated fleet of campers and cars, book in minutes, and hit the road with expert drivers
            and zero hidden fees.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button as={NavLink} to="/vehicles" variant="outline" size="lg">
              Learn more
            </Button>
            <Button as={NavLink} to="/plan" variant="primary" size="lg">
              Book Ride
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
