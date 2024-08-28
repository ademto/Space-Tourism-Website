import React from 'react';

const HomeHero = () => {
  return (
    <div className="w-[1110px] h-[600px] flex items-center justify-between m-auto tablet:w-full tablet:absolute tablet:top-[25%] tablet:left-[50%] tablet:transform tablet:-translate-x-1/2 tablet:flex-col tablet:justify-center mobile:w-full mobile:p-6 mobile:mt-[-100px] mobile:gap-10">
      <div className="left w-[540px] mobile:w-full text-white tablet:text-center">
        <p className="text-[28px] text-blue-300 tracking-[4px] leading-auto font-barlow-condensed uppercase mobile:text-base">So, you want to travel to</p>
        <h1 className="text-[144px] uppercase font-bellefair mobile:text-[80px]">Space</h1>
        <p style={{ lineHeight: '180%' }} className="font-barlow text-blue-300 text-lg">Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className="right w-[540px] flex justify-end tablet:justify-center mobile:w-full">
        <button className="bg-white w-[272px] h-[272px] text-[#0B0D17] rounded-full font-bellefair text-[32px] uppercase tablet:mt-16 mobile:w-36 mobile:h-36 mobile:text-base" type="button">Explore</button>
      </div>
    </div>
  ); 
};

export default HomeHero;
