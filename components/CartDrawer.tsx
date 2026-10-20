'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  const handleCheckout = () => {
    setCheckedOut(true);
    setTimeout(() => {
      clearCart();
      setCheckedOut(false);
      setIsCartOpen(false);
      alert('Demo Checkout Successful! Thank you for ordering from 110 Baby Feeder.');
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-inverse-surface/50 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-surface-container-lowest dark:bg-[#1F2937] shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-surface-container dark:border-gray-800 flex items-center justify-between bg-surface dark:bg-[#111827]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[24px]">shopping_bag</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface dark:text-white font-bold">Your Cart</h2>
                  <span className="ml-2 px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary text-[12px] font-bold">
                    {cart.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-10 h-10 rounded-full hover:bg-surface-container dark:hover:bg-gray-800 flex items-center justify-center text-on-surface-variant dark:text-gray-300 transition-colors"
                  aria-label="Close cart"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center text-on-surface-variant dark:text-gray-400 py-12">
                    <div className="w-20 h-20 rounded-full bg-surface-container-low dark:bg-gray-800 flex items-center justify-center text-primary mb-4">
                      <span className="material-symbols-outlined text-[36px]">shopping_basket</span>
                    </div>
                    <h3 className="font-headline-sm text-on-surface dark:text-white font-bold">Your cart is empty</h3>
                    <p className="font-body-sm mt-1 max-w-xs">Discover our thoughtfully designed baby-feeding essentials and add them to your cart.</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-6 px-6 py-3 rounded-full bg-primary text-on-primary font-label-md hover:bg-primary-container transition-colors"
                    >
                      Explore Feeders
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 rounded-xl bg-surface-container-low/60 dark:bg-gray-800/60 border border-surface-container dark:border-gray-700">
                      <div className="w-20 h-20 rounded-lg bg-surface-container-lowest dark:bg-gray-900 overflow-hidden shrink-0 flex items-center justify-center p-2">
                        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-headline-sm text-[16px] font-bold text-on-surface dark:text-white line-clamp-1">{item.name}</h4>
                          <p className="font-price-display text-[15px] font-bold text-primary mt-0.5">{item.priceFormatted || `Rs. ${item.price.toLocaleString()}`}</p>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-outline-variant/40 dark:border-gray-600 rounded-full bg-surface-container-lowest dark:bg-gray-900">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center text-on-surface-variant dark:text-gray-300 hover:text-primary transition-colors"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="px-3 font-label-sm font-bold text-on-surface dark:text-white">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center text-on-surface-variant dark:text-gray-300 hover:text-primary transition-colors"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-error hover:text-error/80 text-[13px] font-medium flex items-center gap-1 transition-colors"
                          >
                            <span className="material-symbols-outlined text-[16px]">delete</span>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Subtotal & Checkout */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-surface-container dark:border-gray-800 bg-surface dark:bg-[#111827] space-y-4">
                  {/* Free Delivery Progress Bar */}
                  <div className="space-y-1.5 bg-surface-container-low dark:bg-gray-800 p-3.5 rounded-2xl border border-outline-variant/15">
                    <div className="flex justify-between items-center text-xs font-bold text-on-surface dark:text-white">
                      <span>
                        {subtotal >= 3000 ? '🎉 You unlocked Free Delivery!' : `Add Rs. ${(3000 - subtotal).toLocaleString()} more for Free Delivery`}
                      </span>
                      <span>{Math.min(100, Math.round((subtotal / 3000) * 100))}%</span>
                    </div>
                    <div className="w-full h-2 bg-surface-container-highest dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(100, (subtotal / 3000) * 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-body-md text-on-surface-variant dark:text-gray-300">Subtotal</span>
                    <span className="font-price-display text-xl font-bold text-primary">Rs. {subtotal.toLocaleString()}</span>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2.5 pt-1">
                    <button
                      onClick={handleCheckout}
                      disabled={checkedOut}
                      className="w-full h-13 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-[15px] font-bold tracking-wide shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      {checkedOut ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          Processing Order...
                        </>
                      ) : (
                        <>
                          <span>Proceed to Secure Checkout</span>
                          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => {
                        const itemsList = cart.map(i => `- ${i.name} (x${i.quantity}) - Rs. ${(i.price * i.quantity).toLocaleString()}`).join('%0A');
                        const message = `Hello 110 Baby Feeder, I would like to place an order:%0A%0A${itemsList}%0A%0ASubtotal: Rs. ${subtotal.toLocaleString()}%0A%0APlease confirm my order and dispatch details.`;
                        window.open(`https://wa.me/923205475430?text=${message}`, '_blank');
                      }}
                      className="w-full h-13 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-label-md text-[15px] font-bold tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[20px]">chat</span>
                      <span>Order via WhatsApp (+92 320 5475430)</span>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
