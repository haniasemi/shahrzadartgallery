export default function TestimonialCard({ testimonial }) {
  return (
    <div className="card-elegant p-6 text-center">
      <div className="w-16 h-16 golden-gradient rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl">⭐</span>
      </div>
      <p className="text-muted-foreground mb-4 italic">
        "{testimonial.text}"
      </p>
      <div className="flex items-center justify-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary/20 rounded-full flex items-center justify-center">
          <span className="text-sm font-bold">م</span>
        </div>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}
