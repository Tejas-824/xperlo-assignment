import { useState } from 'react';
import Select from '../ui/Select';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { SEAT_OPTIONS, MODEL_OPTIONS } from '../../data/vehicles';

export default function VehicleFilterSidebar() {
  const [filters, setFilters] = useState({
    seats: SEAT_OPTIONS[0],
    model: MODEL_OPTIONS[0],
    minPrice: '',
    maxPrice: '',
  });

  function update(field) {
    return (e) => setFilters((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Hook this up to real filtering once the listing is backed by data.
    console.log('Filter vehicles with', filters);
  }

  return (
    <aside className="h-fit rounded-xl bg-brand-panel p-6">
      <h2 className="font-display text-lg font-semibold">Filter</h2>

      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-5">
        <Select
          id="filter-seats"
          label="Number of Seats"
          options={SEAT_OPTIONS}
          value={filters.seats}
          onChange={update('seats')}
        />
        <Select
          id="filter-model"
          label="Model"
          options={MODEL_OPTIONS}
          value={filters.model}
          onChange={update('model')}
        />

        <div className="grid grid-cols-2 gap-3">
          <Input
            id="filter-min-price"
            label="Minimum Price"
            type="number"
            placeholder="$199"
            value={filters.minPrice}
            onChange={update('minPrice')}
          />
          <Input
            id="filter-max-price"
            label="Maximum Price"
            type="number"
            placeholder="$599"
            value={filters.maxPrice}
            onChange={update('maxPrice')}
          />
        </div>

        <Button type="submit" variant="outline" className="border-brand-pink text-brand-pink hover:bg-brand-pink/10">
          Search
        </Button>
      </form>
    </aside>
  );
}
