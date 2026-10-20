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
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
