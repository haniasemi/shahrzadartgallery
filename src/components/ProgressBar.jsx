export default function ProgressBar({ progress, label, showPercentage = true }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{label}</span>
        {showPercentage && (
          <span className="text-sm text-muted-foreground">{progress}%</span>
        )}
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <div
          className="h-2 golden-gradient rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
