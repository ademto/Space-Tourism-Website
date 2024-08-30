import React from 'react';

const PageHeading = ({ text, subtext }) => {
  return (
    <div className='w-[1110px] mx-auto tablet:w-full tablet:px-10 tablet:pt-10 mobile:my-6 mobile:p-0 mobile:text-center'>
      <p style={{ wordSpacing: '0.05em' }} className='text-white font-barlow-condensed text-[28px] tracking-[4px] uppercase mobile:text-base'>
        <span className='font-bold text-slate-500'>{subtext} &nbsp;</span> {text}
      </p>
    </div>
  );
};

export default PageHeading;
