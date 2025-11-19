import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { ChatIcon } from '../components/icons';
import { countries, validatePhoneNumber } from '../utils/countries';

const SessionPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+20',
    phone: '',
    whatsappCountryCode: '+20',
    whatsapp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const whatsappNumber = '201055222523';

  const validatePhoneLocal = (countryCode: string, phone: string): boolean => {
    return validatePhoneNumber(countryCode, phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!validatePhoneLocal(formData.countryCode, formData.phone)) {
      setError('رقم الهاتف غير صحيح للدولة المحددة');
      setIsSubmitting(false);
      return;
    }

    if (!validatePhoneLocal(formData.whatsappCountryCode, formData.whatsapp)) {
      setError('رقم الواتساب غير صحيح للدولة المحددة');
      setIsSubmitting(false);
      return;
    }

    try {
      const fullPhone = formData.countryCode + formData.phone;
      const fullWhatsapp = formData.whatsappCountryCode + formData.whatsapp;
      
      await addDoc(collection(db, 'psychological-sessions'), {
        name: formData.name,
        phone: fullPhone,
        whatsapp: fullWhatsapp,
        createdAt: serverTimestamp(),
        status: 'pending'
      });

      setIsSuccess(true);
      setFormData({ 
        name: '', 
        countryCode: '+20',
        phone: '', 
        whatsappCountryCode: '+20',
        whatsapp: ''
      });
    } catch (err: any) {
      console.error('Error adding document: ', err);
      setError('حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('السلام عليكم، أريد الاستفسار عن الجلسات والاستشارات النفسية');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const goBack = () => {
    window.location.href = '/mostafa-acdemy/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 text-white py-6 shadow-xl">
        <div className="container mx-auto px-4">
          <button
            onClick={goBack}
            className="mb-4 flex items-center gap-2 text-white/90 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            العودة للرئيسية
          </button>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <ChatIcon className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">الجلسات والاستشارات النفسية</h1>
              <p className="text-green-100 mt-1">احجز جلستك النفسية الآن</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {isSuccess ? (
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">تم الحجز بنجاح!</h2>
              <p className="text-gray-600 text-lg mb-8">سوف نتواصل معك قريباً لتحديد موعد الجلسة</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleWhatsAppContact}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  تواصل عبر واتساب
                </button>
                <button
                  onClick={goBack}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  العودة للرئيسية
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="space-y-6">
                {/* الاسم */}
                <div>
                  <label className="block text-gray-700 font-bold mb-3 text-lg">الاسم الكامل *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-lg text-black"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                {/* رقم الهاتف */}
                <div>
                  <label className="block text-gray-700 font-bold mb-3 text-lg">رقم الهاتف *</label>
                  <div className="flex gap-3">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-lg text-black bg-white"
                      style={{ minWidth: '140px' }}
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
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                      className="flex-1 px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-lg text-black"
                      placeholder="رقم الهاتف أو بدون البادئة"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">يمكنك إدخال الرقم المحلي (01023160657) أو بدون البادئة (1023160657)</p>
                </div>

                {/* رقم الواتساب */}
                <div>
                  <label className="block text-gray-700 font-bold mb-3 text-lg">رقم الواتساب *</label>
                  <div className="flex gap-3">
                    <select
                      value={formData.whatsappCountryCode}
                      onChange={(e) => setFormData({ ...formData, whatsappCountryCode: e.target.value })}
                      className="px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-lg text-black bg-white"
                      style={{ minWidth: '140px' }}
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
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value.replace(/\D/g, '') })}
                      className="flex-1 px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-lg text-black"
                      placeholder="رقم الواتساب"
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border-2 border-red-200 text-red-700 px-5 py-4 rounded-xl">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'احجز الآن'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SessionPage;
