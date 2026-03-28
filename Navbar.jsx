
import React, { useState } from 'react';
import { Phone, Menu, X, HeartPulse } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white/80 backdrop-blur-md sticky top-0 z-[100] border-b border-slate-100'>
      <div className='max-w-7xl mx-auto px-6 h-20 flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <div className='bg-primary p-2 rounded-xl'>
            <HeartPulse className='text-white' size={24} />
          </div>
          <span className='text-2xl font-black text-slate-900 tracking-tighter'>AR CARE</span>
        </div>

        <div className='hidden md:flex items-center gap-10 font-bold text-slate-600'>
          <a href='#home' className='hover:text-primary transition-colors'>Home</a>
          <a href='#services' className='hover:text-primary transition-colors'>Services</a>
          <a href='#equipments' className='hover:text-primary transition-colors'>Equipment</a>
          <a href='tel:03472241304' className='bg-slate-900 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-primary transition-all shadow-lg shadow-slate-900/10'>
            <Phone size={18} /> 0347-2241304
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className='md:hidden p-2 text-slate-900'>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className='md:hidden bg-white border-t border-slate-100 p-6 space-y-4 font-bold flex flex-col animate-in slide-in-from-top'>
          <a href='#home' onClick={() => setIsOpen(false)}>Home</a>
          <a href='#services' onClick={() => setIsOpen(false)}>Services</a>
          <a href='#equipments' onClick={() => setIsOpen(false)}>Equipment</a>
          <a href='tel:03472241304' className='text-primary'>Call Emergency</a>
        </div>
      )}
    </nav>
  );
}
