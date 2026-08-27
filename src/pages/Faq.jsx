import Seo from '../components/layout/Seo';
import LegalPageHeader from '../components/legal/LegalPageHeader';
import BulletSection from '../components/legal/BulletSection';
import { FAQ_PAGE_SECTIONS } from '../data/legal';

export default function Faq() {
  return (
    <>
      <Seo title="F.A.Q" description="Frequently asked questions about renting with airoame." path="/faq" />
      <LegalPageHeader
        title="F.A.Q"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us', to: '/about-us' }, { label: 'F.A.Q' }]}
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          {FAQ_PAGE_SECTIONS.map((section) => (
            <BulletSection key={section.heading} heading={section.heading} body={section.body} />
          ))}
        </div>
      </section>
    </>
  );
}