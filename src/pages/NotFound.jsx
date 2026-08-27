import { Link } from 'react-router-dom';
import Seo from '../components/layout/Seo';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 text-center">
        <p className="font-display text-6xl font-bold brand-gradient-text">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold">Page not found</h1>
        <p className="mt-2 text-brand-muted">The page you're looking for doesn't exist or has moved.</p>
        <Button as={Link} to="/" className="mt-6">
          Back to Home
        </Button>
      </section>
    </>
  );
}
