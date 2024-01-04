import React, { useState } from 'react';
import p1 from '../Images/p1.jpeg';
import p2 from '../Images/p2.jpeg';
import p3 from '../Images/p3.jpeg';
import p4 from '../Images/p4.jpeg';
import p5 from '../Images/p5.jpeg';
import p6 from '../Images/p6.jpeg';
import { FaSortAmountUpAlt, FaFilter, FaSearch } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Pagination from './Pagination';




const usersData = [
    { id: 1, name: 'Ayush Saha', status: 'Active', Designation: 'Software Developer', imageAddress: p1 },
    { id: 2, name: 'Bhushan Upasani', status: 'Inactive', Designation: 'DevOps Engineer', imageAddress: p2 },
    { id: 3, name: 'Amey Bhosale', status: 'Active', Designation: 'Frontend Developer', imageAddress: p3 },
    { id: 4, name: 'Aashay Madavi ', status: 'Inactive', Designation: 'Angular Developer', imageAddress: p4 },
    { id: 5, name: 'Nikhil Malviya', status: 'Active', Designation: 'Java Developer', imageAddress: p5 },
    { id: 6, name: 'Shadab Shake', status: 'Active', Designation: 'DotNet Developer', imageAddress: p6 },

];
const UserCollection = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [filterBy, setFilterBy] = useState('');

    const filteredUsers = usersData
        .filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .filter(user => (filterBy ? user.status === filterBy : true))
        .sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));

    return (
        <div className="container flex flex-col bg-white mx-5 p-4 pb-1 w-auto h-auto border border-black rounded-tl-xl mr-4">
            <div className="mb-4 flex justify-between items-center">
                <div className='flex'>
                    <div className='bg-gray-200 mr-2 px-2 rounded border flex items-center text-purple-800'>
                        <div>
                        <FaSortAmountUpAlt />
                        </div>
                        <div className='text-black bg-gray-200'>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="p-2 px-0 bg-gray-200 outline-none"
                        >
                            <option value="">
                                
                                Sort by</option>
                            <option value="name">
                                
                                Sort by Name</option>

                        </select>
                        </div>
                    </div>

                    <div className='flex px-2 text-purple-800 items-center border-gray-300 rounded bg-gray-200'>
                        <div>
                        <FaFilter />
                        </div>
                        <div> 
                        <select
                            value={filterBy}
                            onChange={(e) => setFilterBy(e.target.value)}
                            className="p-2 bg-gray-200 text-black border-0 outline-none"
                        >
                            <option value="">Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>


                        </select>
                        </div>
                    </div>

                </div>
                <div className='flex items-center pl-2 bg-gray-200 text-purple-800 border-gray-300 rounded w-auto'>
                    <div>
                    <FaSearch/>
                    </div>

                    <div>
                    <input
                        type="text"
                        placeholder="Search here"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="p-2  ml-30 bg-gray-200 outline-none w-auto"
                    />
                    </div>
                </div>
            </div>
            
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredUsers.map((user) => (
                    <div key={user.id} className="flex flex-row border p-4 rounded border-gray-400 bg-gray-200">
                        <div className='p-3'>
                            <img src={user.imageAddress} alt='' className='inline-block h-16 w-16 rounded-full ring-2 ring-white' />
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-2">{user.name}</h3>

                            <p>{user.Designation}</p>
                            {/* <p> {user.status}</p> */}
                            {user.status==="Active" ? (<div className='flex items-center'><GoDotFill className='text-green-400'/>
                            <span>{user.status}</span></div>):(<div className='flex items-center'><GoDotFill className='text-orange-500'/> 
                            <span>{user.status}</span></div>)}
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-auto'> 
            <Pagination/>
            </div>
        </div>
    );
};

export default UserCollection