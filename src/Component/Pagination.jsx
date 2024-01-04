import React from 'react';

const Pagination = () => {
    return (
      <div className="flex items-center justify-end mt-auto mb-2 border-t-4 mx-0 ml-0">
        <div className='pt-2 flex'>
        <p className='font-serif text-lg'>Items per page:</p>
  
        <select className="px-3 py-1 border-t border-b border-gray-300 mx-2" disabled>
          <option>6</option>
          <option>2</option>
          
        </select>

        <p className='font-serif text-lg mr-4'>1 - 6 of 10</p>

        <button className="px-3 py-1  cursor-pointer text-purple-700" >
          &lt;
        </button>
  
        <button className="px-3 py-1  cursor-pointer text-purple-900 mr-4" >
          &gt;
        </button>
        </div>
      </div>
    );
  };
  
  export default Pagination;
