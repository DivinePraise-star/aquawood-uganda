
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Methodology from '@/components/Methodology';
import Outcomes from '@/components/Outcomes';
import MapSection from '@/components/MapSection';
import Team from '@/components/Team';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Methodology />
      <Outcomes />
      <MapSection />
      <Team />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
