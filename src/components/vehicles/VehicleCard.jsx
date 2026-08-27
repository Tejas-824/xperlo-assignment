import LazyImage from '../ui/LazyImage';
import Icon from '../ui/Icon';
import Button from '../ui/Button';

export default function VehicleCard({ vehicle }) {
  return (
    <article className="overflow-hidden rounded-xl bg-brand-panel">
      <div className="aspect-[16/9] overflow-hidden bg-white">
        <LazyImage src={vehicle.image} alt={vehicle.name} className="h-full w-full object-cover" />
      </div>

      <div className="p-5">
        <h3 className="font-display text-base font-semibold">{vehicle.name}</h3>
        <p className="mt-1 text-sm font-semibold">
          ${vehicle.pricePerDay.toFixed(2)} <span className="text-xs font-normal text-brand-muted">/day</span>
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-brand-muted">
          <span className="flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5">
            <Icon name="car" className="h-4 w-4 text-teal-300" />
            {vehicle.type}
          </span>
          <span className="flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5">
            <Icon name="gearbox" className="h-4 w-4 text-teal-300" />
            {vehicle.transmission}
          </span>
          <span className="flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5">
            <Icon name="fuel" className="h-4 w-4 text-teal-300" />
            {vehicle.fuel}
          </span>
        </div>

        <Button className="mt-5 w-full rounded-md tracking-wide">BOOK NOW</Button>
      </div>
    </article>
  );
}
