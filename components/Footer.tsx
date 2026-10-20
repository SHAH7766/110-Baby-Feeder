'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/\S+@\S+\.\S+/.test(newsletterEmail)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="w-full bg-[#0B131D] text-white relative overflow-hidden transition-colors duration-300">
      {/* Subtle Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>

      {/* TOP NEWSLETTER BANNER */}
      <div className="border-b border-white/10 py-14">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-[#162232] to-[#111B27] p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
            <div className="lg:col-span-6 space-y-2">
              <span className="font-eyebrow text-xs text-primary-fixed uppercase tracking-widest font-extrabold">
                Exclusive Updates & Care Tips
              </span>
              <h3 className="font-headline-lg text-2xl md:text-3xl font-bold text-white tracking-tight">
                A Little More Care, Delivered.
              </h3>
              <p className="font-body-md text-gray-300">
                Join our family of 1,240+ parents. Receive expert baby care tips, new collection drops, and special subscriber perks.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="p-4 rounded-full bg-primary/20 border border-primary/40 text-center text-primary-fixed font-label-md font-bold flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">check_circle</span>
                  <span>Thank you for subscribing to 110 Baby Feeder!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      className="w-full h-14 px-6 rounded-full bg-[#0B131D] border border-white/15 text-white placeholder-gray-400 font-body-sm focus:outline-none focus:border-primary transition-colors shadow-inner"
                    />
                    {error && <p className="text-red-400 text-xs mt-1 ml-4">{error}</p>}
                  </div>
                  <button
                    type="submit"
                    className="h-14 px-8 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md font-bold transition-all shadow-lg hover:shadow-xl shrink-0 flex items-center justify-center gap-2 transform active:scale-95"
                  >
                    <span>Subscribe</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER COLUMNS */}
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">

          {/* Column 1 — Brand Identity (Col span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-primary-container flex items-center justify-center text-on-primary shadow-md">
                <span className="material-symbols-outlined text-[26px]">water_drop</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-xl font-black tracking-tight text-white">110 Baby Feeder</span>
                <span className="font-label-sm text-xs text-primary-fixed uppercase tracking-wider font-bold">Nurture & Form</span>
              </div>
            </div>

            <p className="font-body-md text-gray-300 leading-relaxed max-w-sm">
              Thoughtfully engineered borosilicate glass & anti-colic silicone baby feeding essentials. Crafted with pure care, tactile beauty, and unwavering reliability for modern parents.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-on-primary border border-white/10 flex items-center justify-center text-gray-300 transition-all transform hover:-translate-y-1"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-on-primary border border-white/10 flex items-center justify-center text-gray-300 transition-all transform hover:-translate-y-1"
              >
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-on-primary border border-white/10 flex items-center justify-center text-gray-300 transition-all transform hover:-translate-y-1"
              >
                <span className="material-symbols-outlined text-[18px]">play_arrow</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-on-primary border border-white/10 flex items-center justify-center text-gray-300 transition-all transform hover:-translate-y-1"
              >
                <span className="material-symbols-outlined text-[18px]">smart_display</span>
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-headline-sm text-sm font-bold uppercase tracking-widest text-primary-fixed">Quick Links</h4>
            <ul className="space-y-3 font-body-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white hover:translate-x-1 inline-block transition-all">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all">About Us</Link>
              </li>
              <li>
                <Link href="/feeders" className="hover:text-white hover:translate-x-1 inline-block transition-all">Our Feeders</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Customer Support (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-headline-sm text-sm font-bold uppercase tracking-widest text-primary-fixed">Customer Support</h4>
            <ul className="space-y-3 font-body-sm text-gray-300">
              <li>
                <Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Shipping & Delivery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Returns & Refunds</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact Information (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-headline-sm text-sm font-bold uppercase tracking-widest text-primary-fixed">Headquarters & Contact</h4>
            <ul className="space-y-3.5 font-body-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary-fixed text-[20px] shrink-0 mt-0.5">location_on</span>
                <span>Eman Plastic Industry, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed text-[20px] shrink-0">call</span>
                <a href="tel:+923205475430" className="hover:text-white transition-colors font-medium">+92 320 5475430</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed text-[20px] shrink-0">mail</span>
                <a href="mailto:support@110babyfeeder.com" className="hover:text-white transition-colors font-medium">support@110babyfeeder.com</a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <span className="material-symbols-outlined text-tertiary text-[18px]">verified_user</span>
                <span className="font-label-sm text-xs font-semibold text-gray-200">100% BPA Free &bull; Anti-Colic Air Valve</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 font-body-sm text-xs">
          <p>&copy; 2026 110 Baby Feeder (Nurture & Form). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Support Center</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
