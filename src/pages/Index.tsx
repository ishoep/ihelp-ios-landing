
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, MessageCircle } from 'lucide-react';
import Header from '../components/Header';
import ContactButton from '../components/ContactButton';

const translations = {
  ru: {
    title: 'iHelp',
    description: 'Сервис Apple техники в Бухаре',
    portfolio: 'Портфолио'
  },
  uz: {
    title: 'iHelp',
    description: 'Buxorodagi Apple texnikasi servisi',
    portfolio: 'Portfolio'
  }
};

const Index = () => {
  const [language, setLanguage] = useState<'ru' | 'uz'>('ru');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const t = translations[language];
  
  const animationClasses = mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-8 text-center">
        <div className={`glass-card p-8 max-w-md w-full space-y-6 transition-all duration-500 ${animationClasses}`}>
          <div className="emoji mb-6">🛠️</div>
          <h1 className="text-3xl font-bold text-black">{t.title}</h1>
          <p className="text-gray-700 text-lg">{t.description}</p>
          
          <Link 
            to="/portfolio" 
            className="ios-button w-full inline-block animate-fade-in"
          >
            {t.portfolio}
          </Link>
        </div>
      </main>
      
      <footer className="py-10 px-6">
        <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
          <ContactButton 
            icon={MessageCircle} 
            label="Telegram" 
            href="https://t.me/ihelp_bukhara" 
            color="bg-gradient-to-r from-white to-gray-50" 
          />
          <ContactButton 
            icon={Instagram} 
            label="Instagram" 
            href="https://instagram.com/ihelp_bukhara" 
            color="bg-gradient-to-r from-white to-gray-50" 
          />
          <ContactButton 
            icon={Phone} 
            label="+998 90 123 4567" 
            href="tel:+998901234567" 
            color="bg-gradient-to-r from-white to-gray-50" 
          />
        </div>
      </footer>
    </div>
  );
};

export default Index;
