import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black text-white" id="home">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft iridescent overlay to blend text readability without blocking Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />

      {/* Navigation */}
      <div className="relative z-10">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-6">
          <a href="#home" className="font-semibold tracking-widest text-white/90 hover:text-white">IRONKNOT</a>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#categories" className="hover:text-white">Collections</a>
            <a href="#showcase" className="hover:text-white">Highlights</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </div>

      {/* Headline Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          className="font-extrabold tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="block text-4xl sm:text-6xl md:text-7xl">Men's Jewelry</span>
          <span className="mt-3 block bg-gradient-to-r from-zinc-200 via-cyan-300 to-fuchsia-300 bg-clip-text text-3xl text-transparent sm:text-5xl md:text-6xl">
            Stainless Steel • Titanium • Onyx
          </span>
        </motion.h1>

        <motion.p
          className="mt-5 max-w-2xl text-balance text-white/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          Industrial strength meets modern elegance. Built to last. Designed to stand out.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15 }}
        >
          <a
            href="#categories"
            className="rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Explore Collections
          </a>
          <a
            href="#rings"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-6 py-3 text-sm font-semibold text-black transition hover:from-cyan-300 hover:to-fuchsia-300"
          >
            Shop Rings
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
