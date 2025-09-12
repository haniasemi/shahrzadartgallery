export default function Glow({ children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
