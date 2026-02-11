
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { CHAT_FLOW } from '../constants';
import { ChatMessage, ChatOption, ChatAction } from '../types';
import { askGemini } from '../services/gemini';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', sender: 'bot', text: CHAT_FLOW.start.text, timestamp: Date.now() }
  ]);
  const [options, setOptions] = useState<ChatOption[]>(CHAT_FLOW.start.options || []);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', email: '' });
  const [currentAction, setCurrentAction] = useState<ChatAction | null>(null);
  const [mode, setMode] = useState<'standard' | 'ai'>('standard');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const addMessage = (text: string, sender: 'bot' | 'user') => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: Date.now()
    }]);
  };

  const handleOptionClick = async (option: ChatOption) => {
    addMessage(option.label, 'user');
    setOptions([]);
    setIsTyping(true);

    const nextNode = CHAT_FLOW[option.nextId];
    
    setTimeout(async () => {
      setIsTyping(false);
      
      if (nextNode) {
        addMessage(nextNode.text, 'bot');
        setOptions(nextNode.options || []);
        setCurrentAction(nextNode.inputAction || null);
        
        const target = option.scrollTarget || nextNode.scrollTarget;
        if (target) {
            const el = document.getElementById(target);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 600);
  };

  const handleInputSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const text = inputValue;
    setInputValue('');
    addMessage(text, 'user');
    setIsTyping(true);

    if (mode === 'ai') {
      const aiResponse = await askGemini(text);
      setIsTyping(false);
      addMessage(aiResponse, 'bot');
      return;
    }

    setTimeout(() => {
      setIsTyping(false);
      if (currentAction === 'collect_name') {
        const nextNode = CHAT_FLOW['lead_email'];
        setLeadData(prev => ({ ...prev, name: text }));
        addMessage(nextNode.text, 'bot');
        setCurrentAction(nextNode.inputAction || null);
      } else if (currentAction === 'collect_email') {
        const nextNode = CHAT_FLOW['lead_finish'];
        setLeadData(prev => {
          const updated = { ...prev, email: text };
          console.log("Lead Collected:", updated);
          return updated;
        });
        addMessage(nextNode.text, 'bot');
        setOptions(nextNode.options || []);
        setCurrentAction(null);
      } else {
        addMessage("Grazie per il messaggio. Se desideri una risposta personalizzata, attiva la modalità AI cliccando sulle scintille ✨", 'bot');
        setOptions([{ label: 'Torna all\'inizio', nextId: 'start' }]);
      }
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-[360px] md:w-[400px] h-[500px] md:h-[600px] bg-white rounded-3xl shadow-2xl flex flex-col mb-4 overflow-hidden animate-in zoom-in-95 duration-200 origin-bottom-right border border-slate-100">
          <div className="bg-slate-900 text-white p-6 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl transition-colors ${mode === 'ai' ? 'bg-indigo-600' : 'bg-blue-600'}`}>
                {mode === 'standard' ? <Bot className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">GGMS Assistant</h3>
                <p className="text-xs text-slate-400">{mode === 'standard' ? 'Sempre online' : 'Potenziato da AI'}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
               <button 
                onClick={() => setMode(mode === 'standard' ? 'ai' : 'standard')}
                className={`p-2 rounded-lg transition-all ${mode === 'ai' ? 'bg-indigo-600 text-white shadow-lg' : 'hover:bg-white/10 text-slate-400'}`}
                title={mode === 'standard' ? "Attiva Assistente AI" : "Torna alla guida standard"}
               >
                <Sparkles className="w-5 h-5" />
               </button>
               <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg text-slate-400 transition-colors"><X /></button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-slate-50 space-y-4">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
                <div className={`flex gap-3 max-w-[85%] ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${m.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 border border-slate-100'}`}>
                    {m.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${m.sender === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'}`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none flex gap-1 shadow-sm border border-slate-100">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-slate-100 shrink-0">
            {options.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(opt)}
                    className="bg-white hover:bg-blue-50 hover:text-blue-600 text-slate-700 text-sm px-4 py-2 rounded-full transition-all border border-slate-200 shadow-sm font-semibold"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
            <form onSubmit={handleInputSubmit} className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={currentAction ? "Rispondi qui..." : mode === 'standard' ? "Scrivi un messaggio..." : "Chiedi qualsiasi cosa a GGMS AI..."}
                className="w-full bg-slate-100 text-slate-900 border-none rounded-2xl py-3.5 pl-4 pr-12 text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl transition-all ${inputValue.trim() ? 'text-blue-600 bg-blue-100 hover:bg-blue-200' : 'text-slate-400 opacity-50'}`}
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        id="chatbot-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all group relative ${isOpen ? 'bg-slate-900 text-white' : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105'}`}
        aria-label={isOpen ? "Chiudi assistente" : "Apri assistente"}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {!isOpen && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white animate-pulse">1</span>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
