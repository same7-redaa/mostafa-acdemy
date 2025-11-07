import React from 'react';

interface Prayer {
  name: string;
  time: string;
}

const prayerSchedule: Prayer[] = [
  { name: 'الفجر', time: '04:30 AM' },
  { name: 'الظهر', time: '01:15 PM' },
  { name: 'العصر', time: '05:00 PM' },
  { name: 'المغرب', time: '07:45 PM' },
  { name: 'العشاء', time: '09:15 PM' },
];

const PrayerTimes: React.FC = () => {
  return (
    <section id="prayer-times" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-emerald-green uppercase mb-4">أوقات الصلاة اليومية</h2>
          <p className="text-gray-600 md:text-lg">
            انضم إلينا في صلاة الجماعة. تقام الصلاة بعد 15 دقيقة من الأذان.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border-t-8 border-soft-gold">
          <ul className="divide-y divide-gray-200">
            {prayerSchedule.map((prayer, index) => (
              <li key={prayer.name} className={`flex justify-between items-center p-6 transition-colors duration-300 ${index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'} hover:bg-emerald-green/10`}>
                <span className="font-sans font-bold text-xl text-emerald-green">{prayer.name}</span>
                <span className="font-sans font-bold text-xl text-dark-charcoal tracking-wider">{prayer.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PrayerTimes;