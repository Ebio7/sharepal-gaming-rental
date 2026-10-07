'use client';

import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Sharepal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Why SharePal
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Sitemap
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                CarePal
              </a>
            </div>
          </div>

          {/* Become a Pal */}
          <div>
            <h3 className="font-semibold mb-4">Become a Pal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Sharepal for Creators
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Careers
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Sharepal for Brands
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Asset Funding Program New
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Rent Your Gear New
              </a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold mb-4">Information</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                How it works?
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                FAQs
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Verification
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Cancellation Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Life at Sharepal
              </a>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Terms & Condition
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Shipping policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Damage Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Terms of Use
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Need Help */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="font-semibold mb-4">Need Help</h3>
          <p className="text-gray-400 mb-2">Contact Support</p>
          <a href="mailto:care@sharepal.in" className="text-orange-500 hover:text-orange-400 transition-colors">
            care@sharepal.in
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            Go up
          </button>

          <p className="text-gray-400 text-sm">
            © 2026. SWNAC E-Kiraya Services Pvt Ltd
          </p>

          <p className="text-gray-400 text-sm">
            Made with ♥️ for India
          </p>
        </div>
      </div>
    </footer>
  );
}
