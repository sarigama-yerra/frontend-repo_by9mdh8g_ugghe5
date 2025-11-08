import React from 'react';
import { ShoppingBag } from 'lucide-react';

const NavBar = ({ onCartOpen }) => {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20">
      <nav className="pointer-events-auto mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-6 text-white">
        <a href="#home" className="font-semibold tracking-widest text-white/90 hover:text-white">IRONKNOT</a>
        <div className="flex items-center gap-6 text-sm text-white/70">
          <a href="#categories" className="hover:text-white">Collections</a>
          <a href="#showcase" className="hover:text-white">Highlights</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <button onClick={onCartOpen} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20">
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
