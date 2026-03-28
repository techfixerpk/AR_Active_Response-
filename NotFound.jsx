
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-slate-50 flex items-center justify-center px-6'>
      <div className='max-w-md w-full text-center'>
        <div className='bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100'>
          <div className='w-24 h-24 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8 animate-pulse'>
            <AlertCircle size={48} />
          </div>
          <h1 className='text-6xl font-black text-slate-900 mb-4'>404</h1>
          <h2 className='text-2xl font-bold text-slate-800 mb-4'>Page Not Found</h2>
          <p className='text-slate-500 font-medium mb-10 leading-relaxed'>
            The medical resource or page you are looking for has been moved or doesn't exist.
          </p>
          <Link
            to='/'
            className='inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all w-full justify-center'
          >
            <Home size={20} /> Back to Safety
          </Link>
        </div>
        <p className='mt-8 text-slate-400 font-bold uppercase tracking-widest text-xs'>
          AR (Active Response) Care Support
        </p>
      </div>
    </div>
  );
}
