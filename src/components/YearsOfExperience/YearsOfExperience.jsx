import React from 'react'
import CountUp from 'react-countup'
import { bgoverlapping } from '../Images/Images'

const YearsOfExperience = () => {
  return (
    <div
      className='bg-cover bg-center py-[50px]'
      style={{
        backgroundImage: `url(${bgoverlapping})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='sm:w-[70%] w-[100%] m-auto'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 text-center'>

          <div>
            <h1 className='sm:text-[55px] text-[45px] font-bold font-roboto'>
              <CountUp end={813} duration={3} />+
            </h1>
            <p className='font-roboto font-bold sm:text-[25px] text-[20px]'>Unique Products</p>
          </div>

          <div>
            <h1 className='sm:text-[55px] text-[45px] font-bold font-roboto'>
              <CountUp end={18} duration={3} />+
            </h1>
            <p className='font-roboto font-bold sm:text-[25px] text-[20px]'>Years Of Experience</p>
          </div>

          <div>
            <h1 className='sm:text-[55px] text-[45px] font-bold font-roboto'>
              <CountUp end={2500} duration={3} />+
            </h1>
            <p className='font-roboto font-bold sm:text-[25px] text-[20px]'>Satisfied Customers</p>
          </div>

          <div>
            <h1 className='sm:text-[55px] text-[45px] font-bold font-roboto'>
              <CountUp end={7} duration={3} />+
            </h1>
            <p className='font-roboto font-bold sm:text-[25px] text-[20px]'>Country Presence</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YearsOfExperience
