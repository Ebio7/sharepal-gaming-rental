'use client';

import { Product } from '@/types/product';
import { Star, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      {/* Image container */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        {!imageError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-sm">Image not available</span>
          </div>
        )}

        {/* Tag badge */}
        {product.tag && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
              {product.tag}
            </span>
          </div>
        )}

        {/* Out of stock badge */}
        {product.out_of_stock && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-gray-800 text-white text-xs font-semibold rounded-full">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Rating and bookings */}
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">{product.rating}</span>
          </div>
          <div className="text-sm text-gray-500">
            {product.booked_count} bookings
          </div>
        </div>

        {/* Price and action */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              ₹{product.per_day_rent}
            </span>
            <span className="text-sm text-gray-500">/day</span>
          </div>
          <button
            disabled={product.out_of_stock}
            className={`p-2 rounded-full transition-colors ${
              product.out_of_stock
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-orange-500 text-white hover:bg-orange-600'
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
