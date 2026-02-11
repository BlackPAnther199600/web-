
import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin, Shield, Music2, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-950 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
              <Shield className="w-10 h-10 text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="text-4xl font-black tracking-tighter italic">GGMS</span>
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              Global General Multi Service. <br/>Il partner strategico per la crescita e la protezione del tuo business a Giulianova e in tutta Italia.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, url: 'https://www.facebook.com/people/GGMS-srl/61585527520398/', color: 'hover:bg-blue-600' },
                { icon: Instagram, url: 'https://www.instagram.com/ggms.societa?igsh=NjZkdGtlYXJpYWE%3D&utm_source=qr', color: 'hover:bg-pink-600' },
                { icon: Music2, url: 'https://www.tiktok.com/@ggms.societa', color: 'hover:bg-slate-100 hover:text-black' }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`bg-slate-900 p-4 rounded-2xl transition-all text-slate-400 hover:text-white ${social.color} hover:-translate-y-1 shadow-xl`}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 mb-8 italic">Soluzioni</h4>
            <ul className="space-y-5 text-slate-400 font-bold">
              <li><a href="#digital-ai" className="hover:text-blue-400 transition-colors flex items-center gap-2">Sviluppo App via IA <ExternalLink size={12}/></a></li>
              <li><a href="#marketing" className="hover:text-blue-400 transition-colors">Marketing Strategico</a></li>
              <li><a href="#social" className="hover:text-blue-400 transition-colors">Social Management</a></li>
              <li><a href="#security" className="hover:text-blue-400 transition-colors">Security & Vigilanza</a></li>
              <li><a href="#security" className="hover:text-blue-400 transition-colors">Sistemi Antincendio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 mb-8 italic">Azienda</h4>
            <ul className="space-y-5 text-slate-400 font-bold">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Chi Siamo</a></li>
              <li><a href="#sponsorships" className="hover:text-blue-400 transition-colors">Partnership</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonianze</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Lavora con noi</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 mb-8 italic">HQ Contacts</h4>
            <ul className="space-y-7 text-slate-400 font-bold">
              <li className="flex gap-4">
                <MapPin className="text-blue-500 flex-shrink-0" size={24} />
                <span className="text-sm leading-snug uppercase italic tracking-tighter">Via G. Di Vittorio, C.C. I Portici,<br/>64021 Giulianova (TE)</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-blue-500 flex-shrink-0" size={24} />
                <span className="text-xl font-black italic">+39 329 7644583</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-blue-500 flex-shrink-0" size={24} />
                <div className="flex flex-col gap-1 text-xs uppercase tracking-tighter">
                  <a href="mailto:ggmssorgentone@gmail.com" className="hover:text-white transition-colors">ggmssorgentone@gmail.com</a>
                  <a href="mailto:ggmssocieta@gmail.com" className="hover:text-white transition-colors">ggmssocieta@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} GGMS S.r.l. - P.IVA 02146900676
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-600">
            <a href="#" className="hover:text-white">Cookie</a>
            <a href="#" className="hover:text-white">Legal Notes</a>
            <a href="#" className="hover:text-white">Credits</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
