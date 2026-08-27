import Seo from '../components/layout/Seo';
import Hero from '../components/home/Hero';
import BookCarForm from '../components/home/BookCarForm';
import RentalFleet from '../components/home/RentalFleet';
import FeatureCards from '../components/home/FeatureCards';
import PricingPlans from '../components/home/PricingPlans';
import FAQ from '../components/home/FAQ';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  return (
    <>
      <Seo
        title="Car & Camper Rentals"
        description="Rent campers and luxury cars from $19. Expert drivers, no hidden charges, and flexible pricing plans."
        path="/"
      />
      <Hero />
      <BookCarForm />
      <div className="mt-20">
        <RentalFleet />
      </div>
      <FeatureCards />
      <PricingPlans />
      <FAQ />
      <Testimonials />
    </>
  );
}
