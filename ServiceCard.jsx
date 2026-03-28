
import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceCard({ service }) {
  const Icon = Icons[service.icon] || Icons.Activity;

  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.15)' }}
      className='bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-50 group hover:border-primary/30 transition-all duration-500'
    >
      <div className='w-20 h-20 bg-blue-50 text-primary rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-700'>
        <Icon size={40} strokeWidth={1.5} />
      </div>
      <h3 className='text-2xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors'>{service.title}</h3>
      <p className='text-slate-500 font-bold leading-relaxed mb-8'>
        Our specialized clinical team provides ICU-level care and patient monitoring, ensuring professional recovery standards in the comfort of your home environment.
      </p>
      <div className='flex items-center justify-between'>
        <span className='text-primary font-black text-sm uppercase tracking-widest'>24/7 Available</span>
        <button
          onClick={() => window.open(`https://wa.me/923472241304?text=Interested in ${service.title}`, '_blank')}
          className='bg-slate-900 text-white p-3 rounded-2xl hover:bg-primary transition-all'
        >
          <Icons.ArrowRight size={20} />
        </button>
      </div>
    </motion.div>
  );
}
