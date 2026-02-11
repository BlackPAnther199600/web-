
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Marco Valeri",
    role: "CEO di TechFlow S.r.l.",
    text: "GGMS ha rivoluzionato il nostro modo di fare marketing. La loro strategia social ci ha portato un incremento del 40% nelle vendite in soli 6 mesi.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "Laura Bianchi",
    role: "Proprietaria Retail Hub",
    text: "Il servizio di vigilanza è impeccabile. Da quando abbiamo installato i sistemi GGMS, la sicurezza del nostro magazzino non è più una preoccupazione.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "Stefano Rossi",
    role: "Responsabile Marketing Luxury Living",
    text: "Professionisti seri e puntuali. La gestione social è creativa e sempre sul pezzo. Un partner fondamentale per la nostra crescita.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-black tracking-widest uppercase text-sm">Testimonianze</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 italic tracking-tighter uppercase">Cosa dicono di noi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 relative hover:-translate-y-2 transition-transform border border-slate-100">
              <Quote className="absolute top-6 right-8 text-blue-100 w-12 h-12" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-8 relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-blue-500" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-400 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
