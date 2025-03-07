import React from 'react';

export const Button = ({ type, onClick, children, variant, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full p-2 rounded text-white transition duration-300 
        ${variant === 'primary' ? 'bg-pink-500 hover:bg-pink-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} 
        disabled:opacity-50`}>
      {children}
    </button>
  );
};

export default Button;
