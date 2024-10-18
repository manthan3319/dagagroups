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
      <div className='w-[70%] m-auto'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 text-center'>

          <div>
            <h1 className='text-[55px] font-bold font-roboto'>
              <CountUp end={813} duration={3} />+
            </h1>
            <p className='font-roboto font-bold text-[25px]'>Unique Products</p>
          </div>

          <div>
            <h1 className='text-[55px] font-bold font-roboto'>
              <CountUp end={18} duration={3} />+
            </h1>
            <p className='font-roboto font-bold text-[25px]'>Years Of Experience</p>
          </div>

          <div>
            <h1 className='text-[55px] font-bold font-roboto'>
              <CountUp end={2500} duration={3} />+
            </h1>
            <p className='font-roboto font-bold text-[25px]'>Satisfied Customers</p>
          </div>

          <div>
            <h1 className='text-[55px] font-bold font-roboto'>
              <CountUp end={7} duration={3} />+
            </h1>
            <p className='font-roboto font-bold text-[25px]'>Country Presence</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YearsOfExperience
