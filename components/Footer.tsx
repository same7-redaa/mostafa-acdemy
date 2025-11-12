import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-emerald-green to-emerald-green/90 text-white overflow-hidden">
      {/* زخرفة خلفية */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-64 h-64 bg-warm-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-soft-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* اللوجو */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="border-3 border-warm-gold rounded-full p-2 shadow-xl">
              <img src="logo2.png" alt="شعار أكاديمية مصطفى كامل - أفضل أكاديمية لتعليم القرآن الكريم والتجويد" className="h-20 w-20 object-contain" loading="eager" />
            </div>
          </div>
        </div>

        {/* الأقسام */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* روابط سريعة */}
          <div className="text-center md:text-right">
            <h4 className="font-display text-lg font-bold mb-4 text-warm-gold">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-200 hover:text-warm-gold transition-colors duration-300">الرئيسية</a></li>
              <li><a href="#why-us" className="text-gray-200 hover:text-warm-gold transition-colors duration-300">لماذا نحن</a></li>
              <li><a href="#sheikh-about" className="text-gray-200 hover:text-warm-gold transition-colors duration-300">من نحن</a></li>
              <li><a href="#testimonials" className="text-gray-200 hover:text-warm-gold transition-colors duration-300">ماذا يقول طلابنا</a></li>
              <li><a href="#videos" className="text-gray-200 hover:text-warm-gold transition-colors duration-300">لقاءات تلفزيونية</a></li>
            </ul>
          </div>

          {/* الباقات */}
          <div className="text-center md:text-right">
            <h4 className="font-display text-lg font-bold mb-4 text-warm-gold">الخدمات</h4>
            <ul className="space-y-2">
              <li><a href="#packages" className="text-gray-200 hover:text-warm-gold transition-colors duration-300">الباقات التعليمية</a></li>
              <li><a href="#ijazat" className="text-gray-200 hover:text-warm-gold transition-colors duration-300">الإجازات القرآنية</a></li>
              <li><a href="#packages" className="text-gray-200 hover:text-warm-gold transition-colors duration-300">تعليم اللغة العربية</a></li>
              <li><a href="#packages" className="text-gray-200 hover:text-warm-gold transition-colors duration-300">جلسات كوتشينج</a></li>
              <li><a href="#payment" className="text-gray-200 hover:text-warm-gold transition-colors duration-300">طرق الدفع</a></li>
            </ul>
          </div>

          {/* اتصل بنا */}
          <div className="text-center md:text-right">
            <h4 className="font-display text-lg font-bold mb-4 text-warm-gold">اتصل بنا</h4>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <svg className="w-5 h-5 text-warm-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@mostafa-academy.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <svg className="w-5 h-5 text-warm-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span dir="ltr">+20 1055 222 523</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <svg className="w-5 h-5 text-warm-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>القاهرة، مصر</span>
              </li>
            </ul>
          </div>

          {/* تابعنا */}
          <div className="text-center md:text-right">
            <h4 className="font-display text-lg font-bold mb-4 text-warm-gold">تابعنا</h4>
            <div className="flex justify-center md:justify-start gap-3 mb-4">
              <a href="https://www.instagram.com/mostafakamelacademy?igsh=bThmdmplazF1ZWZu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-warm-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/>
                </svg>
              </a>
              <a href="https://x.com/mostafakamelac?t=vgL1X5UpMgdFFVy1p8L_Zg&s=09" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-warm-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@mostafakamelacademy?_r=1&_t=ZS-91Jt2EifNfI" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-warm-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@mostafakamelacademy?si=R_Cg2iDVhWF9oAnc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-warm-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://wa.me/201055222523" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-warm-gold rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-300">تابعنا على منصات التواصل الاجتماعي</p>
          </div>
        </div>

        {/* الخط الفاصل */}
        <div className="border-t border-white/20 pt-8">
          <div className="text-center">
            <p className="text-gray-300 text-sm mb-2">
              &copy; {new Date().getFullYear()} أكاديمية مصطفى كامل. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-200 text-sm">
              <span>تصميم وتطوير</span>
              <a 
                href="https://wa.me/201023160657" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-warm-gold hover:text-soft-gold transition-colors duration-300 font-semibold"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>سامح رضا</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;