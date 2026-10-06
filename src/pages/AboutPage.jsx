import React from 'react';
import { Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import PageTransition from '../components/PageTransition';
import { creativePractice } from '../data/skills';
import { siteConfig } from '../data/config';

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#141417]">
                <img
                  src="/images/artist/samina-marri.png"
                  alt="Samina Marri Portrait"
                  className="w-full h-auto object-cover object-top filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>

              {/* Decorative Frame Line */}
              <div className="absolute -inset-3 border border-[#C5A059]/20 rounded-2xl pointer-events-none hidden md:block -z-10" />
            </div>
          </div>

          {/* Right Column: Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading
              label="BIOGRAPHY & PHILOSOPHY"
              title="ABOUT THE ARTIST"
              subtitle="Fine Arts Graduate • Painter • Visual Artist • Graphic Designer"
            />

            <div className="space-y-6 text-sm md:text-base text-[#A1A1AA] leading-relaxed font-light">
              <p className="text-[#F7F5F0] text-base md:text-lg font-serif italic border-l-2 border-[#C5A059] pl-4">
                Samina Marri is a Fine Arts graduate and visual artist with a strong interest in painting, sketching, printmaking, sculpting, stitching, embroidery, and graphic design.
              </p>
              
              <p>
                She is interested in creating thoughtful visual work that connects ideas, emotions, observation, and artistic expression. Her creative practice combines traditional fine arts with modern visual communication and digital creativity.
              </p>

              <p>
                Having earned her Bachelor of Fine Arts from Sardar Bahadur Khan Women's University (CGPA 3.55), Samina has developed a versatile studio methodology. Her portfolio encompasses atmospheric oil and acrylic canvas painting, intricate charcoal figure sketching, woodcut block printmaking, terracotta sculptural forms, and detailed needlework.
              </p>
            </div>

            {/* Artistic Philosophy Box */}
            <div className="bg-[#141417] p-8 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-full filter blur-2xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-[#C5A059] flex-shrink-0 mt-1" />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold block mb-2">
                    ARTISTIC PHILOSOPHY
                  </span>
                  <p className="font-serif italic text-xl md:text-2xl text-[#F7F5F0]">
                    "{siteConfig.philosophyQuote}"
                  </p>
                </div>
              </div>
            </div>

            {/* Creative Core Interests */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#F7F5F0] font-semibold">
                CREATIVE CORE INTERESTS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#A1A1AA]">
                <div className="flex items-center gap-2 bg-[#141417] p-3.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Studio Painting & Color Theory</span>
                </div>
                <div className="flex items-center gap-2 bg-[#141417] p-3.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Expressive Line & Charcoal Sketching</span>
                </div>
                <div className="flex items-center gap-2 bg-[#141417] p-3.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Woodcut & Monotype Printmaking</span>
                </div>
                <div className="flex items-center gap-2 bg-[#141417] p-3.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Tactile Embroidery & Stitching</span>
                </div>
                <div className="flex items-center gap-2 bg-[#141417] p-3.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Graphic Design & Vector Artwork</span>
                </div>
                <div className="flex items-center gap-2 bg-[#141417] p-3.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Agentic AI & Creative Technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Grid */}
        <div className="pt-12">
          <SectionHeading
            label="EXPLORATIONS"
            title="MY ARTISTIC PRACTICE"
            subtitle="A detailed look at the core mediums shaping Samina Marri's portfolio."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creativePractice.map((item) => (
              <SkillCard
                key={item.id}
                title={item.title}
                description={item.description}
                iconName={item.icon}
              />
            ))}
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
