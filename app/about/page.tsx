'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col w-full bg-surface dark:bg-[#111827] min-h-screen transition-colors duration-300"
    >
      {/* Breadcrumb */}
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin pt-6 pb-2">
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2">
          <Link href="/" className="font-label-sm text-on-surface-variant dark:text-gray-400 hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">home</span>
            Home
          </Link>
          <span className="text-outline-variant font-medium">/</span>
          <span className="font-label-sm text-primary dark:text-primary-fixed font-bold">About Us</span>
        </nav>
      </div>

      {/* PREMIUM PAGE HERO */}
      <section className="relative w-full py-16 lg:py-24 bg-gradient-to-b from-surface via-surface-container-low to-surface-container-low dark:from-[#111827] dark:via-[#1A2234] dark:to-[#1F2937] overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/15 dark:bg-primary/20 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-secondary/15 dark:bg-secondary/20 blur-3xl pointer-events-none"></div>

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 space-y-6 z-10"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary-container/30 dark:bg-primary/20 backdrop-blur-md shadow-sm border border-primary/30">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
                <span className="font-eyebrow text-xs md:text-sm text-primary dark:text-primary-fixed tracking-widest font-extrabold uppercase">
                  OUR STORY
                </span>
              </div>

              <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl text-on-surface dark:text-white font-black tracking-tight leading-[1.15]">
                Caring for Little Ones,{' '}
                <span className="block mt-1 bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                  Supporting Every Parent
                </span>
              </h1>

              <p className="font-body-lg text-lg md:text-xl text-on-surface-variant dark:text-gray-300 leading-relaxed font-medium">
                At 110 Baby Feeder, we believe that feeding time should be comfortable, convenient, and filled with care. Our mission is to support families with thoughtfully designed baby-feeding products that bring confidence and comfort to everyday parenting.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/feeders"
                  className="inline-flex items-center justify-center h-[54px] px-9 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-base tracking-wide shadow-lg shadow-primary/25 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-bold"
                >
                  Explore Our Collection
                </Link>
                <a
                  href="#ceo-message"
                  className="inline-flex items-center justify-center gap-2 h-[54px] px-8 rounded-full bg-surface-container-lowest/90 dark:bg-gray-800 hover:bg-surface-container dark:hover:bg-gray-700 text-primary dark:text-primary-fixed font-label-md text-base transition-all shadow-md border border-outline-variant/30 font-bold"
                >
                  <span>Message from CEO</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-surface-container-lowest dark:border-gray-700 bg-surface-container-lowest dark:bg-[#1F2937] p-2">
                <img
                  src="/images/Baby_holdng.jpg"
                  alt="110 Baby Feeder Product Care"
                  className="w-full h-full object-cover rounded-[24px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-[24px]"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-surface-container-lowest/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border border-outline-variant/20">
                  <div className="flex items-center gap-2 text-primary dark:text-primary-fixed mb-1">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span className="font-label-sm font-bold">Thoughtful Design</span>
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant dark:text-gray-300 font-medium">
                    Engineered for natural latching, easy cleaning, and daily peace of mind.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MESSAGE FROM THE CEO — FEATURED SECTION */}
      <section id="ceo-message" className="w-full py-20 lg:py-28 bg-surface-container-lowest dark:bg-[#1F2937] transition-colors duration-300 relative">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-eyebrow text-xs md:text-sm text-primary dark:text-primary-fixed tracking-widest font-extrabold uppercase">
              Leadership & Vision
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-on-surface dark:text-white font-bold mt-2 tracking-tight">
              A Message from Our CEO
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center bg-surface-container-low/50 dark:bg-gray-800/60 p-8 sm:p-12 rounded-[32px] border border-outline-variant/20 dark:border-gray-700 shadow-xl">

            {/* Left: Professional Portrait of Faisal Qadir */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col items-center"
            >
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-surface-container-lowest dark:border-gray-700 bg-surface-container-lowest dark:bg-gray-900 p-2 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/15 pointer-events-none z-10 rounded-2xl"></div>
                <img
                  src="/images/CEO.png"
                  alt="Faisal Qadir - CEO, 110 Baby Feeder"
                  className="w-full h-full object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-6 text-center">
                <h3 className="font-headline-md text-2xl font-bold text-on-surface dark:text-white">
                  Faisal Qadir
                </h3>
                <p className="font-label-md text-primary dark:text-primary-fixed font-bold mt-1 text-base">
                  Chief Executive Officer (CEO)
                </p>
                <p className="font-body-sm text-on-surface-variant dark:text-gray-400 text-sm mt-0.5">
                  110 Baby Feeder & Eman Plastic Industry
                </p>
              </div>
            </motion.div>

            {/* Right: CEO Message Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/20 text-primary dark:text-primary-fixed font-label-sm font-bold">
                <span className="material-symbols-outlined text-[18px]">format_quote</span>
                <span>Personal Note to Parents</span>
              </div>

              <div className="space-y-4 font-body-lg text-on-surface-variant dark:text-gray-300 leading-relaxed text-base sm:text-lg italic font-normal">
                <p>
                  &ldquo;Dear Parents and Families,
                </p>
                <p>
                  At 110 Baby Feeder, we understand that caring for a baby comes with countless precious moments and important decisions. As parents seek comfort, convenience, and confidence in their daily routines, we believe the products they choose should reflect the care their little ones deserve.
                </p>
                <p>
                  Our vision is to make everyday feeding experiences simpler and more comfortable through thoughtful product design, attention to quality, and a customer-first approach. We are committed to building a brand that families can turn to with confidence as they navigate the beautiful journey of parenthood.
                </p>
                <p>
                  Every product we offer represents our dedication to supporting parents and caring for little ones. Your trust inspires us to keep learning, improving, and delivering a better experience for every family we serve.
                </p>
                <p>
                  Thank you for being part of the 110 Baby Feeder family.
                </p>
                <p className="not-italic font-bold text-on-surface dark:text-white pt-2">
                  Warm regards,
                </p>
              </div>

              <div className="pt-4 border-t border-outline-variant/20 dark:border-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white">
                    Faisal Qadir
                  </h4>
                  <p className="font-body-sm text-primary dark:text-primary-fixed font-semibold">
                    Chief Executive Officer (CEO), 110 Baby Feeder
                  </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-lowest dark:bg-gray-900 border border-outline-variant/20 shadow-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
                  <span className="font-label-sm text-xs font-bold text-on-surface dark:text-gray-200">Verified Leadership</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* BRAND MISSION AND VALUES */}
      <section className="w-full py-20 lg:py-24 bg-surface dark:bg-[#111827] transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-eyebrow text-xs md:text-sm text-primary dark:text-primary-fixed tracking-widest font-extrabold uppercase">
              Our Core Pillars
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface dark:text-white font-bold mt-2">
              Mission, Commitment & Vision
            </h2>
            <p className="font-body-lg text-on-surface-variant dark:text-gray-300 mt-3">
              Built on uncompromising dedication to parents and infants alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Value Card 1: Our Mission */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="p-8 rounded-2xl bg-surface-container-lowest dark:bg-[#1F2937] border border-outline-variant/20 dark:border-gray-700 flex flex-col items-start space-y-4 shadow-md hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-container/40 dark:bg-gray-800 flex items-center justify-center text-primary dark:text-primary-fixed shadow-sm">
                <span className="material-symbols-outlined text-[28px]">flag</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white">Our Mission</h3>
              <p className="font-body-md text-on-surface-variant dark:text-gray-300 leading-relaxed">
                To support parents with thoughtful baby-feeding products designed for everyday comfort and convenience.
              </p>
            </motion.div>

            {/* Value Card 2: Our Commitment */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="p-8 rounded-2xl bg-surface-container-lowest dark:bg-[#1F2937] border border-outline-variant/20 dark:border-gray-700 flex flex-col items-start space-y-4 shadow-md hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary-container/40 dark:bg-gray-800 flex items-center justify-center text-secondary dark:text-secondary-fixed shadow-sm">
                <span className="material-symbols-outlined text-[28px]">handshake</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white">Our Commitment</h3>
              <p className="font-body-md text-on-surface-variant dark:text-gray-300 leading-relaxed">
                To prioritize thoughtful design, product quality, and a reliable customer experience.
              </p>
            </motion.div>

            {/* Value Card 3: Our Vision */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="p-8 rounded-2xl bg-surface-container-lowest dark:bg-[#1F2937] border border-outline-variant/20 dark:border-gray-700 flex flex-col items-start space-y-4 shadow-md hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-tertiary-container/40 dark:bg-gray-800 flex items-center justify-center text-tertiary dark:text-tertiary-fixed shadow-sm">
                <span className="material-symbols-outlined text-[28px]">visibility</span>
              </div>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface dark:text-white">Our Vision</h3>
              <p className="font-body-md text-on-surface-variant dark:text-gray-300 leading-relaxed">
                To become a trusted choice for families seeking practical, carefully designed baby-feeding essentials.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="w-full py-16 lg:py-20 bg-gradient-to-r from-primary via-primary-container to-secondary text-on-primary text-center">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin space-y-6">
          <h2 className="font-headline-lg text-3xl md:text-4xl font-black">Ready to Experience Pure Feeding Care?</h2>
          <p className="font-body-lg text-white/90 max-w-xl mx-auto font-medium">
            Explore our curated collection of ergonomic feeders and experience the difference thoughtful design makes in your daily parenting routine.
          </p>
          <div className="pt-2">
            <Link
              href="/feeders"
              className="inline-flex items-center justify-center h-[54px] px-10 rounded-full bg-surface-container-lowest dark:bg-gray-900 text-primary dark:text-primary-fixed font-label-md font-bold text-base hover:bg-surface transition-all shadow-xl transform hover:-translate-y-1"
            >
              Shop Feeders Collection
            </Link>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
