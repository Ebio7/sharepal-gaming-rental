'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('http://localhost:8000/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-orange-500 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center text-red-600">
          <p>Error: {error}</p>
          <p className="text-sm text-gray-500 mt-2">Make sure the backend is running on port 8000</p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-gray-600">No products found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">gaming gadgets on rent</h2>
        <p className="text-gray-600">
          Total items: {products.length} items
        </p>
        <p className="text-sm text-gray-500">
          Showing {products.length} of {products.length} results
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
