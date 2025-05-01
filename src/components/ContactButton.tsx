
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactButtonProps {
  icon: LucideIcon;
  label: string;
  href: string;
  color?: string;
}

const ContactButton = ({ icon: Icon, label, href, color = "bg-ios-blue" }: ContactButtonProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl 
                 ${color} text-white hover:opacity-90 transition-opacity 
                 shadow-sm w-full sm:w-auto`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </a>
  );
};

export default ContactButton;
