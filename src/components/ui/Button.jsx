const VARIANTS = {
  primary:
    'brand-gradient text-white hover:opacity-90 shadow-lg shadow-brand-pink/10',
  outline:
    'border border-white/30 text-white hover:bg-white/10',
  ghost: 'text-white hover:bg-white/10',
};

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export default function Button({
  as = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const Component = as;
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold
    transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
    ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
