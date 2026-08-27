import { Link } from 'react-router-dom';
import LazyImage from '../ui/LazyImage';
import { PLACEHOLDER_IMAGE } from '../../constants/images';
import { SITE_NAME } from '../../constants/site';

export default function AuthSplitLayout({ children, formClassName = '' }) {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <LazyImage
          src={PLACEHOLDER_IMAGE}
          alt=""
          priority
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex items-center justify-center bg-brand-bg px-4 py-12 sm:px-6 lg:px-12">
        <div className={`w-full max-w-md ${formClassName}`}>
          <Link to="/" className="mb-8 block text-center font-display text-3xl font-semibold">
            {SITE_NAME}
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}
