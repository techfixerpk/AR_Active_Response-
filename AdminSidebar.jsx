
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  ClipboardList,
  Stethoscope,
  Package,
  LogOut,
  HeartPulse
} from 'lucide-react';
import { useAuth } from './AuthContext';

export default function AdminSidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Overview', path: '/admin', icon: LayoutDashboard },
    { label: 'Manage Orders', path: '/admin/orders', icon: ClipboardList },
    { label: 'Services', path: '/admin/services', icon: Stethoscope },
    { label: 'Inventory', path: '/admin/equipments', icon: Package },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className='w-72 bg-slate-900 text-white min-h-screen flex flex-col border-r border-white/5'>
      <div className='p-8 flex items-center gap-3 border-b border-white/5'>
        <div className='bg-primary p-2 rounded-xl shadow-lg shadow-primary/20'>
          <HeartPulse size={24} />
        </div>
        <span className='text-xl font-black tracking-tighter'>AR ADMIN</span>
      </div>

      <nav className='flex-1 p-6 space-y-2'>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
                isActive
                  ? 'bg-primary text-white shadow-xl shadow-primary/20'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className='p-6'>
        <button
          onClick={handleLogout}
          className='w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-red-400 hover:bg-red-500/10 transition-all'
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
}
