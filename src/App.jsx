import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const Vehicles = lazy(() => import('./pages/Vehicles'));
const Blog = lazy(() => import('./pages/Blog'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Plan = lazy(() => import('./pages/Plan'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));
const Faq = lazy(() => import('./pages/Faq'));
const NotFound = lazy(() => import('./pages/NotFound'));

function RouteFallback() {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-brand-pink"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}

function withLayout(element) {
  return <Layout>{element}</Layout>;
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={withLayout(<Home />)} />
        <Route path="/vehicles" element={withLayout(<Vehicles />)} />
        <Route path="/blog" element={withLayout(<Blog />)} />
        <Route path="/about-us" element={withLayout(<AboutUs />)} />
        <Route path="/plan" element={withLayout(<Plan />)} />
        <Route path="/contact" element={withLayout(<Contact />)} />
        <Route path="/privacy-policy" element={withLayout(<PrivacyPolicy />)} />
        <Route path="/service-details" element={withLayout(<ServiceDetails />)} />
        <Route path="/faq" element={withLayout(<Faq />)} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="*" element={withLayout(<NotFound />)} />
      </Routes>
    </Suspense>
  );
}
