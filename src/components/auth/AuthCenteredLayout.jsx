import { Link } from 'react-router-dom';
import LazyImage from '../ui/LazyImage';
import { PLACEHOLDER_IMAGE } from '../../constants/images';
import { SITE_NAME } from '../../constants/site';

export default function AuthCenteredLayout({ children }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16">
      <LazyImage
        src={PLACEHOLDER_IMAGE}
        alt=""
        priority
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/30" />

      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-brand-panel/80 p-8 shadow-2xl backdrop-blur-md sm:p-10">
        <Link to="/" className="mb-6 block text-center font-display text-3xl font-semibold">
          {SITE_NAME}
        </Link>
        {children}
      </div>
    </div>
  );
}
