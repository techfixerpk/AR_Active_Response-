
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ServiceCard from './ServiceCard';
import EquipmentCard from './EquipmentCard';
import WhatsAppFloat from './WhatsAppFloat';
import { services } from './services';
import { equipments } from './equipments';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ShieldCheck, Award, Clock } from 'lucide-react';

const StatsCounter = () => {
  const stats = [
    { label: 'Satisfied Patients', value: '1,500+' },
    { label: 'Expert ICU Staff', value: '50+' },
    { label: 'Service Hours', value: '24/7' },
    { label: 'Recovery Rate', value: '99%' }
  ];
  return (
    <section className='py-16 bg-slate-50 border-y border-slate-200'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
          {stats.map((s, i) => (
            <div key={i}>
              <p className='text-4xl md:text-5xl font-black text-primary mb-2'>{s.value}</p>
              <p className='text-slate-500 font-bold uppercase tracking-widest text-xs'>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MobileStickyCall = () => (
  <div className='md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-200 p-4 flex gap-4 z-[1000] shadow-[0_-10px_30px_rgba(0,0,0,0.05)]'>
    <a href='tel:03472241304' className='flex-1 bg-slate-900 text-white flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-sm shadow-xl shadow-slate-900/20'>
      <Phone size={18} /> Call Now
    </a>
    <a href='https://wa.me/923472241304' className='flex-1 bg-[#25D366] text-white flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-sm shadow-xl shadow-green-500/20'>
      <MessageCircle size={18} /> WhatsApp
    </a>
  </div>
);

const Steps = () => {
  const steps = [
    { id: '01', title: 'Contact Us', desc: 'Call or WhatsApp us with your medical requirement.' },
    { id: '02', title: 'Expert Consultation', desc: 'Our team will assess the patient condition.' },
    { id: '03', title: 'Home Setup', desc: 'We deliver equipment or send staff to your doorstep.' },
    { id: '04', title: 'Continuous Care', desc: 'Monitoring and recovery support 24/7.' }
  ];
  return (
    <section className='py-24 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl font-black text-center mb-16'>How It <span className='text-primary'>Works</span></h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {steps.map((step) => (
            <div key={step.id} className='relative'>
              <span className='text-8xl font-black text-slate-100 absolute -top-10 -left-4 z-0'>{step.id}</span>
              <div className='relative z-10'>
                <h3 className='text-xl font-black mb-3 text-slate-900'>{step.title}</h3>
                <p className='text-slate-500 font-medium leading-relaxed'>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className='min-h-screen bg-white pb-20 md:pb-0'>
      <Navbar />
      <Hero />
      <StatsCounter />

      <section id='services' className='py-24 px-6 bg-slate-50'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-black text-slate-900 mb-4'>Premium Medical Services</h2>
            <p className='text-slate-500 font-medium max-w-2xl mx-auto'>Expert healthcare solutions delivered with compassion and professional excellence directly to your home.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <Steps />

      <section id='equipments' className='py-24 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'>
            <div className='max-w-2xl'>
              <h2 className='text-4xl md:text-5xl font-black text-slate-900 mb-4'>Medical Equipment</h2>
              <p className='text-slate-500 font-medium'>High-quality medical machinery available for instant rent or sale to support patient recovery.</p>
            </div>
            <button className='bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all'>View All Inventory</button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {equipments.slice(0, 8).map((item) => (
              <EquipmentCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <footer className='bg-slate-900 text-white py-12 px-6 mb-20 md:mb-0'>
        <div className='max-w-7xl mx-auto text-center'>
          <p className='text-primary font-black text-2xl mb-4'>AR NURSING CARE</p>
          <p className='text-slate-400 mb-8'>Serving Rawalpindi & Islamabad with Pride.</p>
          <div className='pt-8 border-t border-white/10 text-slate-500 text-sm'>
            &copy; {new Date().getFullYear()} AR (Active Response). Managed by Awais Babar.
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
      <MobileStickyCall />
    </div>
  );
}
