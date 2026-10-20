'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';

export interface QuickViewProduct {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  description: string;
  image: string;
  rating: string;
  category?: string;
  stock?: number;
}

interface QuickViewModalProps {
  product: QuickViewProduct | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      priceFormatted: product.priceFormatted,
      image: product.image,
      quantity,
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-inverse-surface/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative z-10 w-full max-w-3xl bg-surface-container-lowest dark:bg-[#1F2937] rounded-lg shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-surface-container/80 dark:bg-gray-800 hover:bg-surface-container dark:hover:bg-gray-700 flex items-center justify-center text-on-surface-variant dark:text-gray-300 transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          {/* Image Showcase */}
          <div className="relative bg-surface-container-low dark:bg-gray-900 p-6 flex items-center justify-center">
            <img src={product.image} alt={product.name} className="w-full max-h-[360px] object-contain drop-shadow-lg" />
          </div>

          {/* Details & Actions */}
          <div className="p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-1 text-tertiary-container dark:text-tertiary text-[14px]">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="font-bold text-on-surface dark:text-white">{product.rating || '4.9'}</span>
              </div>
              <h2 className="font-headline-lg text-2xl font-bold text-on-surface dark:text-white">{product.name}</h2>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-label-md text-base font-bold text-on-surface dark:text-white">Stock: {product.stock || 10} units available</span>
              </div>
              <p className="font-body-md text-on-surface-variant dark:text-gray-300 leading-relaxed">{product.description}</p>
              <div className="pt-2 border-t border-surface-container dark:border-gray-800 space-y-2">
                <div className="flex items-center gap-2 text-on-surface-variant dark:text-gray-300 text-[13px]">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  <span>BPA & PVC Free • 100% Medical Grade Silicone</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant dark:text-gray-300 text-[13px]">
                  <span className="material-symbols-outlined text-primary text-[18px]">local_shipping</span>
                  <span>Express delivery across Pakistan within 2-4 days</span>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-label-md text-on-surface dark:text-white">Quantity</span>
                <div className="flex items-center border border-outline-variant/40 dark:border-gray-600 rounded-full bg-surface-container-lowest dark:bg-gray-900">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 flex items-center justify-center text-on-surface-variant dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 font-label-md font-bold text-on-surface dark:text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 flex items-center justify-center text-on-surface-variant dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full h-12 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md font-bold shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">shopping_bag</span>
                {added ? 'Added to Cart!' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
