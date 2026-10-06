import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Palette } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden canvas-texture">
      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C5A059]/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#2A241E]/30 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        
        {/* LEFT COLUMN: ARTIST PORTRAIT (Section 3) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center order-1 lg:order-1"
        >
          <div className="relative w-full max-w-md lg:max-w-none">
            {/* Fine-line Frame Accents */}
            <div className="absolute -inset-4 border border-[#C5A059]/20 rounded-2xl pointer-events-none hidden sm:block" />
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-[#C5A059] pointer-events-none hidden sm:block" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-[#C5A059] pointer-events-none hidden sm:block" />
            
            {/* Subtle Abstract Brush Strokes Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1E1E22] via-[#C5A059]/10 to-transparent rounded-2xl transform -rotate-2 scale-105 pointer-events-none" />

            {/* Portrait Card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#141417] shadow-2xl shadow-black/80">
              <img
                src="/images/artist/samina-marri.png"
                alt="Samina Marri - Fine Artist & Visual Artist"
                className="w-full h-auto max-h-[600px] object-cover object-top filter contrast-[1.02] brightness-[0.98]"
                onError={(e) => {
                  // Fallback placeholder framing if image is missing
                  e.target.onerror = null;
                  e.target.src = '/images/paintings/painting-01.svg';
                }}
              />
              
              {/* Soft Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-40 pointer-events-none" />
              
              {/* Artist Tag Floating Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0B0B0C]/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] block font-semibold">
                    ARTIST PORTRAIT
                  </span>
                  <span className="text-xs text-[#F7F5F0] font-serif tracking-wider">
                    SAMINA MARRI
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                  <Palette className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: ARTIST INTRODUCTION (Section 3) */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-2 space-y-6 text-left">
          
          {/* Uppercase Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <span className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C5A059]">
              FINE ARTIST • VISUAL ARTIST
            </span>
          </motion.div>

          {/* Large Name Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-[#F7F5F0] font-normal leading-[1.05]"
          >
            {siteConfig.artistName}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-[#C5A059] font-serif italic tracking-wide"
          >
            {siteConfig.heroSubtitle}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base text-[#F7F5F0]/90 leading-relaxed font-light border-l-2 border-[#C5A059]/40 pl-4 py-1"
          >
            "{siteConfig.tagline}"
          </motion.p>

          {/* Professional Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm text-[#A1A1AA] leading-relaxed font-light max-w-2xl"
          >
            {siteConfig.introBio}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#0B0B0C] bg-[#C5A059] hover:bg-[#D4AF37] px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-[#C5A059]/20"
            >
              <span>EXPLORE MY ART</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#F7F5F0] bg-[#141417] hover:bg-[#1E1E22] border border-white/10 hover:border-[#C5A059]/50 px-8 py-4 rounded-full font-medium transition-all duration-300"
            >
              <span>ABOUT THE ARTIST</span>
            </Link>
          </motion.div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#A1A1AA]"
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#C5A059] animate-bounce" />
      </motion.div>
    </section>
  );
}
