export default function Glass({ children, className = '' }) {
  return (
    <div className={`bg-white/10 backdrop-blur-md border border-white/20 ${className}`}>
      {children}
    </div>
  );
}
