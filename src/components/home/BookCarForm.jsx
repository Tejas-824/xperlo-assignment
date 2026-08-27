import { useState } from 'react';
import Select from '../ui/Select';
import Button from '../ui/Button';

const BRANDS = ['BMW', 'Mercedes', 'Volkswagen', 'Ford', 'Toyota'];
const SEATS = ['2 seater', '4 seater', '6 seater', '8 seater'];
const MODELS = ['Sports', 'SUV', 'Camper', 'Sedan'];
const PRICES = ['$99', '$149', '$199', '$299', '$499'];

export default function BookCarForm() {
  const [form, setForm] = useState({
    brand: BRANDS[0],
    seats: SEATS[1],
    model: MODELS[0],
    minPrice: PRICES[0],
    maxPrice: PRICES[3],
  });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Search vehicles with', form);
  }

  return (
    <div className="relative z-10 -mt-28 px-4 sm:-mt-32 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-5xl rounded-2xl bg-white p-6 text-brand-bg shadow-2xl sm:p-10"
      >
        <h2 className="font-display text-2xl font-bold sm:text-3xl">Book a Car</h2>
        <p className="mt-2 max-w-xl text-sm text-gray-500">
          Tell us what you're after and we'll surface the closest matches from our fleet.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Select
            label="Select Brand"
            id="brand"
            options={BRANDS}
            value={form.brand}
            onChange={update('brand')}
            className="!border-gray-200 !bg-gray-50 !text-brand-bg"
          />
          <Select
            label="Number Of Seats"
            id="seats"
            options={SEATS}
            value={form.seats}
            onChange={update('seats')}
            className="!border-gray-200 !bg-gray-50 !text-brand-bg"
          />
          <Select
            label="Model"
            id="model"
            options={MODELS}
            value={form.model}
            onChange={update('model')}
            className="!border-gray-200 !bg-gray-50 !text-brand-bg"
          />
          <Select
            label="Minimum Price"
            id="minPrice"
            options={PRICES}
            value={form.minPrice}
            onChange={update('minPrice')}
            className="!border-gray-200 !bg-gray-50 !text-brand-bg"
          />
          <Select
            label="Maximum Price"
            id="maxPrice"
            options={PRICES}
            value={form.maxPrice}
            onChange={update('maxPrice')}
            className="!border-gray-200 !bg-gray-50 !text-brand-bg"
          />
          <div className="flex items-end">
            <Button type="submit" className="w-full">
              Search
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
