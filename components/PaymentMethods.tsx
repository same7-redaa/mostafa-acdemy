import React from 'react';
import { CurrencyIcon } from './icons';

const PaymentMethods: React.FC = () => {
  return (
    <section id="payment" className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Islamic Vector Background */}
      <div 
        className="absolute inset-0 opacity-20 z-0"
        style={{ 
          backgroundImage: "url('Islamic Vector.png')",
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* تدرج أبيض في البداية */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-[1]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-green to-emerald-green/90 text-white px-6 py-3 rounded-full mb-6 shadow-xl">
            <CurrencyIcon className="w-6 h-6" />
            <span className="font-bold">طرق الدفع</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-green mb-4">
            وسائل الدفع المتاحة
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-warm-gold to-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            نوفر لك مجموعة متنوعة من وسائل الدفع الآمنة والمريحة
          </p>
        </div>

        {/* المحتوى */}
        <div className="max-w-5xl mx-auto">
          {/* من داخل مصر */}
          <div className="mb-10 animate-on-scroll">
            <div className="bg-gradient-to-br from-emerald-green/5 to-emerald-green/10 rounded-2xl p-6 border border-emerald-green/20">
              <h3 className="text-xl font-bold text-emerald-green mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                من داخل مصر
              </h3>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-full h-16 flex items-center justify-center">
                    <img src="/logos/instapay.png" alt="إنستاباي" className="max-h-12 max-w-full object-contain" loading="eager" />
                  </div>
                  <div className="text-center">
                    <span className="text-gray-700 font-semibold text-sm block">إنستاباي</span>
                    <span className="text-gray-500 text-xs">InstaPay</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-full h-16 flex items-center justify-center">
                    <img src="/logos/vodafone-cash.png" alt="فودافون كاش" className="max-h-12 max-w-full object-contain" loading="eager" />
                  </div>
                  <div className="text-center">
                    <span className="text-gray-700 font-semibold text-sm block">فودافون كاش</span>
                    <span className="text-gray-500 text-xs">Vodafone Cash</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-full h-16 flex items-center justify-center">
                    <img src="/logos/etisalat-cash.png" alt="اتصالات كاش" className="max-h-12 max-w-full object-contain" loading="eager" />
                  </div>
                  <div className="text-center">
                    <span className="text-gray-700 font-semibold text-sm block">اتصالات كاش</span>
                    <span className="text-gray-500 text-xs">Etisalat Cash</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* من خارج مصر */}
          <div className="animate-on-scroll">
            <div className="bg-gradient-to-br from-warm-gold/5 to-warm-gold/10 rounded-2xl p-6 border border-warm-gold/20">
              <h3 className="text-xl font-bold text-emerald-green mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                من خارج مصر
              </h3>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-full h-16 flex items-center justify-center">
                    <img src="/logos/bank-transfer.png" alt="تحويل بنكي" className="max-h-12 max-w-full object-contain" loading="eager" />
                  </div>
                  <div className="text-center">
                    <span className="text-gray-700 font-semibold text-sm block">تحويل بنكي (IBAN)</span>
                    <span className="text-gray-500 text-xs">Bank Transfer</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-full h-16 flex items-center justify-center">
                    <img src="/logos/western-union.png" alt="ويسترن يونيون" className="max-h-12 max-w-full object-contain" loading="eager" />
                  </div>
                  <div className="text-center">
                    <span className="text-gray-700 font-semibold text-sm block">ويسترن يونيون</span>
                    <span className="text-gray-500 text-xs">Western Union</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-full h-16 flex items-center justify-center">
                    <img src="/logos/paypal.png" alt="باي بال" className="max-h-12 max-w-full object-contain" loading="eager" />
                  </div>
                  <div className="text-center">
                    <span className="text-gray-700 font-semibold text-sm block">باي بال</span>
                    <span className="text-gray-500 text-xs">PayPal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ملاحظة */}
        <div className="mt-12 max-w-4xl mx-auto animate-on-scroll">
          <div className="bg-gradient-to-r from-emerald-green/5 via-warm-gold/5 to-emerald-green/5 rounded-2xl p-6 border-r-4 border-warm-gold">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-warm-gold rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-emerald-green text-lg mb-2">ملاحظة هامة</h4>
                <p className="text-gray-700 leading-relaxed">
                  لمعرفة تفاصيل الدفع والحسابات، يُرجى التواصل معنا عبر واتساب أو الاتصال المباشر. نحن هنا لمساعدتك في أي وقت!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
