import LazyImage from '../ui/LazyImage';

export default function AboutGallery({ images }) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-5">
      {images.map((item) => (
        <div key={item.id} className="aspect-square overflow-hidden">
          <LazyImage src={item.image} alt="" className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  );
}
