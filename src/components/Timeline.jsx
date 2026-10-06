import React from 'react';
import { GraduationCap, Calendar, CheckCircle2, Clock } from 'lucide-react';

export default function Timeline({ items }) {
  return (
    <div className="relative border-l border-white/10 pl-6 md:pl-10 ml-4 md:ml-6 space-y-12">
      {items.map((item, idx) => (
        <div key={item.id || item.stage || idx} className="relative group">
          {/* Dot node */}
          <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0B0B0C] border-2 border-[#C5A059] group-hover:scale-125 group-hover:bg-[#C5A059] transition-all duration-300 shadow-md shadow-[#C5A059]/20" />

          {/* Item Content Card */}
          <div className="bg-[#141417] p-6 md:p-8 rounded-xl border border-white/10 hover:border-[#C5A059]/40 transition-all duration-300 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold bg-[#0B0B0C] px-3 py-1 rounded-full border border-white/10">
                {item.stage || item.status || 'EDUCATION'}
              </span>
              {item.period && (
                <span className="text-xs text-[#A1A1AA] flex items-center gap-1.5 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  {item.period}
                </span>
              )}
            </div>

            <h3 className="font-serif text-2xl text-[#F7F5F0] group-hover:text-[#C5A059] transition-colors mb-1">
              {item.degree || item.title}
            </h3>
            
            <p className="text-xs uppercase tracking-wider text-[#C5A059] font-medium mb-3">
              {item.institution || item.subtitle}
            </p>

            {item.cgpa && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A059]/10 text-[#C5A059] text-xs font-mono rounded-md border border-[#C5A059]/20 mb-3">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>CGPA: {item.cgpa}</span>
              </div>
            )}

            <p className="text-xs md:text-sm text-[#A1A1AA] leading-relaxed font-light">
              {item.details || item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
