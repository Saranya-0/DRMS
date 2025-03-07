import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase/FirebaseConfig';
import Textarea from '../Components/Textarea';
import Button from '../Components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
  const [firebaseError, setFirebaseError] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    setFirebaseError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log('Login successful:', userCredential);

      if (userCredential.user) {
        toast.success('Login successful! ');
      }
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    } catch (error) {
      console.log(error);
      setFirebaseError(error.message);
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    setFirebaseError('');
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success('Google sign-in successful! Redirecting...');

      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    } catch (error) {
      setFirebaseError(error.message);
      toast.error('Google sign-in failed!');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-md w-96'>
        <h2 className='text-2xl font-bold text-center mb-4'>Sign In</h2>

        {firebaseError && <p className='text-red-500 text-center mb-3'>{firebaseError}</p>}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Textarea
            label='Email'
            type='email'
            name='email'
            placeholder='Enter email'
            register={register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email format' },
            })}
            errors={errors.email?.message}
          />

          <Textarea
            label='Password'
            type='password'
            name='password'
            placeholder='Enter password'
            register={register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
            })}
            errors={errors.password?.message}
          />

          <div className='flex justify-between items-center text-sm mb-3'>
            <label className='flex items-center'>
              <input type='checkbox' {...register('keepSignedIn', { value: false })} className='mr-2' />
              Keep me signed in
            </label>
            <Link to='/forgot-password' className='text-pink-500 hover:underline'>
              Forgot Password?
            </Link>
          </div>

          <Button type='submit' variant='primary' disabled={isSubmitting}>
            {isSubmitting ? 'Logging In...' : 'Login'}
          </Button>
        </form>

        <div className='flex items-center my-4'>
          <div className='flex-grow border-t border-gray-300'></div>
          <span className='px-2 text-gray-500 text-sm'>or</span>
          <div className='flex-grow border-t border-gray-300'></div>
        </div>

        <Button variant='secondary' onClick={handleGoogleSignIn} className=''>
          {' '}
          <img src='https://www.svgrepo.com/show/475656/google-color.svg' alt='Google' className=' w-8 ' />
          <span className='text-gray-600 '>Continue with Google</span>
        </Button>

        <p className='text-center text-gray-600 mt-4'>
          Don't have an account?{' '}
          <Link to='/signup' className='text-pink-500 hover:underline'>
            Create an account
          </Link>
        </p>
      </div>

      <ToastContainer position='top-center' />
    </div>
  );
}

export default SignIn;
