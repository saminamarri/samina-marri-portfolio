import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Maximize2, Quote } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Lightbox from '../components/Lightbox';
import { artworks } from '../data/artworks';

export default function ArtworkDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentIndex = artworks.findIndex((item) => item.id === id);

  // Fallback if artwork not found
  if (currentIndex === -1) {
    return (
      <div className="pt-36 pb-20 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif text-[#F7F5F0] mb-4">Artwork Not Found</h2>
        <p className="text-sm text-[#A1A1AA] mb-8">The requested artwork piece could not be located in the gallery.</p>
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0B0B0C] bg-[#C5A059] px-6 py-3 rounded-full font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Gallery
        </Link>
      </div>
    );
  }

  const artwork = artworks[currentIndex];
  const prevArtwork = artworks[(currentIndex - 1 + artworks.length) % artworks.length];
  const nextArtwork = artworks[(currentIndex + 1) % artworks.length];

  return (
    <PageTransition>
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Navigation Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A1A1AA] hover:text-[#C5A059] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO GALLERY</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(`/gallery/${prevArtwork.id}`)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#141417] text-xs uppercase tracking-wider text-[#A1A1AA] hover:text-[#F7F5F0] border border-white/10 hover:border-white/20 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>PREVIOUS</span>
            </button>
            <button
              onClick={() => navigate(`/gallery/${nextArtwork.id}`)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#141417] text-xs uppercase tracking-wider text-[#A1A1AA] hover:text-[#F7F5F0] border border-white/10 hover:border-white/20 transition-all"
            >
              <span>NEXT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Artwork Showcase Grid: LEFT SIDE = Details, RIGHT SIDE = Painting */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Metadata & Statement */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            <div>
              <span className="px-3.5 py-1 text-[10px] uppercase tracking-[0.25em] font-semibold bg-[#C5A059]/10 text-[#C5A059] rounded-full border border-[#C5A059]/20 inline-block mb-3">
                {artwork.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-serif text-[#F7F5F0] mb-2 font-normal">
                {artwork.title}
              </h1>
              <p className="text-xs uppercase tracking-widest text-[#A1A1AA] font-mono">
                CREATED IN {artwork.year}
              </p>
            </div>

            {/* Metadata Table */}
            <div className="bg-[#141417] p-6 rounded-xl border border-white/10 space-y-4 text-xs shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-[#A1A1AA] uppercase tracking-wider">MEDIUM</span>
                <span className="text-[#F7F5F0] font-medium">{artwork.medium}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-[#A1A1AA] uppercase tracking-wider">DIMENSIONS</span>
                <span className="text-[#F7F5F0] font-mono">{artwork.dimensions}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#A1A1AA] uppercase tracking-wider">ARTIST</span>
                <span className="text-[#C5A059] font-medium">SAMINA MARRI</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-[0.25em] text-[#F7F5F0] font-semibold">
                ARTWORK OVERVIEW
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed font-light">
                {artwork.description}
              </p>
            </div>

            {/* Artist Statement Box */}
            {artwork.statement && (
              <div className="bg-[#141417] p-6 rounded-xl border border-white/10 relative overflow-hidden shadow-xl">
                <div className="flex items-start gap-3">
                  <Quote className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-semibold block mb-1">
                      ARTIST STATEMENT ON THIS PIECE
                    </span>
                    <p className="font-serif italic text-sm text-[#F7F5F0]">
                      "{artwork.statement}"
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Image with Lightbox Trigger */}
          <div className="lg:col-span-7 relative group order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0D0D0F]">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/paintings/painting-01.svg';
                }}
              />

              {/* Lightbox Expand Button Overlay */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute top-4 right-4 p-3 rounded-full bg-[#0B0B0C]/80 backdrop-blur-md text-[#F7F5F0] hover:text-[#C5A059] border border-white/10 hover:border-[#C5A059] transition-all opacity-90 hover:opacity-100 shadow-xl"
                aria-label="Expand Artwork Lightbox"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Lightbox Modal */}
        <Lightbox
          isOpen={lightboxOpen}
          image={artwork.image}
          title={`${artwork.title} (${artwork.medium}, ${artwork.year})`}
          onClose={() => setLightboxOpen(false)}
        />
      </div>
    </PageTransition>
  );
}
