
import React from 'react';
import { Target, Users, Award, Sparkles, Building2, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                alt="Il team GGMS al lavoro" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <span className="text-blue-600 font-black tracking-widest uppercase text-sm">Chi Siamo</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6 uppercase italic tracking-tighter">Innovazione Multi-Service</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                GGMS ha superato il concetto di agenzia tradizionale. Siamo specialisti nella **generazione di App tramite Intelligenza Artificiale**, integrando questo potere digitale con strategie di **Marketing d'impatto** e **Sicurezza avanzata**. Non facciamo sviluppo tradizionale, costruiamo soluzioni intelligenti.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 uppercase tracking-tight">App via IA</h4>
                  <p className="text-sm text-slate-500">Esclusivamente App Web e Mobile sviluppate con modelli di IA.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 uppercase tracking-tight">Strategia ROI</h4>
                  <p className="text-sm text-slate-500">Ogni investimento deve generare un ritorno misurabile.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center">
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 uppercase tracking-tight">Sede Fisica</h4>
                  <p className="text-sm text-slate-500">Siamo a Giulianova, pronti ad accoglierti nei nostri uffici.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 uppercase tracking-tight">Leader Security</h4>
                  <p className="text-sm text-slate-500">Vigilanza e videosorveglianza con standard d'eccellenza.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
