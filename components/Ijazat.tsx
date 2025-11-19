import React, { useState } from 'react';
import { BookIcon, CertificateIcon, StarIcon, SparkleIcon, ClockIcon, TargetIcon, DiscountIcon } from './icons';
import StepBookingForm from './StepBookingForm';

const Ijazat: React.FC = () => {
  const [isIjazahOpen, setIsIjazahOpen] = useState(false);
  
  return (
    <section id="ijazat" className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Islamic Vector Background */}
      <div 
        className="absolute inset-0 opacity-30 z-0"
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
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent z-[1]"></div>

      <div className="absolute inset-0 opacity-5 z-[1]">
        <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-warm-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-green to-emerald-green/90 text-white px-6 py-3 rounded-full mb-6 shadow-xl">
            <CertificateIcon className="w-6 h-6" />
            <span className="font-bold">الإجازات القرآنية</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-green mb-4">
            احصل على إجازة بسند متصل
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-warm-gold to-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            سند عالٍ متصل إلى رسول الله ﷺ عن جبريل عليه السلام عن رب العزة جل جلاله
          </p>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="max-w-6xl mx-auto">
          {/* بطاقة الإجازة الرئيسية */}
          <div className="mb-12 animate-on-scroll">
            <div className="relative bg-gradient-to-br from-emerald-green to-emerald-green/90 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
              {/* زخرفة خلفية */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-warm-gold/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 mx-auto border-2 border-warm-gold/50">
                    <BookIcon className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    إجازة القرآن الكريم بالسند المتصل
                  </h3>
                  <div className="w-32 h-1 bg-gradient-to-r from-transparent via-warm-gold to-transparent mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* مميزات الإجازة */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-warm-gold rounded-xl flex items-center justify-center">
                        <StarIcon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-xl mb-2">سند عالٍ ومتصل</h4>
                        <p className="text-gray-100 leading-relaxed">
                          سند متصل إلى رسول الله ﷺ عن جبريل عليه السلام عن الله عز وجل
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-warm-gold rounded-xl flex items-center justify-center">
                        <CertificateIcon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-xl mb-2">إجازة معتمدة</h4>
                        <p className="text-gray-100 leading-relaxed">
                          إجازة موثقة ومعتمدة بالسند الشرعي الصحيح
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-warm-gold rounded-xl flex items-center justify-center">
                        <BookIcon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-xl mb-2">الرواية</h4>
                        <p className="text-gray-100 leading-relaxed">
                          إجازة في القرآن الكريم برواية عاصم (حفص وشعبة)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-warm-gold rounded-xl flex items-center justify-center">
                        <SparkleIcon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-xl mb-2">شرف الإجازة</h4>
                        <p className="text-gray-100 leading-relaxed">
                          تشريف بالانضمام إلى سلسلة حملة القرآن الكريم
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* شروط ومتطلبات الإجازة */}
          <div className="grid md:grid-cols-2 gap-8 animate-on-scroll">
            {/* الشروط */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-emerald-green hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-green to-emerald-green/80 rounded-xl flex items-center justify-center">
                  <TargetIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-emerald-green text-2xl">شروط الإجازة</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-green to-emerald-green/80 rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <StarIcon className="w-4 h-4" />
                  </span>
                  <span className="text-gray-700 leading-relaxed flex-1 pt-1">
                    حفظ القرآن الكريم كاملاً بإتقان
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-green to-emerald-green/80 rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <StarIcon className="w-4 h-4" />
                  </span>
                  <span className="text-gray-700 leading-relaxed flex-1 pt-1">
                    إتقان أحكام التجويد بشكل عملي
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-green to-emerald-green/80 rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <StarIcon className="w-4 h-4" />
                  </span>
                  <span className="text-gray-700 leading-relaxed flex-1 pt-1">
                    القراءة الصحيحة برواية عاصم (حفص وشعبة)
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-green to-emerald-green/80 rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <StarIcon className="w-4 h-4" />
                  </span>
                  <span className="text-gray-700 leading-relaxed flex-1 pt-1">
                    اجتياز الاختبار النهائي بنجاح
                  </span>
                </li>
              </ul>
            </div>

            {/* المدة والتكلفة */}
            <div className="bg-gradient-to-br from-warm-gold/10 to-soft-gold/10 rounded-2xl shadow-xl p-8 border-t-4 border-warm-gold hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-warm-gold to-soft-gold rounded-xl flex items-center justify-center">
                  <ClockIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-emerald-green text-2xl">مدة الإجازة</h3>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    تختلف مدة الحصول على الإجازة حسب مستوى الحفظ والإتقان، وعادةً ما تتراوح من <span className="font-bold text-emerald-green">شهرين إلى سنة</span> للمتقنين.
                  </p>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <p className="text-sm text-gray-600">للاستفسار عن التكلفة والتفاصيل، يرجى التقديم عبر الزر أدناه</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ملاحظة مهمة */}
          <div className="mt-12 animate-on-scroll">
            <div className="bg-gradient-to-r from-soft-gold/20 via-warm-gold/20 to-soft-gold/20 rounded-2xl p-8 border-r-4 border-warm-gold">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-warm-gold rounded-xl flex items-center justify-center">
                  <SparkleIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-emerald-green text-xl mb-3">ملاحظة مهمة</h4>
                  <p className="text-gray-700 leading-relaxed">
                    الإجازة القرآنية هي شرف عظيم وأمانة كبيرة، تُمنح لمن أتم حفظ القرآن الكريم وأتقن تلاوته وفق الضوابط الشرعية. 
                    نحن في الأكاديمية نحرص على منح الإجازة بعد التأكد من استيفاء جميع الشروط والضوابط اللازمة، 
                    ليكون الطالب جديراً بحمل هذه الأمانة العظيمة ونقلها للأجيال القادمة بإذن الله.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* زر التقدم للحصول على الإجازة */}
          <div className="mt-12 text-center animate-on-scroll">
            <button
              onClick={() => setIsIjazahOpen(true)}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <CertificateIcon className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span className="font-bold text-lg">التقدم للحصول على الإجازة</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* خصومات حصرية */}
        <div className="text-center animate-fade-in-up mt-16">
          <div className="bg-gradient-to-r from-warm-gold via-soft-gold to-warm-gold text-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-2xl mb-6 mx-auto">
              <DiscountIcon className="w-16 h-16" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">خصومات حصرية!</h3>
            <p className="text-lg md:text-xl">
              خصومات تصل إلى <span className="font-bold text-3xl">25٪</span> على بعض الخدمات لفترات محدودة
            </p>
          </div>
        </div>

        {/* Ijazah Form */}
        <StepBookingForm
          packageName="التقدم للحصول على الإجازة"
          isOpen={isIjazahOpen}
          onClose={() => setIsIjazahOpen(false)}
        />
      </div>
    </section>
  );
};

export default Ijazat;
