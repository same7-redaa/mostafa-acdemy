import React, { useState } from 'react';
import { SeedlingIcon, FlowerIcon, SparkleIcon, GraduationIcon, UsersGroupIcon, ChatIcon, PuzzleIcon, PhoneIcon, DiscountIcon, BookIcon, BrainIcon, StarIcon, CalendarIcon, ClockIcon, CurrencyIcon, TargetIcon } from './icons';
import StepBookingForm from './StepBookingForm';

interface PackageProps {
  icon: React.ReactNode | string;
  name: string;
  hours: string;
  sessions: string;
  duration: string;
  priceEGP: string;
  priceUSD: string;
  description: string;
  isPopular?: boolean;
  colorScheme?: 'emerald' | 'gold' | 'teal' | 'amber';
  onBookClick?: () => void;
}

const PackageCard: React.FC<PackageProps> = ({
  icon,
  name,
  hours,
  sessions,
  duration,
  priceEGP,
  priceUSD,
  description,
  isPopular = false,
  colorScheme = 'emerald',
  onBookClick
}) => {
  const colorClasses = {
    emerald: {
      border: 'border-emerald-600 hover:border-emerald-700',
      iconBg: 'bg-gradient-to-br from-emerald-600 to-emerald-700',
      title: 'text-emerald-600',
      iconColor: 'text-emerald-600',
      priceBg: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      priceText: 'text-emerald-700',
      button: 'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800'
    },
    gold: {
      border: 'border-warm-gold hover:border-soft-gold',
      iconBg: 'bg-gradient-to-br from-warm-gold to-soft-gold',
      title: 'text-warm-gold',
      iconColor: 'text-warm-gold',
      priceBg: 'bg-gradient-to-br from-amber-50 to-yellow-100',
      priceText: 'text-amber-700',
      button: 'bg-gradient-to-r from-warm-gold to-soft-gold hover:from-soft-gold hover:to-warm-gold'
    },
    teal: {
      border: 'border-teal-500 hover:border-teal-600',
      iconBg: 'bg-gradient-to-br from-teal-500 to-teal-600',
      title: 'text-teal-600',
      iconColor: 'text-teal-600',
      priceBg: 'bg-gradient-to-br from-teal-50 to-cyan-100',
      priceText: 'text-teal-700',
      button: 'bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700'
    },
    amber: {
      border: 'border-amber-500 hover:border-amber-600',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-500',
      title: 'text-amber-600',
      iconColor: 'text-amber-600',
      priceBg: 'bg-gradient-to-br from-amber-50 to-orange-100',
      priceText: 'text-amber-700',
      button: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600'
    }
  };

  const colors = colorClasses[colorScheme];

  return (
    <div className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${colors.border} group`}>
      <div className="text-center mb-6">
        <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.iconBg} rounded-xl mb-4 text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className={`text-xl font-bold ${colors.title} mb-1`}>{name}</h3>
        <p className="text-gray-500 text-sm">{hours}</p>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-gray-700 text-sm">
          <CalendarIcon className={`w-4 h-4 ${colors.iconColor} flex-shrink-0`} />
          <span>{sessions}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700 text-sm">
          <ClockIcon className={`w-4 h-4 ${colors.iconColor} flex-shrink-0`} />
          <span>{duration}</span>
        </div>
      </div>

      <div className={`${colors.priceBg} rounded-xl p-4 mb-6 border border-gray-200`}>
        <div className="text-center">
          <div className={`${colors.priceText} font-bold text-xl mb-1`}>{priceEGP}</div>
          <div className="text-gray-500 text-xs">{priceUSD}</div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 mb-6 min-h-[100px]">
        <p className="text-gray-600 text-sm leading-relaxed text-center">{description}</p>
      </div>

      <button 
        onClick={onBookClick}
        className={`w-full ${colors.button} text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300`}
      >
        اشترك الآن
      </button>
    </div>
  );
};

const Packages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [selectedPriceEGP, setSelectedPriceEGP] = useState<string>('');
  const [selectedPriceUSD, setSelectedPriceUSD] = useState<string>('');
  const [isGroupPackage, setIsGroupPackage] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBooking = (packageName: string, priceEGP: string, priceUSD: string, isGroup: boolean = false) => {
    setSelectedPackage(packageName);
    setSelectedPriceEGP(priceEGP);
    setSelectedPriceUSD(priceUSD);
    setIsGroupPackage(isGroup);
    setIsBookingOpen(true);
  };

  const packages: PackageProps[] = [
    {
      icon: <BookIcon className="w-12 h-12" />,
      name: 'باقة البداية',
      hours: '4 ساعات شهريًا',
      sessions: '4 حصص في الشهر',
      duration: 'ساعة واحدة لكل حصة',
      priceEGP: '1599 ج.م',
      priceUSD: '40 $',
      description: 'مناسبة للمبتدئين أو لمن يرغب في وتيرة خفيفة ومنتظمة.',
      colorScheme: 'emerald'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      name: 'باقة التقدّم',
      hours: '8 ساعات شهريًا',
      sessions: '8 حصص في الشهر',
      duration: 'ساعة واحدة لكل حصة',
      priceEGP: '3199 ج.م',
      priceUSD: '80 $',
      description: 'مثالية لمن يرغب في تحقيق تقدّم مستمر وثابت في الحفظ والمراجعة.',
      colorScheme: 'teal'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      name: 'باقة الإتقان',
      hours: '12 ساعة شهريًا',
      sessions: '12 حصة في الشهر',
      duration: 'ساعة واحدة لكل حصة',
      priceEGP: '4799 ج.م',
      priceUSD: '120 $',
      description: 'مناسبة لمن يسعى إلى إتقان الحفظ بسرعة مع متابعة دقيقة من المعلم / المعلمة.',
      colorScheme: 'gold'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      name: 'باقة التميّز',
      hours: '16 ساعة شهريًا',
      sessions: '16 حصة في الشهر',
      duration: 'ساعة واحدة لكل حصة',
      priceEGP: '6399 ج.م',
      priceUSD: '160 $',
      description: 'الأفضل للراغبين في الإنجاز السريع والتواصل المستمر مع المعلم / المعلمة.',
      colorScheme: 'amber'
    }
  ];

  return (
    <section id="packages" className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Islamic Vector Background */}
      <div 
        className="absolute inset-0 opacity-50 z-0"
        style={{ 
          backgroundImage: "url('Islamic Vector.png')",
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* تدرج أبيض في البداية */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-[1]"></div>

      {/* تدرج أبيض في النهاية */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-[1]"></div>

      <div className="absolute inset-0 opacity-5 z-[1]">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-warm-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-green to-emerald-green/90 text-white px-6 py-3 rounded-full mb-6 shadow-xl">
            <GraduationIcon className="w-6 h-6" />
            <span className="font-bold">الباقات التعليمية</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-green mb-4">
            اختر الباقة المناسبة لك
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-warm-gold to-transparent mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            اختر الباقة التي تناسب وقتك وأهدافك مع أكاديمية مصطفى كامل
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PackageCard {...pkg} onBookClick={() => handleBooking(pkg.name, pkg.priceEGP, pkg.priceUSD, false)} />
            </div>
          ))}
        </div>

        {/* باقات المجموعات */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <div className="bg-gradient-to-br from-emerald-green to-emerald-green/90 text-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="text-center mb-8">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-warm-gold/20 via-soft-gold/30 to-warm-gold/20 rounded-lg transform rotate-1"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-warm-gold/20 via-soft-gold/30 to-warm-gold/20 rounded-lg transform -rotate-1"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border-2 border-warm-gold/50 rounded-lg px-8 py-4">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-warm-gold"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-warm-gold"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-warm-gold"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-warm-gold"></div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white">
                    باقات المجموعات
                  </h3>
                </div>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-warm-gold to-transparent mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <UsersGroupIcon className="w-6 h-6 flex-shrink-0" />
                  <span className="font-bold">من 3 إلى 7 طلاب في المجموعة</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <ClockIcon className="w-6 h-6 flex-shrink-0" />
                  <span>ساعة واحدة لكل حلقة</span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CurrencyIcon className="w-6 h-6 flex-shrink-0" />
                  <span className="font-bold">600 جنيه مصري لكل 4 حصص</span>
                </div>
                <div className="flex items-center gap-3">
                  <TargetIcon className="w-6 h-6 flex-shrink-0" />
                  <span className="text-sm">نظام تفاعلي ممتع يناسب الأطفال والكبار</span>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <button 
                onClick={() => handleBooking('باقة المجموعات', '600 ج.م', '25 $', true)}
                className="bg-gradient-to-r from-warm-gold to-soft-gold text-emerald-green font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                انضم لمجموعة الآن
              </button>
            </div>
          </div>
        </div>

        {/* جلسات واستشارات نفسية */}
        <div className="mb-16 animate-fade-in-up">
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-soft-gold/20 via-warm-gold/30 to-soft-gold/20 rounded-lg transform rotate-1"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-soft-gold/20 via-warm-gold/30 to-soft-gold/20 rounded-lg transform -rotate-1"></div>
              <div className="relative bg-gradient-to-r from-soft-gold to-warm-gold text-white px-8 py-4 rounded-lg shadow-xl">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/50"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/50"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/50"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/50"></div>
                <div className="flex items-center gap-3">
                  <BrainIcon className="w-7 h-7" />
                  <span className="font-bold text-xl">جلسات واستشارات نفسية</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* البطاقة الأولى: جلسة كوتشينج */}
            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-emerald-green/20 flex flex-col min-h-[480px]">
              {/* زوايا مزخرفة */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-soft-gold rounded-tl-lg"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-soft-gold rounded-tr-lg"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-soft-gold rounded-bl-lg"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-soft-gold rounded-br-lg"></div>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-soft-gold/10 to-warm-gold/20 rounded-2xl mb-4 text-soft-gold mx-auto border-2 border-soft-gold/30">
                  <ChatIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-emerald-green mb-2">جلسة كوتشينج فردية</h3>
              </div>
              <div className="bg-gradient-to-r from-soft-gold/5 to-warm-gold/10 rounded-xl p-4 mb-4 border border-soft-gold/20">
                <div className="text-emerald-green font-bold text-lg mb-1 text-center">1800 جنيه / 75 دولار</div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 mb-6 flex-grow">
                <StarIcon className="w-5 h-5 text-soft-gold mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">لتطوير الذات وتحسين التوازن النفسي والتربوي.</p>
              </div>
              <button
                onClick={() => handleBooking('جلسة كوتشينج فردية', '1800 جنيه', '75 دولار', false)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center mt-auto"
              >
                احجز جلسة كوتشينج
              </button>
            </div>

            {/* البطاقة الثانية: جلسة CBT */}
            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-emerald-green/20 flex flex-col min-h-[480px]">
              {/* زوايا مزخرفة */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-soft-gold rounded-tl-lg"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-soft-gold rounded-tr-lg"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-soft-gold rounded-bl-lg"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-soft-gold rounded-br-lg"></div>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-soft-gold/10 to-warm-gold/20 rounded-2xl mb-4 text-soft-gold mx-auto border-2 border-soft-gold/30">
                  <PuzzleIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-emerald-green mb-2">جلسة علاج سلوكي معرفي (CBT)</h3>
              </div>
              <div className="bg-gradient-to-r from-soft-gold/5 to-warm-gold/10 rounded-xl p-4 mb-4 border border-soft-gold/20">
                <div className="text-emerald-green font-bold text-lg mb-1 text-center">1000 جنيه / 30 دولار</div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 mb-6 flex-grow">
                <StarIcon className="w-5 h-5 text-soft-gold mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">لمعالجة المشكلات السلوكية والفكرية بطريقة علمية وعملية.</p>
              </div>
              <button
                onClick={() => handleBooking('جلسة علاج سلوكي معرفي (CBT)', '1000 جنيه', '30 دولار', false)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center mt-auto"
              >
                احجز جلسة CBT
              </button>
            </div>

            {/* البطاقة الثالثة: استشارة واتساب */}
            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-emerald-green/20 flex flex-col min-h-[480px]">
              {/* زوايا مزخرفة */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-soft-gold rounded-tl-lg"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-soft-gold rounded-tr-lg"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-soft-gold rounded-bl-lg"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-soft-gold rounded-br-lg"></div>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-soft-gold/10 to-warm-gold/20 rounded-2xl mb-4 text-soft-gold mx-auto border-2 border-soft-gold/30">
                  <PhoneIcon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-emerald-green mb-2">استشارة عبر واتساب</h3>
                <p className="text-gray-600 text-sm">(30 دقيقة)</p>
              </div>
              <div className="bg-gradient-to-r from-soft-gold/5 to-warm-gold/10 rounded-xl p-4 mb-4 border border-soft-gold/20">
                <div className="text-emerald-green font-bold text-lg mb-1 text-center">900 جنيه / 25 دولار</div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 mb-6 flex-grow">
                <StarIcon className="w-5 h-5 text-soft-gold mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">دعم سريع وردود متخصصة على استفساراتك النفسية والتربوية.</p>
              </div>
              <button
                onClick={() => handleBooking('استشارة عبر واتساب', '900 جنيه', '25 دولار', false)}
                className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center mt-auto"
              >
                احجز استشارة
              </button>
            </div>
          </div>
        </div>

        {/* قسم تعليم اللغة العربية */}
        <div className="mt-24 mb-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl mb-6 shadow-2xl">
              <BookIcon className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-emerald-green mb-4">تعليم اللغة العربية</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            دورات احترافية لتعليم اللغة العربية للناطقين بغيرها مع معلمين متخصصين
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white via-amber-50/30 to-white rounded-3xl shadow-2xl border-2 border-amber-200 overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* المحتوى - 3 أعمدة */}
              <div className="lg:col-span-3 p-8 md:p-12">
                <h3 className="text-3xl font-bold text-emerald-green mb-8 flex items-center gap-3">
                  <SparkleIcon className="w-8 h-8 text-amber-500" />
                  برامج شاملة لتعلم العربية
                </h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4 bg-white/80 backdrop-blur rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                      <StarIcon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-emerald-green text-lg mb-2">للناطقين بغيرها</h4>
                      <p className="text-gray-600">منهج متدرج من المستوى المبتدئ إلى المتقدم مع اختبارات تحديد المستوى</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/80 backdrop-blur rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                      <GraduationIcon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-emerald-green text-lg mb-2">النحو والصرف</h4>
                      <p className="text-gray-600">قواعد اللغة العربية بطريقة مبسطة وعملية مع أمثلة تطبيقية</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/80 backdrop-blur rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                      <ChatIcon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-emerald-green text-lg mb-2">المحادثة والنطق</h4>
                      <p className="text-gray-600">تحسين مهارات الحوار والنطق الصحيح مع متحدثين أصليين</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/80 backdrop-blur rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                      <PuzzleIcon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-emerald-green text-lg mb-2">دروس تفاعلية</h4>
                      <p className="text-gray-600">أسلوب تعليمي حديث مع تمارين عملية ومتابعة مستمرة</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* بطاقة الحجز - 2 أعمدة */}
              <div className="lg:col-span-2 bg-gradient-to-br from-amber-500 to-amber-600 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
                {/* نمط زخرفي */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white rounded-full"></div>
                  <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white rounded-full"></div>
                </div>

                <div className="relative z-10 flex flex-col justify-center h-full">
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-28 h-28 bg-white/20 backdrop-blur rounded-3xl mb-8 border-2 border-white/30">
                      <BookIcon className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4">ابدأ رحلتك الآن</h3>
                    <p className="text-amber-50 text-xl">اختر البرنامج المناسب لك</p>
                  </div>

                  <button
                    onClick={() => {
                      console.log('تم النقر على زر تعليم اللغة العربية');
                      handleBooking('تعليم اللغة العربية', '', '', false);
                    }}
                    className="w-full bg-white hover:bg-gray-50 text-amber-600 font-bold py-6 px-8 rounded-2xl shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 text-2xl border-2 border-white/50"
                  >
                    <CalendarIcon className="w-8 h-8" />
                    احجز الآن
                  </button>

                  <p className="text-center text-white text-base mt-6 font-medium">
                    سنتواصل معك لتحديد البرنامج المناسب
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* إغلاق container الرئيسي */}
      </div>

      {/* Booking Form */}
      <StepBookingForm
        packageName={selectedPackage}
        priceEGP={selectedPriceEGP}
        priceUSD={selectedPriceUSD}
        isGroupPackage={isGroupPackage}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
};

export default Packages;
