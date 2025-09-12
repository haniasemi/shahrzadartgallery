export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
          <span className="text-2xl">🎨</span>
        </div>
        <p className="text-muted-foreground">در حال بارگذاری...</p>
      </div>
    </div>
  );
}
