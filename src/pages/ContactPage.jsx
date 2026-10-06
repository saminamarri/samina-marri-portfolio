import React from 'react';
import { Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import PageTransition from '../components/PageTransition';
import { siteConfig } from '../data/config';

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Header */}
        <SectionHeading
          label="GET IN TOUCH"
          title="LET'S CREATE A CONVERSATION"
          subtitle="Have an idea, project, collaboration, or exhibition in mind? I'd love to hear from you."
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Email & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#141417] p-8 rounded-2xl border border-white/10 shadow-xl space-y-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B0B0C] border border-white/10 flex items-center justify-center text-[#C5A059]">
                <Mail className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-semibold block mb-1">
                  DIRECT EMAIL INQUIRIES
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-serif text-2xl text-[#F7F5F0] hover:text-[#C5A059] transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </div>

              <p className="text-xs text-[#A1A1AA] leading-relaxed font-light pt-4 border-t border-white/10">
                Whether you are interested in acquiring an original painting, inviting Samina Marri to participate in a group exhibition, or discussing creative collaborations, feel free to drop a message.
              </p>

              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A1A1AA] font-semibold block mb-3">
                  CONNECT ON SOCIAL MEDIA
                </span>
                <SocialLinks />
              </div>
            </div>

            {/* Studio Availability Box */}
            <div className="bg-gradient-to-br from-[#141417] to-[#1E1E24] p-8 rounded-2xl border border-white/10 shadow-xl space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                ARTIST AVAILABILITY
              </span>
              <p className="font-serif text-xl text-[#F7F5F0]">
                Open for Commissions &amp; Exhibition Requests
              </p>
              <p className="text-xs text-[#A1A1AA] leading-relaxed font-light">
                Samina Marri is currently accepting select custom painting commissions, digital graphic design projects, and visual collaboration proposals.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </PageTransition>
  );
}
