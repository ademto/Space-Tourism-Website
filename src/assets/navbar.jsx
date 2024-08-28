import React from 'react';
import logo from './assets/shared/logo.svg'; // Adjust the path as needed

const Navbar = () => {
  return (
    <div className="flex items-center justify-between pl-20 mt-[40px]">
      <img className="w-[48px] h-[48px]" src={logo} alt="Logo" />
      <div className="absolute top-[calc(50% - 1px)] w-full ml-[100px] z-10">
        <hr className="border-t border-white opacity-50 w-[560px]" />
      </div>
      <nav className="w-[736px] flex justify-end space-x-[48px] bg-pink-50 pt-7 pb-7 pr-20 backdrop-blur-lg bg-white/5">
        <a href="#" className="text-white text-sm uppercase">
          <span className="font-bold pr-2">00</span> Home
        </a>
        <a href="#" className="text-white text-sm uppercase">
          <span className="font-bold pr-2">01</span> Destination
        </a>
        <a href="#" className="text-white text-sm uppercase">
          <span className="font-bold pr-2">02</span> Crew
        </a>
        <a href="#" className="text-white text-sm uppercase">
          <span className="font-bold pr-2">03</span> Technology
        </a>
      </nav>
    </div>
  );
};

export default Navbar;