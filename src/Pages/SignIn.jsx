import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function SignIn() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    alert("Login successful!");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
         
          <label className="block text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input type="email"placeholder="Enter email"{...register("email", {required: "Email is required",pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format",},})}
            className="w-full px-3 py-2 border rounded-md mb-1 focus:ring-2 focus:ring-pink-500"/>
          <p className="text-red-500 text-sm mb-3">{errors.email?.message}</p>

          
          <label className="block text-gray-700">
            Password <span className="text-red-500">*</span>
          </label>
          <input type="password"placeholder="Enter password"{...register("password", {required: "Password is required",minLength: { value: 6, message: "Password must be at least 6 characters" },})}
            className="w-full px-3 py-2 border rounded-md mb-1 focus:ring-2 focus:ring-pink-500"/>
          <p className="text-red-500 text-sm mb-3">{errors.password?.message}</p>



          <div className="flex justify-between items-center text-sm mb-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("keepSignedIn")}
                className="mr-2"
              />
              Keep me signed in
            </label>
            <Link to="/forgot-password" className="text-pink-500 hover:underline">
              Forgot Password?
            </Link>
            
          </div>

          <button type="submit" className="w-full bg-pink-500 text-white py-2 mt-4 rounded-md hover:bg-pink-600">
            Login
          </button>
        </form>

        {/* Forgot Password & Register Link */}
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
          Don't have an account?{" "}
          <Link to="/signup" className="text-pink-500 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
       
     
  );
}

 

export default SignIn