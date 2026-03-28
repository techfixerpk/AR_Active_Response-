
import React from 'react';
import { ShoppingCart, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EquipmentCard({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className='bg-slate-900 text-white rounded-[2.5rem] p-8 relative overflow-hidden group border border-slate-800 shadow-2xl shadow-slate-900/20'
    >
      <div className='absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all'></div>

      <div className='flex justify-between items-start mb-12 relative z-10'>
        <div className='bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/5'>
          <ShieldCheck className='text-primary' size={24} />
        </div>
        <span className='bg-primary/20 text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-primary/20'>
          {item.type}
        </span>
      </div>

      <div className='relative z-10'>
        <h3 className='text-2xl font-black mb-2 group-hover:text-primary transition-colors'>{item.name}</h3>
        <p className='text-3xl font-black text-white mb-8'>{item.price}</p>

        <button
          className='w-full bg-white text-slate-900 py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-primary hover:text-white transition-all shadow-xl shadow-black/20'
          onClick={() => window.open(`https://wa.me/923472241304?text=I am interested in ${item.name}`, '_blank')}
        >
          <ShoppingCart size={20} /> Inquiry Now
        </button>
      </div>
    </motion.div>
  );
}
