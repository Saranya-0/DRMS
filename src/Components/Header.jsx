import React from 'react'

function Header() {
  return (
    <div>
       <header className="bg-pink-600 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold">HRMS Portal</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="/" className="hover:text-gray-300">Dashboard</a></li>
                        <li><a href="/attendance" className="hover:text-gray-300">Attendance</a></li>
                        <li><a href="/payroll" className="hover:text-gray-300">Payroll</a></li>
                        <li><a href="/profile" className="hover:text-gray-300">Profile</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Header