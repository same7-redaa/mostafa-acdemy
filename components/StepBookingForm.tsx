import React, { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { CloseIcon } from './icons';
import { countries, validatePhoneNumber, type Country } from '../utils/countries';

interface StepBookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  priceEGP?: string;
  priceUSD?: string;
  isGroupPackage?: boolean; // لتحديد إذا كانت باقة مجموعات
}

const StepBookingForm: React.FC<StepBookingFormProps> = ({ isOpen, onClose, packageName, priceEGP, priceUSD, isGroupPackage = false }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    countryCode: '',
    phone: '',
    whatsapp: '',
    numberOfStudents: '1' // عدد الطلاب (فقط لباقات المجموعات)
  });
  const [countrySearch, setCountrySearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [error, setError] = useState('');

  // منع التمرير عند فتح النافذة
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // إعادة تعيين النموذج عند الإغلاق
      setCurrentStep(0);
      setIsSuccess(false);
      setCountdown(5);
      setError('');
      setFormData({
        name: '',
        country: '',
        countryCode: '',
        phone: '',
        whatsapp: '',
        numberOfStudents: '1'
      });
      setCountrySearch('');
      setFilteredCountries(countries);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // تصفية الدول عند البحث
  useEffect(() => {
    if (countrySearch.trim() === '') {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter(country =>
        country.name.includes(countrySearch) ||
        country.code.includes(countrySearch)
      );
      setFilteredCountries(filtered);
    }
  }, [countrySearch]);

  // العداد التنازلي والإغلاق التلقائي بعد النجاح
  useEffect(() => {
    if (isSuccess && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (isSuccess && countdown === 0) {
      onClose();
    }
  }, [isSuccess, countdown, onClose]);

  const validatePhoneLocal = (countryCode: string, phone: string): boolean => {
    return validatePhoneNumber(countryCode, phone);
  };

  const validateName = (name: string): boolean => {
    const parts = name.trim().split(/\s+/);
    return parts.length >= 2 && parts.every(part => part.length > 0);
  };

  const handleNext = () => {
    setError('');
    
    // Step 0: عرض الباقة - لا يحتاج تحقق
    if (currentStep === 0) {
      setCurrentStep(1);
      return;
    }
    
    // Step 1: التحقق من الاسم
    if (currentStep === 1) {
      if (!formData.name.trim()) {
        setError('الرجاء إدخال الاسم');
        return;
      }
      if (!validateName(formData.name)) {
        setError('الرجاء إدخال الاسم الكامل (الاسم الأول واسم العائلة على الأقل)');
        return;
      }
    }
    
    // Step 2: التحقق من الدولة
    if (currentStep === 2) {
      if (!formData.country || !formData.countryCode) {
        setError('الرجاء اختيار الدولة');
        return;
      }
    }
    
    // Step 3: التحقق من رقم الهاتف
    if (currentStep === 3) {
      if (!formData.phone.trim()) {
        setError('الرجاء إدخال رقم الهاتف');
        return;
      }
      if (!validatePhoneLocal(formData.countryCode, formData.phone)) {
        setError('رقم الهاتف غير صحيح للدولة المحددة');
        return;
      }
    }
    
    // Step 4: التحقق من رقم الواتساب
    if (currentStep === 4) {
      if (!formData.whatsapp.trim()) {
        setError('الرجاء إدخال رقم الواتساب');
        return;
      }
      if (!validatePhoneLocal(formData.countryCode, formData.whatsapp)) {
        setError('رقم الواتساب غير صحيح للدولة المحددة');
        return;
      }
    }
    
    // Step 5: التحقق من عدد الطلاب (فقط لباقات المجموعات)
    if (currentStep === 5 && isGroupPackage) {
      const numStudents = parseInt(formData.numberOfStudents);
      if (isNaN(numStudents) || numStudents < 1 || numStudents > 50) {
        setError('الرجاء إدخال عدد صحيح بين 1 و 50');
        return;
      }
    }
    
    setCurrentStep(currentStep + 1);
  };

  const handleSelectCountry = (country: typeof countries[0]) => {
    setFormData({
      ...formData,
      country: country.name,
      countryCode: country.code
    });
    setCountrySearch(country.name);
  };

  const handleBack = () => {
    setError('');
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError('');

    try {
      const fullPhone = formData.countryCode + formData.phone;
      const fullWhatsapp = formData.countryCode + formData.whatsapp;
      
      const bookingData: any = {
        name: formData.name,
        country: formData.country,
        countryCode: formData.countryCode,
        phone: fullPhone,
        whatsapp: fullWhatsapp,
        packageName: packageName,
        priceEGP: priceEGP || '',
        priceUSD: priceUSD || '',
        packageType: isGroupPackage ? 'group' : 'individual',
        createdAt: serverTimestamp(),
        status: 'pending'
      };

      // إضافة عدد الطلاب فقط إذا كانت باقة مجموعات
      if (isGroupPackage) {
        bookingData.studentCount = parseInt(formData.numberOfStudents);
      }
      
      await addDoc(collection(db, 'bookings'), bookingData);

      setIsSuccess(true);
      setCountdown(5); // إعادة تعيين العداد إلى 5 ثواني
    } catch (err: any) {
      console.error('Error adding document: ', err);
      setError('حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-3 overflow-y-auto">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-lg my-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-purple-700 text-white p-3 sm:p-4 rounded-t-xl sm:rounded-t-2xl z-10">
          <button
            onClick={onClose}
            className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 text-white/90 hover:text-white transition-colors p-1.5 hover:bg-white/20 rounded-full"
            aria-label="إغلاق"
          >
            <CloseIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <div className="text-center">
            <h2 className="text-lg sm:text-xl font-bold mb-1.5">{packageName}</h2>
            <div className="flex justify-center items-center gap-1 mt-2 overflow-x-auto px-2">
              {(isGroupPackage ? [0, 1, 2, 3, 4, 5] : [0, 1, 2, 3, 4]).map((step, index, arr) => (
                <div key={step} className="flex items-center flex-shrink-0">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold transition-all text-xs sm:text-sm ${
                    currentStep >= step ? 'bg-white text-purple-600' : 'bg-white/20 text-white/60'
                  }`}>
                    {step === 0 ? (
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                      </svg>
                    ) : step}
                  </div>
                  {index < arr.length - 1 && (
                    <div className={`w-4 sm:w-5 h-0.5 mx-0.5 transition-all ${
                      currentStep > step ? 'bg-white' : 'bg-white/20'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4">
          {isSuccess ? (
            <div className="text-center py-4 px-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">تم التسجيل بنجاح</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-1.5">شكراً لك على التسجيل</p>
              <p className="text-purple-600 font-semibold text-sm sm:text-base mb-3">سنتواصل معك في أقرب وقت ممكن</p>
              <div className="bg-purple-50 rounded-lg p-3 mb-3 border-2 border-purple-200">
                <p className="text-gray-700 text-xs sm:text-sm">
                  تم إرسال طلبك بنجاح، وسيقوم فريقنا بمراجعته والتواصل معك قريباً لتأكيد التفاصيل.
                </p>
              </div>
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-3 border-2 border-gray-300">
                <p className="text-gray-600 text-xs sm:text-sm mb-1.5">سيتم إغلاق النافذة تلقائياً بعد</p>
                <div className="text-3xl sm:text-4xl font-bold text-purple-600">{countdown}</div>
                <p className="text-gray-500 text-xs mt-1">ثواني</p>
              </div>
            </div>
          ) : (
            <>
              {/* Step 0: عرض الباقة والسعر */}
              {currentStep === 0 && (
                <div className="space-y-3 text-center">
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4">
                    <h3 className="text-lg sm:text-xl font-bold text-purple-900 mb-2">{packageName}</h3>
                    {(priceEGP || priceUSD) && (
                      <div className="flex justify-center gap-2 flex-wrap">
                        {priceEGP && (
                          <div className="bg-white rounded-md px-3 py-1.5 shadow-md">
                            <p className="text-gray-600 text-xs">السعر</p>
                            <p className="text-lg font-bold text-purple-600">{priceEGP}</p>
                          </div>
                        )}
                        {priceUSD && (
                          <div className="bg-white rounded-md px-3 py-1.5 shadow-md">
                            <p className="text-gray-600 text-xs">السعر بالدولار</p>
                            <p className="text-lg font-bold text-purple-600">{priceUSD}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm">اضغط "التالي" للمتابعة مع التسجيل</p>
                </div>
              )}

              {/* Step 1: الاسم */}
              {currentStep === 1 && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-gray-700 font-bold mb-1.5 text-sm sm:text-base">ما اسمك الكامل؟</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 sm:py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base text-black"
                      placeholder="مثال: أحمد محمد"
                      autoFocus
                    />
                    <p className="text-xs text-gray-500 mt-1">يجب إدخال الاسم الأول واسم العائلة على الأقل</p>
                  </div>
                </div>
              )}

              {/* Step 2: الدولة */}
              {currentStep === 2 && (
                <div className="space-y-2">
                  <div>
                    <label className="block text-gray-700 font-bold mb-1.5 text-sm sm:text-base">ما هي دولتك؟</label>
                    <input
                      type="text"
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      className="w-full px-3 py-2 sm:py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base text-black"
                      placeholder="ابحث عن دولتك (مثال: مصر، السعودية)..."
                      autoFocus
                    />
                    <div className="mt-1.5 max-h-64 sm:max-h-96 overflow-y-auto border-2 border-gray-200 rounded-lg bg-white">
                      {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => handleSelectCountry(country)}
                            className={`w-full text-right px-3 py-2 hover:bg-purple-50 transition-colors flex items-center gap-2 text-xs sm:text-sm border-b border-gray-100 last:border-b-0 ${
                              formData.country === country.name ? 'bg-purple-100' : ''
                            }`}
                          >
                            <span className="text-lg sm:text-xl">{country.flag}</span>
                            <div className="flex-1 text-right">
                              <div className="font-medium text-black">{country.name}</div>
                              <div className="text-gray-500 text-xs">{country.code}</div>
                            </div>
                          </button>
                        ))
                      ) : (
                        <div className="px-3 py-4 text-center text-gray-500 text-sm">
                          لا توجد نتائج. جرب البحث باسم آخر
                        </div>
                      )}
                    </div>
                    {formData.country && (
                      <p className="text-xs text-green-600 mt-1">✓ تم اختيار: {formData.country}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: رقم الهاتف */}
              {currentStep === 3 && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-gray-700 font-bold mb-1.5 text-sm sm:text-base">ما رقم هاتفك؟</label>
                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="px-2 py-2 sm:py-2.5 border-2 border-gray-300 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-xs sm:text-sm text-black" style={{ minWidth: '80px' }}>
                        {formData.countryCode}
                      </div>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                        className="flex-1 px-3 py-2 sm:py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base text-black"
                        placeholder="رقم الهاتف"
                        autoFocus
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">يمكنك إدخال الرقم المحلي أو بدون البادئة</p>
                  </div>
                </div>
              )}

              {/* Step 5: عدد الطلاب */}
              {currentStep === 4 && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-gray-700 font-bold mb-1.5 text-sm sm:text-base">ما رقم واتساب؟</label>
                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="px-2 py-2 sm:py-2.5 border-2 border-gray-300 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-xs sm:text-sm text-black" style={{ minWidth: '80px' }}>
                        {formData.countryCode}
                      </div>
                      <input
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value.replace(/\D/g, '') })}
                        className="flex-1 px-3 py-2 sm:py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base text-black"
                        placeholder="رقم الواتساب"
                        autoFocus
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">الرقم يجب أن يتطابق مع شروط {formData.country}</p>
                  </div>
                </div>
              )}

              {/* Step 5: عدد الطلاب (فقط لباقات المجموعات) */}
              {currentStep === 5 && isGroupPackage && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-gray-700 font-bold mb-1.5 text-sm sm:text-base">كم عدد الطلاب؟</label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={formData.numberOfStudents}
                      onChange={(e) => setFormData({ ...formData, numberOfStudents: e.target.value })}
                      className="w-full px-3 py-2 sm:py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base text-black"
                      placeholder="أدخل عدد الطلاب"
                      autoFocus
                    />
                    <p className="text-xs text-gray-500 mt-1">يمكنك إدخال عدد من 1 إلى 50 طالب</p>
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border-2 border-red-200 text-red-700 px-3 py-2 rounded-lg mt-2 text-xs sm:text-sm">
                  {error}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-2 mt-3 sm:mt-4">
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 sm:py-2.5 px-3 rounded-lg transition-all text-sm sm:text-base"
                  >
                    السابق
                  </button>
                )}
                {currentStep < (isGroupPackage ? 5 : 4) ? (
                  <button
                    onClick={handleNext}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 sm:py-2.5 px-3 rounded-lg transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    التالي
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 sm:py-2.5 px-3 rounded-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isSubmitting ? 'جاري الإرسال...' : 'إرسال الحجز'}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepBookingForm;
