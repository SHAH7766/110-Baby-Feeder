'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import QuickViewModal, { QuickViewProduct } from '@/components/QuickViewModal';

const featuredProducts = [
  {
    id: 'p1',
    name: '110 Classic Baby Feeder',
    price: 2850,
    priceFormatted: 'Rs. 2,850',
    description: 'Ergonomic borosilicate glass with soft peach silicone sleeve and anti-colic dual vent.',
    image: '/images/feeder_1 (1).jpg',
    badge: 'Popular',
    rating: '4.9',
    category: 'glass',
  },
  {
    id: 'p2',
    name: '110 Sunshine Yellow Feeder',
    price: 2650,
    priceFormatted: 'Rs. 2,650',
    description: 'Vibrant sunshine yellow borosilicate glass feeder with anti-colic silicone grip.',
    image: '/images/feeder_4.jpg',
    badge: 'New',
    rating: '5.0',
    category: 'silicone',
  },
  {
    id: 'p3',
    name: '110 Portable Travel Feeder',
    price: 2150,
    priceFormatted: 'Rs. 2,150',
    description: 'Compact portable baby travel feeder bottle with secure dust-proof cap.',
    image: '/images/feeder_1 (3).jpg',
    badge: 'Essential',
    rating: '4.9',
    category: 'travel',
  },
  {
    id: 'p4',
    name: '110 Dual Soft-Touch Feeder',
    price: 3100,
    priceFormatted: 'Rs. 3,100',
    description: 'Premium dual-textured silicone grip with advanced anti-colic airflow valve.',
    image: '/images/feeder_1 (2).jpg',
    badge: 'Best Seller',
    rating: '4.9',
    category: 'silicone',
  },
];

