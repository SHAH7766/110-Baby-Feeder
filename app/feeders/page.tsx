'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import QuickViewModal, { QuickViewProduct } from '@/components/QuickViewModal';

const allProducts = [
  {
    id: 'f1',
    name: '110 Classic Baby Feeder',
    price: 0,
    priceFormatted: '',
    description: 'Ergonomic borosilicate glass with soft peach silicone sleeve.',
    image: 'https://res.cloudinary.com/hvql2xsc/image/upload/v1792508434/feeder_1_1-same-for-this.jpg',
    badge: 'Popular',
    rating: '4.9',
    category: 'glass',
    reviewsCount: 128,
    stock: 15,
  },
  {
    id: 'f2',
    name: '110 Sunshine Yellow Feeder',
    price: 0,
    priceFormatted: '',
    description: 'Vibrant sunshine yellow borosilicate glass feeder with anti-colic silicone grip.',
    image: 'https://res.cloudinary.com/hvql2xsc/image/upload/v1792508434/Gemini_Generated_Image_vr43cdvr43cdvr43_1-remove-numitree-and-slightly-increase-the-size-of-slighlt_1.jpg',
    badge: 'New',
    rating: '5.0',
    category: 'silicone',
    reviewsCount: 94,
    stock: 8,
  },
  {
    id: 'f3',
    name: '110 Portable Travel Feeder',
    price: 0,
    priceFormatted: '',
    description: 'Compact portable baby travel feeder bottle with secure lid.',
    image: 'https://res.cloudinary.com/hvql2xsc/image/upload/v1792508434/feeder_1_2-also-numitree-name-and-logoput-logo-i-gave-you-ins.jpg',
    badge: 'Essential',
    rating: '4.9',
    category: 'travel',
    reviewsCount: 76,
    stock: 22,
  },
  {
    id: 'f4',
    name: '110 Dual Soft-Touch Feeder',
    price: 0,
    priceFormatted: '',
    description: 'Premium dual-textured silicone grip with anti-colic air valve.',
    image: 'https://res.cloudinary.com/hvql2xsc/image/upload/v1792508434/feeder_1_1-give-me-same-feeder-with-pink-color.jpg',
    badge: 'Best Seller',
    rating: '4.9',
    category: 'silicone',
    reviewsCount: 152,
    stock: 12,
  },
];

