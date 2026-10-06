import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'EDUCATION', path: '/education' },
    { name: 'EXHIBITIONS', path: '/exhibitions' },
    { name: 'SKILLS', path: '/skills' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0B0C]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex flex-col">
          <span className="font-serif text-2xl md:text-3xl font-semibold tracking-wider text-[#F7F5F0] group-hover:text-[#C5A059] transition-colors">
            {siteConfig.artistName}
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#A1A1AA] uppercase font-light -mt-1">
            Fine Artist & Visual Artist
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.2em] transition-colors duration-300 font-medium ${
                  isActive
                    ? 'text-[#C5A059] font-semibold border-b border-[#C5A059] pb-1'
                    : 'text-[#F7F5F0]/70 hover:text-[#F7F5F0]'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/gallery"
            className="group relative inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#0B0B0C] bg-[#C5A059] hover:bg-[#D4AF37] px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-[#C5A059]/20"
          >
            <span>VIEW MY ART</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 text-[#F7F5F0] hover:text-[#C5A059] focus:outline-none"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[70px] bg-[#0B0B0C]/98 backdrop-blur-xl z-40 flex flex-col px-8 py-10 border-t border-white/10 animate-fade-in">
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-serif tracking-widest uppercase transition-colors ${
                    isActive ? 'text-[#C5A059] font-semibold pl-2 border-l-2 border-[#C5A059]' : 'text-[#F7F5F0]/80'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="mt-10 pt-8 border-t border-white/10">
            <Link
              to="/gallery"
              className="w-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#0B0B0C] bg-[#C5A059] py-3.5 rounded-full font-semibold shadow-lg"
            >
              <span>VIEW MY ART</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <div className="mt-6 text-center text-xs text-[#A1A1AA]">
              {siteConfig.email}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
