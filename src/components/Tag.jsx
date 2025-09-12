export default function Tag({ children, variant = 'default', size = 'sm' }) {
  const baseClasses = 'inline-flex items-center rounded-full font-medium transition-colors duration-200';
  
  const variants = {
    default: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    primary: 'bg-primary/20 text-primary hover:bg-primary/30',
    success: 'bg-green-100 text-green-800 hover:bg-green-200',
    warning: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    error: 'bg-red-100 text-red-800 hover:bg-red-200'
  };
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
}
