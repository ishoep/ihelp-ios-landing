import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, MessageCircle, MapPin } from 'lucide-react';
import Header from '../components/Header';
import ContactButton from '../components/ContactButton';
import { LanguageContext } from '../App';

const translations = {
  ru: {
    title: 'iHelp',
    description: 'Сервис Apple техники в Бухаре',
    portfolio: 'Портфолио',
    location: 'Наше местоположение'
  },
  uz: {
    title: 'iHelp',
    description: 'Buxorodagi Apple texnikasi servisi',
    portfolio: 'Portfolio',
    location: 'Bizning manzil'
  }
};

const Index = () => {
  const { language } = useContext(LanguageContext);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const t = translations[language];
  
  const animationClasses = mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex flex-col" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6 text-center">
        <div className={`glass-card p-6 max-w-md w-full space-y-6 transition-all duration-500 ${animationClasses}`}>
          <div className="mb-4 flex justify-center">
            <img 
              src="https://em-content.zobj.net/source/apple/419/hammer-and-wrench_1f6e0-fe0f.png" 
              alt="Tool" 
              className="w-14 h-14 object-contain"
            />
          </div>
          <h1 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif' }}>{t.title}</h1>
          <p className="text-gray-600" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>{t.description}</p>
          
          <Link 
            to="/portfolio" 
            className="ios-button w-full inline-block animate-fade-in font-medium"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}
          >
            {t.portfolio}
          </Link>
        </div>
        
        {/* Map Location Section */}
        <div className={`glass-card p-4 mt-6 max-w-md w-full transition-all duration-500 ${animationClasses}`}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <img 
              src="https://em-content.zobj.net/source/apple/419/round-pushpin_1f4cd.png" 
              alt="Location" 
              className="w-5 h-5 object-contain"
            />
            <h2 className="text-lg font-medium text-gray-800" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>{t.location}</h2>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1521.8676765352865!2d64.42675917320396!3d39.764777799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50076141cf25f9%3A0xc6120f90e030ea68!2siHelp%20Service!5e0!3m2!1sen!2sus!4v1683894531117!5m2!1sen!2sus" 
              width="100%" 
              height="250" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="iHelp Service Location"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </main>
      
      <footer className="py-8 px-4">
        <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-3 gap-2">
          <ContactButton 
            icon={MessageCircle} 
            label="Telegram" 
            href="https://t.me/iHelp_Service_Bukhara" 
            color="bg-gradient-to-r from-white to-gray-50" 
          />
          <ContactButton 
            icon={Instagram} 
            label="Instagram" 
            href="https://www.instagram.com/ihelp_service_buxara/a" 
            color="bg-gradient-to-r from-white to-gray-50" 
          />
          <ContactButton 
            icon={Phone} 
            label="+998 93 491 4051" 
            href="tel:+998901234567" 
            color="bg-gradient-to-r from-white to-gray-50" 
          />
        </div>
      </footer>
    </div>
  );
};

export default Index;
