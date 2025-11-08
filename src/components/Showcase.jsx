import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'rings-onyx',
    title: 'Onyx Signet',
    tag: 'Ring',
    price: '$79',
    priceValue: 79,
    img: 'https://images.unsplash.com/photo-1603565816278-5013f2c1a20d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'chain-cuban',
    title: 'Cuban Link 8mm',
    tag: 'Chain',
    price: '$99',
    priceValue: 99,
    img: 'https://images.unsplash.com/photo-1574045280900-49e5eb02a7d1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'bracelet-cuff',
    title: 'Brushed Cuff',
    tag: 'Bracelet',
    price: '$69',
    priceValue: 69,
    img: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'ear-huggie',
    title: 'Steel Huggie',
    tag: 'Earring',
    price: '$39',
    priceValue: 39,
    img: 'https://images.unsplash.com/photo-1617038260897-472c59e4a3d9?q=80&w=1200&auto=format&fit=crop',
  },
];

const Showcase = ({ onSelect, onAdd }) => {
  return (
    <section id="showcase" className="relative w-full bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Highlights</h2>
          <p className="max-w-md text-white/60">Signature pieces with clean lines, high polish, and engineered durability.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <button onClick={() => onSelect && onSelect(p)} className="relative aspect-[4/5] w-full overflow-hidden text-left">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full bg-white/10 px-3 py-1 text-xs text-white">{p.tag}</div>
              </button>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-white/60">{p.price}</p>
                </div>
                <button onClick={() => onAdd && onAdd(p)} className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-4 py-2 text-xs font-semibold text-black transition hover:from-cyan-300 hover:to-fuchsia-300">Add</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
