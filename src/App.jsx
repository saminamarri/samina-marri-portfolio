import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ArtworkDetailPage from './pages/ArtworkDetailPage';
import EducationPage from './pages/EducationPage';
import ExhibitionsPage from './pages/ExhibitionsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F7F5F0] flex flex-col font-sans selection:bg-[#C5A059]/30 selection:text-[#F7F5F0]">
      {/* Scroll to Top on Route Navigation */}
      <ScrollToTop />

      {/* Sticky Premium Header */}
      <Navbar />

      {/* Main Content View */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery/:id" element={<ArtworkDetailPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/exhibitions" element={<ExhibitionsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
