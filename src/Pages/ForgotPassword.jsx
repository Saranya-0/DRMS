import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function ForgotPassword() {
    const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Email is required!");
      return;
    }

    setMessage("Password reset link sent to your email.");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-md w-96">
     
      <h3 className="text-xl font-semibold text-center mb-4">Forgot Password?</h3>
      <p className="text-gray-600 text-center mb-4">Enter your email to get a password reset link.</p><br />

      {message && <p className="text-center text-green-500 mb-3">{message}</p>}

      <form onSubmit={handleResetPassword}>
        <label className="block text-sm font-medium">Email Address</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded-md mb-3"
          placeholder="hello@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition"
        >
          Password Reset
        </button>
      </form>

      <p className="text-center mt-4">
        <Link to="/signin" className="text-gray-600 hover:text-gray-800">
          Back to login
        </Link>
      </p>
    </div>
  </div>
  )
}

export default ForgotPassword