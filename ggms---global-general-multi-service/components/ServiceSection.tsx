
import React from 'react';
import GallerySlider from './GallerySlider';
import { Service } from '../types';
import { CheckCircle2, Facebook, Instagram, Music2 } from 'lucide-react';

interface ServiceSectionProps {
  id: string;
  title: string;
  services: Service[];
  accentColor: 'blue' | 'slate' | 'indigo';
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ id, title, services, accentColor }) => {
  const colorMap = {
    blue: 'bg-blue-600',
    slate: 'bg-slate-900',
    indigo: 'bg-indigo-600',
  };

  const textMap = {
    blue: 'text-blue-600',
    slate: 'text-slate-900',
    indigo: 'text-indigo-600',
  };

  const isSocialSection = id === 'social';

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      color: 'hover:bg-[#1877F2]', 
      url: 'https://www.facebook.com/people/GGMS-srl/61585527520398/' 
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      color: 'hover:bg-[#E4405F]', 
      url: 'https://www.instagram.com/ggms.societa?igsh=NjZkdGtlYXJpYWE%3D&utm_source=qr' 
    },
    { 
      name: 'TikTok', 
      icon: Music2, 
      color: 'hover:bg-[#000000]', 
      url: 'https://www.tiktok.com/@ggms.societa' 
    },
  ];

  // Helper per ottenere l'URL del logo basato sull'ID del servizio (Simulazione dei file caricati)
  const getLogoForService = (serviceId: string) => {
    switch (serviceId) {
      case 'marketing-adv': return 'https://i.ibb.co/XfXGXV9/ggms-marketing.png'; // Mock URL basato sull'immagine caricata
      case 'social-mgmt': return 'https://i.ibb.co/mS6mH3Q/ggms-social.png';
      case 'security-video': return 'https://i.ibb.co/YyY1q6K/ggms-vigilanza.png';
      case 'security-fire': return 'https://i.ibb.co/r7C8d4N/ggms-antincendio.png';
      default: return null;
    }
  };

  return (
    <section id={id} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className={`w-12 h-1.5 ${colorMap[accentColor]} mb-6`}></div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic tracking-tighter">{title}</h2>
          </div>
          <p className="max-w-md text-slate-600 font-medium">
            Qualità professionale e loghi distintivi per ogni nostra divisione specializzata.
          </p>
        </div>

        {isSocialSection && (
          <div className="mb-20 p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h4 className="text-2xl font-black text-slate-900 mb-2">Connettiti con noi</h4>
                <p className="text-slate-500 font-medium">Segui le nostre campagne e resta aggiornato sui canali ufficiali GGMS.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-50 text-slate-700 font-bold transition-all hover:text-white ${social.color} hover:-translate-y-1`}
                    >
                      <Icon size={20} />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {services.map((service, idx) => {
            const divisionLogo = getLogoForService(service.id);
            return (
              <div key={service.id} className="group animate-in fade-in slide-in-from-bottom duration-700 bg-white p-8 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all border border-slate-50" style={{ animationDelay: `${idx * 200}ms` }}>
                
                {/* Brand Logo Header */}
                {divisionLogo && (
                  <div className="mb-8 flex justify-center bg-slate-50 p-6 rounded-[2rem] border border-slate-100/50 group-hover:bg-white transition-colors duration-500">
                    <img 
                      src={divisionLogo} 
                      alt={`Logo ${service.title}`} 
                      className="h-32 md:h-40 w-auto object-contain drop-shadow-md"
                    />
                  </div>
                )}

                <div className="mb-8 overflow-hidden rounded-2xl">
                  <GallerySlider images={service.images.filter(img => !img.includes('logo'))} />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${colorMap[accentColor]} text-white`}>
                      Divisione {service.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 italic tracking-tighter uppercase">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {service.longDescription}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    {service.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-slate-700 font-bold text-sm uppercase">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${textMap[accentColor]}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6">
                    <button 
                      onClick={() => document.getElementById('chatbot-trigger')?.click()}
                      className={`inline-flex items-center font-black uppercase tracking-widest text-xs border-b-2 border-transparent hover:border-current transition-all ${textMap[accentColor]}`}
                    >
                      Dettagli divisione &rarr;
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
