
import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Marketing', href: '#marketing' },
    { name: 'Social', href: '#social' },
    { name: 'Sicurezza', href: '#security' },
    { name: 'Sponsor', href: '#sponsorships' },
    { name: 'Contatti', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
          <div className="bg-slate-900 text-white p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
            <Shield className="w-6 h-6" />
          </div>
          <span className={`text-2xl font-black tracking-tighter italic ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>GGMS</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-black uppercase tracking-widest transition-all hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 pb-1 ${isScrolled ? 'text-slate-600' : 'text-slate-900 md:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button 
            className="bg-blue-600 hover:bg-slate-900 text-white px-6 py-2.5 rounded-full font-black text-sm uppercase tracking-widest transition-all shadow-lg shadow-blue-500/20"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Preventivo
          </button>
        </div>

        {/* Mobile Trigger */}
        <button 
          className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl animate-in fade-in slide-in-from-top duration-300 border-t border-slate-50">
          <div className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-black text-slate-800 border-b border-slate-100 pb-2 uppercase tracking-tighter"
              >
                {link.name}
              </a>
            ))}
            <button 
              className="bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Richiedi Preventivo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
