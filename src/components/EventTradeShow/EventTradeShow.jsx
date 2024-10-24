import React,{ useEffect } from 'react';
import { dagabanner, galary1 } from '../Images/Images';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EventTradeShow = () => {
    const galleryItems = [
        { id: 1, img: galary1, alt: "Gallery Image 1" },
        { id: 2, img: galary1, alt: "Gallery Image 2" },
        { id: 3, img: galary1, alt: "Gallery Image 3" },
        { id: 4, img: galary1, alt: "Gallery Image 4" },
        { id: 5, img: galary1, alt: "Gallery Image 5" },
    ];

    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.1, // 10% visibility to trigger the animation
    });

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, staggerChildren: 0.3 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <motion.div
            ref={sectionRef}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className='lg:max-w-[1440px] px-[20px] m-auto py-[50px]'>
                <div className='text-center'>
                    <h1 className='font-tomorrow sm:text-[45px] text-[35px] font-bold pb-[10px] border-b-[1px] inline-block'>Event & Trade Show</h1>
                </div>

                <motion.div className='relative my-[60px]' variants={itemVariants}>
                    <LazyLoadImage
                        src={dagabanner}
                        alt="Event & Trade Show Banner"
                        effect="blur"
                        className='h-[600px] w-full object-contain border-black'
                    />
                </motion.div>

                <motion.div className='pt-[50px] gap-[15px] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2'>
                    {galleryItems.map(item => (
                        <motion.div key={item.id} className='h-[200px] bg-slate-400 rounded-lg border-[1px] border-black' variants={itemVariants}>
                            <LazyLoadImage
                                src={item.img}
                                alt={item.alt}
                                effect="blur"
                                className='h-[200px] w-full object-cover rounded-lg'
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default EventTradeShow;
