import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Logo on the left side */}
      <div className="text-white text-lg font-bold">Your Logo</div>

      {/* Profile on the right side */}
      <div className="flex items-center space-x-4">
        {/* Add your profile image or icon */}
        <img
          src="profile.jpg" // replace with the path to your profile image
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />

        {/* Add your profile name or username */}
        <div className="text-white">Your Name</div>
      </div>
    </nav>
  );
};

export default Navbar;