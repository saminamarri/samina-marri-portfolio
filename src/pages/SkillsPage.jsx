import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Timeline from '../components/Timeline';
import PageTransition from '../components/PageTransition';
import { skillsCategories, creativeJourneyTimeline } from '../data/skills';
import { Palette, Layout, Cpu, CheckCircle2 } from 'lucide-react';

const categoryIcons = {
  "FINE ARTS": Palette,
  "DIGITAL DESIGN": Layout,
  "CREATIVE TECHNOLOGY": Cpu
};

export default function SkillsPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        
        {/* Creative Skills Breakdown */}
        <div>
          <SectionHeading
            label="TECHNICAL & STUDIO CAPABILITIES"
            title="CREATIVE SKILLS"
            subtitle="Spanning traditional studio fine arts, modern digital design software, and frontier agentic AI technology."
            centered={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillsCategories.map((group) => {
              const IconComp = categoryIcons[group.category] || Palette;
              return (
                <div
                  key={group.category}
                  className="bg-[#141417] p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between hover:border-[#C5A059]/40 transition-all group"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#0B0B0C] border border-white/10 flex items-center justify-center text-[#C5A059] group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-[#F7F5F0] group-hover:text-[#C5A059] transition-colors">
                          {group.category}
                        </h3>
                        <span className="text-[10px] uppercase tracking-wider text-[#A1A1AA]">
                          {group.skills.length} SPECIALIZATIONS
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-[#A1A1AA] mb-6 font-light">
                      {group.subtitle}
                    </p>

                    <div className="space-y-3">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="bg-[#0B0B0C] p-4 rounded-xl border border-white/5 hover:border-white/15 transition-all"
                        >
                          <div className="flex items-center justify-between text-xs font-semibold text-[#F7F5F0] mb-1">
                            <span>{skill.name}</span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                          </div>
                          <p className="text-[11px] text-[#A1A1AA] font-light leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Creative Journey Timeline (Section 16) */}
        <div className="max-w-4xl mx-auto pt-10">
          <SectionHeading
            label="EVOLUTION ROADMAP"
            title="MY CREATIVE JOURNEY"
            subtitle="The progression of visual artistic practice over time."
            centered={true}
          />
          <Timeline items={creativeJourneyTimeline} />
        </div>

      </div>
    </PageTransition>
  );
}
