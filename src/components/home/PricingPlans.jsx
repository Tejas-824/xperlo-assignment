import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';
import { pricingPlans } from '../../data/content';

const ACCENTS = {
  purple: { block: 'bg-purple-600', button: 'bg-purple-600' },
  teal: { block: 'bg-teal-200', button: 'bg-teal-200' },
  green: { block: 'bg-teal-500', button: 'bg-teal-500' },
};

export default function PricingPlans() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" aria-label="Pricing plans">
      <SectionHeading
        title="Pricing Plan"
      />

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {pricingPlans.map((plan) => {
          const accent = ACCENTS[plan.accent];
          return (
            <div key={plan.id} className="relative">
              {/* Offset color block behind the card */}
              <div className={`absolute inset-x-4 -bottom-4 top-4 rounded-xl ${accent.block}`} aria-hidden="true" />

              <div className="relative flex flex-col overflow-hidden rounded-xl bg-white text-brand-bg shadow-xl">
                <div className="p-8">
                  <h3 className="font-display text-lg font-bold">{plan.name}</h3>
                  <p className="mt-3">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className="text-sm text-gray-500"> /ride</span>
                  </p>
                  <p className="text-sm text-gray-500">{plan.duration}</p>

                  <hr className="my-5 border-gray-100" />

                  <ul className="space-y-3 text-sm">
                    {plan.features.map((f) => (
                      <li key={f.label} className="flex items-center gap-3">
                        <Icon
                          name={f.included ? 'check' : 'close'}
                          className={`h-4 w-4 shrink-0 ${f.included ? 'text-teal-500' : 'text-red-500'}`}
                          strokeWidth={3}
                        />
                        <span className="text-gray-600">{f.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  className={`mt-auto w-full py-4 text-sm font-bold uppercase tracking-wide text-white ${accent.button}`}
                >
                  Book Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
