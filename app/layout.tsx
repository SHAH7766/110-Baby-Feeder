import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export const metadata: Metadata = {
  title: '110 Baby Feeder — Pure Feeding Care',
  description: 'Thoughtfully designed baby-feeding essentials that bring comfort, simplicity, and joy to everyday feeding routines.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-background dark:bg-[#111827] text-on-surface dark:text-gray-100 font-body-md antialiased min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
            <CartDrawer />
            {/* Floating WhatsApp Button */}
            <a
              href="https://wa.me/923205475430?text=Hello%20110%20Baby%20Feeder,%20I%20would%20like%20to%20inquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
            >
              <span className="material-symbols-outlined text-[28px]">chat</span>
              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-surface dark:bg-gray-800 text-on-surface dark:text-white text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-outline-variant/20">
                Chat with Us
              </span>
            </a>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
