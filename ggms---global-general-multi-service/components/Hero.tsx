
import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image with optimized filter */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
          alt="GGMS Headquarters" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold text-xs mb-8 uppercase tracking-widest backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            AI-Driven App Development
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.05] mb-8 uppercase italic tracking-tighter">
            Marketing, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">App & IA.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-medium max-w-xl">
            Progettiamo il futuro del tuo business integrando sicurezza fisica, strategie digitali e <span className="text-white font-bold underline decoration-blue-500 underline-offset-4">sviluppo App interamente generate da IA</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <button 
              onClick={() => document.getElementById('digital-ai')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-slate-950 transition-all group shadow-2xl shadow-blue-500/20 hover:scale-105"
            >
              Scopri le App IA <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('chatbot-trigger')?.click()}
              className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-xl text-white border border-white/10 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all shadow-xl"
            >
              <MessageSquare size={22} className="text-blue-400" /> Parla con il Bot
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Tag */}
      <div className="absolute bottom-12 left-6 flex items-center gap-4 text-slate-500 font-bold text-[10px] uppercase tracking-[0.3em] z-20">
        <div className="w-12 h-[2px] bg-blue-600"></div>
        <span>Sede Ufficiale - Giulianova (TE)</span>
      </div>
    </section>
  );
};

export default Hero;
