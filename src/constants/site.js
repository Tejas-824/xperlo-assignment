// src/constants/site.js
export const SITE_NAME = 'airoame';

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Vehicles', to: '/vehicles' },
  { label: 'Blog', to: '/blog' },
  { label: 'Plan', to: '/plan' },
  { label: 'Contact', to: '/contact' },
  {
    label: 'About Us',
    to: '/about-us',
    children: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms and Condition', to: '/terms-and-conditions' },
      { label: 'Service Details', to: '/service-details' },
      { label: 'F.A.Q', to: '/faq' },
    ],
  },
];

export const FOOTER_GENERAL_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Vehicles', to: '/vehicles' },
  { label: 'Plan', to: '/plan' },
  { label: 'Blog', to: '/blog' },
];

export const FOOTER_POLICY_LINKS = [
  { label: 'Privacy and Policy', to: '/privacy-policy' },
  { label: 'Terms and Condition', to: '/terms-and-conditions' },
  { label: 'Service Details', to: '/service-details' },
  { label: 'F.A.Q', to: '/faq' },
];

export const SOCIAL_LINKS = [
  { label: 'Facebook', icon: 'facebook', href: 'https://facebook.com' },
  { label: 'Twitter', icon: 'twitter', href: 'https://twitter.com' },
  { label: 'Instagram', icon: 'instagram', href: 'https://instagram.com' },
];

export const CONTACT_INFO = {
  phone: '+44 0000 000000',
  email: 'demo@example.com',
};