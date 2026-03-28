
import React from 'react';
import { services } from './services';
import { equipments } from './equipments';
import { Activity, Package, Users, Clock, ShieldCheck } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { label: 'Total Services', value: services.length, icon: Activity, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Medical Equipment', value: equipments.length, icon: Package, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Staff Support', value: '24/7', icon: Clock, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Patient Reach', value: '1,500+', icon: Users, color: 'text-orange-600', bg: 'bg-orange-50' }
  ];

  return (
    <div className='p-8 bg-slate-50 min-h-screen'>
      <div className='mb-10 flex justify-between items-end'>
        <div>
          <h1 className='text-4xl font-black text-slate-900 tracking-tight'>AR Management Center</h1>
          <p className='text-slate-500 font-medium'>System Administrator Dashboard • Rawalpindi & Islamabad</p>
        </div>
        <div className='bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3'>
          <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
          <span className='font-black text-slate-700 text-sm uppercase tracking-widest'>Server: Online</span>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
        {stats.map((item, idx) => (
          <div key={idx} className='bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-center gap-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all'>
            <div className={`p-4 ${item.bg} ${item.color} rounded-2xl`}>
              <item.icon size={28} />
            </div>
            <div>
              <p className='text-slate-400 text-xs font-bold uppercase tracking-widest'>{item.label}</p>
              <h3 className='text-3xl font-black text-slate-900'>{item.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2 bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100'>
          <h2 className='text-2xl font-black mb-8 text-slate-800 flex items-center gap-3'>
            <ShieldCheck className='text-primary' /> Operational Health
          </h2>
          <div className='space-y-6'>
            <div className='p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between'>
              <div>
                <p className='font-black text-slate-900'>WhatsApp Communication Bridge</p>
                <p className='text-sm text-slate-500 font-medium'>Direct patient inquiry channel is active.</p>
              </div>
              <span className='px-4 py-2 bg-green-100 text-green-700 text-xs font-black rounded-full uppercase'>Connected</span>
            </div>
            <div className='p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between'>
              <div>
                <p className='font-black text-slate-900'>Inventory Synchronization</p>
                <p className='text-sm text-slate-500 font-medium'>Last synced: Just now</p>
              </div>
              <span className='px-4 py-2 bg-blue-100 text-blue-700 text-xs font-black rounded-full uppercase'>Synced</span>
            </div>
          </div>
        </div>

        <div className='bg-slate-900 p-10 rounded-[3rem] shadow-2xl text-white flex flex-col justify-between'>
          <div>
            <h2 className='text-2xl font-black mb-4'>Admin Access</h2>
            <p className='text-slate-400 font-medium mb-8'>Logged in as Awais Babar. High-level management tools enabled.</p>
          </div>
          <div className='space-y-4'>
            <button className='w-full p-5 bg-primary text-white rounded-2xl font-black shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all'>
              Manage All Data
            </button>
            <button className='w-full p-5 bg-white/5 text-white border border-white/10 rounded-2xl font-black hover:bg-white/10 transition-all'>
              View Activity Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
