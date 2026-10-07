'use client';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gaming Consoles
          </h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Rent the latest gaming gadgets from SharePal PS5, Xbox, Oculus VR, Racing Wheel on rent.
          </p>
        </div>

        {/* Brand logos */}
        <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
            <span className="text-white font-bold text-xl">XBOX</span>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
            <span className="text-white font-bold text-xl">PS5</span>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
            <span className="text-white font-bold text-xl">Meta</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}
