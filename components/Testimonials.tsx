import { useState, useRef, useEffect } from 'react';
import { QuoteIcon, ChevronLeftIcon, ChevronRightIcon, CloseIcon } from './icons';

const Testimonials = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const testimonialImages = [
    'اراء/WhatsApp Image 2025-11-04 at 16.28.41_27763b26.jpg',
    'اراء/WhatsApp Image 2025-11-04 at 16.28.41_30b98e72.jpg',
    'اراء/WhatsApp Image 2025-11-04 at 16.28.41_4317dbc7.jpg',
    'اراء/WhatsApp Image 2025-11-04 at 16.28.41_514c5415.jpg',
    'اراء/WhatsApp Image 2025-11-04 at 16.28.41_9dd43351.jpg',
    'اراء/WhatsApp Image 2025-11-04 at 16.28.41_a749c85c.jpg',
    'اراء/WhatsApp Image 2025-11-04 at 16.28.42_74747587.jpg',
    'اراء/WhatsApp Image 2025-11-04 at 16.28.42_f9129a77.jpg',
    'اراء/WhatsApp Image 2025-11-10 at 03.39.18_78169e86.jpg',
  ];

  // التمرير التلقائي
  useEffect(() => {
    if (!isAutoScrolling || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    let scrollInterval: NodeJS.Timeout;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }, 3000);
    };

    startAutoScroll();

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [isAutoScrolling]);

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % testimonialImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + testimonialImages.length) % testimonialImages.length);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    setIsAutoScrolling(false);
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollPosition = direction === 'right' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
      
      setTimeout(() => setIsAutoScrolling(true), 5000);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
      
      <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-emerald-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-600/20 rounded-full blur-xl"></div>
                <QuoteIcon className="w-16 h-16 text-emerald-600 relative z-10" />
              </div>
            </div>
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-warm-gold/10 to-emerald-600/10 rounded-lg transform rotate-1"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 relative px-4 py-2">
                ماذا يقول طلابنا
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-warm-gold to-transparent mx-auto mb-4"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              شهادات ومحادثات طلابنا تعكس جودة التعليم والتميز في الأداء
            </p>
          </div>

        {/* معرض متحرك للصور */}
        <div className="relative max-w-7xl mx-auto">
          {/* أزرار التنقل */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
            aria-label="السابق"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
            aria-label="التالي"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          {/* المعرض المتحرك */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-6 px-12 scrollbar-hide"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {testimonialImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] group cursor-pointer"
                onClick={() => {
                  setIsAutoScrolling(false);
                  openImage(index);
                }}
                onMouseEnter={() => setIsAutoScrolling(false)}
                onMouseLeave={() => setIsAutoScrolling(true)}
              >
                <div className="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-emerald-100 hover:border-emerald-400 hover:scale-105">
                  {/* الصورة */}
                  <div className="relative overflow-hidden h-[380px] bg-gradient-to-b from-gray-50 to-white">
                    <img
                      src={image}
                      alt={`تقييمات وآراء طلاب أكاديمية مصطفى كامل لتعليم القرآن الكريم - رأي ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    
                    {/* Overlay أسود شفاف دائم */}
                    <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/40" />
                    
                    {/* أيقونة العدسة دائمة الظهور في المنتصف */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 text-emerald-600 p-4 rounded-full shadow-xl transition-all duration-300 group-hover:scale-110">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={closeImage}
          >
            {/* Container للصورة والتحكم */}
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
              
              {/* شريط علوي بالأزرار */}
              <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-4 md:px-8 z-30">
                {/* زر الإغلاق */}
                <button
                  onClick={closeImage}
                  className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg shadow-2xl transition-all hover:scale-105 flex items-center gap-2"
                  aria-label="إغلاق"
                >
                  <CloseIcon className="w-5 h-5" />
                  <span className="hidden md:inline text-sm font-bold">إغلاق</span>
                </button>

                {/* العداد */}
                <div className="bg-emerald-600 text-white px-5 py-2 rounded-lg shadow-xl">
                  <p className="text-sm font-bold flex items-center gap-2">
                    <span>{selectedImage + 1}</span>
                    <span className="text-white/60">/</span>
                    <span>{testimonialImages.length}</span>
                  </p>
                </div>
              </div>

              {/* الصورة */}
              <div
                className="relative max-w-5xl max-h-[calc(100vh-150px)] w-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={testimonialImages[selectedImage]}
                  alt="شهادات وتقييمات طلاب أكاديمية مصطفى كامل في تعليم القرآن والتجويد"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  loading="eager"
                />
              </div>

              {/* أزرار التنقل السفلية */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
                {/* زر السابق */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="bg-white hover:bg-gray-100 text-emerald-600 p-4 rounded-lg shadow-2xl transition-all hover:scale-105 flex items-center gap-2"
                  aria-label="الصورة السابقة"
                >
                  <ChevronRightIcon className="w-6 h-6" />
                  <span className="hidden md:inline text-sm font-bold">السابق</span>
                </button>

                {/* زر التالي */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="bg-white hover:bg-gray-100 text-emerald-600 p-4 rounded-lg shadow-2xl transition-all hover:scale-105 flex items-center gap-2"
                  aria-label="الصورة التالية"
                >
                  <span className="hidden md:inline text-sm font-bold">التالي</span>
                  <ChevronLeftIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
