'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const pathname = usePathname();
  const { cartCount, setIsCartOpen } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/feeders' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 dark:bg-[#111827]/90 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/40 py-2.5'
          : 'bg-surface/75 dark:bg-[#111827]/75 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between">
        {/* Left: Appealing Brand Logo Pill */}
        <Link href="/" className="group">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-surface-container-highest/90 to-surface-container-low/90 dark:from-gray-800 dark:to-gray-900 p-1 pr-3 sm:p-1.5 sm:pr-5 rounded-full shadow-md border border-primary/20 backdrop-blur-md"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-white shadow-sm border border-outline-variant/30 flex items-center justify-center overflow-hidden shrink-0 p-0.5">
              <img src="https://res.cloudinary.com/hvql2xsc/image/upload/v1792497926/110_baby_feeder/logo.jpg" alt="110 Baby Feeder Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="font-display-hero text-xs sm:text-base md:text-lg tracking-tight bg-gradient-to-r from-[#0b1c2e] via-[#115377] to-[#1c6993] dark:from-white dark:via-[#97ccf7] dark:to-[#cae6ff] bg-clip-text text-transparent font-black leading-tight whitespace-nowrap drop-shadow-[0_1px_8px_rgba(17,83,119,0.2)] dark:drop-shadow-[0_1px_10px_rgba(56,189,248,0.4)] group-hover:opacity-100 transition-opacity">
              110 Baby Feeder
            </span>
          </motion.div>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-surface-container-lowest/80 dark:bg-[#1F2937]/80 p-1.5 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-outline-variant/10 dark:border-gray-800">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === '/feeders' && pathname.startsWith('/feeders'));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2.5 rounded-full font-label-md text-sm transition-all duration-200 ${
                  isActive
                    ? 'text-on-primary font-bold'
                    : 'text-on-surface-variant dark:text-gray-300 hover:text-on-surface dark:hover:text-white hover:bg-surface-container-low dark:hover:bg-gray-800'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-primary dark:bg-primary-container rounded-full shadow-sm z-0"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions & Shop Now */}
        <div className="flex items-center gap-2.5">
          {/* Search Button */}
          <Link
            href="/feeders"
            aria-label="Search products"
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant dark:text-gray-300 hover:bg-surface-container-high dark:hover:bg-gray-800 hover:text-on-surface dark:hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant dark:text-gray-300 hover:bg-surface-container-high dark:hover:bg-gray-800 hover:text-on-surface dark:hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">
              {theme === 'dark' ? 'dark_mode' : 'light_mode'}
            </span>
          </button>

          {/* Cart Bag */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="View shopping cart"
            className="relative w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant dark:text-gray-300 hover:bg-surface-container-high dark:hover:bg-gray-800 hover:text-on-surface dark:hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-primary-container text-on-primary font-label-sm text-[10px] font-bold flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* Premium "Shop Now" Button */}
          <Link
            href="/feeders"
            className="hidden sm:inline-flex items-center justify-center h-11 px-6 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Shop Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant dark:text-gray-300 hover:bg-surface-container-high dark:hover:bg-gray-800 hover:text-on-surface dark:hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface-container-lowest dark:bg-[#1F2937] border-b border-surface-container dark:border-gray-800 px-6 py-6 space-y-3 shadow-xl overflow-hidden"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-label-md transition-colors ${
                    isActive
                      ? 'bg-primary-container text-on-primary font-bold'
                      : 'text-on-surface dark:text-gray-200 hover:bg-surface-container-low dark:hover:bg-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/feeders"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full h-12 rounded-full bg-primary text-on-primary font-label-md font-bold flex items-center justify-center shadow-md"
              >
                Shop Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
