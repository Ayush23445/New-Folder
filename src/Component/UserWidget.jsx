import React from "react";
import { CgMenuGridO } from "react-icons/cg";
//
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdAdd } from "react-icons/io";
import UserCollection from "./UserCollection";


const UserWidget = () => {
    return (
        <div className="bg-gray-200 h-[100vh] w-[100%] flex-col">
            <div className="h-20 flex justify-between items-center w-[100%]" >
                <div className="text-slate-950 items-center text-2xl font-bold ml-4 cursor-pointer">
                    Users
                </div>


                <div className="flex items-center space-x-4 mr-2 justify-end">

                    <div className="flex items-center" >
                        <div className="px-1.5 py-1.5 text-purple-800 bg-white">
                            <TfiMenuAlt className=" w-5 h-5" />
                        </div >
                        <div className="px-1.5 py-1.5 bg-purple-800 text-white">
                            <CgMenuGridO className="h-5 w-5" />
                        </div>
                    </div>

                    <button className="flex items-center focus:outline-none mr-4 text-white bg-purple-800 hover:bg-purple-900 
            focus:ring-4 font-medium rounded-lg text-sm px-5 py-2 ">
                        <IoMdAdd className="text-white" />&nbsp; ADD</button>
                </div>
            </div>
            <UserCollection className="ml-0" />
        </div>
    )
};

export default UserWidget;
