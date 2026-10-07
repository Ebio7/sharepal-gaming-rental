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
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('About page coming soon!'); }}>
                About
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('Why SharePal page coming soon!'); }}>
                Why SharePal
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('Sitemap coming soon!'); }}>
                Sitemap
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('CarePal page coming soon!'); }}>
                CarePal
              </a>
            </div>
          </div>

          {/* Become a Pal */}
          <div>
            <h3 className="font-semibold mb-4">Become a Pal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('Sharepal for Creators coming soon!'); }}>
                Sharepal for Creators
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('Careers page coming soon!'); }}>
                Careers
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('Sharepal for Brands coming soon!'); }}>
                Sharepal for Brands
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('Asset Funding Program coming soon!'); }}>
                Asset Funding Program New
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('Rent Your Gear coming soon!'); }}>
                Rent Your Gear New
              </a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold mb-4">Information</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('How it works page coming soon!'); }}>
                How it works?
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('FAQs page coming soon!'); }}>
                FAQs
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('Verification page coming soon!'); }}>
                Verification
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('Cancellation Policy page coming soon!'); }}>
                Cancellation Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('Life at Sharepal page coming soon!'); }}>
                Life at Sharepal
              </a>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('Terms & Condition page coming soon!'); }}>
                Terms & Condition
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('Shipping policy page coming soon!'); }}>
                Shipping policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('Damage Policy page coming soon!'); }}>
                Damage Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('Terms of Use page coming soon!'); }}>
                Terms of Use
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" onClick={(e) => { e.preventDefault(); alert('Privacy Policy page coming soon!'); }}>
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
