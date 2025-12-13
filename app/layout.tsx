// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OmniTrust Properties Ltd. | Trusted Real Estate & Development Company',
  description:
    'OmniTrust Properties is a leading real estate and property development company in Bangladesh, delivering high-quality residential, commercial, and luxury projects. Your trusted partner for investment and property development.',
  keywords: [
     'OmniTrust Properties Ltd.',
    'Real Estate',
    'Property Developer',
    'Residential Properties',
    'Commercial Properties',
    'Luxury Apartments',
    'Investment Properties',
    'Property Development',
    'Bangladesh Real Estate',
  ],
  authors: [{ name: 'Omnitrust', url: 'https://omnitrust.com' }],
  viewport: 'width=device-width, initial-scale=1',
  // Favicon
  icons: {
    icon: '/omnitrust logo website.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome Kit */}
        <Script
          src="https://kit.fontawesome.com/81742b801a.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}

