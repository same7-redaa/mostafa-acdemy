import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { CloseIcon } from './icons';

interface BookingFormProps {
  packageName: string;
  priceEGP: string;
  priceUSD: string;
  isOpen: boolean;
  onClose: () => void;
  isGroupPackage?: boolean;
}

// قائمة الدول مع رموز الاتصال
const countries = [
  { code: '+20', name: 'مصر', flag: '🇪🇬', pattern: /^[0-9]{10}$/ },
  { code: '+966', name: 'السعودية', flag: '🇸🇦', pattern: /^[0-9]{9}$/ },
  { code: '+971', name: 'الإمارات', flag: '🇦🇪', pattern: /^[0-9]{9}$/ },
  { code: '+965', name: 'الكويت', flag: '🇰🇼', pattern: /^[0-9]{8}$/ },
  { code: '+968', name: 'عمان', flag: '🇴🇲', pattern: /^[0-9]{8}$/ },
  { code: '+974', name: 'قطر', flag: '🇶🇦', pattern: /^[0-9]{8}$/ },
  { code: '+973', name: 'البحرين', flag: '🇧🇭', pattern: /^[0-9]{8}$/ },
  { code: '+962', name: 'الأردن', flag: '🇯🇴', pattern: /^[0-9]{9}$/ },
  { code: '+961', name: 'لبنان', flag: '🇱🇧', pattern: /^[0-9]{8}$/ },
  { code: '+963', name: 'سوريا', flag: '🇸🇾', pattern: /^[0-9]{9}$/ },
  { code: '+964', name: 'العراق', flag: '🇮🇶', pattern: /^[0-9]{10}$/ },
  { code: '+967', name: 'اليمن', flag: '🇾🇪', pattern: /^[0-9]{9}$/ },
  { code: '+218', name: 'ليبيا', flag: '🇱🇾', pattern: /^[0-9]{9}$/ },
  { code: '+213', name: 'الجزائر', flag: '🇩🇿', pattern: /^[0-9]{9}$/ },
  { code: '+216', name: 'تونس', flag: '🇹🇳', pattern: /^[0-9]{8}$/ },
  { code: '+212', name: 'المغرب', flag: '🇲🇦', pattern: /^[0-9]{9}$/ },
  { code: '+249', name: 'السودان', flag: '🇸🇩', pattern: /^[0-9]{9}$/ },
  { code: '+970', name: 'فلسطين', flag: '🇵🇸', pattern: /^[0-9]{9}$/ },
  { code: '+1', name: 'أمريكا/كندا', flag: '🇺🇸', pattern: /^[0-9]{10}$/ },
  { code: '+44', name: 'بريطانيا', flag: '🇬🇧', pattern: /^[0-9]{10}$/ },
];

