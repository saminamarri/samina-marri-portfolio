import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Palette, Quote, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ArtworkGrid from '../components/ArtworkGrid';
import SkillCard from '../components/SkillCard';
import Timeline from '../components/Timeline';
import WorkshopCard from '../components/WorkshopCard';
import PageTransition from '../components/PageTransition';
import { artworks } from '../data/artworks';
import { creativePractice, creativeJourneyTimeline } from '../data/skills';
import { exhibitionsData } from '../data/exhibitions';
import { siteConfig } from '../data/config';

export default function HomePage() {
  return (
    <PageTransition>
      <div className="space-y-24 md:space-y-36 pb-12">
        {/* 1. Full-Screen Artist Hero (Sections 3 & 4) */}
        <Hero />

        {/* 2. Selected Works (Section 5) */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              label="CURATED GALLERY"
              title="SELECTED WORKS"
              subtitle="A preview of paintings, sketches, sculptures, printmaking, and visual studies."
            />
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] hover:text-[#F7F5F0] font-semibold transition-colors pb-4 border-b border-[#C5A059]/30 self-start md:self-end"
            >
              <span>VIEW ALL ARTWORK</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <ArtworkGrid artworks={artworks} showFilters={false} limit={6} />
        </section>

        {/* 3. About the Artist Teaser (Section 6) */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-r from-[#141417] via-[#1A1A1F] to-[#141417] rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Image Accent */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/images/artist/samina-marri.png"
                    alt="Samina Marri Artist Profile"
                    className="w-full h-full object-cover object-top filter contrast-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-50" />
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
                  ABOUT THE ARTIST
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-[#F7F5F0]">
                  Bridging Classical Fine Arts &amp; Contemporary Vision
                </h2>
                <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed font-light">
                  {siteConfig.introBio}
                </p>
                <div className="p-6 bg-[#0B0B0C]/80 rounded-2xl border border-white/10 flex items-start gap-4">
                  <Quote className="w-8 h-8 text-[#C5A059] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-serif italic text-lg text-[#F7F5F0]">
                      "{siteConfig.philosophyQuote}"
                    </p>
                    <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold block mt-2">
                      — ARTISTIC PHILOSOPHY
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#0B0B0C] bg-[#C5A059] hover:bg-[#D4AF37] px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg"
                  >
                    <span>READ FULL BIOGRAPHY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Artistic Practice (Section 7) */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            label="CREATIVE DISCIPLINES"
            title="MY ARTISTIC PRACTICE"
            subtitle="Exploring diverse mediums from traditional canvas painting and relief printing to tactile embroidery and digital visual layout."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {creativePractice.map((practice) => (
              <SkillCard
                key={practice.id}
                title={practice.title}
                description={practice.description}
                iconName={practice.icon}
              />
            ))}
          </div>
        </section>

        {/* 5. Creative Journey (Section 16) */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            label="EVOLUTION & PROGRESSION"
            title="MY CREATIVE JOURNEY"
            subtitle="Tracing the visual roadmap from formal academic fine arts training to frontier digital technology."
          />
          <div className="max-w-4xl mx-auto">
            <Timeline items={creativeJourneyTimeline} />
          </div>
        </section>

        {/* 6. Artist Statement (Section 17) */}
        <section className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="bg-[#141417] rounded-3xl p-10 md:p-16 border border-white/10 shadow-2xl relative">
            <Sparkles className="w-10 h-10 text-[#C5A059] mx-auto mb-6 opacity-70" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-semibold mb-4 block">
              ARTIST STATEMENT
            </span>
            <h2 className="text-2xl md:text-4xl font-serif text-[#F7F5F0] leading-relaxed max-w-3xl mx-auto font-normal">
              "Art is a continuous dialogue between inner observation, tactile studio practice, and visual communication. My work seeks to evoke quiet emotion, structure form, and celebrate artistic expression."
            </h2>
            <p className="text-xs uppercase tracking-widest text-[#A1A1AA] mt-6 font-mono">
              — SAMINA MARRI • FINE ARTIST
            </p>
          </div>
        </section>

        {/* 7. Workshops & Highlights (Section 14) */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            label="KNOWLEDGE & ENGAGEMENT"
            title="WORKSHOPS & HIGHLIGHTS"
            subtitle="Engagements in studio masterclasses, calligraphy, and civic initiatives."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exhibitionsData.map((item) => (
              <WorkshopCard
                key={item.id}
                title={item.title}
                organization={item.organization}
                type={item.type}
                location={item.location}
                year={item.year}
                description={item.description}
              />
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
