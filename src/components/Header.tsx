
import React, { useContext } from 'react';
import { Apple } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ru' ? 'uz' : 'ru');
  };
  
  return (
    <header className="w-full py-6 flex items-center justify-between px-6">
      <Link to="/" className="flex items-center space-x-2 group animate-fade-in">
        <div className="rounded-xl bg-black p-2 group-hover:scale-105 transition-transform duration-200 shadow-sm">
          <Apple size={24} className="text-white" />
        </div>
        <span className="text-2xl font-semibold tracking-tight">iHelp</span>
      </Link>
      
      <button 
        onClick={toggleLanguage}
        className="px-3 py-1 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200 text-sm font-medium hover:bg-white/80 transition-colors duration-200"
      >
        {language === 'ru' ? 'UZ' : 'RU'}
      </button>
    </header>
  );
};

export default Header;
