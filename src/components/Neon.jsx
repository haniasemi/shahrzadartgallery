export default function Neon({ children, className = '', color = 'primary' }) {
  const colors = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-green-400',
    warning: 'text-yellow-400',
    error: 'text-red-400'
  };

  return (
    <div className={`${colors[color]} ${className}`} style={{
      textShadow: `0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor`
    }}>
      {children}
    </div>
  );
}
