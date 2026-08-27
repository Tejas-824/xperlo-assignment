import LazyImage from '../ui/LazyImage';
import { features } from '../../data/content';

export default function FeatureCards() {
  return (
    <section className="px-4 sm:px-6 lg:px-8" aria-label="Why book with us">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-1 overflow-hidden rounded-2xl sm:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.id} className="group relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
            <LazyImage
              src={feature.image}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="font-display text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-white/80">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
