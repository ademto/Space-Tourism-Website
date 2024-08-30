import React, { useState } from 'react'
import PageHeading from './pageHeading'
import data from '../assets/data.json';

const CrewHero = () => {
  const [activeCrew, setActiveCrew] = useState("Douglas Hurley")
  const crewData = data.crews.find(crew => crew.name === activeCrew)
  
  return (
    <div className=''>
      <PageHeading text="Meet your crew" subtext="02"/>
      {crewData && (
        <> 
      <div className="absolute w-[1110px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[35%] tablet:-translate-y-[30%] flex items-center mx-auto text-white tablet:w-full tablet:flex-col -mt-8 gap-8">
        <div className="left w-[539px] tablet:text-center mobile:w-[327px]">
          <div>
            <span className='font-bellefair text-[32px] uppercase text-opacity-70 text-white tablet:text-2xl mobile:text-lg'>{crewData.role}</span>
            <h1 className='font-bellefair text-[56px] uppercase tablet:text-[40px] mobile:text-2xl'>{crewData.name}</h1>
            <p className='text-blue-300 text-lg tablet:text-base tablet:pb-7 tablet:pt-4 mobile:text-[15px]'>{crewData.bio}</p>
          </div>
          <ul className="flex gap-10 absolute bottom-0 tablet:relative tablet:justify-center tablet:gap-6">
            {data.crews.map(crew => (
            <li key={crew.name}>
              <button className={`${activeCrew === crew.name ? "bg-opacity-100" : "bg-opacity-50"} w-4 h-4 tablet:w-[10px] tablet:h-[10px] bg-white rounded-full`} onClick={() => setActiveCrew(crew.name)}></button>
            </li>
            ))}
          </ul>
        </div>
        <div className="right relative w-[539px] tablet:w-full">
          <img className='tablet:w-[446px] mobile:w-[271px] mx-auto' src={crewData.images.png} alt={crewData.name} />
        </div>
      </div>
      </>
      )}
    </div>
  )
}

export default CrewHero