
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServiceSection from './components/ServiceSection';
import Sponsorships from './components/Sponsorships';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import { SERVICES_DATA } from './constants';

const App: React.FC = () => {
  const aiServices = SERVICES_DATA.filter(s => s.category === 'Digital & AI');
  const marketingServices = SERVICES_DATA.filter(s => s.category === 'Marketing');
  const socialServices = SERVICES_DATA.filter(s => s.category === 'Social Media');
  const securityServices = SERVICES_DATA.filter(s => s.category === 'Sicurezza');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <About />

        <ServiceSection 
          id="digital-ai" 
          title="Digital & Intelligenza Artificiale" 
          services={aiServices} 
          accentColor="indigo" 
        />

        <ServiceSection 
          id="marketing" 
          title="Marketing Pubblicitario" 
          services={marketingServices} 
          accentColor="blue" 
        />

        <ServiceSection 
          id="social" 
          title="Social Media Management" 
          services={socialServices} 
          accentColor="blue" 
        />
        
        <ServiceSection 
          id="security" 
          title="Sicurezza & Vigilanza" 
          services={securityServices} 
          accentColor="slate" 
        />

        <Sponsorships />

        <Testimonials />

        <ContactForm />

        {/* Call to Action Banner */}
        <section className="py-24 px-6 bg-blue-600 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-8 italic">Diventa leader del tuo settore con GGMS</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Non lasciare nulla al caso. Proteggi la tua azienda e scala il mercato con i nostri servizi integrati di eccellenza.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 hover:bg-slate-100 px-12 py-5 rounded-full font-black text-xl shadow-xl transition-all hover:scale-105"
            >
              Inizia Ora il Tuo Progetto
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
