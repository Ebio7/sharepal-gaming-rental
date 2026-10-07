'use client';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 px-4">
      {/* Multi-layer gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-blue-500/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-fuchsia-500/10"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 to-purple-950/50"></div>
      
      {/* Floating decorative orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-violet-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-fuchsia-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Gaming Consoles
          </h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto drop-shadow-md">
            Rent the latest gaming gadgets from SharePal PS5, Xbox, Oculus VR, Racing Wheel on rent.
          </p>
        </div>

        {/* Brand logos */}
        <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 shadow-lg">
            <span className="text-white font-bold text-xl">XBOX</span>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 shadow-lg">
            <span className="text-white font-bold text-xl">PS5</span>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30 shadow-lg">
            <span className="text-white font-bold text-xl">Meta</span>
          </div>
        </div>
      </div>

      {/* Left side gaming image */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 opacity-85 hidden lg:block z-20 mix-blend-screen">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO-THBrWpv4I4K6y5RcEyGJHWYfVJbPfwJhP9JPV-nfA&s=10"
          alt="PS5 Gaming Console"
          className="w-full h-full object-contain"
          style={{ transform: 'rotate(-15deg)', filter: 'brightness(1.1) contrast(1.1)' }}
        />
      </div>

      {/* Right side gaming image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 opacity-85 hidden lg:block z-20 mix-blend-screen">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZjA8TCcie9cDWRzCKTnJDlu5oK4jr1fa3UdWiVsaMhA&s=10"
          alt="PS5 Controller"
          className="w-full h-full object-contain"
          style={{ transform: 'rotate(15deg)', filter: 'brightness(1.1) contrast(1.1)' }}
        />
      </div>
    </section>
  );
}
