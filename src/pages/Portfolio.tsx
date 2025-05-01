
import React from 'react';
import { Briefcase, Folder, Apple } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const PortfolioItem = ({ title, description, emoji }: { title: string; description: string; emoji: string }) => {
  return (
    <div className="ios-card p-6 space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-xl">{title}</h3>
        <div className="emoji text-2xl">{emoji}</div>
      </div>
      <p className="text-ios-secondary">{description}</p>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-ios-background flex flex-col">
      <Header />
      
      <main className="flex-1 py-8 px-6 max-w-2xl mx-auto w-full">
        <div className="flex items-center mb-8 space-x-3">
          <div className="p-2 bg-ios-blue rounded-xl">
            <Briefcase size={24} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold">Наши услуги</h1>
        </div>
        
        <div className="space-y-6 mb-10">
          <PortfolioItem 
            title="Ремонт iPhone" 
            description="Профессиональный ремонт всех моделей iPhone с гарантией качества" 
            emoji="📱" 
          />
          
          <PortfolioItem 
            title="Обслуживание Mac" 
            description="Диагностика и устранение проблем с MacBook, iMac и Mac mini" 
            emoji="💻" 
          />
          
          <PortfolioItem 
            title="Ремонт iPad и Apple Watch" 
            description="Быстрый и качественный ремонт планшетов и умных часов Apple" 
            emoji="⌚" 
          />
          
          <PortfolioItem 
            title="Замена комплектующих" 
            description="Оригинальные запчасти и аксессуары для вашей техники Apple" 
            emoji="🔧" 
          />
        </div>
        
        <div className="flex justify-center">
          <Link to="/" className="ios-button">
            Вернуться на главную
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
