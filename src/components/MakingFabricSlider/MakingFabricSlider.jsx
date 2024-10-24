import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { sliderbg1, sliderbg2 } from '../Images/Images';

const sliderData = [
  {
    id: 1,
    image: sliderbg1,
    alt: 'Fabric Slider 1',
    heading: 'High-Quality Fabrics',
    description: 'We offer the best quality fabrics for all your needs.',
    animationType: 'fade',
  },
  {
    id: 2,
    image: sliderbg2,
    alt: 'Fabric Slider 2',
    heading: 'Stylish Designs',
    description: 'Modern and trendy fabric designs available.',
    animationType: 'fade',
  },
];

const PrevArrow = ({ onClick }) => (
  <div className="absolute top-[43%] left-[0px] z-10 cursor-pointer text-white bg-black p-[10px]" onClick={onClick}>
    &#10094;
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="absolute top-[43%] right-[0] z-10 cursor-pointer text-white  bg-black p-[10px]" onClick={onClick}>
    &#10095;
  </div>
);

const MakingFabricSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const animationVariants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1.5, ease: 'easeInOut' } }, 
    },
  };

  return (
    <div className='md:h-[650px] bg-[#1F1F1F] overflow-hidden w-[100%] relative'>
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial="hidden"
            animate={currentSlide === index ? "visible" : "hidden"} 
            variants={animationVariants[slide.animationType]}
            className='relative w-[90%] m-auto'
          >
            <LazyLoadImage
              src={slide.image}
              alt={slide.alt}
              effect="blur"
              className='md:h-[650px] object-cover w-[95%] m-auto'
            />
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default MakingFabricSlider;
