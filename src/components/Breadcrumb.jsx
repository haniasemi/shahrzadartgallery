import Link from 'next/link';

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground mb-6">
      <Link href="/" className="hover:text-primary transition-colors">
        خانه
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2 space-x-reverse">
          <span>/</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
