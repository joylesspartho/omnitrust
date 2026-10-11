// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Omnitrust Properties Ltd. | Trusted Real Estate & Development Company',
  description:
    'Omnitrust Properties is a leading real estate and property development company in Bangladesh, delivering high-quality residential, commercial, and luxury projects. Your trusted partner for investment and property development.',

  keywords: [
    'Omnitrust Properties Ltd. Bangladesh',
    'omnitrust',
    'Real Estate',
    'Property Developer',
    'Residential Properties',
    'Commercial Properties',
    'Luxury Apartments',
    'Investment Properties',
    'Property Development',
    'Bangladesh Real Estate',
  ],

  authors: [
    {
      name: 'Omnitrust',
      url: 'https://www.omnitrust.com.bd',
    },
  ],

  verification: {
    google: '9db29b44489087b8',
  },

  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const dynamic = 'force-static';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://kit.fontawesome.com/81742b801a.js"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </head>

      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}