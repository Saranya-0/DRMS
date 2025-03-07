import React, { useState } from "react";
import {  FaHome, FaProjectDiagram, FaMoneyBill, FaFileInvoice, 
  FaBullseye, FaCog, FaSignOutAlt, FaBars } from "react-icons/fa";

// Reusable NavItem Component
function NavItem({ icon, label, expanded }) {
  return (
    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-pink-500 cursor-pointer transition">
      {React.createElement(icon, { className: "text-xl" })} 
      {expanded && <span>{label}</span>}
    </div>
  );
}

const menuItems = [
  { icon: FaHome, label: "Overview" },
  { icon: FaProjectDiagram, label: "Projects" },
  { icon: FaMoneyBill, label: "Transactions" },
  { icon: FaFileInvoice, label: "Bills" },
  { icon: FaBullseye, label: "Goals" },
  { icon: FaCog, label: "Settings" },
];

function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`h-screen bg-gray-900 text-white p-4 transition-all duration-300 ${expanded ? "w-64" : "w-20"}`}>
      
      
      <div className="flex items-center space-x-3 cursor-pointer mb-6" onClick={() => setExpanded(!expanded)}>
        <FaBars className="text-xl text-pink-500" />
        {expanded && <h1 className="text-lg font-bold text-pink-500">HRMS Portal</h1>}
      </div>

     
      <nav className="flex flex-col space-y-4">
        {menuItems.map((item, index) => (
          <NavItem key={index} icon={item.icon} label={item.label} expanded={expanded} />
        ))}
      </nav><br /><br />

      
      <button className="mt-auto flex items-center bg-pink-500 py-2 px-4 rounded-lg hover:bg-pink-600 transition">
        <FaSignOutAlt className="text-xl" />
        {expanded && <span className="ml-2">Logout</span>}
      </button>
    </div>
  );
}

export default Sidebar;
