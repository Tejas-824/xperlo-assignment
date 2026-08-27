// src/pages/PrivacyPolicy.jsx
import { NavLink } from 'react-router-dom';
import Seo from '../components/layout/Seo';
import BulletSection from '../components/ui/BulletSection';
import { PRIVACY_POLICY } from '../data/legal';

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Read airoame's privacy policy to learn how we collect, use, and protect your information."
        path="/privacy-policy"
      />

      <section className="border-b border-white/10 bg-brand-panel/40 px-4 py-14 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
        <nav aria-label="Breadcrumb" className="mt-2 text-sm text-brand-muted">
          <NavLink to="/" className="hover:text-white">
            Home
          </NavLink>
          <span className="mx-2">/</span>
          <span className="text-white">Privacy Policy</span>
        </nav>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <ul className="mx-auto max-w-4xl space-y-8">
          {PRIVACY_POLICY.map((item) => (
            <BulletSection key={item.heading} heading={item.heading} body={item.body} />
          ))}
        </ul>
      </section>
    </>
  );
}