
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
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-8 text-center">
        <div className={`glass-card p-8 max-w-md w-full space-y-6 transition-all duration-500 ${animationClasses}`}>
          <div className="mb-6 flex justify-center" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue' }}>
            <img 
              src="https://em-content.zobj.net/source/apple/419/hammer-and-wrench_1f6e0-fe0f.png" 
              alt="Tool" 
              className="w-16 h-16 object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold text-black">{t.title}</h1>
          <p className="text-gray-700 text-lg">{t.description}</p>
          
          <Link 
            to="/portfolio" 
            className="ios-button w-full inline-block animate-fade-in"
          >
            {t.portfolio}
          </Link>
        </div>
        
        {/* Map Location Section */}
        <div className={`glass-card p-6 mt-8 max-w-md w-full transition-all duration-500 ${animationClasses}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="text-ios-blue" />
            <h2 className="text-xl font-semibold text-gray-800">{t.location}</h2>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1521.8676765352865!2d64.42675917320396!3d39.764777799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50076141cf25f9%3A0xc6120f90e030ea68!2siHelp%20Service!5e0!3m2!1sen!2sus!4v1683894531117!5m2!1sen!2sus" 
              width="100%" 
              height="300" 
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
      
      <footer className="py-10 px-6">
        <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
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
