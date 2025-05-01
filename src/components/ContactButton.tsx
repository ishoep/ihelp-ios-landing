
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactButtonProps {
  icon: LucideIcon;
  label: string;
  href: string;
  color?: string;
}

const ContactButton = ({ icon: Icon, label, href, color = "bg-gradient-to-r from-white to-gray-100" }: ContactButtonProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-full 
                 ${color} text-black hover:opacity-90 transition-all duration-300 
                 shadow-sm border border-gray-200 backdrop-blur-sm w-full sm:w-auto
                 hover:scale-105 transform`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </a>
  );
};

export default ContactButton;
