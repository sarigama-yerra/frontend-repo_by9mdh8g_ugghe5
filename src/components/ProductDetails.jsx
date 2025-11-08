import React from 'react';
import { X } from 'lucide-react';

const ProductDetails = ({ open, product, onClose, onAdd }) => {
  if (!open || !product) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 mx-4 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/15"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-72 w-full md:h-full">
            <img src={product.img} alt={product.title} className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
          <div className="p-6 md:p-8">
            <div className="mb-2 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">{product.tag}</div>
            <h3 className="text-2xl font-semibold tracking-tight">{product.title}</h3>
            <p className="mt-2 text-white/60">
              Precision-crafted in surgical-grade stainless steel with a hypoallergenic finish. Designed for daily wear and built to resist water and scratches.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Waterproof and sweat-proof</li>
              <li>• Hypoallergenic — nickel-safe</li>
              <li>• Lifetime anti-tarnish guarantee</li>
            </ul>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xl font-semibold">{product.price}</span>
              <button
                onClick={() => onAdd(product)}
                className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-5 py-3 text-sm font-semibold text-black transition hover:from-cyan-300 hover:to-fuchsia-300"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
