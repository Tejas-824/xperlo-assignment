import Seo from '../components/layout/Seo';
import LegalPageHeader from '../components/legal/LegalPageHeader';
import BulletSection from '../components/legal/BulletSection';
import { TERMS_CONDITIONS } from '../data/legal';

export default function TermsConditions() {
  return (
    <>
      <Seo title="Terms and Condition" description="Terms and conditions for using airoame's website and rental services." path="/terms-and-conditions" />
      <LegalPageHeader title="Terms and Condition" crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us', to: '/about-us' }, { label: 'Terms and Condition' }]} />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          {TERMS_CONDITIONS.map((section, i) => (
            <BulletSection key={section.heading ?? `intro-${i}`} heading={section.heading} body={section.body} />
          ))}
        </div>
      </section>
    </>
  );
}