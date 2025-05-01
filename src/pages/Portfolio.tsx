
import React, { useState, useEffect } from 'react';
import { Briefcase, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const translations = {
  ru: {
    services: 'Наши услуги',
    backToHome: 'Вернуться на главную',
    items: [
      {
        title: 'Ремонт iPhone',
        description: 'Профессиональный ремонт всех моделей iPhone с гарантией качества',
        emoji: '📱'
      },
      {
        title: 'Обслуживание Mac',
        description: 'Диагностика и устранение проблем с MacBook, iMac и Mac mini',
        emoji: '💻'
      },
      {
        title: 'Ремонт iPad и Apple Watch',
        description: 'Быстрый и качественный ремонт планшетов и умных часов Apple',
        emoji: '⌚'
      },
      {
        title: 'Замена комплектующих',
        description: 'Оригинальные запчасти и аксессуары для вашей техники Apple',
        emoji: '🔧'
      }
    ]
  },
  uz: {
    services: 'Bizning xizmatlar',
    backToHome: 'Asosiy sahifaga qaytish',
    items: [
      {
        title: 'iPhone ta\'mirlash',
        description: 'Barcha iPhone modellarini professional ta\'mirlash sifat kafolati bilan',
        emoji: '📱'
      },
      {
        title: 'Mac xizmati',
        description: 'MacBook, iMac va Mac minidagi muammolarni tashxislash va hal qilish',
        emoji: '💻'
      },
      {
        title: 'iPad va Apple Watch ta\'mirlash',
        description: 'Apple planshetlari va aqlli soatlarini tez va sifatli ta\'mirlash',
        emoji: '⌚'
      },
      {
        title: 'Qismlarni almashtirish',
        description: 'Apple texnikangiz uchun asl qismlar va aksessuarlar',
        emoji: '🔧'
      }
    ]
  }
};

const PortfolioItem = ({ title, description, emoji }: { title: string; description: string; emoji: string }) => {
  return (
    <div className="glass-card p-6 space-y-3 hover:scale-[1.02] transition-transform duration-300">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-xl">{title}</h3>
        <div className="emoji text-2xl">{emoji}</div>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Portfolio = () => {
  const [language, setLanguage] = useState<'ru' | 'uz'>('ru');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const t = translations[language];
  const animationClass = mounted ? 'opacity-100' : 'opacity-0';
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex flex-col">
      <Header />
      
      <main className={`flex-1 py-8 px-6 max-w-2xl mx-auto w-full transition-opacity duration-500 ${animationClass}`}>
        <div className="flex items-center mb-8 space-x-3 animate-fade-in">
          <div className="p-2 bg-black rounded-xl">
            <Briefcase size={24} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold">{t.services}</h1>
        </div>
        
        <div className="space-y-6 mb-10">
          {t.items.map((item, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <PortfolioItem 
                title={item.title} 
                description={item.description} 
                emoji={item.emoji} 
              />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Link to="/" className="ios-button animate-fade-in">
            <ArrowLeft size={18} />
            {t.backToHome}
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
