import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import SheikhAbout from './components/SheikhAbout';
import Testimonials from './components/Testimonials';
import Videos from './components/Videos';
import Ijazat from './components/Ijazat';
import Packages from './components/Packages';
import PaymentMethods from './components/PaymentMethods';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-dark-charcoal min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <SheikhAbout />
        <Testimonials />
        <Videos />
        <Packages />
        <Ijazat />
        <PaymentMethods />
      </main>
      <Footer />
    </div>
  );
};

export default App;