export default function Shadow({ children, className = '', intensity = 'md' }) {
  const intensities = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl'
  };

  return (
    <div className={`${intensities[intensity]} ${className}`}>
      {children}
    </div>
  );
}
