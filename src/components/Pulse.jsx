export default function Pulse({ children, className = '' }) {
  return (
    <div className={`animate-pulse ${className}`}>
      {children}
    </div>
  );
}
