export default function Skeleton({ className = '', lines = 1 }) {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="bg-secondary rounded h-4 mb-2 last:mb-0"
          style={{
            width: index === lines - 1 ? '75%' : '100%'
          }}
        />
      ))}
    </div>
  );
}
