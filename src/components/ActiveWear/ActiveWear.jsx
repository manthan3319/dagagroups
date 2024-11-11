import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component'; 

const ActiveWearComponent = () => {
  return (
    <div className='relative h-[220px] lg:h-[600px] md:h-[400px]'>
      {/* YouTube Video Background with iframe */}
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://www.youtube.com/embed/tmJ5xlWRrl8?autoplay=1&loop=1&mute=1&playlist=tmJ5xlWRrl8"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Background Video"
      />
      
      {/* Optional Overlay and Image */}
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-10'></div>
    </div>
  );
};

export default ActiveWearComponent;
