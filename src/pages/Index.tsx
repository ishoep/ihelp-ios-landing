
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Telegram } from 'lucide-react';
import Header from '../components/Header';
import ContactButton from '../components/ContactButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-ios-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-8 text-center">
        <div className="ios-card p-8 max-w-md w-full space-y-6 animate-fade-in">
          <div className="emoji mb-6">🛠️</div>
          <h1 className="text-3xl font-bold text-ios-text">iHelp</h1>
          <p className="text-ios-secondary text-lg">Сервис Apple техники в Бухаре</p>
          
          <Link to="/portfolio" className="ios-button w-full inline-block">
            Портфолио
          </Link>
        </div>
      </main>
      
      <footer className="py-10 px-6">
        <div className="max-w-md mx-auto flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
          <ContactButton 
            icon={Telegram} 
            label="Telegram" 
            href="https://t.me/ihelp_bukhara" 
          />
          <ContactButton 
            icon={Instagram} 
            label="Instagram" 
            href="https://instagram.com/ihelp_bukhara" 
            color="bg-gradient-to-r from-purple-500 to-pink-500" 
          />
          <ContactButton 
            icon={Phone} 
            label="+998 90 123 4567" 
            href="tel:+998901234567" 
            color="bg-green-600" 
          />
        </div>
      </footer>
    </div>
  );
};

export default Index;
