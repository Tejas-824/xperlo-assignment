export default function Select({ label, id, options = [], className = '', wrapperClassName = '', ...props }) {
  return (
    <div className={wrapperClassName}>
      {label && (
        <label htmlFor={id} className="mb-2 block text-sm font-medium text-white">
          {label}
        </label>
      )}
      <select
        id={id}
        className={`w-full appearance-none rounded-lg border border-brand-border bg-brand-input
          bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%239a9ba6%22 stroke-width=%222%22><polyline points=%226 9 12 15 18 9%22/></svg>')]
          bg-[length:16px] bg-[right_1rem_center] bg-no-repeat px-4 py-3 pr-10 text-sm text-white
          outline-none transition-colors focus:border-brand-pink ${className}`}
        {...props}
      >
        {options.map((opt) => {
          const value = typeof opt === 'string' ? opt : opt.value;
          const text = typeof opt === 'string' ? opt : opt.label;
          return (
            <option key={value} value={value} className="bg-brand-input">
              {text}
            </option>
          );
        })}
      </select>
    </div>
  );
}
