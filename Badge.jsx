
import React from 'react';

export default function Badge({ text, variant = 'primary' }) {
  const variants = {
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-green-100 text-green-800',
    danger: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800'
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {text}
    </span>
  );
}
