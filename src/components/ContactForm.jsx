import React, { useState } from 'react';
import { Send, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success', 'config-needed', 'error'

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject';
    if (!formData.message.trim()) newErrors.message = 'Please enter a message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Direct mailto fallback or clear email service integration status
    // To ensure transparent behavior, we open the mail client or show config notice
    const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    // Trigger user mail client
    window.location.href = mailtoLink;
    setStatus('sent-via-client');
  };

  return (
    <div className="bg-[#141417] p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl relative">
      <h3 className="font-serif text-2xl md:text-3xl text-[#F7F5F0] mb-2 font-normal">
        Send a Direct Message
      </h3>
      <p className="text-xs text-[#A1A1AA] mb-8 font-light leading-relaxed">
        Fill out the details below to compose an inquiry. Your message will be routed directly to {siteConfig.email}.
      </p>

      {status === 'sent-via-client' && (
        <div className="mb-6 p-4 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 text-xs text-[#F7F5F0] flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-[#C5A059]">Email Client Opened</p>
            <p className="text-[#A1A1AA] mt-1">
              Your default email application has opened with the pre-filled message for {siteConfig.email}. Click send in your email client to dispatch.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-2 font-medium">
              Your Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Eleanor Vance"
              className={`w-full bg-[#0B0B0C] border ${
                errors.name ? 'border-red-500' : 'border-white/10 focus:border-[#C5A059]'
              } rounded-xl px-4 py-3 text-sm text-[#F7F5F0] placeholder-[#A1A1AA]/40 focus:outline-none transition-colors`}
            />
            {errors.name && (
              <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-2 font-medium">
              Your Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. eleanor@example.com"
              className={`w-full bg-[#0B0B0C] border ${
                errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#C5A059]'
              } rounded-xl px-4 py-3 text-sm text-[#F7F5F0] placeholder-[#A1A1AA]/40 focus:outline-none transition-colors`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-2 font-medium">
            Subject *
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="e.g. Artwork Inquiry / Exhibition Collaboration"
            className={`w-full bg-[#0B0B0C] border ${
              errors.subject ? 'border-red-500' : 'border-white/10 focus:border-[#C5A059]'
            } rounded-xl px-4 py-3 text-sm text-[#F7F5F0] placeholder-[#A1A1AA]/40 focus:outline-none transition-colors`}
          />
          {errors.subject && (
            <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.subject}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#A1A1AA] mb-2 font-medium">
            Message *
          </label>
          <textarea
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Share your thoughts, project details, or exhibition invitation..."
            className={`w-full bg-[#0B0B0C] border ${
              errors.message ? 'border-red-500' : 'border-white/10 focus:border-[#C5A059]'
            } rounded-xl px-4 py-3 text-sm text-[#F7F5F0] placeholder-[#A1A1AA]/40 focus:outline-none transition-colors resize-none`}
          />
          {errors.message && (
            <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#0B0B0C] bg-[#C5A059] hover:bg-[#D4AF37] px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-[#C5A059]/20"
        >
          <span>SEND MESSAGE</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
