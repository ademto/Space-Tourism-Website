import React, { useState } from 'react'
import PageHeading from './pageHeading'
import data from '../assets/data.json';
import hurley from '../assets/crew/image-douglas-hurley.png'

const CrewHero = () => {
  const [activeCrew, setActiveCrew] = useState("Anousheh Ansari")
  const crewData = data.crews.find(crew => crew.name === activeCrew)
  
  return (
    <div>
      <PageHeading text="Meet your crew" subtext="02"/>
      {crewData && (
        <> 
      <div className="w-[1110px] relative flex items-center mx-auto text-white tablet:w-full tablet:flex-col -mt-8 gap-8">
        <div className="left w-[539px]">
          <div>
            <span className='font-bellefair text-[32px] uppercase text-opacity-70 text-white'>{crewData.role}</span>
            <h1 className='font-bellefair text-[56px] uppercase'>{crewData.name}</h1>
            <p className='text-blue-300 text-lg'>{crewData.bio}</p>
          </div>
          <ul className="flex gap-10 absolute bottom-0">
            {data.crews.map(crew => (
            <li key={crew.name}>
              <button className={`${activeCrew === crew.name ? "bg-opacity-100" : ""} w-4 h-4 bg-white bg-opacity-50 rounded-full`} onClick={() => setActiveCrew(crew.name)}></button>
            </li>
            ))}
          </ul>
        </div>
        <div className="right w-[539px]">
          <img className='w-[70%] h-[70%]' src={crewData.images.png} alt={crewData.name} />
        </div>
      </div>
      </>
      )}
    </div>
  )
}

export default CrewHero