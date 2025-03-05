import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/FirebaseConfig";

function SignUp() {
    const [firebaseError, setFirebaseError] = useState("");
    
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();


  const onSubmit = async (data) => {
    setFirebaseError(""); 
    try {
        
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user=auth.currentUser;
      console.log(user);
      
      alert("Signup successful!");
      reset();
    } catch (error) {
      setFirebaseError(error.message);
    }
  };



  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>
       
        {firebaseError && <p className="text-red-500 text-center mb-3">{firebaseError}</p>}
      
        <form onSubmit={handleSubmit(onSubmit)}>
      
          <label className="block text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input type="text"placeholder="Enter full name"{...register("name", { required: "Name is required" })}className="w-full px-3 py-2 border rounded-md mb-1 focus:ring-2 focus:ring-pink-500"/>
          <p className="text-red-500 text-sm mb-3">{errors.name?.message}</p>

          
          <label className="block text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input type="email"placeholder="Enter email"{...register("email", {required: "Email is required",pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format",},})}
            className="w-full px-3 py-2 border rounded-md mb-1 focus:ring-2 focus:ring-pink-500"
          />
          <p className="text-red-500 text-sm mb-3">{errors.email?.message}</p>

          
          <label className="block text-gray-700">
            Password <span className="text-red-500">*</span>
          </label>
          <input type="password" placeholder="Enter password" {...register("password", {required: "Password is required",minLength: { value: 6, message: "Password must be at least 6 characters" }, })}
            className="w-full px-3 py-2 border rounded-md mb-1 focus:ring-2 focus:ring-pink-500"
          />
          <p className="text-red-500 text-sm mb-3">{errors.password?.message}</p>

        
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <input type="checkbox"{...register("terms", { required: "You must accept the terms" })}className="mr-2"/>
            By continuing, you agree to our{" "}
            <span className="text-pink-500 cursor-pointer hover:underline ml-1">
              terms of service
            </span>.
          </div>
          <p className="text-red-500 text-sm">{errors.terms?.message}</p>

          
          <button type="submit" disabled={isSubmitting} className={`w-full text-white py-2 mt-4 rounded-md ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-pink-500 hover:bg-pink-600" }`}> {isSubmitting ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

      
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        
        <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 flex items-center justify-center">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
          Continue with Google
        </button>

        
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-pink-500 hover:underline">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
