import React, { useState } from "react";
import { FaSearch, FaBell, FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className={`p-4 shadow-md transition duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="container mx-auto flex justify-between items-center">
        
       
        <div className="flex items-center space-x-4">
         
          <span className="bg-pink-500 text-white px-4 py-1 rounded-md text-sm shadow-md">
            {new Date().toLocaleDateString()}
          </span>
        </div>

        <div className="relative w-72 hidden md:block">
          <input
            type="search"
            placeholder="Search..."
            className="w-full p-2 pl-10 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition" />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>

        <div className="flex items-center space-x-6">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
          </button>
{/*         
          <FaBell className="text-xl cursor-pointer hover:text-pink-500 transition" /> */}

          <div className="relative">
            <FaUserCircle
              className="text-2xl cursor-pointer hover:text-pink-500 transition"
              onClick={() => setIsOpen(!isOpen)}/>
            {isOpen && (
              <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg overflow-hidden z-50 transition ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`} >
                <Link
                  to="/signin"
                  className="block px-4 py-2 transition hover:bg-pink-500 hover:text-white" >
                  Sign In
                </Link>
                <Link to="/signup" className="block px-4 py-2 transition hover:bg-pink-500 hover:text-white">
                  Sign Up
                </Link>
                <button className="w-full text-left px-4 py-2 transition hover:bg-pink-500 hover:text-white">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
