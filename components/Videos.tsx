import React, { useState } from 'react';
import { TvIcon } from './icons';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  isActive?: boolean;
  position?: 'left' | 'center' | 'right';
}

const VideoCard: React.FC<VideoCardProps> = ({ title, description, thumbnail, videoUrl, isActive = false, position = 'center' }) => {
  const getCardClasses = () => {
    const baseClasses = "absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out cursor-pointer";
    
    if (position === 'center') {
      return `${baseClasses} left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] opacity-100 scale-100 z-30`;
    } else if (position === 'right') {
      return `${baseClasses} right-[2%] md:right-[5%] w-[70%] md:w-[400px] opacity-50 scale-85 z-20 hover:opacity-70`;
    } else {
      return `${baseClasses} left-[2%] md:left-[5%] w-[70%] md:w-[400px] opacity-50 scale-85 z-20 hover:opacity-70`;
    }
  };

  return (
    <div className={getCardClasses()}>
      <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-emerald-green/30 transition-shadow duration-300">
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-emerald-green/10 to-warm-gold/10">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-green/90 via-emerald-green/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          
          {isActive && (
            <div className="absolute inset-0 flex items-center justify-center">
              <a 
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-20 md:w-24 h-20 md:h-24 bg-gradient-to-br from-warm-gold to-soft-gold rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 hover:scale-110 hover:rotate-6 group-hover:shadow-warm-gold/50"
              >
                <div className="absolute inset-0 rounded-full bg-warm-gold animate-ping opacity-20"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 md:w-12 h-10 md:h-12 text-white ml-1 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </a>
            </div>
          )}

          {isActive && (
            <div className="absolute top-4 right-4 bg-warm-gold/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              <TvIcon className="w-3 h-3 inline ml-1" />
              مميز
            </div>
          )}
        </div>
        
        <div className="bg-white p-4 md:p-6 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-green via-warm-gold to-emerald-green"></div>
          <h3 className={`font-bold text-emerald-green mb-2 line-clamp-2 group-hover:text-warm-gold transition-colors duration-300 ${isActive ? 'text-lg md:text-xl' : 'text-sm md:text-base'}`}>
            {title}
          </h3>
          {isActive && (
            <p className="text-gray-600 text-xs md:text-sm line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Videos: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      title: "لقاء تلفزيوني عن تعليم القرآن للأطفال",
      description: "حلقة من برنامج تلفزيوني عن أهمية تعليم القرآن الكريم للأطفال",
      thumbnail: "https://picsum.photos/seed/video1/800/450",
      videoUrl: "#"
    },
    {
      title: "التربية النفسية في تعليم القرآن",
      description: "محاضرة عن دور التربية النفسية في تحفيظ القرآن الكريم",
      thumbnail: "https://picsum.photos/seed/video2/800/450",
      videoUrl: "#"
    },
    {
      title: "كيفية التعامل مع الطفل في مرحلة الحفظ",
      description: "نصائح عملية لأولياء الأمور أثناء حفظ القرآن",
      thumbnail: "https://picsum.photos/seed/video3/800/450",
      videoUrl: "#"
    },
    {
      title: "قصص نجاح من أكاديمية مصطفى كامل",
      description: "شهادات وقصص نجاح من طلاب الأكاديمية",
      thumbnail: "https://picsum.photos/seed/video4/800/450",
      videoUrl: "#"
    },
    {
      title: "أهمية الأخلاق في تعليم القرآن",
      description: "غرس القيم والأخلاق مع تعليم القرآن",
      thumbnail: "https://picsum.photos/seed/video5/800/450",
      videoUrl: "#"
    },
    {
      title: "الإرشاد الأسري والقرآن الكريم",
      description: "بناء أسرة متماسكة ومتوازنة",
      thumbnail: "https://picsum.photos/seed/video6/800/450",
      videoUrl: "#"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const getVisibleVideos = () => {
    const leftIndex = (currentIndex - 1 + videos.length) % videos.length;
    const rightIndex = (currentIndex + 1) % videos.length;
    
    return [
      { ...videos[leftIndex], position: 'left' as const, key: leftIndex },
      { ...videos[currentIndex], position: 'center' as const, key: currentIndex },
      { ...videos[rightIndex], position: 'right' as const, key: rightIndex }
    ];
  };

  const visibleVideos = getVisibleVideos();

  return (
    <section id="videos" className="relative text-white overflow-hidden">
      {/* Background image layer */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-cover z-0"
        style={{ backgroundImage: "url('0000.jpg')" }}
      ></div>

      {/* طبقة تعتيم للنصوص */}
      <div className="absolute inset-0 bg-emerald-green/60 z-[1]"></div>

      {/* موجة البداية */}
      <div className="absolute top-0 left-0 w-full h-[100px] md:h-[150px] lg:h-[200px] z-[2]" style={{ transform: 'translateY(-1px) rotate(180deg)' }}>
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L60,149.3C120,171,240,213,360,229.3C480,245,600,235,720,202.7C840,171,960,117,1080,101.3C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20 md:py-24 pt-32 md:pt-40 lg:pt-48 pb-48 md:pb-56 lg:pb-64">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-warm-gold/20 via-soft-gold/30 to-warm-gold/20 rounded-lg transform rotate-1"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-warm-gold/20 via-soft-gold/30 to-warm-gold/20 rounded-lg transform -rotate-1"></div>
            <div className="relative bg-white/10 backdrop-blur-sm border-2 border-warm-gold/50 rounded-lg px-8 py-4">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-warm-gold"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-warm-gold"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-warm-gold"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-warm-gold"></div>
              <div className="flex items-center gap-3">
                <TvIcon className="w-7 h-7 text-warm-gold" />
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  لقاءات وحلقات تلفزيونية
                </h2>
              </div>
            </div>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-warm-gold to-transparent mx-auto mt-6 mb-6"></div>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            شاهد مجموعة من اللقاءات والحلقات التلفزيونية والمحاضرات التي تتناول مواضيع تعليم القرآن الكريم
          </p>
        </div>

        <div className="relative h-[400px] md:h-[500px] mb-16">
          {visibleVideos.map((video) => (
            <VideoCard
              key={video.key}
              title={video.title}
              description={video.description}
              thumbnail={video.thumbnail}
              videoUrl={video.videoUrl}
              isActive={video.position === 'center'}
              position={video.position}
            />
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-warm-gold to-soft-gold text-white rounded-full shadow-2xl hover:shadow-warm-gold/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-warm-gold to-soft-gold text-white rounded-full shadow-2xl hover:shadow-warm-gold/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'w-8 h-3 bg-gradient-to-r from-warm-gold to-soft-gold' 
                  : 'w-3 h-3 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <a 
            href="#" 
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-soft-gold to-warm-gold text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            <span>شاهد المزيد من الفيديوهات</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* موجة النهاية */}
      <div className="absolute bottom-0 left-0 w-full h-[100px] md:h-[150px] lg:h-[200px] z-[2]" style={{ transform: 'translateY(1px)' }}>
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L60,149.3C120,171,240,213,360,229.3C480,245,600,235,720,202.7C840,171,960,117,1080,101.3C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Videos;
