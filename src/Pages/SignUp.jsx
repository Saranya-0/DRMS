import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db, googleProvider } from '../firebase/FirebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import Textarea from '../Components/Textarea';
import Button from '../Components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const [firebaseError, setFirebaseError] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    setFirebaseError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      console.log('Signup successful!', user);

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: data.name,
        email: user.email,
        createdAt: new Date(),
      });

      toast.success('Signup successful! ', { autoClose: 2000 });
      setTimeout(() => {
        navigate('/signin');
      }, 3000);
      reset();
    } catch (error) {
      setFirebaseError(error.message);
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    setFirebaseError('');
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success('Signup with Google successful! ');
    } catch (error) {
      setFirebaseError(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-md w-96'>
        <h2 className='text-2xl font-bold text-center mb-4'>Create an Account</h2>

        {firebaseError && <p className='text-red-500 text-center mb-3'>{firebaseError}</p>}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Textarea
            label='Name'
            name='name'
            placeholder='Enter full name'
            register={register('name', { required: 'Name is required' })}
            errors={errors.name?.message}
          />
          <Textarea
            label='Email'
            name='email'
            type='email'
            placeholder='Enter email'
            register={register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email format' },
            })}
            errors={errors.email?.message}
          />
          <Textarea
            label='Password'
            name='password'
            type='password'
            placeholder='Enter password'
            register={register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
            })}
            errors={errors.password?.message}
          />

          <Button type='submit' variant='primary' disabled={isSubmitting}>
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
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
          Already have an account?{' '}
          <Link to='/signin' className='text-pink-500 hover:underline'>
            Sign in here
          </Link>
        </p>
      </div>

      <ToastContainer position='top-center' />
    </div>
  );
}

export default SignUp;
