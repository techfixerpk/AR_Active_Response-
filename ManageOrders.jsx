
import React, { useState } from 'react';
import { Search, Filter, MoreVertical, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import Badge from './Badge';

export default function ManageOrders() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const initialOrders = [
    { id: 'ORD-1024', customer: 'Zeeshan Ali', service: '24/7 ICU Nursing', status: 'Active', variant: 'primary', date: '2024-03-27', price: 'Rs. 45,000' },
    { id: 'ORD-1025', customer: 'Fatima Khan', service: 'Oxygen Concentrator', status: 'Pending', variant: 'warning', date: '2024-03-27', price: 'Rs. 5,000' },
    { id: 'ORD-1026', customer: 'Bilal Ahmed', service: 'Doctor Home Visit', status: 'Completed', variant: 'secondary', date: '2024-03-26', price: 'Rs. 3,500' }
  ];

  const filteredOrders = initialOrders.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchQuery.toLowerCase()) || order.id.includes(searchQuery);
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className='p-8 bg-slate-50 min-h-screen'>
      <div className='flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4'>
        <div>
          <h1 className='text-4xl font-black text-slate-900'>Order Management</h1>
          <p className='text-slate-500 font-medium'>Real-time tracking of medical service requests.</p>
        </div>
        <div className='flex flex-wrap gap-3'>
          <div className='relative'>
            <Search className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400' size={18} />
            <input 
              type='text' 
              placeholder='Search ID or Name...' 
              className='pl-12 pr-6 py-3 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-primary w-64 shadow-sm'
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select 
            className='bg-white border border-slate-200 rounded-2xl px-4 py-3 font-bold text-slate-600 outline-none focus:ring-2 focus:ring-primary shadow-sm'
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value='All'>All Status</option>
            <option value='Active'>Active</option>
            <option value='Pending'>Pending</option>
            <option value='Completed'>Completed</option>
          </select>
        </div>
      </div>

      <div className='bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden'>
        <table className='w-full text-left'>
          <thead className='bg-slate-50/50 border-b border-slate-100'>
            <tr>
              <th className='px-8 py-6 text-xs font-bold uppercase tracking-widest text-slate-400'>Order Details</th>
              <th className='px-8 py-6 text-xs font-bold uppercase tracking-widest text-slate-400'>Customer Info</th>
              <th className='px-8 py-6 text-xs font-bold uppercase tracking-widest text-slate-400'>Date & Price</th>
              <th className='px-8 py-6 text-xs font-bold uppercase tracking-widest text-slate-400'>Status</th>
              <th className='px-8 py-6 text-xs font-bold uppercase tracking-widest text-slate-400 text-right'>Actions</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-slate-50'>
            {filteredOrders.map((order) => (
              <tr key={order.id} className='hover:bg-slate-50/50 transition-colors group'>
                <td className='px-8 py-6'>
                  <div className='font-black text-slate-900'>{order.id}</div>
                  <div className='text-xs text-slate-400 font-bold'>{order.service}</div>
                </td>
                <td className='px-8 py-6 font-bold text-slate-700'>{order.customer}</td>
                <td className='px-8 py-6'>
                  <div className='text-slate-600 font-bold'>{order.date}</div>
                  <div className='text-primary font-black text-sm'>{order.price}</div>
                </td>
                <td className='px-8 py-6'>
                  <Badge text={order.status} variant={order.variant} />
                </td>
                <td className='px-8 py-6 text-right'>
                  <button className='p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-400 group-hover:text-primary'>
                    <MoreVertical size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredOrders.length === 0 && (
          <div className='p-20 text-center'>
            <AlertCircle className='mx-auto text-slate-300 mb-4' size={48} />
            <p className='text-slate-400 font-bold'>No matching orders found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
