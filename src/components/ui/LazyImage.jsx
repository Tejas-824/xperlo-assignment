export default function LazyImage({
  src,
  alt,
  className = '',
  priority = false,
  width,
  height,
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      width={width}
      height={height}
      {...props}
    />
  );
}
