import React from 'react';
import { Palette, PenTool, Layers, Box, Scissors, Layout, Sparkles, Cpu, Award } from 'lucide-react';

const iconMap = {
  Palette,
  PenTool,
  Layers,
  Box,
  Needle: Scissors,
  Scissors,
  Layout,
  Sparkles,
  Cpu,
  Award
};

export default function SkillCard({ title, description, iconName }) {
  const IconComponent = iconMap[iconName] || Palette;

  return (
    <div className="group bg-[#141417] p-8 rounded-2xl border border-white/10 hover:border-[#C5A059]/50 transition-all duration-500 hover:-translate-y-1 shadow-xl relative overflow-hidden">
      {/* Subtle Background Glow on Hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/5 rounded-full filter blur-2xl group-hover:bg-[#C5A059]/15 transition-all" />
      
      {/* Icon Container */}
      <div className="w-12 h-12 rounded-xl bg-[#0B0B0C] border border-white/10 flex items-center justify-center text-[#C5A059] group-hover:scale-110 group-hover:border-[#C5A059]/40 transition-all duration-300 mb-6">
        <IconComponent className="w-6 h-6" />
      </div>

      {/* Card Content */}
      <h3 className="font-serif text-xl text-[#F7F5F0] group-hover:text-[#C5A059] transition-colors mb-3 font-medium tracking-wide">
        {title}
      </h3>
      <p className="text-xs text-[#A1A1AA] leading-relaxed font-light">
        {description}
      </p>

      {/* Fine-line Accent Bottom */}
      <div className="mt-6 h-[1px] w-12 bg-white/10 group-hover:w-full group-hover:bg-[#C5A059]/40 transition-all duration-500" />
    </div>
  );
}
