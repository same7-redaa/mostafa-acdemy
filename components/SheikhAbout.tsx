import React from 'react';
import { BookIcon, AcademicCapIcon, CertificateIcon, BrainIcon, StarIcon, TvIcon } from './icons';

const ListItem: React.FC<{ children: React.ReactNode; icon: React.ReactNode }> = ({ children, icon }) => (
  <li className="flex items-start group">
    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-soft-gold to-warm-gold rounded-lg flex items-center justify-center text-white ml-3 shadow-md group-hover:scale-110 transition-transform duration-300">
      {icon}
    </span>
    <span className="text-gray-700 leading-relaxed flex-1 pt-1">{children}</span>
  </li>
);

const SheikhAbout: React.FC = () => {
  return (
    <section id="sheikh-about" className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-green to-emerald-green/90 text-white px-6 py-3 rounded-full mb-6 shadow-xl">
            <AcademicCapIcon className="w-6 h-6" />
            <span className="font-bold">نبذة عن المؤسس</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-green mb-4">
            الشيخ عبدالرحمن مصطفى كامل
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-warm-gold to-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            مؤسس أكاديمية مصطفى كامل لتعليم القرآن الكريم وتنمية القيم التربوية
          </p>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="max-w-6xl mx-auto animate-on-scroll">
          {/* الفيديو والنبذة */}
          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            {/* الفيديو */}
            <div className="lg:col-span-2">
              <div className="relative group">
                {/* الزخرفة الخلفية */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-green via-warm-gold to-emerald-green rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                
                {/* الفيديو */}
                <div className="relative bg-white p-4 rounded-2xl">
                  <div className="relative rounded-xl overflow-hidden">
                    {/* الزوايا الإسلامية */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-t-3 border-l-3 border-warm-gold z-10"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 border-t-3 border-r-3 border-warm-gold z-10"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-b-3 border-l-3 border-warm-gold z-10"></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-b-3 border-r-3 border-warm-gold z-10"></div>
                    
                    <video 
                      src="1.mp4" 
                      className="w-full h-full object-cover aspect-[3/4]"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      poster="من انا.png"
                      title="فيديو تعريفي عن الشيخ مصطفى كامل - أكاديمية تعليم القرآن الكريم"
                      aria-label="فيديو الشيخ مصطفى كامل مؤسس الأكاديمية"
                    >
                      متصفحك لا يدعم تشغيل الفيديو.
                    </video>
                  </div>
                </div>
              </div>
            </div>

            {/* النبذة */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <div className="bg-gradient-to-br from-emerald-green/5 to-warm-gold/5 p-8 rounded-2xl border-r-4 border-emerald-green shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-green to-emerald-green/80 rounded-2xl flex items-center justify-center shadow-xl">
                    <AcademicCapIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-emerald-green text-2xl mb-2">من هو</h3>
                    <div className="w-16 h-1 bg-warm-gold rounded"></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  نشأ وتعلم بالأزهر الشريف وتخرج من كلية أصول الدين جامعة الأزهر الشريف بالقاهرة، ويسعى منذ أكثر من عشر سنوات إلى تقديم تعليم قرآني أصيل يجمع بين العلم الشرعي والتربية النفسية والأسلوب التفاعلي الحديث.
                </p>
              </div>
            </div>
          </div>

          {/* المؤهلات والخبرات */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* المؤهلات */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-emerald-green hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-green to-emerald-green/80 rounded-xl flex items-center justify-center">
                  <CertificateIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-emerald-green text-2xl">المؤهلات والشهادات</h3>
              </div>
              <ul className="space-y-4">
                <ListItem icon={<BookIcon className="w-4 h-4" />}>
                  إجازة في القرآن الكريم برواية حفص وشعبة
                </ListItem>
                <ListItem icon={<CertificateIcon className="w-4 h-4" />}>
                  إجازات علمية في الفقه، العقيدة، والحديث الشريف
                </ListItem>
                <ListItem icon={<AcademicCapIcon className="w-4 h-4" />}>
                  دبلومة في العلاج السلوكي المعرفي معتمدة من وزارة الخارجية
                </ListItem>
                <ListItem icon={<BrainIcon className="w-4 h-4" />}>
                  كورسات متخصصة في الإرشاد الأسري، علم النفس، التربية، الخرائط الذهنية، الذاكرة والعقل، والتغذية العلاجية
                </ListItem>
                <ListItem icon={<StarIcon className="w-4 h-4" />}>
                  مدرب معتمد من نقابة التنمية البشرية، ولايف كوتش من الاتحاد الدولي للكوتشيز
                </ListItem>
              </ul>
            </div>

            {/* الخبرة */}
            <div className="bg-gradient-to-br from-emerald-green to-emerald-green/90 p-8 rounded-2xl shadow-xl text-white border-t-4 border-warm-gold hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-warm-gold to-soft-gold rounded-xl flex items-center justify-center shadow-lg">
                  <TvIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-white text-2xl">الخبرة والإنجازات</h3>
              </div>
              <p className="leading-relaxed text-gray-100 text-lg">
                تمت استضافة الشيخ في برامج تلفزيونية مباشرة، ويسعى من خلال الأكاديمية إلى غرس حب القرآن والأخلاق والقيم الإسلامية في نفوس الطلاب، مع دعم نفسي وأسري متكامل يراعي احتياجات كل طالب وولي أمره.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SheikhAbout;