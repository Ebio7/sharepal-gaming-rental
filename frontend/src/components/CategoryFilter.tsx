'use client';

import { useState } from 'react';
import { Gamepad2, Monitor, Car, Glasses, Tv } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All', icon: Gamepad2 },
  { id: 'gta', name: 'GTA VI', icon: Gamepad2 },
  { id: 'ps5', name: 'PS5 Console', icon: Gamepad2 },
  { id: 'xbox', name: 'Xbox Console', icon: Gamepad2 },
  { id: 'vr', name: 'VR', icon: Glasses },
  { id: 'racing', name: 'Racing Wheel', icon: Car },
  { id: 'bigscreen', name: 'Big Screen', icon: Tv },
];

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="w-full md:w-64 bg-white rounded-lg shadow-sm p-4">
      <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                alert(`${category.name} filter coming soon!`);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isSelected
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
