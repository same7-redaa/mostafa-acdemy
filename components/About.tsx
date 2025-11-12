import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="animate-fade-in-left">
            <img 
              src="https://picsum.photos/id/23/800/600" 
              alt="Community gathering" 
              className="rounded-3xl shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
          </div>
          <div className="animate-fade-in-right">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-emerald-green uppercase mb-4">منارة الإيمان والمجتمع</h2>
            <p className="font-serif-elegant text-soft-gold text-lg mb-6">تاريخنا وتأسيسنا</p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              تأسس مركز المؤذن على مبادئ السلام والمعرفة والوحدة، وكان بمثابة بيت روحي لمجتمعنا لأكثر من عقدين. نحن ملتزمون بتعزيز فهم أعمق للإسلام وتقوية الروابط بين أعضائنا.
            </p>
            <p className="text-gray-600 leading-relaxed">
              أبوابنا مفتوحة لكل من يبحث عن الطمأنينة والإرشاد. نقدم مجموعة واسعة من البرامج، من الصلوات اليومية والفصول التعليمية إلى مبادرات خدمة المجتمع وحوارات الأديان.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;