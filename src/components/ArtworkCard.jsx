import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ArtworkCard({ artwork }) {
  const { id, title, category, medium, year, image } = artwork;

  return (
    <Link
      to={`/gallery/${id}`}
      className="group relative block bg-[#141417] rounded-xl overflow-hidden border border-white/10 hover:border-[#C5A059]/50 transition-all duration-500 shadow-xl"
    >
      {/* Artwork Image Container */}
      <div className="aspect-[4/5] overflow-hidden relative bg-[#0D0D0F]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          onError={(e) => {
            // Elegant fallback if image path is not found
            e.target.onerror = null;
            e.target.src = '/images/paintings/painting-01.svg';
          }}
        />
        
        {/* Dark Vignette Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
        
        {/* Category Pill Tag Top Left */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold bg-[#0B0B0C]/80 text-[#C5A059] backdrop-blur-md rounded-full border border-white/10">
            {category}
          </span>
        </div>

        {/* Action Icon Top Right */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 rounded-full bg-[#C5A059] text-[#0B0B0C] flex items-center justify-center shadow-lg">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Content Info Bottom Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-serif text-xl md:text-2xl text-[#F7F5F0] group-hover:text-[#C5A059] transition-colors mb-1">
            {title}
          </h3>
          <div className="flex items-center justify-between text-xs text-[#A1A1AA] font-light pt-1 border-t border-white/10">
            <span>{medium}</span>
            <span className="font-mono text-[#C5A059]">{year}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
