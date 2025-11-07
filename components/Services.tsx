import React from 'react';
import { VisionIcon, MissionIcon } from './icons';

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => {
  return (
    <div className="bg-gray-50 rounded-3xl p-8 text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl border border-gray-100">
      <div className="inline-block p-4 bg-emerald-green/10 rounded-2xl mb-6">
        {icon}
      </div>
      <h3 className="font-display text-2xl font-bold text-emerald-green uppercase mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{children}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-emerald-green uppercase mb-4">مبادئنا الأساسية</h2>
          <p className="text-gray-600 md:text-lg">
            نوجه مجتمعنا نحو مستقبل من الإيمان والتفاهم والرحمة.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <ServiceCard icon={<VisionIcon />} title="رؤيتنا">
              أن نكون مركزًا إسلاميًا رائدًا يلهم ويعلم ويمكّن الأفراد من عيش حياة الإيمان والهدف وخدمة الإنسانية، مسترشدين بتعاليم القرآن والسنة.
            </ServiceCard>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <ServiceCard icon={<MissionIcon />} title="رسالتنا">
              توفير بيئة ترحيبية للعبادة والتعلم، وتعزيز شعور قوي بالمجتمع، والترويج لفهم رحيم ودقيق للإسلام من خلال التواصل والخدمة.
            </ServiceCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;