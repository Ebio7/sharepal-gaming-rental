'use client';

import { Menu, X, Search, ShoppingCart, User, Calendar, MapPin } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top bar - Location and Date selection */}
      <div className="bg-purple-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Bangalore</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Delivery Date</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Pickup Date</span>
            </div>
          </div>
          <button 
            className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors whitespace-nowrap"
            onClick={() => alert('Date selection functionality coming soon!')}
          >
            Select
          </button>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold text-purple-600">
              SharePal
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Photography
              </a>
              <a href="#" className="text-purple-600 font-semibold border-b-2 border-purple-600 pb-1">
                Gaming
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Outdoor
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Entertainment
              </a>
            </nav>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <button 
              className="hidden md:flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => alert('Search functionality coming soon!')}
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="hidden md:flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => alert('Cart functionality coming soon!')}
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button 
              className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors"
              onClick={() => alert('Login functionality coming soon!')}
            >
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
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Photography
              </a>
              <a href="#" className="text-purple-600 font-semibold">
                Gaming
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Outdoor
              </a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Entertainment
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
