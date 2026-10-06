import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SocialLinks from '../components/SocialLinks';
import PageTransition from '../components/PageTransition';
import { siteConfig } from '../data/config';

export default function ContactPage() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const form = e.target;
    const formData = new FormData(form);
    
    // Config se Web3Forms access key attach karein
    formData.append("access_key", siteConfig.emailService.web3formsAccessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

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

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7 bg-[#141417] p-8 md:p-10 rounded-2xl border border-white/10 shadow-xl">
            <h3 className="font-serif text-2xl text-[#F7F5F0] mb-2">Send a Direct Message</h3>
            <p className="text-xs text-[#A1A1AA] mb-8 font-light">
              Fill out the details below to compose an inquiry. Your message will be routed directly to {siteConfig.email}.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold block mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Eleanor Vance"
                    className="w-full bg-[#0B0B0C] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F7F5F0] placeholder-gray-600 focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold block mb-2">
                    YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. eleanor@example.com"
                    className="w-full bg-[#0B0B0C] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F7F5F0] placeholder-gray-600 focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold block mb-2">
                  SUBJECT *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="e.g. Artwork Inquiry / Exhibition Collaboration"
                  className="w-full bg-[#0B0B0C] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F7F5F0] placeholder-gray-600 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold block mb-2">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Share your thoughts, project details, or exhibition invitation..."
                  className="w-full bg-[#0B0B0C] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#F7F5F0] placeholder-gray-600 focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-[#C5A059] text-[#0B0B0C] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#d8b268] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? 'SENDING...' : (
                  <>
                    SEND MESSAGE <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-emerald-400 text-xs text-center font-medium bg-emerald-500/10 py-3 rounded-lg border border-emerald-500/20">
                  Thank you! Your message has been sent directly.
                </p>
              )}

              {status === 'error' && (
                <p className="text-rose-400 text-xs text-center font-medium bg-rose-500/10 py-3 rounded-lg border border-rose-500/20">
                  Unable to send message right now. Please try again or email directly.
                </p>
              )}
            </form>
          </div>

        </div>

      </div>
    </PageTransition>
  );
}