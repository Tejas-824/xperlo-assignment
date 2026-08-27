import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import Button from '../ui/Button';
import Input from '../ui/Input';
import {
  SITE_NAME,
  FOOTER_GENERAL_LINKS,
  FOOTER_POLICY_LINKS,
  SOCIAL_LINKS,
  CONTACT_INFO,
} from '../../constants/site';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitted

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus('submitted');
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-xl flex-col sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <Input
        id="newsletter-email"
        type="email"
        required
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="!bg-black/5 !border-black/10 !text-brand-bg placeholder:text-gray-500"
        wrapperClassName="flex-1"
      />
      <Button
  type="submit"
  className="shrink-0 !rounded-lg !bg-gradient-to-r !from-fuchsia-600 !to-purple-600 !text-white"
>
        {status === 'submitted' ? 'Subscribed ✓' : 'Subscribe'}
      </Button>
    </form>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* Newsletter band */}
      <section className="bg-white px-4 py-16 text-brand-bg sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Newsletter Subscription</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* Link columns */}
      <div className="bg-[#111114] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-semibold">{SITE_NAME}</p>
            <p className="mt-4 max-w-xs text-sm text-brand-muted">
              Airoame connects travelers with campers and cars built for the open road — booked in minutes, ready
              when you are.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:brand-gradient"
                >
                  <Icon name={social.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide">General Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-muted">
              {FOOTER_GENERAL_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide">Policy Pages</h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-muted">
              {FOOTER_POLICY_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide">Get In Touch</h3>
            <ul className="mt-4 space-y-4 text-sm text-brand-muted">
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10">
                  <Icon name="phone" className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-brand-muted">For Support</p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="font-medium text-white">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10">
                  <Icon name="mail" className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-brand-muted">Send Us Email</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="font-medium text-white">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-brand-muted">
          Copyright © {year} All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
