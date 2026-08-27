
export default function Input({ label, id, className = '', wrapperClassName = '', ...props }) {
  return (
    <div className={wrapperClassName}>
      {label && (
        <label htmlFor={id} className="mb-2 block text-sm font-medium text-white">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full rounded-lg border border-brand-border bg-brand-input px-4 py-3
          text-sm text-white placeholder-brand-muted outline-none transition-colors
          focus:border-brand-pink ${className}`}
        {...props}
      />
    </div>
  );
}
