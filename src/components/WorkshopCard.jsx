import React from 'react';
import { Calendar, MapPin, Sparkles } from 'lucide-react';

export default function WorkshopCard({ title, organization, type, location, year, description }) {
  return (
    <div className="bg-[#141417] p-6 md:p-8 rounded-xl border border-white/10 hover:border-[#C5A059]/40 transition-all duration-300 shadow-xl group">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold bg-[#0B0B0C] px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#C5A059]" />
          {type}
        </span>
        {year && (
          <span className="text-xs text-[#A1A1AA] flex items-center gap-1 font-mono">
            <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
            {year}
          </span>
        )}
      </div>

      <h3 className="font-serif text-2xl text-[#F7F5F0] group-hover:text-[#C5A059] transition-colors mb-2">
        {title}
      </h3>

      <div className="flex items-center gap-4 text-xs text-[#A1A1AA] mb-4 font-light">
        <span className="font-semibold text-[#F7F5F0]">{organization}</span>
        {location && (
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#C5A059]" />
            {location}
          </span>
        )}
      </div>

      <p className="text-xs md:text-sm text-[#A1A1AA] leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
}
