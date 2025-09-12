export default function SocialButtons() {
  const socialLinks = [
    { name: 'اینستاگرام', icon: '📷', url: '#', color: 'bg-pink-500' },
    { name: 'تلگرام', icon: '✈️', url: '#', color: 'bg-blue-500' },
    { name: 'واتساپ', icon: '💬', url: '#', color: 'bg-green-500' },
    { name: 'یوتیوب', icon: '📺', url: '#', color: 'bg-red-500' }
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200`}
          aria-label={social.name}
        >
          <span className="text-xl">{social.icon}</span>
        </a>
      ))}
    </div>
  );
}