export default function HomePage() {
  const { addToCart } = useCart();
  const [quickViewProduct, setQuickViewProduct] = useState<QuickViewProduct | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col w-full"
    >
      {/* HERO SECTION - HOT & EYE CATCHING */}
      <section className="relative overflow-hidden w-full bg-gradient-to-b from-surface via-surface-container-low to-surface-container-low dark:from-[#111827] dark:via-[#1A2234] dark:to-[#1F2937] py-16 lg:py-24 transition-colors duration-300">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 dark:bg-primary/25 blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] rounded-full bg-secondary/20 dark:bg-secondary/25 blur-3xl pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Content with Eye-Catching Typography */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 flex flex-col items-start gap-6 z-10"
            >
              <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl text-on-surface dark:text-white tracking-tight font-black leading-[1.15]">
                Little Feeders.{' '}
                <span className="block mt-1 bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent drop-shadow-sm font-black">
                  Big Happy Moments.
                </span>
              </h1>

              <p className="font-body-lg text-lg md:text-xl text-on-surface-variant dark:text-gray-300 max-w-xl leading-relaxed font-medium">
                Discover exceptionally crafted borosilicate glass & anti-colic silicone baby feeders engineered with love for ultimate comfort and joy.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
                <Link
                  href="/feeders"
                  className="inline-flex items-center justify-center h-[54px] px-9 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-base tracking-wide shadow-lg shadow-primary/25 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-bold"
                >
                  Shop Feeders Now
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2.5 h-[54px] px-8 rounded-full bg-surface-container-lowest/90 dark:bg-gray-800 hover:bg-surface-container dark:hover:bg-gray-700 text-primary dark:text-primary-fixed font-label-md text-base transition-all duration-200 shadow-md border border-outline-variant/30 font-bold"
                >
                  <span>Discover Our Story</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>

              {/* Trust Reassurance */}
              <div className="flex items-center gap-3 pt-4 text-on-surface-variant dark:text-gray-300">
                <div className="w-7 h-7 rounded-full bg-primary/20 dark:bg-gray-800 flex items-center justify-center text-primary dark:text-primary-fixed">
                  <span className="material-symbols-outlined text-[18px] font-bold">verified</span>
                </div>
                <span className="font-body-sm text-sm font-semibold">100% BPA Free &bull; Anti-Colic Air Valve &bull; Fast Shipping</span>
              </div>
            </motion.div>

            {/* Right Visual Centerpiece: Oval Feeder Video Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6 relative flex items-center justify-center py-6 lg:py-0"
            >
              <div className="relative w-full max-w-[440px] aspect-[3/4] sm:aspect-square flex items-center justify-center">
                {/* Organic Soft Glow Backdrop */}
                <div className="absolute inset-0 rounded-[50%] bg-gradient-to-tr from-primary/30 via-secondary-container/40 to-tertiary/30 dark:from-primary/20 dark:to-secondary/20 blur-3xl opacity-80 animate-pulse"></div>

                {/* Oval Video Card Container */}
                <div className="relative z-10 w-full h-full rounded-[45%_/_40%] shadow-2xl overflow-hidden border-4 border-surface-container-lowest dark:border-gray-700 bg-surface-container-lowest dark:bg-[#1F2937] flex items-center justify-center p-2.5">
                  <video
                    src="/images/feeder_video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onError={(e) => {
                      // Gracefully handle video error without unhandled event errors
                      e.currentTarget.style.display = 'none';
                    }}
                    className="w-full h-full object-cover rounded-[40%_/_35%]"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TRUST & BENEFITS STRIP */}
      <section className="w-full bg-surface-container-lowest dark:bg-[#1F2937] py-8 shadow-sm transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low/60 dark:bg-gray-800/60 hover:bg-surface-container dark:hover:bg-gray-800 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary-fixed dark:bg-gray-700 flex items-center justify-center shrink-0 text-primary dark:text-primary-fixed">
                <span className="material-symbols-outlined text-[24px]">design_services</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-headline-sm text-[16px] font-bold text-on-surface dark:text-white leading-tight">Thoughtful Design</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-gray-300 mt-1 leading-snug">Ergonomically crafted for tiny hands and natural latching.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low/60 dark:bg-gray-800/60 hover:bg-surface-container dark:hover:bg-gray-800 transition-colors">
              <div className="w-12 h-12 rounded-full bg-secondary-fixed dark:bg-gray-700 flex items-center justify-center shrink-0 text-secondary dark:text-secondary-fixed">
                <span className="material-symbols-outlined text-[24px]">water_bottle</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-headline-sm text-[16px] font-bold text-on-surface dark:text-white leading-tight">Everyday Convenience</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-gray-300 mt-1 leading-snug">Effortless transitions & spill-safe air-lock seals.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low/60 dark:bg-gray-800/60 hover:bg-surface-container dark:hover:bg-gray-800 transition-colors">
              <div className="w-12 h-12 rounded-full bg-tertiary-fixed dark:bg-gray-700 flex items-center justify-center shrink-0 text-tertiary dark:text-tertiary-fixed">
                <span className="material-symbols-outlined text-[24px]">sanitizer</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-headline-sm text-[16px] font-bold text-on-surface dark:text-white leading-tight">Easy-Care Essentials</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-gray-300 mt-1 leading-snug">Dishwasher safe & fast disassembly for simple cleaning.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low/60 dark:bg-gray-800/60 hover:bg-surface-container dark:hover:bg-gray-800 transition-colors">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest dark:bg-gray-700 flex items-center justify-center shrink-0 text-primary dark:text-primary-fixed">
                <span className="material-symbols-outlined text-[24px]">favorite</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-headline-sm text-[16px] font-bold text-on-surface dark:text-white leading-tight">Parent-Friendly Experience</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-gray-300 mt-1 leading-snug">Clear volume markings & intuitive interchangeable parts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS COLLECTION — FULL WIDTH IMAGES */}
      <section className="w-full py-16 lg:py-24 bg-surface dark:bg-[#111827] transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-eyebrow text-eyebrow text-primary dark:text-primary-fixed uppercase tracking-widest font-bold">Our Bestsellers</span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface dark:text-white font-bold mt-2">
                Meet Your Little One’s Favorites
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-gray-300 mt-2 max-w-xl">
                Explore our thoughtfully selected everyday feeding essentials designed for comfort and peace of mind.
              </p>
            </div>
            <Link
              href="/feeders"
              className="inline-flex items-center gap-2 font-label-md text-primary dark:text-primary-fixed hover:underline font-bold text-base shrink-0"
            >
              <span>View All Feeders</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((prod, index) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group h-full flex flex-col rounded-2xl bg-surface-container-lowest dark:bg-[#1F2937] p-5 border border-outline-variant/15 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Full Width Product Image Container */}
                <div className="relative aspect-[4/5] w-full rounded-xl bg-surface-container-low/40 dark:bg-gray-800/60 overflow-hidden flex items-center justify-center p-1">
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
                    transition={{ duration: 0.3 }}
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover object-center rounded-lg"
                  />
                </div>

                {/* Card Content Body */}
                <div className="flex flex-col flex-1 pt-5 pb-1">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="material-symbols-outlined text-amber-500 text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-label-sm font-bold text-on-surface dark:text-white text-sm">{prod.rating}</span>
                    <span className="font-body-sm text-xs text-on-surface-variant dark:text-gray-400 font-medium">(Verified)</span>
                  </div>

                  <h3 className="font-headline-sm text-[17px] font-bold text-on-surface dark:text-white leading-snug group-hover:text-primary transition-colors">
                    {prod.name}
                  </h3>

                  <p className="font-body-sm text-sm text-on-surface-variant dark:text-gray-300 mt-1.5 line-clamp-2 leading-relaxed">
                    {prod.description}
                  </p>

                  {/* Price & Add to Cart Row */}
                  <div className="mt-auto pt-5 flex items-center justify-between border-t border-outline-variant/10 dark:border-gray-800">
                    <span className="font-price-display text-lg md:text-xl text-primary dark:text-primary-fixed font-bold tracking-tight">
                      {prod.priceFormatted}
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

          <div className="mt-12 text-center">
            <Link
              href="/feeders"
              className="inline-flex items-center justify-center h-[52px] px-9 rounded-full bg-secondary hover:bg-secondary-container text-white font-label-md text-base transition-all shadow-md font-bold"
            >
              View All Feeders Collection
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND PHILOSOPHY BANNER */}
      <section className="w-full py-20 lg:py-28 bg-surface-container-low dark:bg-[#182232] transition-colors duration-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 dark:bg-primary/15 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/10 dark:bg-secondary/15 blur-3xl pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary-container/30 dark:bg-primary/20 backdrop-blur-md shadow-sm border border-primary/30">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                <span className="font-eyebrow text-xs md:text-sm text-primary dark:text-primary-fixed tracking-widest font-extrabold uppercase">
                  Mindful Minimalism
                </span>
              </div>

              <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-on-surface dark:text-white font-bold leading-[1.2]">
                Designed for Comfort.{' '}
                <span className="block mt-1 bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                  Crafted with Pure Care.
                </span>
              </h2>

              <p className="font-body-lg text-lg text-on-surface-variant dark:text-gray-300 leading-relaxed font-medium">
                We believe feeding time should be a serene bonding experience, free from cognitive clutter. Our medical-grade silicone and thermal shock resistant glass feeders are engineered with ergonomic warmth and anti-colic precision.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-base transition-all shadow-md font-bold"
                >
                  <span>Read our full brand story</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link
                  href="/feeders"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-surface-container-lowest dark:bg-gray-800 hover:bg-surface-container dark:hover:bg-gray-700 text-primary dark:text-primary-fixed font-label-md text-base transition-all shadow-sm border border-outline-variant/30 font-bold"
                >
                  <span>Explore Feeders</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-surface-container-lowest dark:border-gray-700 bg-surface-container-lowest dark:bg-[#1F2937] p-2 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-[24px] z-10"></div>
                <img
                  src="/images/Feeder_holding_son.jpg"
                  alt="Parent Holding Infant with 110 Baby Feeder"
                  className="w-full h-full object-cover rounded-[24px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 p-4 rounded-2xl bg-surface-container-lowest/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border border-outline-variant/20">
                  <div className="flex items-center gap-2 text-primary dark:text-primary-fixed mb-1">
                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                    <span className="font-label-sm font-bold">Precious Bonding Moments</span>
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant dark:text-gray-300 font-medium">
                    Designed for comfort, warmth, and serene everyday feedings.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* HEADQUARTERS / LOCATION SECTION */}
      <section className="w-full py-16 lg:py-24 bg-surface dark:bg-[#111827] transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-eyebrow text-eyebrow text-primary dark:text-primary-fixed uppercase tracking-widest font-bold">Visit Our Headquarters</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface dark:text-white font-bold mt-2">
              Eman Plastic Industry
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-gray-300 mt-3">
              Explore our manufacturing and design headquarters where everyday feeding excellence takes shape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-lowest dark:bg-[#1F2937] rounded-3xl p-6 md:p-10 shadow-xl border border-outline-variant/20 dark:border-gray-700">
            {/* Left Location Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/20 text-primary dark:text-primary-fixed font-label-sm">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                <span>Official Headquarters</span>
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-on-surface dark:text-white">
                Eman Plastic Industry
              </h3>
              <p className="font-body-md text-on-surface-variant dark:text-gray-300 leading-relaxed">
                State-of-the-art manufacturing and quality assurance hub dedicated to crafting safe, durable, and tactile baby-feeding essentials.
              </p>
              <div className="space-y-3 pt-2 text-on-surface-variant dark:text-gray-300 font-body-sm">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-secondary-fixed/50 dark:bg-gray-800 flex items-center justify-center text-secondary dark:text-secondary-fixed">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                  </span>
                  <span>Monday – Saturday: 9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-secondary-fixed/50 dark:bg-gray-800 flex items-center justify-center text-secondary dark:text-secondary-fixed">
                    <span className="material-symbols-outlined text-[18px]">call</span>
                  </span>
                  <a href="tel:+923205475430" className="hover:text-primary transition-colors font-semibold">+92 320 5475430</a>
                </div>
              </div>
              <div className="pt-4">
                <a
                  href="https://maps.app.goo.gl/16efa3607a57f439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md transition-all shadow-md"
                >
                  <span>Open in Google Maps</span>
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                </a>
              </div>
            </div>

            {/* Right Map Iframe */}
            <div className="lg:col-span-7 w-full h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-inner border border-outline-variant/30 dark:border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.9301994265447!2d74.2866105747004!3d31.60837234279061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191d31f3ae2817%3A0x16efa3607a57f439!2sEman%20Plastic%20Industry!5e0!3m2!1sen!2s!4v1792473159638!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Eman Plastic Industry Location Map"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK VIEW MODAL */}
      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </motion.div>
  );
}
