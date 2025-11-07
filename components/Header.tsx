import React, { useState, useEffect } from 'react';
import { DonateIcon, MenuIcon, CloseIcon } from './icons';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-white hover:text-warm-gold transition-colors duration-300 py-2">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-emerald-green/95 backdrop-blur-md shadow-xl py-3' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="border-2 border-white rounded-full p-1 shadow-lg">
            <img src="logo2.png" alt="أكاديمية مصطفى كامل" className="h-10 w-10 md:h-12 md:w-12 object-contain" loading="eager" />
          </div>
          <span className={`text-white text-sm md:text-lg lg:text-xl font-bold font-serif-elegant whitespace-nowrap transition-all duration-300 ${
            isScrolled ? 'block' : 'hidden md:block'
          }`}>أكاديمية مصطفى كامل</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-semibold">
          <NavLink href="#home">الرئيسية</NavLink>
          <NavLink href="#sheikh-about">من أنا</NavLink>
          <NavLink href="#videos">لقاءات تلفزيونية</NavLink>
          <NavLink href="#packages">الباقات</NavLink>
        </nav>

        <div className="hidden lg:block">
          <a href="#packages" className="flex items-center gap-2 bg-gradient-to-r from-soft-gold to-warm-gold text-emerald-green font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>احجز الآن</span>
          </a>
        </div>
        
        <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
              aria-label="القائمة"
            >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-emerald-green to-emerald-green/95 backdrop-blur-lg shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header القائمة */}
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <div className="flex items-center gap-2">
              <div className="border-2 border-warm-gold rounded-full p-1">
                <img src="logo2.png" alt="أكاديمية مصطفى كامل" className="h-10 w-10 object-contain" loading="eager" />
              </div>
              <span className="text-white text-sm font-bold whitespace-nowrap">أكاديمية مصطفى كامل</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              <CloseIcon />
            </button>
          </div>

          {/* القائمة */}
          <nav className="flex-1 flex flex-col gap-2 p-6 overflow-y-auto">
            <a 
              href="#home" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:bg-white/10 hover:text-warm-gold py-3 px-4 rounded-lg transition-all duration-300 flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="font-semibold text-sm">الرئيسية</span>
            </a>
            
            <a 
              href="#sheikh-about" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:bg-white/10 hover:text-warm-gold py-3 px-4 rounded-lg transition-all duration-300 flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-semibold text-sm">من أنا</span>
            </a>
            
            <a 
              href="#videos" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:bg-white/10 hover:text-warm-gold py-3 px-4 rounded-lg transition-all duration-300 flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="font-semibold text-sm">لقاءات تلفزيونية</span>
            </a>
            
            <a 
              href="#packages" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:bg-white/10 hover:text-warm-gold py-3 px-4 rounded-lg transition-all duration-300 flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="font-semibold text-sm">الباقات</span>
            </a>

            <div className="border-t border-white/20 my-4"></div>

            <a 
              href="#packages" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-soft-gold to-warm-gold text-emerald-green font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-lg">احجز الآن</span>
            </a>
          </nav>

          {/* Footer القائمة */}
          <div className="p-6 border-t border-white/20">
            <p className="text-gray-200 text-sm text-center mb-3">تابعنا على</p>
            <div className="flex justify-center gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-warm-gold rounded-full flex items-center justify-center transition-all duration-300">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-warm-gold rounded-full flex items-center justify-center transition-all duration-300">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-warm-gold rounded-full flex items-center justify-center transition-all duration-300">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;