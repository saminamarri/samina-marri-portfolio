import React from 'react';

export default function SectionHeading({ label, title, subtitle, centered = false }) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {label && (
        <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-serif tracking-wide text-[#F7F5F0] font-normal mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-[#A1A1AA] max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-[1px] bg-gradient-to-r from-[#C5A059]/40 via-white/10 to-transparent w-24 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
