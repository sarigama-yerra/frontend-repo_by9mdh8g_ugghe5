import React from 'react';
import { Ring, Link, Shield, Gem } from 'lucide-react';

const categories = [
  { id: 'rings', name: 'Rings', icon: Ring, desc: 'Bold bands, signets, and spinners in stainless and titanium.' },
  { id: 'chains', name: 'Chains', icon: Link, desc: 'Cuban, rope, and figaro links engineered for everyday wear.' },
  { id: 'bracelets', name: 'Bracelets', icon: Shield, desc: 'Cuffs and chain bracelets with magnetic clasps and onyx accents.' },
  { id: 'earrings', name: 'Earrings', icon: Gem, desc: 'Huggies, studs, and hoops with hypoallergenic comfort.' },
];

const Categories = () => {
  return (
    <section id="categories" className="relative w-full bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Collections</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/60">Crafted for men. Built from stainless steel, titanium, and premium materials.</p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ id, name, icon: Icon, desc }) => (
            <a key={id} href={`#${id}`} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <p className="mt-1 text-sm text-white/60">{desc}</p>
                </div>
              </div>
              <div className="pointer-events-none mt-6 h-1 w-full rounded-full bg-gradient-to-r from-cyan-400/60 to-fuchsia-400/60 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
