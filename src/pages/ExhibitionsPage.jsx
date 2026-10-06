import React from 'react';
import SectionHeading from '../components/SectionHeading';
import WorkshopCard from '../components/WorkshopCard';
import PageTransition from '../components/PageTransition';
import { exhibitionsData } from '../data/exhibitions';

export default function ExhibitionsPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <SectionHeading
          label="PUBLIC ENGAGEMENT"
          title="EXHIBITIONS & WORKSHOPS"
          subtitle="Studio masterclasses, calligraphy workshops, civic initiatives, and artistic presentations."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitionsData.map((exh) => (
            <WorkshopCard
              key={exh.id}
              title={exh.title}
              organization={exh.organization}
              type={exh.type}
              location={exh.location}
              year={exh.year}
              description={exh.description}
            />
          ))}
        </div>

        {/* Note on Future Exhibitions */}
        <div className="max-w-2xl mx-auto text-center p-8 bg-[#141417] rounded-2xl border border-white/10 text-xs text-[#A1A1AA] leading-relaxed">
          <p className="font-serif text-base text-[#F7F5F0] mb-2">
            Interested in Hosting an Exhibition or Workshop?
          </p>
          <p>
            Samina Marri is open to gallery invitations, collaborative studio workshops, and curated group exhibitions.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
