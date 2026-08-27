import LazyImage from '../ui/LazyImage';

export default function AboutFeatureSplit({ title, body, image, imageSide = 'left' }) {
  const imageOrder = imageSide === 'right' ? 'lg:order-2' : 'lg:order-1';
  const textOrder = imageSide === 'right' ? 'lg:order-1' : 'lg:order-2';

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <div className={`overflow-hidden rounded-2xl ${imageOrder}`}>
        <LazyImage src={image} alt="" className="aspect-[4/3] w-full object-cover" />
      </div>
      <div className={textOrder}>
        <h2 className="font-display text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">{body}</p>
      </div>
    </div>
  );
}
