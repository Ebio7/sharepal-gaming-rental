import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductGrid />
        <FAQ />
        <Testimonials />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}
