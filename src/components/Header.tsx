
import React from 'react';
import { Apple } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full py-6 flex items-center justify-center">
      <Link to="/" className="flex items-center space-x-2 group">
        <div className="rounded-xl bg-black p-2 group-hover:scale-105 transition-transform duration-200 shadow-sm">
          <Apple size={24} className="text-white" />
        </div>
        <span className="text-2xl font-semibold tracking-tight">iHelp</span>
      </Link>
    </header>
  );
};

export default Header;
