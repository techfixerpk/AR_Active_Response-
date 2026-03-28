
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Swal from 'sweetalert2';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;

    try {
      const user = login({ email, pass });

      Swal.fire({
        title: 'Welcome Back!',
        text: user.isAdmin ? 'Logged in as Admin (Awais Babar)' : 'Login Successful',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
      });

      setTimeout(() => {
        if (user.isAdmin) navigate('/admin');
        else navigate('/');
      }, 2000);
    } catch (err) {
      Swal.fire('Error', 'Invalid credentials', 'error');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-50'>
      <div className='bg-white p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md border-b-8 border-primary'>
        <div className='text-center mb-8'>
          <h2 className='text-4xl font-black text-slate-900'>AR LOGIN</h2>
          <p className='text-slate-400 mt-2 font-medium'>Access your healthcare portal</p>
        </div>
        <form onSubmit={handleLogin} className='space-y-5'>
          <div className='space-y-1'>
            <label className='text-sm font-bold text-slate-700 ml-2'>Email Address</label>
            <input name='email' type='email' placeholder='name@example.com' required
              className='w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-primary transition-all' />
          </div>
          <div className='space-y-1'>
            <label className='text-sm font-bold text-slate-700 ml-2'>Password</label>
            <input name='password' type='password' placeholder='••••••••' required
              className='w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-primary transition-all' />
          </div>
          <button className='w-full bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all'>
            Sign In
          </button>
        </form>
        <div className='mt-8 pt-6 border-t border-slate-100 text-center text-xs text-slate-400 font-bold uppercase tracking-widest'>
          AR (Active Response) Nursing Care
        </div>
      </div>
    </div>
  );
}