export default function FeedersPage() {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [quickViewProduct, setQuickViewProduct] = useState<QuickViewProduct | null>(null);

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('featured');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col w-full bg-background dark:bg-[#111827] min-h-screen transition-colors duration-300 pt-6"
    >
      {/* Breadcrumb */}
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin pt-4 pb-4">
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2">
          <Link href="/" className="font-label-sm text-on-surface-variant dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">home</span>
            Home
          </Link>
          <span className="text-outline-variant font-medium">/</span>
          <span className="font-label-sm text-primary dark:text-primary-fixed font-bold">Feeders Collection</span>
        </nav>
      </div>

      {/* Controls & Catalog Body */}
      <section className="w-full py-8 bg-surface dark:bg-[#111827] transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">

          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-surface-container-lowest dark:bg-[#1F2937] shadow-sm mb-8 border border-outline-variant/10">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]">search</span>
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search feeders..."
                className="w-full h-11 pl-10 pr-4 rounded-full bg-surface-container-low dark:bg-gray-800 border border-outline-variant/30 dark:border-gray-700 font-body-sm text-on-surface dark:text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {[
                { label: 'All Feeders', value: 'all' },
                { label: 'Glass', value: 'glass' },
                { label: 'Silicone', value: 'silicone' },
                { label: 'Travel', value: 'travel' },
              ].map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-full font-label-md text-sm whitespace-nowrap transition-all ${
                    selectedCategory === cat.value
                      ? 'bg-primary text-on-primary font-bold shadow-sm'
                      : 'bg-surface-container-low dark:bg-gray-800 text-on-surface-variant dark:text-gray-300 hover:text-on-surface dark:hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sorting & View Toggle */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort products by"
                className="h-11 px-4 rounded-full bg-surface-container-low dark:bg-gray-800 border border-outline-variant/30 dark:border-gray-700 font-label-md text-sm text-on-surface dark:text-white focus:outline-none focus:border-primary transition-colors"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
              </select>

              <div className="hidden sm:flex items-center gap-1 bg-surface-container-low dark:bg-gray-800 p-1 rounded-full border border-outline-variant/30 dark:border-gray-700">
                <button
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                    viewMode === 'grid' ? 'bg-primary text-on-primary' : 'text-on-surface-variant dark:text-gray-400'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">grid_view</span>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  aria-label="List view"
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                    viewMode === 'list' ? 'bg-primary text-on-primary' : 'text-on-surface-variant dark:text-gray-400'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">view_list</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Count / Reset */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-body-sm text-on-surface-variant dark:text-gray-400">
              Showing <strong className="text-on-surface dark:text-white">{filteredProducts.length}</strong> feeders
            </span>
            {(searchQuery || selectedCategory !== 'all' || sortBy !== 'featured') && (
              <button
                onClick={handleResetFilters}
                className="font-label-md text-primary dark:text-primary-fixed hover:underline text-sm font-bold flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">restart_alt</span>
                Reset Filters
              </button>
            )}
          </div>

          {/* Product Grid / List */}
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center space-y-4 bg-surface-container-lowest dark:bg-[#1F2937] rounded-2xl shadow-sm">
              <div className="w-16 h-16 rounded-full bg-surface-container-low dark:bg-gray-800 flex items-center justify-center mx-auto text-on-surface-variant">
                <span className="material-symbols-outlined text-[32px]">search_off</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white">No Feeders Found</h3>
              <p className="font-body-md text-on-surface-variant dark:text-gray-300 max-w-md mx-auto">
                We couldn't find any feeders matching your filter criteria. Try adjusting your search or resetting filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-label-md hover:bg-primary-container transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {filteredProducts.map((prod, index) => (
                <motion.div
                  key={prod.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group h-full flex flex-col rounded-2xl bg-surface-container-lowest dark:bg-[#1F2937] p-5 border border-outline-variant/15 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/5] w-full rounded-xl bg-surface-container-low/40 dark:bg-gray-800/60 overflow-hidden flex items-center justify-center p-4">
                    <span className="absolute top-3 left-3 z-10 font-label-sm text-xs px-3 py-1 rounded-full bg-surface-container-highest/95 dark:bg-gray-900/95 text-on-surface dark:text-gray-200 font-bold shadow-xs backdrop-blur-sm border border-outline-variant/20">
                      {prod.badge}
                    </span>
                    <button
                      onClick={() => setQuickViewProduct(prod)}
                      aria-label="Quick view"
                      className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-surface-container-lowest/90 dark:bg-gray-900 text-on-surface-variant dark:text-gray-200 hover:text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">visibility</span>
                    </button>
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-contain object-center rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col flex-1 pt-5 pb-1">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="material-symbols-outlined text-amber-500 text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-label-sm font-bold text-on-surface dark:text-white text-sm">{prod.rating}</span>
                      <span className="font-body-sm text-xs text-on-surface-variant dark:text-gray-400 font-medium">(Verified)</span>
                    </div>
                    <h3 className="font-headline-sm text-[17px] font-bold text-on-surface dark:text-white leading-snug group-hover:text-primary transition-colors">{prod.name}</h3>
                    <p className="font-body-sm text-sm text-on-surface-variant dark:text-gray-300 mt-1.5 line-clamp-2 leading-relaxed">{prod.description}</p>
                    <div className="mt-auto pt-5 flex items-center justify-between border-t border-outline-variant/10 dark:border-gray-800">
                      <span className="font-label-md text-sm font-bold text-on-surface dark:text-white flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Stock: {prod.stock} units
                      </span>
                      <button
                        onClick={() => addToCart({ id: prod.id, name: prod.name, price: prod.price, priceFormatted: prod.priceFormatted, image: prod.image, quantity: 1 })}
                        className="w-11 h-11 rounded-full bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center shadow-md hover:shadow-lg transition-all transform active:scale-95"
                        type="button"
                        aria-label="Add to cart"
                      >
                        <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((prod, index) => (
                <motion.div
                  key={prod.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col sm:flex-row items-center gap-6 rounded-2xl bg-surface-container-lowest dark:bg-[#1F2937] p-5 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="relative w-full sm:w-48 aspect-square rounded-xl bg-surface-container-low dark:bg-gray-800 overflow-hidden flex items-center justify-center p-1 shrink-0">
                    <span className="absolute top-2 left-2 z-10 font-label-sm text-[11px] px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold">
                      {prod.badge}
                    </span>
                    <img src={prod.image} alt={prod.name} className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="flex flex-col flex-1 space-y-2">
                    <div className="flex items-center gap-1 text-tertiary-container dark:text-tertiary text-[12px]">
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-label-sm font-bold text-on-surface dark:text-white">{prod.rating}</span>
                      <span className="text-on-surface-variant dark:text-gray-400">({prod.reviewsCount} reviews)</span>
                    </div>
                    <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white">{prod.name}</h3>
                    <p className="font-body-md text-on-surface-variant dark:text-gray-300">{prod.description}</p>
                    <div className="flex items-center gap-4 pt-2">
                      <span className="font-label-md text-sm font-bold text-on-surface dark:text-white flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Stock: {prod.stock} units
                      </span>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-center gap-3 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-surface-container dark:border-gray-800">
                    <button
                      onClick={() => setQuickViewProduct(prod)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-surface-container-low dark:bg-gray-800 text-on-surface dark:text-gray-200 font-label-md text-sm hover:bg-surface-container transition-colors"
                    >
                      Quick View
                    </button>
                    <button
                      onClick={() => addToCart({ id: prod.id, name: prod.name, price: prod.price, priceFormatted: prod.priceFormatted, image: prod.image, quantity: 1 })}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* QUICK VIEW MODAL */}
      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </motion.div>
  );
}
