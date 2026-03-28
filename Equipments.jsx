
import React, { useState } from 'react';
import { equipments } from './equipments';
import EquipmentCard from './EquipmentCard';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

export default function Equipments() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Rent', 'Sale', 'Rent & Sale'];

  const filteredItems = equipments.filter(item => {
    const matchesFilter = filter === 'All' || item.type.includes(filter);
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar />
      <div className='pt-20 pb-24 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-8'>
            <div>
              <h1 className='text-5xl font-black text-slate-900 mb-4'>Medical <span className='text-primary'>Inventory</span></h1>
              <p className='text-slate-500 font-medium'>Premium healthcare machinery available for immediate dispatch.</p>
            </div>

            <div className='flex flex-col md:flex-row gap-4'>
              <div className='relative'>
                <Search className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400' size={18} />
                <input
                  type='text'
                  placeholder='Search equipment...'
                  className='pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-primary w-full md:w-64 shadow-sm'
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className='flex gap-2 bg-white p-2 rounded-2xl shadow-sm border border-slate-100'>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-3 rounded-xl text-xs font-bold transition-all ${
                      filter === cat ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'text-slate-400 hover:text-primary'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div layout className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                key={item.id}
              >
                <EquipmentCard item={item} />
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <div className='text-center py-20'>
              <p className='text-slate-400 font-bold text-xl'>No equipment found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
