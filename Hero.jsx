
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Award } from 'lucide-react';

export default function Hero() {
  return (
    <div className='relative pt-20 pb-32 px-6 overflow-hidden'>
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-[120px]'></div>
        <div className='absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-[150px]'></div>
      </div>

      <div className='max-w-7xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8 border border-blue-100'
        >
          <Award size={16} /> #1 Home Healthcare in Twin Cities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='text-5xl md:text-8xl font-black text-slate-900 leading-[1.1] mb-8'
        >
          Expert ICU Care <br /> <span className='text-primary'>At Your Home.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto mb-12 leading-relaxed'
        >
          We provide 24/7 professional nursing services and premium medical equipment
          rental to ensure your loved ones recover with dignity and comfort.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='flex flex-wrap justify-center gap-4'
        >
          <button className='bg-primary text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all'>
            Book a Service
          </button>
          <button className='bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-[2rem] font-black text-lg hover:bg-slate-50 transition-all'>
            Browse Equipment
          </button>
        </motion.div>
      </div>
    </div>
  );
}
