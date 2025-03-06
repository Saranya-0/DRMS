import React from 'react';

export const Textarea = ({ label, type, name, placeholder, register, errors }) => {
  return (
    <div className='mb-3'>
      <label className='block text-gray-700'>{label}</label>
      <input type={type} name={name} placeholder={placeholder} {...register} className='w-full border p-2 rounded' />
      {errors && <p className='text-red-500 text-sm'>{errors}</p>}
    </div>
  );
};

export default Textarea;
