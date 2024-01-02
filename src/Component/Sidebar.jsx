import React from 'react';
import logo from '../Images/logo.webp'


const Sidebar = () => {
  return (
    <div className="bg-pink-200 text-black h-screen w-[16%] ">
      <img src={logo} alt="" />
      
      <ul>
        <li className="mb-2  hover:text-gray-300">
          
            Main Menu
          
        </li>
        <li className="mb-2 hover:bg-fuchsia-300 hover:border-r-2">
          
            Dashboard
          
        </li>
        <li className="mb-2 hover:text-gray-300">
        
            User
          
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;