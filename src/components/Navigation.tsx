'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-navy sticky top-0 z-50 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/generated/logo.png"
              alt="Oceanic Towing"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <div className="hidden md:block">
              <div className="text-white font-bold text-lg leading-tight">
                OCEANIC TOWING
              </div>
              <div className="text-gold text-xs uppercase tracking-wide">
                & Barge Rentals
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white text-sm font-medium uppercase tracking-wide hover:text-gold transition-colors"
            >
              Fleet
            </Link>
            <Link
              href="/services"
              className="text-white text-sm font-medium uppercase tracking-wide hover:text-gold transition-colors"
            >
              Services
            </Link>
            <Link
              href="/leasing"
              className="text-white text-sm font-medium uppercase tracking-wide hover:text-gold transition-colors"
            >
              Leasing
            </Link>
            <Link
              href="/quote"
              className="btn-primary text-sm"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-navy border-t border-white/10 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white text-sm font-medium uppercase tracking-wide hover:text-gold transition-colors px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fleet
              </Link>
              <Link
                href="/services"
                className="text-white text-sm font-medium uppercase tracking-wide hover:text-gold transition-colors px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/leasing"
                className="text-white text-sm font-medium uppercase tracking-wide hover:text-gold transition-colors px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Leasing
              </Link>
              <Link
                href="/quote"
                className="btn-primary text-sm mx-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
