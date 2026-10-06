import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function NotFoundPage() {
  return (
    <PageTransition>
      <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-20 px-6 text-center">
        <div className="max-w-md space-y-6 bg-[#141417] p-10 md:p-14 rounded-3xl border border-white/10 shadow-2xl relative">
          <div className="w-16 h-16 rounded-full bg-[#0B0B0C] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mx-auto mb-4 shadow-xl">
            <Compass className="w-8 h-8 animate-spin-slow" />
          </div>

          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-semibold block">
            ERROR 404
          </span>

          <h1 className="text-4xl md:text-5xl font-serif text-[#F7F5F0]">
            PAGE NOT FOUND
          </h1>

          <p className="text-xs md:text-sm text-[#A1A1AA] leading-relaxed font-light">
            The artwork canvas or page you are searching for does not exist or may have been relocated.
          </p>

          <div className="pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#0B0B0C] bg-[#C5A059] hover:bg-[#D4AF37] px-8 py-3.5 rounded-full font-semibold transition-all shadow-xl"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETURN HOME</span>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
