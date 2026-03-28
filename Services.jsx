
import React, { useState } from 'react';
import { services } from './services';
import ServiceCard from './ServiceCard';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { LayoutGrid, ListFilter } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('All');

  // Logic for categorization (can be expanded in services.js later)
  const filteredServices = activeTab === 'All'
    ? services
    : services.filter(s => s.id % 2 === 0); // Mock filter logic for now

  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar />
      <div className='pt-20 pb-24 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-8'>
            <div className='max-w-2xl'>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text-primary font-bold uppercase tracking-widest text-sm mb-4 block'
              >
                Professional Care Solutions
              </motion.span>
              <h1 className='text-5xl md:text-6xl font-black text-slate-900 leading-tight'>
                Specialized <span className='text-primary'>Medical</span> Services
              </h1>
            </div>

            <div className='flex gap-2 bg-white p-2 rounded-2xl shadow-sm border border-slate-100'>
              {['All', 'ICU Care', 'General', 'Diagnostics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                    activeTab === tab ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400 hover:text-primary'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>

          <div className='mt-20 p-12 bg-primary rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-primary/30'>
            <div>
              <h2 className='text-3xl font-black mb-2'>Need a custom medical plan?</h2>
              <p className='font-medium opacity-90 text-lg'>Our doctors are available 24/7 for consultation and home assessment.</p>
            </div>
            <button className='bg-white text-primary px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-900 hover:text-white transition-all'>
              Contact Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
