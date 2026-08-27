import { useState } from 'react';
import Select from '../ui/Select';
import Input from '../ui/Input';
import Button from '../ui/Button';

const SEAT_OPTIONS = ['2 seater', '4 seater', '6 seater', '8 seater'];
const MODEL_OPTIONS = ['Audi', 'BMW', 'Mercedes', 'Volkswagen', 'Toyota'];

export default function VehicleFilters() {
  const [form, setForm] = useState({
    seats: SEAT_OPTIONS[0],
    model: MODEL_OPTIONS[0],
    minPrice: '$199',
    maxPrice: '$599',
  });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Filter vehicles with', form);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="h-fit rounded-xl bg-brand-panel p-5"
      aria-label="Filter vehicles"
    >
      <h2 className="font-display text-lg font-semibold">Filter</h2>

      <div className="mt-5 flex flex-col gap-4">
        <Select
          id="filter-seats"
          label="Number of Seats"
          options={SEAT_OPTIONS}
          value={form.seats}
          onChange={update('seats')}
        />
        <Select
          id="filter-model"
          label="Model"
          options={MODEL_OPTIONS}
          value={form.model}
          onChange={update('model')}
        />

        <div className="grid grid-cols-2 gap-3">
          <Input
            id="filter-min"
            label="Minimum Price"
            value={form.minPrice}
            onChange={update('minPrice')}
          />
          <Input
            id="filter-max"
            label="Maximum Price"
            value={form.maxPrice}
            onChange={update('maxPrice')}
          />
        </div>

        <Button type="submit" variant="outline" className="mt-2 w-full border-brand-pink text-brand-pink hover:bg-brand-pink/10">
          Search
        </Button>
      </div>
    </form>
  );
}
