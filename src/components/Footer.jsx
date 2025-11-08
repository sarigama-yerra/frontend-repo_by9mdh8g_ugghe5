import React from 'react';
import { Mail, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-black px-6 pb-16 pt-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold tracking-wider">IRONKNOT</h3>
            <p className="mt-2 max-w-sm text-sm text-white/60">Men's jewelry forged from stainless steel and premium materials. Minimal. Durable. Distinct.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/70">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@ironknot.co</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 012-3456</li>
              <li className="flex items-center gap-2"><Instagram className="h-4 w-4" /> @ironknot</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/70">Newsletter</h4>
            <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex max-w-sm items-center gap-2">
              <input type="email" required placeholder="Your email" className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
              <button className="rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-4 py-2 text-sm font-semibold text-black transition hover:from-cyan-300 hover:to-fuchsia-300">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/50">
          <p>© {new Date().getFullYear()} IRONKNOT. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#home" className="hover:text-white">Top</a>
            <a href="#categories" className="hover:text-white">Collections</a>
            <a href="#showcase" className="hover:text-white">Highlights</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
