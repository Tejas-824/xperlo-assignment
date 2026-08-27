import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Seo from '../components/layout/Seo';

const CONTACT_ADDRESS = 'Tipu Sultan Road, Motijhil, Dhaka';
const MAP_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(
  CONTACT_ADDRESS
)}&z=15&output=embed`;

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m22 6-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CONTACT_INFO = [
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '+44 7856 148907',
    href: 'tel:+447856148907',
  },
  {
    icon: MailIcon,
    label: 'Email',
    value: 'demo@example.com',
    href: 'mailto:demo@example.com',
  },
  {
    icon: PinIcon,
    label: 'Address',
    value: CONTACT_ADDRESS,
    href: null,
  },
];

function InfoCard({ info }) {
  const Icon = info.icon;
  const content = (
    <>
      <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-black/40 text-white">
        <Icon />
      </span>
      <span>
        <span className="block text-base font-semibold">{info.label}</span>
        <span className="mt-1 block text-sm text-brand-muted">{info.value}</span>
      </span>
    </>
  );

  const className =
    'flex items-center gap-4 rounded-xl bg-brand-panel p-6 transition-colors hover:bg-brand-panel/70';

  return info.href ? (
    <a href={info.href} className={className}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    // Wire this up to your form endpoint / email service.
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 600);
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with the airoame team — send us a message or find our contact details below."
        path="/contact"
      />

      {/* Page header */}
      <section className="border-b border-white/10 bg-brand-panel/40 px-4 py-14 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">Contact Us</h1>
        <nav aria-label="Breadcrumb" className="mt-2 text-sm text-brand-muted">
          <NavLink to="/" className="hover:text-white">
            Home
          </NavLink>
          <span className="mx-2">/</span>
          <span className="text-white">Contact Us</span>
        </nav>
      </section>

      {/* Form + map */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-brand-panel px-4 py-3 text-sm placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-pink"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  E-Mail Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="demo@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-brand-panel px-4 py-3 text-sm placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-pink"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Write Your Subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-brand-panel px-4 py-3 text-sm placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-pink"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Write Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-lg bg-brand-panel px-4 py-3 text-sm placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-pink"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-lg bg-gradient-to-r from-brand-pink to-fuchsia-600 px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent!' : 'Submit'}
            </button>

            {status === 'sent' && (
              <p className="text-sm text-emerald-400">
                Thanks for reaching out — we&apos;ll get back to you soon.
              </p>
            )}
          </form>

          {/* Map */}
          <div className="overflow-hidden rounded-xl bg-brand-panel">
            <iframe
              title="airoame location"
              src={MAP_SRC}
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Contact information */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">
            Contact Information
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {CONTACT_INFO.map((info) => (
              <InfoCard key={info.label} info={info} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}