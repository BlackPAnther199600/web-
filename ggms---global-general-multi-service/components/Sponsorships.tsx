
import React from 'react';
import { Trophy, Star, Zap, Heart } from 'lucide-react';
import GallerySlider from './GallerySlider';

const Sponsorships: React.FC = () => {
  const partnershipImages = [
    '/Image/Gemini_Generated_Image_iw0y08iw0y08iw0y.png', // Focus Moto Racing (CM Racing)
    '/Image/Gemini_Generated_Image_kdopxfkdopxfkdop.png', // Focus Moto Racing (CM Racing)
    '/Image/moto_logo_ggms.png' // Focus Moto Racing (CM Racing)
  ];

  return (
    <section id="sponsorships" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-black tracking-widest uppercase text-sm">Partnership Ufficiali</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6 uppercase italic tracking-tighter">Sponsorizzazioni & Eccellenza</h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            GGMS sostiene attivamente lo sport e l'eccellenza sul territorio. Siamo orgogliosi di affiancare campioni e atleti che condividono i nostri valori di precisione, forza e inclusività.
          </p>
        </div>

        <div className="mb-24 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl bg-white">
             <GallerySlider images={partnershipImages} interval={6000} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CM Racing */}
          <div className="bg-slate-950 rounded-[3rem] p-10 md:p-14 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000">
               <Zap size={300} className="text-yellow-400" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-white p-3 rounded-2xl">
                   <Trophy className="text-slate-950 w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">CM Racing Team</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-slate-400 text-xl leading-relaxed">
                  Supportiamo l'adrenalina e la tecnologia nel mondiale Supersport. Il logo GGMS brilla sulla <span className="text-white font-bold">Triumph #18</span>, sinonimo di velocità e precisione millimetrica.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                    <h4 className="text-yellow-400 font-black text-[10px] uppercase mb-1">Moto</h4>
                    <p className="text-white font-bold">Triumph #18</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                    <h4 className="text-blue-400 font-black text-[10px] uppercase mb-1">Ruolo</h4>
                    <p className="text-white font-bold">Official Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Amicacci */}
          <div className="bg-blue-600 rounded-[3rem] p-10 md:p-14 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:-rotate-12 transition-all duration-1000">
               <Star size={300} className="text-white" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                  <Heart className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black italic uppercase tracking-tighter">Amicacci Abruzzo</h3>
              </div>
              
              <h4 className="text-4xl md:text-5xl font-black italic mb-8 flex items-center gap-4">
                <Star className="text-yellow-400 w-10 h-10 fill-yellow-400" />
                Scudetto 2023
              </h4>
              
              <p className="text-blue-50 text-xl leading-relaxed">
                Orgogliosi sostenitori dell'eccellenza inclusiva. Accompagniamo i campioni d'Italia nel basket in carrozzina verso nuovi traguardi nazionali ed europei.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorships;
