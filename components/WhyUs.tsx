import React from 'react';
import { BookIcon, BrainIcon, UserIcon, AcademicCapIcon, StarIcon } from './icons';

const FeatureItem: React.FC<{ children: React.ReactNode; icon: React.ReactNode }> = ({ children, icon }) => (
  <div className="flex items-start gap-3 p-3 hover:bg-emerald-green/5 rounded-lg transition-all duration-300 group">
    <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-green to-emerald-green/80 rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
      {icon}
    </span>
    <span className="text-gray-700 leading-relaxed flex-1 pt-2">{children}</span>
  </div>
);

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-emerald-green mb-4">
            لماذا أكاديمية مصطفى كامل؟
          </h2>
          <div className="max-w-4xl mx-auto space-y-3">
            <p className="text-xl text-gray-800 leading-relaxed font-semibold">
              لأننا لا نعلّم القرآن فحسب، بل نغرس القيم والأخلاق ونبني الإنسان المتوازن علميًا ونفسيًا وتربويًا.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              أكاديمية مصطفى كامل تجمع بين العلم الأصيل من منبع الأزهر الشريف والأساليب الحديثة في التعليم والتربية لتقديم تجربة فريدة لكل متعلم.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* ما يميزنا */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-emerald-green">
              <h3 className="font-bold text-emerald-green text-2xl mb-6 flex items-center gap-3">
                <StarIcon className="w-8 h-8 text-warm-gold" />
                ما يميزنا
              </h3>

              <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
                <FeatureItem icon={<BookIcon className="w-5 h-5" />}>
                  تعليم قرآني تفاعلي عبر الإنترنت بأسلوب مبسط يناسب جميع الأعمار
                </FeatureItem>
                
                <FeatureItem icon={<BrainIcon className="w-5 h-5" />}>
                  اختبارات تحليل شخصية للطالب وولي الأمر لفهم طريقة التفكير والتعامل الأمثل
                </FeatureItem>
                
                <FeatureItem icon={<UserIcon className="w-5 h-5" />}>
                  استشارة شهرية مجانية لولي الأمر لمتابعة تطور الطالب وحل أي تحديات تربوية
                </FeatureItem>
                
                <FeatureItem icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>}>
                  جداول تنظيم الوقت اليومية والأسبوعية لتدريب الطالب على مهارة إدارة الوقت
                </FeatureItem>
                
                <FeatureItem icon={<AcademicCapIcon className="w-5 h-5" />}>
                  معلمون مؤهلون من خريجي الأزهر الشريف بخبرة تربوية ونفسية
                </FeatureItem>
                
                <FeatureItem icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>}>
                  جلسات دعم نفسي وتربوي لمساعدة الأسر على بناء بيئة إيجابية داخل البيت
                </FeatureItem>
                
                <FeatureItem icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>}>
                  أسلوب تعليمي بالقيم: القرآن، الأخلاق، والآداب أساس كل درس
                </FeatureItem>
                
                <FeatureItem icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>}>
                  مرونة في المواعيد تناسب جميع الدول والمناطق الزمنية
                </FeatureItem>
                
                <FeatureItem icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>}>
                  خصومات حصرية تصل إلى 75٪، وحصص مجانية في فترات محددة
                </FeatureItem>
              </div>
            </div>
          </div>

          {/* رؤيتنا */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-emerald-green via-emerald-green to-emerald-green/90 p-8 rounded-2xl shadow-xl text-white h-full flex flex-col justify-center sticky top-8">
              <div className="text-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4 text-warm-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <h3 className="font-bold text-2xl mb-2 text-warm-gold">رؤيتنا</h3>
                <div className="w-16 h-1 bg-warm-gold mx-auto rounded-full"></div>
              </div>
              <p className="text-lg text-center leading-relaxed">
                أن تكون أكاديمية مصطفى كامل منارة تعليمية وتربوية تخرج جيلاً يحفظ القرآن ويعيش به خلقًا وسلوكًا.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
