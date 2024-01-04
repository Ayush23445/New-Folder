import React from 'react';
import { BiMenuAltLeft } from "react-icons/bi";
import p1 from '../Images/p1.jpeg'

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center">
    
     {/* menu logo */}
      <div className="text-purple-800 text-xl font-bold ">
        <BiMenuAltLeft className='w-12 h-12 cursor-pointer' />
      </div>

      {/* Profile on the right side */}
      <div className="flex items-center space-x-4">
      
        <img
          src={p1}
          alt="Profile"
          className="w-12 h-12 rounded-full cursor-pointer"
        />

      <div className='col'>
      <div className="font-bold">Ayush Saha</div>
        <div>Associate developer</div>
      </div>
        
      </div>
    </nav>
  );
};

export default Navbar;