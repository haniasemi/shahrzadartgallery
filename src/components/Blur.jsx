export default function Blur({ children, className = '', intensity = 'md' }) {
  const intensities = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
    '2xl': 'backdrop-blur-2xl',
    '3xl': 'backdrop-blur-3xl'
  };

  return (
    <div className={`${intensities[intensity]} ${className}`}>
      {children}
    </div>
  );
}
