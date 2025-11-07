import React, { useState } from 'react';
import { QuoteIcon, StarIcon, UserIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image?: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "أم محمد",
    role: "ولية أمر طالب",
    rating: 5,
    text: "الحمد لله، ابني تحسن كثيراً في قراءة القرآن وحفظه. الشيخ عبدالرحمن متمكن جداً وأسلوبه في التعليم رائع. ابني بقى يحب حصص القرآن ومتحمس لها.",
    date: "منذ شهرين"
  },
  {
    id: 2,
    name: "أحمد سعيد",
    role: "طالب في الأكاديمية",
    rating: 5,
    text: "جزاك الله خيراً يا شيخ عبدالرحمن، الدروس واضحة جداً والتفسير سهل ومفهوم. استفدت كتير من الحصص وبحس إني بفهم القرآن أكتر.",
    date: "منذ 3 أسابيع"
  },
  {
    id: 3,
    name: "فاطمة أحمد",
    role: "طالبة في الأكاديمية",
    rating: 5,
    text: "أفضل أكاديمية لتعليم القرآن! الشيخ صبور ومهتم بكل طالب. حصلت على إجازة القرآن بفضل الله ثم بفضل تعليمه المتقن.",
    date: "منذ شهر"
  },
  {
    id: 4,
    name: "أبو عبدالله",
    role: "ولي أمر طالبة",
    rating: 5,
    text: "ماشاء الله تبارك الله، بنتي حفظت 5 أجزاء في أقل من سنة. الأكاديمية ممتازة والمتابعة مستمرة. جزاكم الله خيراً.",
    date: "منذ أسبوعين"
  },
  {
    id: 5,
    name: "محمود حسن",
    role: "طالب في الأكاديمية",
    rating: 5,
    text: "الدعم النفسي والتربوي اللي بيقدمه الشيخ مع تعليم القرآن حاجة مميزة جداً. بتحس إنك مش بس بتتعلم قرآن، لكن كمان بتتربى.",
    date: "منذ شهر ونصف"
  },
  {
    id: 6,
    name: "أم عائشة",
    role: "ولية أمر طالبة",
    rating: 5,
    text: "أسلوب الشيخ في التعليم مناسب للأطفال والكبار. بنتي عمرها 7 سنين وبتحب الحصص جداً. ربنا يبارك في علمكم.",
    date: "منذ 3 أسابيع"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-warm-gold fill-warm-gold' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-gradient-to-b from-white via-emerald-green/5 to-white relative overflow-hidden">
      {/* الخلفية الزخرفية */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-warm-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* العنوان */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-green to-emerald-green/90 text-white px-6 py-3 rounded-full mb-6 shadow-xl">
            <QuoteIcon className="w-6 h-6" />
            <span className="font-bold">آراء الطلاب</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-green mb-4">
            ماذا يقول طلابنا
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-warm-gold to-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            تجارب حقيقية من طلابنا وأولياء الأمور عن رحلتهم في تعلم القرآن الكريم
          </p>
        </div>

        {/* البطاقات */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-emerald-green relative group animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* أيقونة الاقتباس */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-warm-gold to-soft-gold rounded-2xl flex items-center justify-center shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <QuoteIcon className="w-8 h-8 text-white" />
                </div>

                {/* التقييم */}
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* النص */}
                <p className="text-gray-700 leading-relaxed mb-6 text-base lg:text-lg">
                  "{testimonial.text}"
                </p>

                {/* معلومات المستخدم */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-green to-emerald-green/80 rounded-full flex items-center justify-center">
                    <UserIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-emerald-green">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <span className="text-xs text-gray-400">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden px-4">
              <div className="flex transition-transform duration-300 ease-out"
                   style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white rounded-2xl p-5 shadow-lg border-t-4 border-emerald-green relative">
                      {/* أيقونة الاقتباس */}
                      <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-warm-gold to-soft-gold rounded-2xl flex items-center justify-center shadow-lg rotate-12">
                        <QuoteIcon className="w-7 h-7 text-white" />
                      </div>

                      {/* التقييم */}
                      <div className="mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* النص */}
                      <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                        "{testimonial.text}"
                      </p>

                      {/* معلومات المستخدم */}
                      <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-green to-emerald-green/80 rounded-full flex items-center justify-center">
                          <UserIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-emerald-green">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                        <span className="text-xs text-gray-400">{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* أزرار التنقل للموبايل */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-gradient-to-r from-emerald-green to-emerald-green/90 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="السابق"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? 'w-8 bg-gradient-to-r from-emerald-green to-warm-gold'
                        : 'w-2 bg-gray-300'
                    }`}
                    aria-label={`الانتقال إلى الرأي ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-gradient-to-r from-emerald-green to-emerald-green/90 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="التالي"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* إحصائيات سريعة */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-on-scroll">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl md:text-5xl font-bold text-emerald-green mb-2">500+</div>
            <div className="text-gray-600 font-medium">طالب وطالبة</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl md:text-5xl font-bold text-emerald-green mb-2">٩٨٪</div>
            <div className="text-gray-600 font-medium">نسبة الرضا</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl md:text-5xl font-bold text-emerald-green mb-2">٢٠٠+</div>
            <div className="text-gray-600 font-medium">إجازة قرآنية</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl md:text-5xl font-bold text-emerald-green mb-2">١٠+</div>
            <div className="text-gray-600 font-medium">سنوات خبرة</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