const BookingForm: React.FC<BookingFormProps> = ({
  packageName,
  priceEGP,
  priceUSD,
  isOpen,
  onClose,
  isGroupPackage = false
}) => {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+20',
    phone: '',
    whatsappCountryCode: '+20',
    whatsapp: '',
    city: '',
    studentCount: isGroupPackage ? 3 : 1
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const whatsappNumber = '201055222523'; // رقم الواتساب
  
  // التحقق من صحة رقم الهاتف بناءً على الدولة
  const validatePhone = (countryCode: string, phone: string): boolean => {
    const country = countries.find(c => c.code === countryCode);
    if (!country) return false;
    return country.pattern.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // التحقق من صحة أرقام الهواتف
    if (!validatePhone(formData.countryCode, formData.phone)) {
      setError('رقم الهاتف غير صحيح للدولة المحددة');
      setIsSubmitting(false);
      return;
    }

    if (!validatePhone(formData.whatsappCountryCode, formData.whatsapp)) {
      setError('رقم الواتساب غير صحيح للدولة المحددة');
      setIsSubmitting(false);
      return;
    }

    try {
      const fullPhone = formData.countryCode + formData.phone;
      const fullWhatsapp = formData.whatsappCountryCode + formData.whatsapp;
      
      await addDoc(collection(db, 'bookings'), {
        name: formData.name,
        phone: fullPhone,
        whatsapp: fullWhatsapp,
        city: formData.city,
        studentCount: formData.studentCount,
        packageName,
        priceEGP,
        priceUSD,
        packageType: isGroupPackage ? 'group' : 'individual',
        createdAt: serverTimestamp(),
        status: 'pending'
      });

      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({ 
          name: '', 
          countryCode: '+20',
          phone: '', 
          whatsappCountryCode: '+20',
          whatsapp: '', 
          city: '',
          studentCount: isGroupPackage ? 3 : 1 
        });
      }, 3000);
    } catch (err: any) {
      console.error('Error adding document: ', err);
      const errorMessage = err?.message || 'حدث خطأ في الإرسال';
      setError(`${errorMessage}. يرجى المحاولة مرة أخرى أو التواصل عبر واتساب.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppContact = () => {
    const message = `مرحباً، أريد الاستفسار عن ${packageName}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // منع التمرير عند فتح النافذة
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-0 sm:p-4 overflow-hidden" onClick={onClose}>
      <div className="bg-white sm:rounded-2xl shadow-2xl w-full h-full sm:h-auto sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl sm:max-h-[95vh] flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-4 sm:p-5 rounded-t-none sm:rounded-t-2xl relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-3 left-3 text-white hover:bg-white/20 p-1.5 rounded-full transition-all"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
          <h2 className="text-xl sm:text-2xl font-bold mb-1">احجز الآن</h2>
          <p className="text-emerald-100 text-sm sm:text-base">{packageName}</p>
        </div>

        {isSuccess ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">تم الإرسال بنجاح!</h3>
            <p className="text-gray-600 mb-6">سوف نتواصل معك قريباً</p>
            <button
              onClick={handleWhatsAppContact}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              تواصل عبر واتساب
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-y-auto">
            {/* محتوى النموذج */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 pt-4 sm:pt-6 pb-2 space-y-3 sm:space-y-4">
              {/* السعر */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-emerald-200">
                <div className="text-emerald-700 font-bold text-xl sm:text-2xl mb-1">{priceEGP}</div>
                <div className="text-gray-600 text-xs sm:text-sm">{priceUSD}</div>
              </div>

              {/* الاسم */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">الاسم الكامل *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm sm:text-base text-black"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              {/* المدينة */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">المدينة *</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm sm:text-base text-black"
                  placeholder="أدخل اسم المدينة"
                />
              </div>

              {/* رقم الهاتف */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">رقم الهاتف *</label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="w-32 px-2 sm:px-3 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm sm:text-base text-black"
                    dir="ltr"
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, '') })}
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm sm:text-base text-black"
                    placeholder="1234567890"
                    dir="ltr"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {countries.find(c => c.code === formData.countryCode)?.name} - بدون {formData.countryCode}
                </p>
              </div>

              {/* رقم الواتساب */}
              <div>
                <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">رقم الواتساب *</label>
                <div className="flex gap-2">
                  <select
                    value={formData.whatsappCountryCode}
                    onChange={(e) => setFormData({ ...formData, whatsappCountryCode: e.target.value })}
                    className="w-32 px-2 sm:px-3 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm sm:text-base text-black"
                    dir="ltr"
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value.replace(/[^0-9]/g, '') })}
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm sm:text-base text-black"
                    placeholder="1234567890"
                    dir="ltr"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {countries.find(c => c.code === formData.whatsappCountryCode)?.name} - بدون {formData.whatsappCountryCode}
                </p>
              </div>

              {/* عدد الطلاب للمجموعات */}
              {isGroupPackage && (
                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">عدد الطلاب (3-7)</label>
                  <input
                    type="number"
                    min="3"
                    max="7"
                    value={formData.studentCount}
                    onChange={(e) => setFormData({ ...formData, studentCount: parseInt(e.target.value) })}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm sm:text-base text-black"
                  />
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base">
                  {error}
                </div>
              )}
            </div>

            {/* الأزرار */}
            <div className="flex-shrink-0 flex gap-2 sm:gap-3 px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? 'جاري الإرسال...' : 'احجز الآن'}
              </button>
              <button
                type="button"
                onClick={handleWhatsAppContact}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl flex items-center justify-center gap-1.5 sm:gap-2 transition-all text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                واتساب
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
