// قائمة جميع دول العالم مع مفاتيح الأرقام والأنماط
export interface Country {
  code: string;
  name: string;
  flag: string;
  pattern: RegExp;
  minLength: number;
  maxLength: number;
}

export const countries: Country[] = [
  // الدول العربية
  { code: '+20', name: 'مصر', flag: '🇪🇬', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+966', name: 'السعودية', flag: '🇸🇦', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+971', name: 'الإمارات العربية المتحدة', flag: '🇦🇪', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+965', name: 'الكويت', flag: '🇰🇼', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },
  { code: '+968', name: 'عمان', flag: '🇴🇲', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },
  { code: '+974', name: 'قطر', flag: '🇶🇦', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },
  { code: '+973', name: 'البحرين', flag: '🇧🇭', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },
  { code: '+962', name: 'الأردن', flag: '🇯🇴', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+961', name: 'لبنان', flag: '🇱🇧', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },
  { code: '+963', name: 'سوريا', flag: '🇸🇾', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+964', name: 'العراق', flag: '🇮🇶', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+967', name: 'اليمن', flag: '🇾🇪', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+218', name: 'ليبيا', flag: '🇱🇾', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+213', name: 'الجزائر', flag: '🇩🇿', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+216', name: 'تونس', flag: '🇹🇳', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },
  { code: '+212', name: 'المغرب', flag: '🇲🇦', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+249', name: 'السودان', flag: '🇸🇩', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+970', name: 'فلسطين', flag: '🇵🇸', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+251', name: 'إثيوبيا', flag: '🇪🇹', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+252', name: 'الصومال', flag: '🇸🇴', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+267', name: 'بوتسوانا', flag: '🇧🇼', pattern: /^[0-9]{7,8}$/, minLength: 7, maxLength: 8 },
  { code: '+256', name: 'أوغندا', flag: '🇺🇬', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+254', name: 'كينيا', flag: '🇰🇪', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+255', name: 'تنزانيا', flag: '🇹🇿', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },

  // دول أوروبية
  { code: '+44', name: 'المملكة المتحدة', flag: '🇬🇧', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+33', name: 'فرنسا', flag: '🇫🇷', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+49', name: 'ألمانيا', flag: '🇩🇪', pattern: /^[0-9]{10,11}$/, minLength: 10, maxLength: 11 },
  { code: '+39', name: 'إيطاليا', flag: '🇮🇹', pattern: /^[0-9]{9,10}$/, minLength: 9, maxLength: 10 },
  { code: '+34', name: 'إسبانيا', flag: '🇪🇸', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+31', name: 'هولندا', flag: '🇳🇱', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+32', name: 'بلجيكا', flag: '🇧🇪', pattern: /^[0-9]{8,9}$/, minLength: 8, maxLength: 9 },
  { code: '+41', name: 'سويسرا', flag: '🇨🇭', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+43', name: 'النمسا', flag: '🇦🇹', pattern: /^[0-9]{9,10}$/, minLength: 9, maxLength: 10 },
  { code: '+45', name: 'الدنمارك', flag: '🇩🇰', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },
  { code: '+46', name: 'السويد', flag: '🇸🇪', pattern: /^[0-9]{8,9}$/, minLength: 8, maxLength: 9 },
  { code: '+47', name: 'النرويج', flag: '🇳🇴', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },
  { code: '+358', name: 'فنلندا', flag: '🇫🇮', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+48', name: 'بولندا', flag: '🇵🇱', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+30', name: 'اليونان', flag: '🇬🇷', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+351', name: 'البرتغال', flag: '🇵🇹', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+353', name: 'أيرلندا', flag: '🇮🇪', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+40', name: 'رومانيا', flag: '🇷🇴', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+36', name: 'هنغاريا', flag: '🇭🇺', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+420', name: 'التشيك', flag: '🇨🇿', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+385', name: 'كرواتيا', flag: '🇭🇷', pattern: /^[0-9]{8,9}$/, minLength: 8, maxLength: 9 },
  { code: '+421', name: 'سلوفاكيا', flag: '🇸🇰', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+386', name: 'سلوفينيا', flag: '🇸🇮', pattern: /^[0-9]{8,9}$/, minLength: 8, maxLength: 9 },
  { code: '+389', name: 'مقدونيا الشمالية', flag: '🇲🇰', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },
  { code: '+359', name: 'بلغاريا', flag: '🇧🇬', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+355', name: 'ألبانيا', flag: '🇦🇱', pattern: /^[0-9]{8,9}$/, minLength: 8, maxLength: 9 },
  { code: '+381', name: 'صربيا', flag: '🇷🇸', pattern: /^[0-9]{9,10}$/, minLength: 9, maxLength: 10 },
  { code: '+387', name: 'البوسنة والهرسك', flag: '🇧🇦', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },
  { code: '+382', name: 'الجبل الأسود', flag: '🇲🇪', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },
  { code: '+383', name: 'كوسوفو', flag: '🇽🇰', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },
  { code: '+356', name: 'مالطا', flag: '🇲🇹', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },
  { code: '+357', name: 'قبرص', flag: '🇨🇾', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },
  { code: '+7', name: 'روسيا', flag: '🇷🇺', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+380', name: 'أوكرانيا', flag: '🇺🇦', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+375', name: 'بيلاروسيا', flag: '🇧🇾', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+373', name: 'مولدوفا', flag: '🇲🇩', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },

  // دول آسيوية
  { code: '+1', name: 'الولايات المتحدة/كندا', flag: '🇺🇸', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+52', name: 'المكسيك', flag: '🇲🇽', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+55', name: 'البرازيل', flag: '🇧🇷', pattern: /^[0-9]{10,11}$/, minLength: 10, maxLength: 11 },
  { code: '+54', name: 'الأرجنتين', flag: '🇦🇷', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+56', name: 'تشيلي', flag: '🇨🇱', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+51', name: 'بيرو', flag: '🇵🇪', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+57', name: 'كولومبيا', flag: '🇨🇴', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+58', name: 'فنزويلا', flag: '🇻🇪', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+92', name: 'باكستان', flag: '🇵🇰', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+91', name: 'الهند', flag: '🇮🇳', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+880', name: 'بنغلاديش', flag: '🇧🇩', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+94', name: 'سريلانكا', flag: '🇱🇰', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+977', name: 'نيبال', flag: '🇳🇵', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+886', name: 'تايوان', flag: '🇹🇼', pattern: /^[0-9]{9,10}$/, minLength: 9, maxLength: 10 },
  { code: '+81', name: 'اليابان', flag: '🇯🇵', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+82', name: 'كوريا الجنوبية', flag: '🇰🇷', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+852', name: 'هونج كونج', flag: '🇭🇰', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },
  { code: '+853', name: 'ماكاو', flag: '🇲🇴', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },
  { code: '+65', name: 'سنغافورة', flag: '🇸🇬', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },
  { code: '+60', name: 'ماليزيا', flag: '🇲🇾', pattern: /^[0-9]{9,10}$/, minLength: 9, maxLength: 10 },
  { code: '+66', name: 'تايلاند', flag: '🇹🇭', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+84', name: 'فيتنام', flag: '🇻🇳', pattern: /^[0-9]{9,10}$/, minLength: 9, maxLength: 10 },
  { code: '+62', name: 'إندونيسيا', flag: '🇮🇩', pattern: /^[0-9]{9,12}$/, minLength: 9, maxLength: 12 },
  { code: '+63', name: 'الفلبين', flag: '🇵🇭', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+855', name: 'كمبوديا', flag: '🇰🇭', pattern: /^[0-9]{8,9}$/, minLength: 8, maxLength: 9 },
  { code: '+856', name: 'لاوس', flag: '🇱🇦', pattern: /^[0-9]{8,9}$/, minLength: 8, maxLength: 9 },
  { code: '+86', name: 'الصين', flag: '🇨🇳', pattern: /^[0-9]{11}$/, minLength: 11, maxLength: 11 },
  { code: '+95', name: 'ميانمار', flag: '🇲🇲', pattern: /^[0-9]{7,8}$/, minLength: 7, maxLength: 8 },
  { code: '+998', name: 'أوزبكستان', flag: '🇺🇿', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+992', name: 'طاجيكستان', flag: '🇹🇯', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+993', name: 'تركمانستان', flag: '🇹🇲', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },
  { code: '+996', name: 'قيرغيزستان', flag: '🇰🇬', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+90', name: 'تركيا', flag: '🇹🇷', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+98', name: 'إيران', flag: '🇮🇷', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+93', name: 'أفغانستان', flag: '🇦🇫', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },

  // دول أفريقية
  { code: '+27', name: 'جنوب أفريقيا', flag: '🇿🇦', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+234', name: 'نيجيريا', flag: '🇳🇬', pattern: /^[0-9]{10}$/, minLength: 10, maxLength: 10 },
  { code: '+233', name: 'غانا', flag: '🇬🇭', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+221', name: 'السنغال', flag: '🇸🇳', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+225', name: 'ساحل العاج', flag: '🇨🇮', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },
  { code: '+244', name: 'أنغولا', flag: '🇦🇴', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+260', name: 'زامبيا', flag: '🇿🇲', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+263', name: 'زيمبابوي', flag: '🇿🇼', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+258', name: 'موزمبيق', flag: '🇲🇿', pattern: /^[0-9]{8,9}$/, minLength: 8, maxLength: 9 },
  { code: '+265', name: 'ملاوي', flag: '🇲🇼', pattern: /^[0-9]{8}$/, minLength: 8, maxLength: 8 },

  // دول أوقيانوسية
  { code: '+61', name: 'أستراليا', flag: '🇦🇺', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+64', name: 'نيوزيلندا', flag: '🇳🇿', pattern: /^[0-9]{9}$/, minLength: 9, maxLength: 9 },
  { code: '+67', name: 'فيجي', flag: '🇫🇯', pattern: /^[0-9]{7}$/, minLength: 7, maxLength: 7 },
  { code: '+685', name: 'ساموا', flag: '🇼🇸', pattern: /^[0-9]{7}$/, minLength: 7, maxLength: 7 },
];

// دالة للبحث عن دولة حسب الكود
export const getCountryByCode = (code: string): Country | undefined => {
  return countries.find(c => c.code === code);
};

// دالة للبحث عن دولة حسب الاسم
export const getCountryByName = (name: string): Country | undefined => {
  return countries.find(c => c.name.includes(name));
};

// دالة لتحويل رقم محلي إلى صيغة دولية (مثال: 01023160657 -> 201023160657)
export const normalizePhoneNumber = (countryCode: string, phoneNumber: string): string => {
  let clean = phoneNumber.replace(/\D/g, '');
  
  // إذا كان الرقم يبدأ بـ 0 وطول الرقم الصحيح هو الطول بدون هذا الصفر
  // فنزيل الصفر في البداية
  if (clean.startsWith('0')) {
    const withoutZero = clean.substring(1);
    const country = getCountryByCode(countryCode);
    
    if (country) {
      // تحقق إذا كان الرقم بدون الصفر يطابق النمط المتوقع
      if (country.pattern.test(withoutZero)) {
        return withoutZero; // إرجاع بدون الصفر
      }
    }
  }
  
  return clean; // إرجاع كما هو إذا كان صحيح بالفعل
};

// دالة للتحقق من صحة رقم الهاتف (يقبل أرقام محلية ودولية)
export const validatePhoneNumber = (countryCode: string, phoneNumber: string): boolean => {
  const country = getCountryByCode(countryCode);
  if (!country) return false;
  
  const normalized = normalizePhoneNumber(countryCode, phoneNumber);
  return country.pattern.test(normalized);
};

// دالة لتنسيق رقم الهاتف
export const formatPhoneNumber = (countryCode: string, phoneNumber: string): string => {
  const normalized = normalizePhoneNumber(countryCode, phoneNumber);
  const country = getCountryByCode(countryCode);
  if (!country) return phoneNumber;
  
  if (country.pattern.test(normalized)) {
    return `${countryCode} ${normalized}`;
  }
  return phoneNumber;
};

export default countries;
