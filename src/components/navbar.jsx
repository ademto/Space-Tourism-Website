import React, {useState} from 'react';
import logo from '../assets/shared/logo.svg'; // Adjust the path as needed
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between pl-20 pt-[40px] tablet:p-0 mobile:p-5">
        <div className='tablet:m-auto mobile:m-0'>
          <img className="w-[48px] h-[48px]" src={logo} alt="Logo" />
        </div>
        <div className="w-[560px] mr-[-64px] z-10 tablet:hidden">
          <hr className="border-t border-white opacity-50" />
        </div>
        <nav className="w-[736px] h-[96px] tablet:w-[640px] mobile:hidden flex items-center justify-end space-x-[48px] pr-16 backdrop-blur-lg bg-white/5 font-barlow-condensed text-base">
          <a href="#" className="text-white uppercase relative">
            <span className="font-bold pr-2">00</span> Home
          </a>
          <a href="#" className="text-white uppercase">
            <span className="font-bold pr-2">01</span> Destination
          </a>
          <a href="#" className="text-white uppercase">
            <span className="font-bold pr-2">02</span> Crew
          </a>
          <a href="#" className="text-white uppercase">
            <span className="font-bold pr-2">03</span> Technology
          </a>
        </nav>
        <div className="hidden mobile:flex z-20">
          <button onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}>
            <img src={mobileDrawerOpen ? close : hamburger} alt="Menu Icon" />
          </button>
        </div>
      </div>
      {mobileDrawerOpen && (<div style={{ lineHeight: '300%' }} className="hidden mobile:flex flex-col pl-8 pt-24 text-white backdrop-blur-lg bg-white/5 h-screen w-[254px] absolute right-0 top-0 font-barlow-condensed text-base tracking-widest z-10">
          <a href="#" className="text-white uppercase">
            <span className="font-bold pr-2">00</span> Home
          </a>
          <a href="#" className="text-white uppercase">
            <span className="font-bold pr-2">01</span> Destination
          </a>
          <a href="#" className="text-white uppercase">
            <span className="font-bold pr-2">02</span> Crew
          </a>
          <a href="#" className="text-white uppercase">
            <span className="font-bold pr-2">03</span> Technology
          </a>
      </div>)}
    </div>
  );
};

export default Navbar;