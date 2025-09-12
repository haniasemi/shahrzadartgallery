export default function StatCard({ number, label, description, icon }) {
  return (
    <div className="text-center">
      <div className="w-20 h-20 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
        {icon ? (
          <span className="text-2xl">{icon}</span>
        ) : (
          <span className="text-2xl font-bold text-black">{number}</span>
        )}
      </div>
      <h3 className="text-lg font-semibold mb-2">{label}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
