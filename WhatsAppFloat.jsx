
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppFloat() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      href='https://wa.me/923472241304?text=Hello%20AR%20Nursing%20Care,%20I%20need%20information%20about%20your%20services.'
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-8 right-8 bg-[#25D366] text-white p-5 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] z-[999] flex items-center justify-center hover:bg-[#20ba5a] transition-all'
    >
      <div className='absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20'></div>
      <MessageCircle size={32} fill='white' />
    </motion.a>
  );
}
