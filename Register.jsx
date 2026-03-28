
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserPlus, Mail, Phone, Lock } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // In a real app, this would call an API
    Swal.fire({
      title: 'Account Created!',
      text: 'Your medical profile has been set up successfully.',
      icon: 'success',
      confirmButtonColor: '#2563eb'
    });
    navigate('/login');
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-50 px-6'>
      <div className='bg-white p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md border-t-8 border-primary'>
        <div className='text-center mb-10'>
          <h2 className='text-4xl font-black text-slate-900'>JOIN AR CARE</h2>
          <p className='text-slate-400 mt-2 font-medium'>Create your healthcare account</p>
        </div>

        <form onSubmit={handleRegister} className='space-y-4'>
          <div className='relative'>
            <UserPlus className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400' size={20} />
            <input placeholder='Full Name' required className='w-full pl-12 pr-4 py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-primary transition-all' />
          </div>

          <div className='relative'>
            <Mail className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400' size={20} />
            <input type='email' placeholder='Email Address' required className='w-full pl-12 pr-4 py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-primary transition-all' />
          </div>

          <div className='relative'>
            <Phone className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400' size={20} />
            <input type='tel' placeholder='Phone Number' required className='w-full pl-12 pr-4 py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-primary transition-all' />
          </div>

          <div className='relative'>
            <Lock className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400' size={20} />
            <input type='password' placeholder='Password' required className='w-full pl-12 pr-4 py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-primary transition-all' />
          </div>

          <button className='w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-primary transition-all mt-4'>
            Create Account
          </button>
        </form>

        <p className='mt-8 text-center text-slate-500 font-bold'>
          Already have an account? <Link to='/login' className='text-primary hover:underline'>Login</Link>
        </p>
      </div>
    </div>
  );
}
