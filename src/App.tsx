import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  Heart, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Phone, 
  Mail, 
  Star, 
  ArrowRight, 
  Menu, 
  X, 
  Search,
  CheckCircle2,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { PRODUCTS, REVIEWS, CONTACT_INFO } from './constants';
import { Product } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [cartCount, setCartCount] = useState(0);

  const categories = ['All', 'Dresses', 'Amigurumi', 'Baby', 'Bags', 'Flowers'];

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProducts = PRODUCTS.slice(0, 3);

  // Smooth scroll to sections
  const scrollTo = (id: string) => {
    setActiveTab(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen selection:bg-theme-pink-dark selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-theme-pink-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('Home')}>
              <div className="w-10 h-10 bg-theme-pink-light rounded-full flex items-center justify-center text-theme-text shadow-sm">
                <span className="text-xl">🧶</span>
              </div>
              <span className="font-serif text-2xl font-bold italic tracking-tight text-theme-text">
                Crochet Villa
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-theme-text">
              {['Home', 'Designs', 'Purchase', 'Reviews', 'Contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => scrollTo(tab)}
                  className={`transition-all hover:opacity-100 ${
                    activeTab === tab ? 'border-b border-theme-text opacity-100' : 'opacity-60'
                  }`}
                >
                  {tab === 'Contact' ? 'Contact Us' : tab}
                </button>
              ))}
              <div className="relative">
                <button 
                  className="bg-theme-pink-light px-6 py-2 rounded-full text-sm font-bold border border-theme-pink-mid shadow-sm transition-all hover:shadow-md"
                  onClick={() => setCartCount(c => c + 1)}
                >
                  Cart ({cartCount})
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                className="p-2 hover:bg-theme-bg rounded-full transition-colors relative"
                onClick={() => setCartCount(c => c + 1)}
              >
                <ShoppingBag size={22} className="text-theme-text opacity-70" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-theme-pink-dark text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-theme-text opacity-70 hover:bg-theme-bg rounded-full transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-theme-pink-light overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {['Home', 'Designs', 'Purchase', 'Reviews', 'Contact'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => scrollTo(tab)}
                    className="block w-full text-left px-4 py-3 text-lg font-medium text-theme-text hover:bg-theme-bg rounded-2xl transition-colors"
                  >
                    {tab === 'Contact' ? 'Contact Us' : tab}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        {/* Banner: Custom Orders Available */}
        <div className="bg-theme-pink-mid text-theme-text py-2 text-center text-xs font-bold uppercase tracking-widest border-b border-theme-pink-mid shadow-sm">
          <p className="flex items-center justify-center gap-4">
            <Sparkles size={14} className="text-theme-pink-dark" />
            Custom Orders Available! Message us for your unique designs
            <Sparkles size={14} className="text-theme-pink-dark" />
          </p>
        </div>

        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden py-24 lg:py-40 bg-theme-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block bg-theme-blue-light px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                  Handmade with Love
                </span>
                <h1 className="font-serif text-7xl lg:text-8xl leading-[1.1] text-theme-text mb-8">
                  Soft Stitches <br/> 
                  <span className="italic text-theme-pink-dark">Sweet Memories</span>
                </h1>
                <p className="text-xl text-theme-text opacity-70 mb-10 max-w-md leading-relaxed">
                  Beautifully crafted amigurumi toys, baby dresses, and accessories designed for the little dreamers in your life.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => scrollTo('Purchase')}
                    className="px-10 py-5 bg-theme-text text-white rounded-full font-bold text-lg shadow-xl shadow-theme-text/10 hover:translate-y-[-2px] transition-all"
                  >
                    Shop the Collection
                  </button>
                  <button 
                    onClick={() => scrollTo('Designs')}
                    className="px-10 py-5 bg-transparent text-theme-text border-2 border-theme-text rounded-full font-bold text-lg hover:bg-theme-text/5 transition-all"
                  >
                    View Designs
                  </button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative grid grid-cols-2 gap-4"
              >
                <div className="aspect-square bg-theme-pink-mid rounded-[40px] flex flex-col items-center justify-center text-center p-6 shadow-sm overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1574359411659-15573a27f0c2?q=80&w=400&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform" />
                  <span className="text-5xl mb-2 relative z-10">🧸</span>
                  <span className="font-serif italic text-xl relative z-10">Amigurumi</span>
                </div>
                <div className="aspect-square bg-theme-blue-mid rounded-[40px] mt-8 flex flex-col items-center justify-center text-center p-6 shadow-sm overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1522778147829-047360bdc7f6?q=80&w=400&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform" />
                  <span className="text-5xl mb-2 relative z-10">👗</span>
                  <span className="font-serif italic text-xl relative z-10">Baby Dresses</span>
                </div>
                <div className="aspect-square bg-theme-green-light rounded-[40px] -mt-8 flex flex-col items-center justify-center text-center p-6 shadow-sm overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1490750967868-886a50ad94a0?q=80&w=400&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform" />
                  <span className="text-5xl mb-2 relative z-10">🌸</span>
                  <span className="font-serif italic text-xl relative z-10">Crochet Flowers</span>
                </div>
                <div className="aspect-square bg-theme-orange-light rounded-[40px] flex flex-col items-center justify-center text-center p-6 shadow-sm overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?q=80&w=400&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform" />
                  <span className="text-5xl mb-2 relative z-10">👜</span>
                  <span className="font-serif italic text-xl relative z-10">Trendy Bags</span>
                </div>

                {/* Custom Order Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-5 rounded-3xl shadow-2xl border border-theme-pink-light text-center w-40 animate-pulse">
                  <span className="text-xs font-bold uppercase block mb-1 text-theme-pink-dark">Custom</span>
                  <span className="text-sm italic text-theme-text opacity-70">Orders Available</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Collections / Categories */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-12">
            <div className="text-center mb-20">
              <h2 className="font-serif text-5xl font-bold italic text-theme-text mb-4">Our Special Collections</h2>
              <div className="w-16 h-1 bg-theme-pink-mid mx-auto rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { name: 'Custom Dresses', image: 'https://images.unsplash.com/photo-1620803135981-85b8fa6712fe?q=80&w=400&auto=format&fit=crop', color: 'bg-theme-pink-light' },
                { name: 'Amigurumi Toys', image: 'https://images.unsplash.com/photo-1574359411659-15573a27f0c2?q=80&w=400&auto=format&fit=crop', color: 'bg-theme-blue-light' },
                { name: 'Baby Crochet', image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=400&auto=format&fit=crop', color: 'bg-theme-green-light' }
              ].map((cat, i) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group cursor-pointer"
                  onClick={() => {
                    setSelectedCategory(cat.name.split(' ')[1] || cat.name.split(' ')[0]);
                    scrollTo('Designs');
                  }}
                >
                  <div className={`aspect-square card-rounded overflow-hidden mb-6 ${cat.color} p-4 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2`}>
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover rounded-[30px] transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold italic text-theme-text text-center flex items-center justify-center gap-2">
                    {cat.name} <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Designs Gallery Section */}
        <section id="designs" className="py-24 bg-theme-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div>
                <h2 className="font-serif text-5xl font-bold italic text-theme-text mb-4">Design Portfolio</h2>
                <p className="text-theme-text/60 max-w-md text-lg">Browse through our handcrafted gallery of love-infused designs.</p>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                      selectedCategory === cat 
                        ? 'bg-theme-text text-white shadow-lg' 
                        : 'bg-white text-theme-text border border-theme-pink-mid hover:bg-theme-pink-light'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white card-rounded overflow-hidden handmade-shadow group border border-theme-pink-light/30"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-6 right-6 flex flex-col gap-2">
                        {product.tags?.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-theme-pink-dark shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="absolute inset-0 bg-theme-text/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-12">
                        <button 
                          onClick={() => scrollTo('Purchase')}
                          className="w-full py-4 bg-white text-theme-text rounded-full font-bold text-sm tracking-widest uppercase"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-black italic text-theme-pink-dark uppercase tracking-widest">{product.category}</span>
                        <div className="flex text-theme-pink-dark/40">
                          {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                        </div>
                      </div>
                      <h3 className="font-serif text-2xl font-bold italic text-theme-text mb-2">{product.name}</h3>
                      <p className="text-theme-text/60 text-sm leading-relaxed">{product.description}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-24 bg-white card-rounded border-2 border-dashed border-theme-pink-mid shadow-inner">
                <Search className="mx-auto text-theme-pink-mid mb-6 opacity-40" size={64} />
                <h3 className="font-serif text-3xl font-bold italic text-theme-text mb-2">No designs found</h3>
                <p className="text-theme-text/60">Try selecting a different category or search term.</p>
                <button 
                  onClick={() => {setSelectedCategory('All'); setSearchQuery('');}}
                  className="mt-8 text-theme-pink-dark font-black uppercase tracking-widest text-xs underline decoration-theme-pink-mid"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Purchase / Catalog Section */}
        <section id="purchase" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
              <div>
                <h2 className="font-serif text-5xl font-bold italic text-theme-text mb-2">Shop Our Collection</h2>
                <p className="text-theme-text/60 text-lg">Bring a piece of handmade joy into your home.</p>
              </div>
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-theme-text/40 transition-colors group-focus-within:text-theme-pink-dark" size={20} />
                <input 
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-14 pr-8 py-4 bg-theme-bg border border-theme-pink-mid rounded-full focus:outline-none focus:ring-2 focus:ring-theme-pink-dark/10 w-full md:w-96 transition-all text-theme-text font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {PRODUCTS.map((product) => (
                <div key={product.id} className="flex flex-col lg:flex-row bg-theme-bg card-rounded overflow-hidden border border-theme-pink-mid/30 group">
                  <div className="w-full lg:w-56 aspect-square overflow-hidden shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-10 flex flex-col justify-between grow">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-theme-pink-dark bg-white px-3 py-1 rounded-full shadow-sm">{product.category}</span>
                        {product.isCustomizable && (
                          <span className="text-[10px] font-black uppercase tracking-widest text-theme-text opacity-50 bg-white px-3 py-1 rounded-full shadow-sm">Custom</span>
                        )}
                      </div>
                      <h3 className="font-serif text-3xl font-bold italic text-theme-text mb-3">{product.name}</h3>
                      <p className="text-theme-text/70 text-sm mb-6 leading-relaxed line-clamp-3">{product.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto pt-8 border-t border-theme-pink-mid/20">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-theme-text/40 font-black uppercase tracking-widest mb-1">Price</span>
                        <span className="text-3xl font-serif font-extrabold text-theme-text leading-none italic">
                          {typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : product.price}
                        </span>
                      </div>
                      <button 
                        onClick={() => {
                          window.open(CONTACT_INFO.whatsapp, '_blank');
                          setCartCount(c => c + 1);
                        }}
                        className="px-8 py-4 bg-theme-text text-white rounded-full font-bold transition-all hover:bg-black hover:scale-105 active:scale-95 shadow-xl shadow-theme-text/10 flex items-center gap-2"
                      >
                        <MessageCircle size={20} /> Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Design Call */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-24 p-12 lg:p-24 bg-theme-text rounded-[4rem] text-white relative overflow-hidden"
            >
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <h2 className="font-serif text-6xl font-bold italic mb-6 leading-tight">Have a unique idea?</h2>
                  <p className="text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
                    We specialize in creating customized crochet items tailored to your vision. Simply send us a message with your ideas and colors!
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => window.open(CONTACT_INFO.whatsapp, '_blank')}
                      className="px-10 py-5 bg-white text-theme-text rounded-full font-bold text-lg hover:bg-theme-pink-light transition-all flex items-center gap-2 shadow-2xl"
                    >
                      <MessageCircle size={24} /> Chat on WhatsApp
                    </button>
                    <button 
                      onClick={() => scrollTo('Contact')}
                      className="px-10 py-5 bg-theme-pink-dark text-white rounded-full font-bold text-lg hover:bg-theme-pink-dark/80 transition-all shadow-2xl"
                    >
                      Inquiry Form
                    </button>
                  </div>
                </div>
                <div className="hidden lg:grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-theme-blue-mid/20 backdrop-blur-md border border-white/10 rounded-[40px] flex items-center justify-center text-4xl">🧶</div>
                  <div className="aspect-square bg-theme-pink-mid/20 backdrop-blur-md border border-white/10 rounded-[40px] flex items-center justify-center text-4xl mt-12">💖</div>
                  <div className="aspect-square bg-theme-orange-light/20 backdrop-blur-md border border-white/10 rounded-[40px] flex items-center justify-center text-4xl -mt-12">🎁</div>
                  <div className="aspect-square bg-theme-green-light/20 backdrop-blur-md border border-white/10 rounded-[40px] flex items-center justify-center text-4xl">📐</div>
                </div>
              </div>
              {/* Background Accents */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-theme-pink-dark/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-theme-blue-mid/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            </motion.div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24 bg-theme-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-12">
            <div className="text-center mb-20">
              <h2 className="font-serif text-5xl font-bold italic text-theme-text mb-4">What Moms Say</h2>
              <p className="text-theme-text/50 uppercase tracking-widest text-[10px] font-black">Genuine love from our community</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {REVIEWS.map((review, i) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 card-rounded handmade-shadow relative border border-theme-pink-light/30"
                >
                  <div className="flex gap-1 mb-6 text-theme-pink-dark/30">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-lg text-theme-text/80 mb-8 italic leading-relaxed">"{review.comment}"</p>
                  <div className="flex items-center justify-between border-t border-theme-bg pt-6">
                    <span className="font-bold text-theme-text uppercase text-[10px] tracking-widest">{review.user}</span>
                    <span className="text-[10px] text-theme-text/40 font-black">{review.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button className="text-theme-pink-dark font-black uppercase tracking-widest text-xs flex items-center gap-3 mx-auto hover:gap-5 transition-all group">
                Read more testimonials <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="font-serif text-5xl font-bold italic text-theme-text mb-8 leading-tight">Let's Create Magic Together</h2>
                <p className="text-lg text-theme-text/60 mb-12 leading-relaxed">
                  Whether you have a question about our products or want to discuss a custom design project, we'd love to hear from you!
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-theme-pink-light rounded-3xl flex items-center justify-center text-theme-pink-dark shrink-0 shadow-sm">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase tracking-widest text-[10px] text-theme-text/40 mb-1">Phone & WhatsApp</h4>
                      <p className="text-xl font-serif font-bold italic text-theme-text">{CONTACT_INFO.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-theme-blue-light rounded-3xl flex items-center justify-center text-theme-blue-mid shrink-0 shadow-sm transition-colors hover:bg-theme-blue-mid/20">
                      <Instagram size={24} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase tracking-widest text-[10px] text-theme-text/40 mb-1">Instagram</h4>
                      <p className="text-xl font-serif font-bold italic text-theme-text">@{CONTACT_INFO.instagram}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-theme-green-light rounded-3xl flex items-center justify-center text-theme-text shrink-0 shadow-sm opacity-80">
                      <Facebook size={24} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase tracking-widest text-[10px] text-theme-text/40 mb-1">Facebook</h4>
                      <p className="text-xl font-serif font-bold italic text-theme-text">{CONTACT_INFO.facebook}</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex gap-4 mt-16">
                  <a href="#" className="w-14 h-14 bg-theme-bg border border-theme-pink-mid text-theme-text rounded-full flex items-center justify-center transition-all hover:bg-theme-pink-dark hover:text-white hover:-translate-y-1">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="w-14 h-14 bg-theme-bg border border-theme-pink-mid text-theme-text rounded-full flex items-center justify-center transition-all hover:bg-theme-pink-dark hover:text-white hover:-translate-y-1">
                    <Facebook size={24} />
                  </a>
                  <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noreferrer" className="w-14 h-14 bg-green-50 text-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg shadow-green-500/20">
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-theme-bg p-12 card-rounded border border-theme-pink-mid shadow-inner"
              >
                <form className="space-y-8" onSubmit={(e) => {e.preventDefault(); alert('Message sent! We\'ll get back to you soon.')}}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-theme-text/40 ml-1">First Name</label>
                      <input type="text" required placeholder="Jane" className="w-full px-6 py-4 bg-white border border-theme-pink-mid rounded-[20px] focus:outline-none focus:ring-2 focus:ring-theme-pink-dark/10 transition-all shadow-sm font-medium" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-theme-text/40 ml-1">Email</label>
                      <input type="email" required placeholder="jane@example.com" className="w-full px-6 py-4 bg-white border border-theme-pink-mid rounded-[20px] focus:outline-none focus:ring-2 focus:ring-theme-pink-dark/10 transition-all shadow-sm font-medium" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-theme-text/40 ml-1">Service Interested In</label>
                    <div className="relative">
                      <select className="w-full px-6 py-4 bg-white border border-theme-pink-mid rounded-[20px] focus:outline-none focus:ring-2 focus:ring-theme-pink-dark/10 transition-all shadow-sm appearance-none font-medium">
                        <option>Custom Dress</option>
                        <option>Amigurumi Toy</option>
                        <option>Baby Set</option>
                        <option>Crochet Bag</option>
                        <option>Other / Inquiry</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-theme-text/40">
                        <ChevronRight size={20} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-theme-text/40 ml-1">Your Message</label>
                    <textarea rows={4} required placeholder="Tell us what you'd like us to create for you..." className="w-full px-6 py-4 bg-white border border-theme-pink-mid rounded-[20px] focus:outline-none focus:ring-2 focus:ring-theme-pink-dark/10 transition-all shadow-sm font-medium"></textarea>
                  </div>
                  <button className="w-full py-5 bg-theme-text text-white rounded-full font-bold text-lg shadow-xl shadow-theme-text/10 hover:bg-black transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 uppercase tracking-widest">
                    Send Message <ArrowRight size={20} />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-theme-pink-light/30 rounded-full blur-3xl -z-1" />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-24 text-theme-text border-t border-theme-pink-mid/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-12 relative z-10">
          <div className="grid md:grid-cols-4 gap-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-theme-pink-light rounded-full flex items-center justify-center text-theme-text">
                  <span className="text-xl">🧶</span>
                </div>
                <span className="font-serif text-3xl font-bold italic">Crochet Villa</span>
              </div>
              <p className="text-theme-text/60 max-w-sm mb-10 text-lg leading-relaxed italic">
                "Handcrafting soft memories and timeless treasures for the ones you love most."
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-theme-text/40 hover:text-theme-pink-dark transition-colors"><Instagram size={24} /></a>
                <a href="#" className="text-theme-text/40 hover:text-theme-pink-dark transition-colors"><Facebook size={24} /></a>
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noreferrer" className="text-theme-text/40 hover:text-theme-pink-dark transition-colors"><MessageCircle size={24} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 opacity-40">Navigation</h4>
              <ul className="space-y-4 text-theme-text font-medium italic">
                <li><button onClick={() => scrollTo('Home')} className="hover:text-theme-pink-dark transition-colors underline decoration-theme-pink-mid/30">Home</button></li>
                <li><button onClick={() => scrollTo('Designs')} className="hover:text-theme-pink-dark transition-colors underline decoration-theme-pink-mid/30">Portfolio</button></li>
                <li><button onClick={() => scrollTo('Purchase')} className="hover:text-theme-pink-dark transition-colors underline decoration-theme-pink-mid/30">Shop</button></li>
                <li><button onClick={() => scrollTo('Reviews')} className="hover:text-theme-pink-dark transition-colors underline decoration-theme-pink-mid/30">Reviews</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 opacity-40">Contact Info</h4>
              <ul className="space-y-6 text-theme-text font-medium italic">
                <li className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-30 not-italic">Phone</span>
                  <span>{CONTACT_INFO.phone}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-30 not-italic">Follow Us</span>
                  <span>@{CONTACT_INFO.instagram}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-24 pt-8 border-t border-theme-bg flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest opacity-40">
            <p>© 2026 Crochet Villa. All Rights Reserved.</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-theme-pink-dark"></div>
              <span>100% Cotton & Handmade</span>
            </div>
          </div>
        </div>
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-theme-pink-light/30 rounded-full blur-3xl -z-1 translate-x-1/2 -translate-y-1/2" />
      </footer>

      {/* Floating Action Button - Multi-purpose */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <AnimatePresence>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.open(CONTACT_INFO.whatsapp, '_blank')}
            className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center transition-colors hover:bg-green-600 group relative"
          >
            <MessageCircle size={28} />
            <span className="absolute right-16 bg-neutral-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Chat with us!
            </span>
          </motion.button>
        </AnimatePresence>
      </div>

    </div>
  );
}
