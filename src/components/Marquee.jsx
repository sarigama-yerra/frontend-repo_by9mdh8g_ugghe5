import React from 'react';

const items = [
  'Stainless Steel', 'Titanium', 'Black Onyx', 'Cuban Links', 'Hypoallergenic', 'Waterproof', 'Magnetic Clasps', 'Scratch Resistant'
];

const Marquee = () => {
  return (
    <div className="relative w-full bg-black py-6 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="overflow-hidden">
        <div className="flex animate-[scroll_30s_linear_infinite] whitespace-nowrap will-change-transform">
          {items.concat(items).map((t, i) => (
            <span key={i} className="mx-6 inline-flex items-center text-sm text-white/70">
              <span className="mr-2 inline-block h-1 w-1 rounded-full bg-white/30" />
              {t}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
