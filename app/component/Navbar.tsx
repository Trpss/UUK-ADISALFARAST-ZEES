import React from 'react';
import Image from 'next/image';
import logo1 from '@/app/assets/logo pt.tekno.png';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold flex items-center">
          <Image src={logo1} alt='Logo PT. Tekno' width={50} height={50} />
          <span className="ml-2">PT. Tekno</span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-purple-400 transition duration-200">Home</a>
          <a href="#" className="text-gray-300 hover:text-purple-400 transition duration-200">About</a>
          <a href="#" className="text-gray-300 hover:text-purple-400 transition duration-200">Services</a>
          <a href="#" className="text-gray-300 hover:text-purple-400 transition duration-200">Contact</a>
        </div>
        <div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-500 transition duration-200">Sign In</button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-purple-400 transition duration-200">Sign Up</button>
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;
