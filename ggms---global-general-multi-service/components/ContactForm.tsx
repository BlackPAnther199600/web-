
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div>
            <span className="text-blue-600 font-black tracking-widest uppercase text-sm">Contatti</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 italic tracking-tighter uppercase">Richiedi una Consulenza Gratuita</h2>
            <p className="text-lg text-slate-600 mt-4 leading-relaxed">
              Il nostro team è pronto ad ascoltare le tue esigenze e progettare una soluzione su misura per la tua attività. Compila il modulo e sarai ricontattato entro 24 ore.
            </p>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-4">Perché contattarci?</h4>
            <ul className="space-y-3">
              {["Analisi gratuita del posizionamento", "Sopralluogo tecnico per la sicurezza", "Preventivi trasparenti senza impegno", "Consulenza dedicata H24"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-50 relative z-10">
          {status === 'success' ? (
            <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Messaggio Inviato!</h3>
              <p className="text-slate-500 font-medium">Grazie per averci scelto. Ti risponderemo a breve.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-blue-600 font-bold hover:underline"
              >
                Invia un altro messaggio
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-1">Nome Completo</label>
                  <input required type="text" className="w-full bg-slate-50 border-2 border-slate-100 focus:border-blue-500 focus:bg-white rounded-2xl p-4 outline-none transition-all" placeholder="Esempio: Mario Rossi" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-1">Email Aziendale</label>
                  <input required type="email" className="w-full bg-slate-50 border-2 border-slate-100 focus:border-blue-500 focus:bg-white rounded-2xl p-4 outline-none transition-all" placeholder="mario.rossi@azienda.it" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 ml-1">Servizio d'Interesse</label>
                <select className="w-full bg-slate-50 border-2 border-slate-100 focus:border-blue-500 focus:bg-white rounded-2xl p-4 outline-none transition-all appearance-none cursor-pointer">
                  <option>Seleziona un'opzione...</option>
                  <option>Marketing Pubblicitario</option>
                  <option>Social Media Management</option>
                  <option>Sicurezza & Vigilanza</option>
                  <option>Altro / Richiesta Generica</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 ml-1">Il Tuo Messaggio</label>
                <textarea rows={4} className="w-full bg-slate-50 border-2 border-slate-100 focus:border-blue-500 focus:bg-white rounded-2xl p-4 outline-none transition-all resize-none" placeholder="Raccontaci brevemente di cosa hai bisogno..."></textarea>
              </div>
              <button 
                disabled={status === 'sending'}
                type="submit" 
                className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl disabled:opacity-50 group"
              >
                {status === 'sending' ? 'Invio in corso...' : (
                  <>
                    Invia Richiesta <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              <p className="text-[10px] text-slate-400 text-center uppercase tracking-tighter">
                Inviando questo modulo accetti la nostra privacy policy e il trattamento dei dati personali.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
