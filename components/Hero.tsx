import React from 'react';
import { ArrowLeftIcon } from './icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-emerald-green text-white overflow-hidden">
      {/* Background image layer */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-30 z-0"
        style={{ backgroundImage: "url('/back.png')" }}
      ></div>

      {/* Content layer, positioned above the background */}
      <div className="relative z-10 container mx-auto px-4 pt-12 pb-48 md:pt-16 md:pb-56 lg:pt-24 lg:pb-64">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* صورة بسم الله - تظهر في الأعلى على الهواتف */}
          <div className="lg:hidden text-center order-1">
            <img src="/بسم الله.png" alt="بسم الله الرحمن الرحيم" className="w-48 md:w-56 mx-auto" />
          </div>

          {/* اللوجو */}
          <div className="relative flex justify-center items-center w-full max-w-md mx-auto lg:max-w-xl xl:max-w-2xl h-80 lg:h-[40rem] xl:h-[45rem] animate-fade-in-right order-2 lg:order-2 mb-8 lg:mb-0 -mt-24">
            <img
              src="/logo.gif"
              alt="شعار أكاديمية مصطفى كامل"
              className="w-full h-full object-contain drop-shadow-xl"
            />
          </div>

          {/* النص */}
          <div className="text-center lg:text-right animate-fade-in-up order-3 lg:order-1 -mt-24 lg:mt-0">
            {/* صورة بسم الله - تظهر على الشاشات الكبيرة فقط */}
            <img src="/بسم الله.png" alt="بسم الله الرحمن الرحيم" className="hidden lg:block w-48 md:w-56 mx-auto lg:mx-0 mb-4" />
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="whitespace-nowrap">أكاديمية مصطفى كامل</span>
            </h1>
            <div className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0 mb-8 space-y-4">
              <p className="leading-relaxed">
                تعلم القرآن الكريم وارتقِ بنفسك علمًا وأخلاقًا
              </p>
              <p className="leading-relaxed">
                ابدأ رحلتك في تعليم القرآن الكريم بأسلوب تفاعلي
                <br />
                يجمع بين المنهج الأزهري والوعي النفسي الحديث
              </p>
            </div>
            <a href="#sheikh-about" className="inline-flex items-center gap-3 bg-gradient-to-r from-soft-gold to-warm-gold text-emerald-green font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
              <span>احصل على حصة مجانية الآن</span>
              <ArrowLeftIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[100px] md:h-[150px] lg:h-[200px]" style={{ transform: 'translateY(1px)' }}>
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L60,149.3C120,171,240,213,360,229.3C480,245,600,235,720,202.7C840,171,960,117,1080,101.3C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;