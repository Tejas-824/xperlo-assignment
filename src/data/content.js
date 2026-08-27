// src/data/content.js
import { PLACEHOLDER_IMAGE } from '../constants/images';

export const features = [
  {
    id: 'expert-drivers',
    title: 'Expert Drivers',
    description:
      'Every driver on our roster is vetted, licensed, and trained for long-distance touring so you can relax on the road.',
    image: PLACEHOLDER_IMAGE,
  },
  {
    id: 'no-hidden-charges',
    title: 'No Hidden Charges',
    description:
      'The price you see at checkout is the price you pay — fuel, insurance, and mileage are spelled out up front.',
    image: PLACEHOLDER_IMAGE,
  },
  {
    id: 'friendly-behavior',
    title: 'Friendly Behavior',
    description:
      'From pickup to drop-off, our support team is trained to make every rental feel easy and unhurried.',
    image: PLACEHOLDER_IMAGE,
  },
];

export const pricingPlans = [
  {
    id: 'company-a',
    name: 'Company A',
    price: 120,
    duration: '2 Days',
    accent: 'purple',
    features: [
      { label: 'Full Paris Sideseen', included: true },
      { label: 'Fuel & Gas Included', included: true },
      { label: 'Driver Included', included: true },
      { label: 'Insurance', included: false },
      { label: 'Cancellation', included: false },
    ],
  },
  {
    id: 'company-b',
    name: 'Company B',
    price: 150,
    duration: '3 Days',
    accent: 'teal',
    features: [
      { label: '1 car for Daylong', included: true },
      { label: 'Driver Included', included: true },
      { label: 'Fuel & Gas Included', included: true },
      { label: 'Extra Route', included: false },
      { label: 'Car Damage cost', included: false },
    ],
  },
  {
    id: 'company-c',
    name: 'Company C',
    price: 200,
    duration: '5 Days',
    accent: 'green',
    features: [
      { label: '1 car for full day', included: true },
      { label: 'Driver Included', included: true },
      { label: 'Fuel & Gas Included', included: true },
      { label: 'Extra Passenger', included: false },
      { label: 'Car Damage cost', included: false },
    ],
  },
];

export const faqs = [
  {
    id: 'faq-1',
    question: 'What documents do I need to rent a vehicle?',
    answer:
      'A valid driving license, a government-issued photo ID, and a credit or debit card in the driver\u2019s name are required at pickup.',
  },
  {
    id: 'faq-2',
    question: 'Can I cancel or reschedule my booking?',
    answer:
      'Yes, bookings can be cancelled or rescheduled free of charge up to 48 hours before your pickup time.',
  },
  {
    id: 'faq-3',
    question: 'Is insurance included in the rental price?',
    answer:
      'Basic insurance is included with every rental. Extended coverage plans are available at checkout.',
  },
  {
    id: 'faq-4',
    question: 'Do you offer one-way rentals?',
    answer:
      'One-way rentals are available between most of our locations for a small drop-off fee.',
  },
  {
    id: 'faq-5',
    question: 'What happens if I return the vehicle late?',
    answer:
      'A grace period of 30 minutes is provided. After that, late returns are billed at an hourly rate.',
  },
];

export const testimonials = [
  {
    id: 't-1',
    name: 'John Doe',
    role: 'Designer',
    avatar: PLACEHOLDER_IMAGE,
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 't-2',
    name: 'Rebecca Doe',
    role: 'Designer',
    avatar: PLACEHOLDER_IMAGE,
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 't-3',
    name: 'Stella Doe',
    role: 'Designer',
    avatar: PLACEHOLDER_IMAGE,
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];