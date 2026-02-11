import { Service, ChatNode } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'ai-apps',
    category: 'Digital & AI',
    title: 'App Factory tramite IA',
    description: 'Generazione di App Web e Mobile in tempi record grazie all\'Intelligenza Artificiale.',
    longDescription: 'Basta attese infinite. In GGMS sviluppiamo esclusivamente Applicazioni tramite Intelligenza Artificiale. Utilizziamo modelli avanzati per generare l\'architettura, il design e le funzionalità della tua prossima App, garantendo una velocità di rilascio impossibile per le agenzie tradizionali.',
    images: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop'
    ],
    features: ['Generazione App via IA', 'Interfacce Adaptive', 'Integrazioni AI Native', 'Rilascio Ultra-Rapido']
  },
  {
    id: 'marketing-adv',
    category: 'Marketing',
    title: 'Marketing & Strategia',
    description: 'Trasformiamo la tua visibilità in conversioni reali.',
    longDescription: 'Dall\'analisi di mercato al posizionamento brand. Pianifichiamo campagne cross-media che colpiscono il target nel momento esatto del bisogno, massimizzando ogni centesimo investito.',
    images: [
      '/Image/ggms_logo_marketing.png', // Percorso corretto per logo Marketing
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop'
    ],
    features: ['Performance Marketing', 'Brand Identity', 'Analisi Competitiva', 'Gestione Budget']
  },
  {
    id: 'social-mgmt',
    category: 'Social Media',
    title: 'Social & Community',
    description: 'Gestione professionale di Instagram, Facebook e TikTok.',
    longDescription: 'La tua azienda merita una narrazione degna di nota. Curiamo ogni post, reel e story per costruire una community fedele e incrementare l\'authority del tuo brand sui canali digitali più caldi del momento.',
    images: [
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=800&auto=format&fit=crop'
    ],
    features: ['Content Production', 'Ads Management', 'Viral Strategy', 'Reporting Mensile']
  },
  {
    id: 'security-video',
    category: 'Sicurezza',
    title: 'Security & Vigilanza',
    description: 'Protezione totale H24 con sistemi intelligenti.',
    longDescription: 'Siamo leader nella sicurezza integrata. Dalla vigilanza non armata ai sistemi di videosorveglianza con riconoscimento IA. Garantiamo la tranquillità dei tuoi spazi con personale qualificato e tecnologie d\'avanguardia.',
    images: [
      'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800&auto=format&fit=crop'
    ],
    features: ['Vigilanza Non Armata', 'Portierato Pro', 'Videosorveglianza IA', 'Pronto Intervento']
  },
  {
    id: 'security-fire',
    category: 'Sicurezza',
    title: 'Sistemi Antincendio',
    description: 'Manutenzione e installazione presidi antincendio a norma di legge.',
    longDescription: 'La sicurezza antincendio è un obbligo e una responsabilità. GGMS offre un servizio completo di fornitura, installazione e manutenzione periodica di estintori, idranti e sistemi di rilevamento fumi.',
    images: [
      '/Image/addetto-antincendio-union-consulting.jpg' // Placeholder per logo Antincendio
    ],
    features: ['Manutenzione Estintori', 'Piani di Evacuazione', 'Rilevamento Fumi', 'Certificazioni Normative']
  }
];

export const CHAT_FLOW: Record<string, ChatNode> = {
  start: {
    id: 'start',
    text: 'Buongiorno! Sono l\'assistente GGMS. Come posso supportare la tua crescita oggi?',
    options: [
      { label: 'Sviluppo App via IA 🚀', nextId: 'info_ai' },
      { label: 'Servizi di Sicurezza 🛡️', nextId: 'info_security' },
      { label: 'Marketing & Social 📈', nextId: 'services_list' },
      { label: 'Parla con un umano', nextId: 'request_info' }
    ]
  },
  services_list: {
    id: 'services_list',
    text: 'Il nostro reparto Marketing e Social è pronto a scalare il tuo business. Vuoi vedere i dettagli o preferisci una consulenza?',
    options: [
      { label: 'Marketing Pubblicitario', nextId: 'info_marketing' },
      { label: 'Social Media Management', nextId: 'info_social' },
      { label: 'Richiedi Preventivo', nextId: 'lead_name' },
      { label: 'Menu principale', nextId: 'start' }
    ]
  },
  info_ai: {
    id: 'info_ai',
    text: 'In GGMS non scriviamo codice riga per riga. Noi GENERIAMO App complete tramite IA. Questo abbatte i tempi di sviluppo dell\'80% e ti permette di avere un prodotto finito e testato in pochi giorni. Vuoi saperne di più?',
    options: [
      { label: 'Voglio un preventivo App', nextId: 'lead_name' },
      { label: 'Vedi esempi App IA', nextId: 'start', scrollTarget: 'digital-ai' },
      { label: 'Indietro', nextId: 'start' }
    ]
  },
  info_marketing: {
    id: 'info_marketing',
    text: 'Pianifichiamo campagne pubblicitarie basate sui dati per garantirti il massimo ritorno sull\'investimento.',
    options: [
      { label: 'Vedi i servizi Marketing', nextId: 'start', scrollTarget: 'marketing' },
      { label: 'Indietro', nextId: 'services_list' }
    ]
  },
  info_social: {
    id: 'info_social',
    text: 'Gestiamo i tuoi profili per trasformare i follower in clienti attivi.',
    options: [
      { label: 'Vedi Social Media', nextId: 'start', scrollTarget: 'social' },
      { label: 'Indietro', nextId: 'services_list' }
    ]
  },
  info_security: {
    id: 'info_security',
    text: 'Dalla vigilanza fisica alla sorveglianza tecnologica e antincendio. Quale area ti preoccupa maggiormente?',
    options: [
      { label: 'Vedi sezione Sicurezza', nextId: 'start', scrollTarget: 'security' },
      { label: 'Contattaci per sopralluogo', nextId: 'lead_name' }
    ]
  },
  location: {
    id: 'location',
    text: 'La nostra sede centrale è a Giulianova (TE), Via G. Di Vittorio, presso il Centro Commerciale I Portici.',
    options: [{ label: 'Torna al menu', nextId: 'start' }]
  },
  request_info: {
    id: 'request_info',
    text: 'Ottima scelta. Un nostro consulente ti ricontatterà. Posso iniziare chiedendoti il tuo nome?',
    inputAction: 'collect_name',
    nextId: 'lead_email'
  },
  lead_name: {
    id: 'lead_name',
    text: 'Qual è il tuo nome?',
    inputAction: 'collect_name',
    nextId: 'lead_email'
  },
  lead_email: {
    id: 'lead_email',
    text: 'Grazie! Un\'ultima cosa: la tua email aziendale?',
    inputAction: 'collect_email',
    nextId: 'lead_finish'
  },
  lead_finish: {
    id: 'lead_finish',
    text: 'Perfetto. I tuoi dati sono stati inoltrati al dipartimento competente. Verrai ricontattato a breve. Posso fare altro per te?',
    options: [{ label: 'Torna all\'inizio', nextId: 'start' }]
  }
};
