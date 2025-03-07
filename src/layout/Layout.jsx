import React from "react";
import Sidebar from './Sidebar';
import Navbar from './Navbar';


export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
     <Sidebar/>
      <div className="flex-1 flex flex-col">
       <Navbar/>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
