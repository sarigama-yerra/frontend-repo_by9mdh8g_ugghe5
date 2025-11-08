import React, { useState } from 'react';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Categories from './components/Categories';
import Showcase from './components/Showcase';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import NavBar from './components/NavBar';

function App() {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleSelectProduct = (p) => {
    setSelectedProduct(p);
    setDetailsOpen(true);
  };

  const handleAddToCart = (p) => {
    setCart((prev) => [...prev, p]);
    setCartOpen(true);
  };

  const handleRemoveFromCart = (idx) => {
    setCart((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleClearCart = () => setCart([]);

  return (
    <div className="bg-black text-white">
      <NavBar onCartOpen={() => setCartOpen(true)} />
      <Hero />
      <Marquee />
      <Categories />
      <Showcase onSelect={handleSelectProduct} onAdd={handleAddToCart} />
      <Footer />

      <ProductDetails
        open={detailsOpen}
        product={selectedProduct}
        onClose={() => setDetailsOpen(false)}
        onAdd={(p) => handleAddToCart(p)}
      />

      <Cart
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onRemove={handleRemoveFromCart}
        onClear={handleClearCart}
      />
    </div>
  );
}

export default App;
