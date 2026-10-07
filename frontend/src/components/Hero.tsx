'use client';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gaming Consoles
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Rent the latest gaming gadgets from PS5, Xbox, Oculus VR, Racing Wheel on rent.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button 
            className="px-4 py-2 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
            onClick={() => alert('Showing all products')}
          >
            All
          </button>
          <button 
            className="px-4 py-2 rounded-full bg-white text-gray-700 font-medium border border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-colors"
            onClick={() => alert('GTA VI filter coming soon!')}
          >
            GTA VI
          </button>
          <button 
            className="px-4 py-2 rounded-full bg-white text-gray-700 font-medium border border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-colors"
            onClick={() => alert('PS5 Console filter coming soon!')}
          >
            PS5 Console
          </button>
          <button 
            className="px-4 py-2 rounded-full bg-white text-gray-700 font-medium border border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-colors"
            onClick={() => alert('Xbox Console filter coming soon!')}
          >
            Xbox Console
          </button>
          <button 
            className="px-4 py-2 rounded-full bg-white text-gray-700 font-medium border border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-colors"
            onClick={() => alert('VR filter coming soon!')}
          >
            VR
          </button>
          <button 
            className="px-4 py-2 rounded-full bg-white text-gray-700 font-medium border border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-colors"
            onClick={() => alert('Racing Wheel filter coming soon!')}
          >
            Racing Wheel
          </button>
          <button 
            className="px-4 py-2 rounded-full bg-white text-gray-700 font-medium border border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-colors"
            onClick={() => alert('Big Screen Gaming filter coming soon!')}
          >
            Big Screen Gaming
          </button>
        </div>
      </div>
    </section>
  );
}
