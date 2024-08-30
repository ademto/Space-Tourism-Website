import React, {useState} from 'react'
import PageHeading from './pageHeading'
import data from '../assets/data.json';

const TechnologyHero = () => {
    const [activeTech, setActiveTech] = useState("Launch vehicle")
    const techData = data.technology.find(tech => tech.name === activeTech)

    return (
        <div className=''>
            <PageHeading text="Space Launch 101" subtext="03"/>
            {techData && (
                <> 
            <div className="w-[1275px] h-[734px] flex items-center justify-between gap-16 absolute right-0 tablet:w-full tablet:h-[800px] tablet:top-[20%] tablet:flex-col-reverse mobile:h-[677px]">
                <div className="w-[635px] left flex items-center gap-16 tablet:flex-col mobile:w-[327px] mobile:gap-">
                    <ul className='flex flex-col gap-8 tablet:flex-row'>
                    {data.technology.map((tech, index) => (
                    <li key={tech.name}>
                        <button className={`${activeTech === tech.name ? "bg-white text-blue-900" : ""} text-white rounded-full border w-20 h-20 tablet:w-14 tablet:h-14 mobile:w-10 mobile:h-10 mobile:text-lg text-[32px] tablet:text-2xl border-slate-100`} onClick={() => setActiveTech(tech.name)}>{index + 1}</button>
                    </li>
                    ))}
                    </ul>
                    <div className='text-center'>
                        <span className='font-bellefair text-[32px] uppercase text-opacity-70 text-white tablet:text-2xl mobile:text-lg'>The terminology...</span>
                        <h1 className='font-bellefair text-[56px] uppercase text-white tablet:text-[40px] mobile:text-2xl mobile:p-4'>{techData.name}</h1>
                        <p className='text-blue-300 text-lg tablet:text-base mobile:text-[15px]'>{techData.description}</p>
                    </div>
                </div>
                <div className="right w-[608px] tablet:h-[420px] mobile:h-[322px] tablet:w-full mobile:relative">
                    <img className='w-full tablet:h-[356px] tablet:hidden' src={techData.images.portrait} alt={techData.name} />
                    <img className='w-full tablet:h-[356px] mobile:h-[258px] mobile:absolute mobile:bottom-0 hidden tablet:block' src={techData.images.landscape} alt={techData.name} />
                </div>
            </div>
            </>
        )}
        </div>
    )
}

export default TechnologyHero