import React, { useState } from 'react';
import ArtworkCard from './ArtworkCard';
import { artworkCategories } from '../data/artworks';

export default function ArtworkGrid({ artworks, showFilters = true, limit = null }) {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredArtworks = artworks.filter((item) => {
    if (activeCategory === 'ALL') return true;
    return item.category.toUpperCase() === activeCategory.toUpperCase();
  });

  const displayedArtworks = limit ? filteredArtworks.slice(0, limit) : filteredArtworks;

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 md:mb-14">
          {artworkCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-[#C5A059] text-[#0B0B0C] font-semibold shadow-lg shadow-[#C5A059]/20'
                    : 'bg-[#141417] text-[#A1A1AA] hover:text-[#F7F5F0] border border-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid Container */}
      {displayedArtworks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#141417] rounded-xl border border-white/10 p-8">
          <p className="text-sm uppercase tracking-widest text-[#A1A1AA]">
            No artworks found in this category.
          </p>
          <button
            onClick={() => setActiveCategory('ALL')}
            className="mt-4 px-6 py-2 text-xs uppercase tracking-widest text-[#C5A059] underline"
          >
            View All Artworks
          </button>
        </div>
      )}
    </div>
  );
}
