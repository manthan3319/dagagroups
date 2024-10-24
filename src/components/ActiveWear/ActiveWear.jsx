import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component'; 
import { ActiveWear } from '../Images/Images'; 

const ActiveWearComponent = () => {
  return (
    <div className='h-[190px]'>
      <LazyLoadImage
        src={ActiveWear}
        alt="Active Wear"
        effect="blur" 
        className='md:h-[600px] w-full object-cover'
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          zIndex: -1 
        }}
      />
      <div className='md:h-[600px] bg-black bg-opacity-30'>
      </div>
    </div>
  );
};

export default ActiveWearComponent;
