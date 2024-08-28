import React, {useState} from 'react';
import data from '../assets/data.json';

const DestinationHero = () => {
    const [activeDestination, setActiveDestination] = useState('Moon');
    const destinationData = data.destinations.find(dest => dest.name === activeDestination);
  return (
    <div>
        <div className='w-[1110px] mb-28 mx-auto tablet:w-full tablet:px-10 tablet:pt-10 mobile:my-6 mobile:p-0 mobile:text-center'>
            <p style={{ wordSpacing: '0.05em' }} className='text-white font-barlow-condensed text-[28px] tracking-[4px] uppercase mobile:text-base'><span className='font-bold text-slate-500'>01 &nbsp;</span> Pick Your Destination</p>
        </div>
        {destinationData && (
            <>
        <div className="w-[1110px] flex items-center justify-between mx-auto text-white tablet:w-full tablet:flex-col">
            <div className="left w-[540px] tablet:w-full tablet:flex justify-center mobile:m-6">
                <img className='w-[480px] h-[480px] tablet:w-[300px] tablet:h-[300px] mobile:w-[150px] mobile:h-[150px]' src={destinationData.images.png} alt={destinationData.name} />
            </div>
            <div className="right w-[540px] tablet:w-[514px] mobile:w-[327px] tablet:m-10 tablet:text-center mobile:m-5">
                <ul className='flex gap-4 tablet:justify-center font-barlow-condensed text-base mobile:text-sm'>
                    {data.destinations.map(dest => (
                        <li className='' key={dest.name}>
                        <button
                            className={`nav-link ${activeDestination === dest.name ? "relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-white after:transition-width after:duration-300" : 'text-blue-300'} uppercase pb-4 `}
                            onClick={() => setActiveDestination(dest.name)}
                        >
                            {dest.name}
                        </button>
                        </li>
                    ))}
                </ul>
                <h1 className='font-bellefair text-8xl uppercase my-10 tablet:text-[80px] mobile:text-[56px] mobile:my-5'>{destinationData.name}</h1>
                <p style={{ lineHeight: '180%' }} className='text-blue-300 font-barlow text-lg tablet:text-base mobile:text-[15 px]'>{destinationData.description}</p>
                <div className="w-[560px] mr-[-64px] z-10 my-10 tablet:w-full mobile:my-5">
                    <hr className="border-t border-white opacity-50" />
                </div>
                <div className="flex justify-start mobile:flex-col">
                    <div className='w-full'>
                        <span className='font-barlow-condensed uppercase text-blue-300 text-sm'>Avg. Distance</span>
                        <p className='font-bellefair text-[28px] uppercase'>{destinationData.distance}</p>
                    </div>
                    <div className='w-full'>
                        <span className='font-barlow-condensed uppercase text-blue-300 text-sm'>Est. Travel Time</span>
                        <p className='font-bellefair text-[28px] uppercase'>{destinationData.travel}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
        )}
    </div>
  )
}

export default DestinationHero