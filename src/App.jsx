import React from 'react';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Categories from './components/Categories';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Marquee />
      <Categories />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
