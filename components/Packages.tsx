import React from 'react';
import { SeedlingIcon, FlowerIcon, SparkleIcon, GraduationIcon, UsersGroupIcon, ChatIcon, PuzzleIcon, PhoneIcon, DiscountIcon, BookIcon, BrainIcon, StarIcon, CalendarIcon, ClockIcon, CurrencyIcon, TargetIcon } from './icons';

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
  isPopular = false
}) => {
  return (
    <div className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
      isPopular ? 'border-warm-gold' : 'border-gray-100'
    } ${typeof icon === 'string' ? 'pt-4' : ''}`}>
      {/* زوايا مزخرفة */}
      <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-emerald-green rounded-tl-lg"></div>
      <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-emerald-green rounded-tr-lg"></div>
      <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-emerald-green rounded-bl-lg"></div>
      <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-emerald-green rounded-br-lg"></div>
      
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-warm-gold to-soft-gold text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
          <StarIcon className="w-4 h-4" />
          <span>الأكثر شعبية</span>
        </div>
      )}
      
      <div className="text-center mb-6">
        {typeof icon === 'string' ? (
          <div className="w-48 h-48 mx-auto -mt-16">
            <img src={icon} alt={name} className="w-full h-full object-contain" />
          </div>
        ) : (
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-green/10 to-warm-gold/10 rounded-2xl mb-4 text-emerald-green">
            {icon}
          </div>
        )}
        {typeof icon !== 'string' && (
          <>
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-green mb-2">{name}</h3>
            <p className="text-gray-600 text-sm">{hours}</p>
          </>
        )}
      </div>

      <div className={`space-y-4 mb-6 ${typeof icon === 'string' ? '-mt-12 text-center' : ''}`}>
        <div className={`flex items-center gap-3 text-gray-700 ${typeof icon === 'string' ? 'justify-center' : ''}`}>
          <CalendarIcon className="w-5 h-5 text-emerald-green flex-shrink-0" />
          <span>{sessions}</span>
        </div>
        <div className={`flex items-center gap-3 text-gray-700 ${typeof icon === 'string' ? 'justify-center' : ''}`}>
          <ClockIcon className="w-5 h-5 text-emerald-green flex-shrink-0" />
          <span>{duration}</span>
        </div>
        <div className="bg-emerald-green/5 rounded-xl p-4 mt-4">
          <div className={`flex items-center gap-3 text-emerald-green font-bold text-lg mb-2 ${typeof icon === 'string' ? 'justify-center' : ''}`}>
            <CurrencyIcon className="w-6 h-6 flex-shrink-0" />
            <span>{priceEGP}</span>
          </div>
          <div className={`text-gray-600 text-sm ${typeof icon === 'string' ? 'text-center' : 'mr-9'}`}>{priceUSD}</div>
        </div>
      </div>

      <div className={`bg-gray-50 rounded-xl p-4 mb-6 ${typeof icon === 'string' ? 'text-center' : ''}`}>
        <div className={`flex items-start gap-3 ${typeof icon === 'string' ? 'justify-center' : ''}`}>
          <TargetIcon className="w-5 h-5 text-emerald-green mt-1 flex-shrink-0" />
          <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-emerald-green to-emerald-green/90 text-white font-bold py-4 px-6 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
        اشترك الآن
      </button>
    </div>
  );
};

const Packages: React.FC = () => {
  const packages: PackageProps[] = [
    {
      icon: 'باقة البداية.png',
      name: 'باقة البداية',
      hours: '4 ساعات شهريًا',
      sessions: '4 حصص في الشهر',
      duration: 'ساعة واحدة لكل حصة',
      priceEGP: '1599 جنيه مصري',
      priceUSD: '40 دولار أمريكي',
      description: 'مناسبة للمبتدئين أو لمن يرغب في وتيرة خفيفة ومنتظمة.'
    },
    {
      icon: 'باقة التقدم.png',
      name: 'باقة التقدّم',
      hours: '8 ساعات شهريًا',
      sessions: '8 حصص في الشهر',
      duration: 'ساعة واحدة لكل حصة',
      priceEGP: '3199 جنيه مصري',
      priceUSD: '80 دولار أمريكي',
      description: 'مثالية لمن يرغب في تحقيق تقدّم مستمر وثابت في الحفظ والمراجعة.'
    },
    {
      icon: 'باقة الإتقان.png',
      name: 'باقة الإتقان',
      hours: '12 ساعة شهريًا',
      sessions: '12 حصة في الشهر',
      duration: 'ساعة واحدة لكل حصة',
      priceEGP: '4799 جنيه مصري',
      priceUSD: '120 دولار أمريكي',
      description: 'مناسبة لمن يسعى إلى إتقان الحفظ بسرعة مع متابعة دقيقة من المعلمة.'
    },
    {
      icon: 'باقة التميز.png',
      name: 'باقة التميّز',
      hours: '16 ساعة شهريًا',
      sessions: '16 حصة في الشهر',
      duration: 'ساعة واحدة لكل حصة',
      priceEGP: '6399 جنيه مصري',
      priceUSD: '160 دولار أمريكي',
      description: 'الأفضل للراغبين في الإنجاز السريع والتواصل المستمر مع المعلمة.'
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
              <PackageCard {...pkg} />
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
                  <span className="font-bold">من 3 إلى 5 طلاب في المجموعة</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <ClockIcon className="w-6 h-6 flex-shrink-0" />
                  <span>ساعة واحدة لكل حصة</span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CurrencyIcon className="w-6 h-6 flex-shrink-0" />
                  <span className="font-bold">سعر الطالب يبدأ من: 150 جنيه مصري</span>
                </div>
                <div className="flex items-center gap-3">
                  <TargetIcon className="w-6 h-6 flex-shrink-0" />
                  <span className="text-sm">نظام تفاعلي ممتع يناسب الأطفال والكبار</span>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <button className="bg-gradient-to-r from-warm-gold to-soft-gold text-emerald-green font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
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
            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-emerald-green/20">
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
              <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <StarIcon className="w-5 h-5 text-soft-gold mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">لتطوير الذات وتحسين التوازن النفسي والتربوي.</p>
              </div>
            </div>

            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-emerald-green/20">
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
                <div className="text-emerald-green font-bold text-lg mb-1 text-center">1000 جنيه</div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <StarIcon className="w-5 h-5 text-soft-gold mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">لمعالجة المشكلات السلوكية والفكرية بطريقة علمية وعملية.</p>
              </div>
            </div>

            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-emerald-green/20">
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
              <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <StarIcon className="w-5 h-5 text-soft-gold mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">دعم سريع وردود متخصصة على استفساراتك النفسية والتربوية.</p>
              </div>
            </div>
          </div>
        </div>

        {/* خصومات حصرية */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-warm-gold via-soft-gold to-warm-gold text-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-2xl mb-6 mx-auto">
              <DiscountIcon className="w-16 h-16" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">خصومات حصرية!</h3>
            <p className="text-lg md:text-xl mb-6">
              خصومات تصل إلى <span className="font-bold text-3xl">50٪ - 75٪</span> على بعض الخدمات لفترات محدودة
            </p>
            <button className="bg-white text-warm-gold font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              اعرف المزيد عن العروض
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
