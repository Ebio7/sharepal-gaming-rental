'use client';

import { Menu, X, Search, ShoppingCart, User, Calendar } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top bar - Date selection */}
      <div className="bg-orange-500 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-sm font-medium">Select rental dates to view prices</span>
          <button className="flex items-center gap-2 bg-white text-orange-500 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-orange-50 transition-colors">
            <Calendar className="w-4 h-4" />
            Select Rental Dates
          </button>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold text-orange-500">
              SharePal
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Photography
              </a>
              <a href="#" className="text-orange-500 font-semibold">
                Gaming
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Outdoor
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Entertainment
              </a>
            </nav>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 text-gray-700 hover:text-orange-500 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:flex items-center gap-2 text-gray-700 hover:text-orange-500 transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Hi, Login</span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Photography
              </a>
              <a href="#" className="text-orange-500 font-semibold">
                Gaming
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Outdoor
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Entertainment
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
