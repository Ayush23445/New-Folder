import React from 'react';
import logo from '../Images/logo.webp';
import { FaUserPlus } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";




const Sidebar = () => {
  return (
    //  <div className='hidden md:flex'>
      <div className="hidden md:flex flex-col border text-black w-[16%] flex-nowrap shadow h-auto">
        <img src={logo} alt="" />

        <ul className='px-0 py-2.5'>
          <li className="pl-8 py-2 mb-4 items-center text-neutral-700 text-xs hover:bg-purple-200 hover:rounded-ee-3xl cursor-pointer">

            MAIN MENU

          </li>
          <li className="mb-4 py-2 pl-8 items-center hover:text-fuchsia-900 hover:bg-purple-200 hover:rounded-ee-3xl flex cursor-pointer">
            <i ><AiFillDashboard /> </i>&nbsp;
            <a >
              <span>Dashboard</span>
            </a>

          </li>
          <li className="mb-4-2 py-2 pl-8 items-center hover:bg-purple-200 hover:rounded-ee-3xl flex  hover:text-fuchsia-900 cursor-pointer">
            <i ><FaUserPlus /> </i>&nbsp;
            <a >
              <span>Users</span>
            </a>
          </li>

        </ul>
      </div>
    //  </div>
  );
};

export default Sidebar;