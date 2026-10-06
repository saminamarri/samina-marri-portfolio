import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import { siteConfig } from '../data/config';
import SocialLinks from './SocialLinks';

export default function Footer({ hideCta = false }) {
  return (
    <footer className="bg-[#0B0B0C] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background Texture Detail */}
      <div className="absolute inset-0 canvas-texture opacity-30 pointer-events-none" />

      {/* Pre-Footer Call to Action (Section 33) */}
      {!hideCta && (
        <div className="max-w-5xl mx-auto px-6 mb-20">
          <div className="bg-gradient-to-br from-[#141417] to-[#1E1E24] border border-white/10 rounded-2xl p-8 md:p-14 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full filter blur-3xl pointer-events-none" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-3 block">
              COLLABORATIONS & EXHIBITIONS
            </span>
            <h3 className="text-2xl md:text-4xl font-serif text-[#F7F5F0] mb-4 max-w-2xl mx-auto">
              HAVE AN IDEA, PROJECT, OR EXHIBITION IN MIND?
            </h3>
            <p className="text-sm md:text-base text-[#A1A1AA] max-w-xl mx-auto mb-8 font-light">
              LET'S CREATE SOMETHING MEANINGFUL.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#0B0B0C] bg-[#C5A059] hover:bg-[#D4AF37] px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-[#C5A059]/20"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl font-semibold tracking-wider text-[#F7F5F0]">
                {siteConfig.artistName}
              </span>
            </Link>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium">
              {siteConfig.title}
            </p>
            <p className="text-xs text-[#A1A1AA] max-w-md leading-relaxed font-light">
              Transforming ideas, emotions, and observations into thoughtful visual expressions across traditional fine arts and contemporary digital media.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#F7F5F0] font-semibold mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A1A1AA] uppercase tracking-wider">
              <li>
                <Link to="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C5A059] transition-colors">About</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#C5A059] transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/education" className="hover:text-[#C5A059] transition-colors">Education</Link>
              </li>
              <li>
                <Link to="/exhibitions" className="hover:text-[#C5A059] transition-colors">Exhibitions</Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-[#C5A059] transition-colors">Skills</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C5A059] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#F7F5F0] font-semibold mb-4">
              DIRECT INQUIRIES
            </h4>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-xs text-[#C5A059] hover:underline font-mono"
            >
              <Mail className="w-4 h-4" />
              <span>{siteConfig.email}</span>
            </a>
            <p className="text-[11px] text-[#A1A1AA] pt-2 font-light">
              Available for commissions, exhibitions, gallery showings, and creative collaborations.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#A1A1AA] font-light">
          <p>© {siteConfig.copyrightYear} {siteConfig.artistName}. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0 tracking-wider">Fine Art &amp; Visual Design Portfolio</p>
        </div>
      </div>
    </footer>
  );
}
