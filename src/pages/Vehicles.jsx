// src/pages/Vehicles.jsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Seo from '../components/layout/Seo';
import Icon from '../components/ui/Icon';
import VehicleCard from '../components/vehicles/VehicleCard';
import VehicleFilters from '../components/vehicles/VehicleFilters';
import Pagination from '../components/vehicles/Pagination';
import { vehicles } from '../data/vehicles';

export default function Vehicles() {
  const [query, setQuery] = useState('');

  return (
    <>
      <Seo
        title="All Vehicles"
        description="Browse the full airoame fleet of campers and cars — filter by seats, model, and price."
        path="/vehicles"
      />

      <section className="border-b border-white/10 bg-brand-panel/40 px-4 py-14 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">All Vehicles</h1>
        <nav aria-label="Breadcrumb" className="mt-2 text-sm text-brand-muted">
          <NavLink to="/" className="hover:text-white">Home</NavLink>
          <span className="mx-2">/</span>
          <span className="text-white">All Vehicles</span>
        </nav>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
          <VehicleFilters />

          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <label htmlFor="vehicle-search" className="relative flex-1 sm:max-w-sm">
                <span className="sr-only">Search for vehicle name</span>
                <Icon name="search" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
                <input
                  id="vehicle-search"
                  type="search"
                  placeholder="Search for vehicle name"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-lg border border-brand-border bg-brand-input py-2.5 pl-10 pr-4 text-sm text-white placeholder-brand-muted outline-none focus:border-brand-pink"
                />
              </label>

              <button type="button" className="flex items-center justify-end gap-2 text-sm text-brand-muted hover:text-white sm:justify-start">
                <Icon name="sort" className="h-4 w-4" />
                Sort
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {vehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>

            <Pagination />
          </div>
        </div>
      </section>
    </>
  );
}