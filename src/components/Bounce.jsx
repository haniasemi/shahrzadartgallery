export default function Bounce({ children, className = '' }) {
  return (
    <div className={`animate-bounce ${className}`}>
      {children}
    </div>
  );
}
