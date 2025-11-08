import React from 'react';
import { X, Trash2 } from 'lucide-react';

const Cart = ({ open, items, onClose, onRemove, onClear }) => {
  const total = items.reduce((sum, it) => sum + (it.priceValue || 0), 0);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center md:justify-end">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-10 h-[80vh] w-full max-w-md overflow-hidden rounded-t-3xl border border-white/10 bg-zinc-900 text-white shadow-2xl md:h-[90vh] md:rounded-l-3xl md:rounded-tr-none">
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-white/10"><X className="h-5 w-5" /></button>
        </div>
        <div className="flex h-[calc(100%-128px)] flex-col overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-sm text-white/60">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((it, idx) => (
                <li key={`${it.id}-${idx}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <img src={it.img} alt={it.title} className="h-16 w-16 rounded-xl object-cover" />
                  <div className="flex-1">
                    <p className="text-sm text-white/70">{it.tag}</p>
                    <h4 className="font-medium">{it.title}</h4>
                    <p className="text-sm text-white/70">${(it.priceValue || 0).toFixed(2)}</p>
                  </div>
                  <button onClick={() => onRemove(idx)} className="rounded-full p-2 text-white/70 hover:bg-white/10"><Trash2 className="h-4 w-4" /></button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t border-white/10 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/70">Subtotal</span>
            <span className="text-lg font-semibold">${total.toFixed(2)}</span>
          </div>
          <div className="mt-3 flex gap-2">
            <button onClick={onClear} className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium hover:bg-white/10">Clear</button>
            <button className="flex-1 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-4 py-3 text-sm font-semibold text-black hover:from-cyan-300 hover:to-fuchsia-300">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
