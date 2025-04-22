"use client";
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations('language');
  const router = useRouter();
  
  // Available locales
  const locales = ['en', 'ar'];
  
  const switchLocale = (newLocale) => {
    // Set cookie for the new locale
    Cookies.set('NEXT_LOCALE', newLocale, { path: '/' });
    
    // Reload the page to apply the new locale
    router.refresh();
    
    setIsOpen(false);
  };
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium px-3 py-2 rounded-md transition-colors flex items-center"
        aria-expanded={isOpen}
      >
        {locale === 'en' ? 'EN' : 'AR'}
        <svg 
          className="w-4 h-4 ml-1"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-30">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`block px-4 py-2 text-sm text-gray-100 hover:bg-gray-700 w-full text-left ${locale === loc ? 'bg-gray-700' : ''}`}
                role="menuitem"
              >
                {t(loc)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}