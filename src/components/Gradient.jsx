export default function Gradient({ children, className = '', direction = 'to-br' }) {
  const directions = {
    'to-t': 'bg-gradient-to-t',
    'to-tr': 'bg-gradient-to-tr',
    'to-r': 'bg-gradient-to-r',
    'to-br': 'bg-gradient-to-br',
    'to-b': 'bg-gradient-to-b',
    'to-bl': 'bg-gradient-to-bl',
    'to-l': 'bg-gradient-to-l',
    'to-tl': 'bg-gradient-to-tl'
  };

  return (
    <div className={`${directions[direction]} from-primary to-secondary ${className}`}>
      {children}
    </div>
  );
}
