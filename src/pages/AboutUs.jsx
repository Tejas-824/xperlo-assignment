import { NavLink } from 'react-router-dom';
import Seo from '../components/layout/Seo';
import AboutIntro from '../components/about/AboutIntro';
import AboutFeatureSplit from '../components/about/AboutFeatureSplit';
import AboutGallery from '../components/about/AboutGallery';
import { aboutIntro, aboutFeatures, aboutGallerySection, aboutGalleryImages } from '../data/about';

export default function AboutUs() {
  const [firstFeature, secondFeature] = aboutFeatures;

  return (
    <>
      <Seo
        title="About Us"
        description="Learn what makes airoame's camper and car rentals different — our fleet, our story, our promise."
        path="/about-us"
      />

      {/* Page header */}
      <section className="border-b border-white/10 bg-brand-panel/40 px-4 py-14 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">About Us</h1>
        <nav aria-label="Breadcrumb" className="mt-2 text-sm text-brand-muted">
          <NavLink to="/" className="hover:text-white">
            Home
          </NavLink>
          <span className="mx-2">/</span>
          <span className="text-white">About Us</span>
        </nav>
      </section>

      <div className="flex flex-col gap-20 px-4 py-20 sm:px-6 lg:px-8">
        <AboutIntro title={aboutIntro.title} body={aboutIntro.body} />

        <AboutFeatureSplit
          title={firstFeature.title}
          body={firstFeature.body}
          image={firstFeature.image}
          imageSide={firstFeature.imageSide}
        />

        <AboutIntro title={aboutGallerySection.title} body={aboutGallerySection.body} />

        <AboutGallery images={aboutGalleryImages} />

        <AboutFeatureSplit
          title={secondFeature.title}
          body={secondFeature.body}
          image={secondFeature.image}
          imageSide={secondFeature.imageSide}
        />
      </div>
    </>
  );
}
