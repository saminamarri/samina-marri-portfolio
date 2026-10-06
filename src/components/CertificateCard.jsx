import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

export default function CertificateCard({ title, organization, category, description }) {
  return (
    <div className="bg-[#141417] p-6 md:p-8 rounded-xl border border-white/10 hover:border-[#C5A059]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold bg-[#0B0B0C] px-3 py-1 rounded-full border border-white/10">
            {category}
          </span>
          <div className="w-8 h-8 rounded-full bg-[#0B0B0C] border border-white/10 flex items-center justify-center text-[#C5A059] group-hover:scale-110 transition-transform">
            <Award className="w-4 h-4" />
          </div>
        </div>

        <h3 className="font-serif text-xl text-[#F7F5F0] group-hover:text-[#C5A059] transition-colors mb-2 font-medium">
          {title}
        </h3>

        <p className="text-xs uppercase tracking-wider text-[#A1A1AA] font-medium mb-3">
          {organization}
        </p>

        <p className="text-xs text-[#A1A1AA] leading-relaxed font-light mb-4">
          {description}
        </p>
      </div>

      <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#C5A059]">
        <CheckCircle2 className="w-3.5 h-3.5" />
        <span>Verified Credential / Certificate</span>
      </div>
    </div>
  );
}
