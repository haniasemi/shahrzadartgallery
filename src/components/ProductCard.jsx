import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ProductCard({ product }) {
  return (
    <Card className="card-elegant group cursor-pointer">
      <CardContent className="p-0">
        <div className="aspect-square bg-gradient-to-br from-secondary to-primary/20 rounded-t-lg flex items-center justify-center relative overflow-hidden">
          <span className="text-6xl opacity-50 group-hover:scale-110 transition-transform duration-300">🎨</span>
          <div className="absolute top-2 right-2">
            <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold text-primary">
              {product.price ? `${product.price.toLocaleString()} تومان` : 'قیمت تماس'}
            </span>
            {product.isNew && (
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                جدید
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Link href={`/products/${product.slug}`}>مشاهده</Link>
            </Button>
            <Button size="sm" className="btn-golden flex-1">
              <Link href="/contact">سفارش</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
