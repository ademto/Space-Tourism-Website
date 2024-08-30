import React from 'react';
import { Link } from 'react-router-dom';

const HomeHero = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[10%] flex items-center justify-between tablet:w-full tablet:absolute tablet:top-[25%] tablet:flex-col tablet:justify-center mobile:w-full mobile:p-6  mobile:gap-10">
      <div className="left w-[540px] mobile:w-full text-white tablet:text-center">
        <p className="text-[28px] text-blue-300 tracking-[4px] leading-auto font-barlow-condensed uppercase mobile:text-base">So, you want to travel to</p>
        <h1 className="text-[144px] uppercase font-bellefair mobile:text-[80px]">Space</h1>
        <p style={{ lineHeight: '180%' }} className="font-barlow text-blue-300 text-lg">Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className="relative group right w-[540px] flex justify-end tablet:justify-center mobile:w-full">
      <div className="relative group">
        <Link to="/destination">
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 rounded-full transition-all duration-300 transform group-hover:scale-150"></div>
          <button className="relative z-10 bg-white w-[272px] h-[272px] text-[#0B0D17] rounded-full font-bellefair text-[32px] uppercase transition-all duration-300 tablet:mt-16 mobile:w-36 mobile:h-36 mobile:text-base" type="button">Explore</button>
        </Link>
      </div>

      </div>
    </div>
  ); 
};

export default HomeHero;
