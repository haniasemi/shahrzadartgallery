export default function Hologram({ children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
