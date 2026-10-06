import React from 'react';
import { Instagram, Linkedin, Facebook, Globe } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function SocialLinks({ className = "flex items-center gap-4" }) {
  const { socialLinks } = siteConfig;
  
  const activeLinks = [
    { key: 'instagram', url: socialLinks.instagram, icon: Instagram, label: 'Instagram' },
    { key: 'linkedin', url: socialLinks.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { key: 'behance', url: socialLinks.behance, icon: Globe, label: 'Behance' },
    { key: 'facebook', url: socialLinks.facebook, icon: Facebook, label: 'Facebook' },
  ].filter(item => item.url && item.url.trim() !== '');

  if (activeLinks.length === 0) {
    return null; // Do not display anything if no URLs configured
  }

  return (
    <div className={className}>
      {activeLinks.map(({ key, url, icon: Icon, label }) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="p-2.5 rounded-full border border-white/10 text-[#A1A1AA] hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-all duration-300 bg-[#141417]"
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}
