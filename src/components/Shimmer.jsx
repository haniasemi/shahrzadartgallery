export default function Shimmer({ className = '' }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-gradient-to-r from-secondary via-primary/20 to-secondary bg-[length:200%_100%] animate-shimmer rounded"></div>
    </div>
  );
}
