import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { TvIcon } from './icons';

interface Video {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  youtubeId: string;
  order: number;
  isActive: boolean;
  createdAt: any;
}

interface VideoCardProps {
  video: Video;
  isActive?: boolean;
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, isActive = false, onClick }) => {
  const thumbnail = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
  
  return (
    <div 
      className={`flex-shrink-0 w-[320px] md:w-[400px] transition-all duration-500 cursor-pointer ${
        isActive 
          ? 'scale-100 opacity-100' 
          : 'scale-95 opacity-80 hover:opacity-100 hover:scale-100'
      }`}
      onClick={onClick}
    >
      <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300">
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-emerald-green/10 to-warm-gold/10">
          <img 
            src={thumbnail} 
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-green/90 via-emerald-green/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-20 md:w-24 h-20 md:h-24 bg-gradient-to-br from-warm-gold to-soft-gold rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 md:w-12 h-10 md:h-12 text-white ml-1 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>

          {isActive && (
            <div className="absolute top-4 right-4 bg-warm-gold/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
              <TvIcon className="w-3 h-3 inline ml-1" />
              قيد التشغيل
            </div>
          )}
        </div>
        
        <div className="bg-white p-4 md:p-6 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-green via-warm-gold to-emerald-green"></div>
          <h3 className="font-bold text-emerald-green mb-2 line-clamp-2 text-base md:text-lg group-hover:text-warm-gold transition-colors">
            {video.title}
          </h3>
          <p className="text-gray-600 text-xs md:text-sm line-clamp-2 leading-relaxed">
            {video.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Videos: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, 'videos'), 
      orderBy('order', 'asc')
    );
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const videosData: Video[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.isActive) {
          videosData.push({ id: doc.id, ...data } as Video);
        }
      });
      setVideos(videosData);
      if (videosData.length > 0 && !selectedVideo) {
        setSelectedVideo(videosData[0]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <section id="videos" className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">جاري تحميل الفيديوهات...</p>
          </div>
        </div>
      </section>
    );
  }

  if (videos.length === 0) {
    return null;
  }

  return (
    <section id="videos" className="relative text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-cover z-0"
        style={{ backgroundImage: "url('0000.jpg')" }}
      ></div>

      <div className="absolute inset-0 bg-emerald-green/60 z-[1]"></div>

      <div className="absolute top-0 left-0 w-full h-[100px] md:h-[150px] lg:h-[200px] z-[2]" style={{ transform: 'translateY(-1px) rotate(180deg)' }}>
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path fill="#ecfdf5" fillOpacity="1" d="M0,128L60,149.3C120,171,240,213,360,229.3C480,245,600,235,720,202.7C840,171,960,117,1080,101.3C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20 md:py-24 pt-32 md:pt-40 lg:pt-48 pb-48 md:pb-56 lg:pb-64">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-warm-gold/20 via-soft-gold/30 to-warm-gold/20 rounded-lg transform rotate-1"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-warm-gold/20 via-soft-gold/30 to-warm-gold/20 rounded-lg transform -rotate-1"></div>
            <div className="relative bg-white/10 backdrop-blur-sm border-2 border-warm-gold/50 rounded-lg px-8 py-4">
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
            شاهد مجموعة من اللقاءات والحلقات التلفزيونية والمحاضرات
          </p>
        </div>

        {selectedVideo && (
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                title={selectedVideo.title}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-200 text-lg">{selectedVideo.description}</p>
            </div>
          </div>
        )}

        {videos.length > 1 && (
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold text-white text-center mb-8">المزيد من الفيديوهات</h3>
            
            {/* Horizontal Scrollable Container */}
            <div className="relative group/scroll">
              <div 
                className="flex gap-6 overflow-x-auto pb-6 px-4 scroll-smooth snap-x snap-mandatory"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#D4AF37 rgba(255, 255, 255, 0.1)',
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                {videos.map((video) => (
                  <div key={video.id} className="snap-center">
                    <VideoCard
                      video={video}
                      isActive={selectedVideo?.id === video.id}
                      onClick={() => setSelectedVideo(video)}
                    />
                  </div>
                ))}
              </div>

              {/* Custom Scrollbar Styling */}
              <style dangerouslySetInnerHTML={{__html: `
                .overflow-x-auto::-webkit-scrollbar {
                  height: 10px;
                }
                .overflow-x-auto::-webkit-scrollbar-track {
                  background: rgba(255, 255, 255, 0.1);
                  border-radius: 10px;
                }
                .overflow-x-auto::-webkit-scrollbar-thumb {
                  background: linear-gradient(90deg, #D4AF37, #F4E4BC);
                  border-radius: 10px;
                  transition: all 0.3s ease;
                }
                .overflow-x-auto::-webkit-scrollbar-thumb:hover {
                  background: linear-gradient(90deg, #F4E4BC, #D4AF37);
                }
              `}} />
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[100px] md:h-[150px] lg:h-[200px] z-[2]" style={{ transform: 'translateY(1px)' }}>
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L60,149.3C120,171,240,213,360,229.3C480,245,600,235,720,202.7C840,171,960,117,1080,101.3C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Videos;
