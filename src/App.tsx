import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Offer from './components/Offer';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import Map from './components/Map';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const handleBookService = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    handleBookService();
  };

  return (
    <div className="min-h-screen bg-brand-50 flex flex-col selection:bg-forest-600 selection:text-white">
      
      {/* Navigation Header */}
      <Header 
        onContactClick={scrollToContact} 
        onBookClick={handleBookService} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* Hero Banner Section */}
        <Hero 
          onBookClick={handleBookService} 
          onContactClick={scrollToContact} 
        />

        {/* Detailed About section */}
        <About />

        {/* Custom Program/Service Offers */}
        <Offer onBookClick={handleBookService} />

        {/* Advantages / Dlaczego warto */}
        <WhyUs />

        {/* Interactive Gallery with dynamic Lightbox overlay */}
        <Gallery />

        {/* Real Address and Google Map location block */}
        <Map />

        {/* Interactive Booking / Contact Form with Local SEO */}
        <ContactForm />

      </main>

      {/* Footer & Local Information */}
      <Footer />

    </div>
  );
}
