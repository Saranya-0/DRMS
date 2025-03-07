import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/FirebaseConfig';
import Button from '../Components/Button';
import Textarea from '../Components/Textarea';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!email) return setError('Please enter your email');

    setLoading(true);
    setMessage('');
    setError('');

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset link sent! Check your email.');
      setEmail('');
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-md w-96'>
        <h3 className='text-xl font-semibold text-center mb-4'>Forgot Password?</h3>
        <p className='text-gray-600 text-center mb-4'>Enter your email to get a password reset link.</p>

        {message && <p className='text-center text-green-500 mb-3'>{message}</p>}
        {error && <p className='text-center text-red-500 mb-3'>{error}</p>}

        <form onSubmit={handleResetPassword} className='space-y-4'>
          <Textarea
            label='Email Address'
            type='email'
            name='email'
            placeholder='hello@example.com'
            register={{ value: email, onChange: (e) => setEmail(e.target.value) }}
            errors={error}/>

          <Button type='submit' variant='primary' disabled={loading}>
            {loading ? 'Sending...' : 'Reset Password'}
          </Button>
        </form>

        <p className='text-center mt-4'>
          <Link to='/signin' className='text-gray-600 hover:text-gray-800'>
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
