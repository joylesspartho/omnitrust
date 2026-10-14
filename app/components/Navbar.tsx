'use client';

import { useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-light bg-light shadow sticky-top py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100">
          {/* Logo */}
          <Link href="/" className="navbar-brand">
            <img
              src="/favicon.png"
              alt="Omnitrust Properties Ltd."
              style={{ maxHeight: '60px' }}
            />
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            style={{ border: 'none', background: 'transparent', outline: 'none' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Menu (Large screen e pashapashi thakbe) */}
          <div className="d-none d-lg-flex align-items-center gap-4">
            <Link href="/" className="nav-link text-dark fw-medium">
              Home
            </Link>
            <Link href="/service" className="nav-link text-dark fw-medium">
              Service
            </Link>
            <Link href="/about" className="nav-link text-dark fw-medium">
              About
            </Link>
            <Link href="/contact" className="nav-link text-dark fw-medium">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="d-lg-none d-flex flex-column mt-3 pt-2 border-top gap-2 pb-2 w-100">
            <Link href="/" className="nav-link text-dark fw-medium py-1" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/service" className="nav-link text-dark fw-medium py-1" onClick={() => setIsOpen(false)}>
              Service
            </Link>
            <Link href="/about" className="nav-link text-dark fw-medium py-1" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="nav-link text-dark fw-medium py-1" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}