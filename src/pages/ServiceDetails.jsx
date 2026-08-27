import Seo from '../components/layout/Seo';
import LegalPageHeader from '../components/legal/LegalPageHeader';
import BulletSection from '../components/legal/BulletSection';
import { SERVICE_DETAILS } from '../data/legal';

export default function ServiceDetails() {
  return (
    <>
      <Seo
        title="Service Details"
        description="Details on how airoame's rental services work."
        path="/service-details"
      />
      <LegalPageHeader
        title="Service Details"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us', to: '/about-us' }, { label: 'Service Details' }]}
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          {SERVICE_DETAILS.map((section) => (
            <BulletSection key={section.heading} heading={section.heading} body={section.body} />
          ))}
        </div>
      </section>
    </>
  );
}
