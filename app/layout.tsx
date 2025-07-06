import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import StickyConsultationButton from '@/components/sticky-consultation-button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Classic Interiors - Timeless Design & Exceptional Craftsmanship',
  description: 'Transform your space with our curated collection of lighting, furniture, and decor. Discover timeless design and exceptional craftsmanship.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <StickyConsultationButton />
        <Footer />
      </body>
    </html>
  );
}