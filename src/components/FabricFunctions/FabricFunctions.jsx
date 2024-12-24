import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  fabricfunctions,
  FunctionalFabric1,
  FunctionalFabric2,
  FunctionalFabric3,
  FunctionalFabric4,
  FunctionalFabric5,
  FunctionalFabric6,
  Hangtags1,
  Hangtags2,
  Hangtags3
} from '../Images/Images';

const FabricFunctions = () => {
  const { ref: sectionRef1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.05, // Lower threshold for better mobile compatibility
  });

  const { ref: sectionRef2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const { ref: sectionRef3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='lg:max-w-[1440px] px-[20px] m-auto py-[50px]'>
      {/* Header */}
      <motion.div
        ref={sectionRef1}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className='text-center'>
        <h1 className='font-tomorrow sm:text-[45px] text-[35px] font-bold pb-[10px] border-b-[1px] inline-block'>
          Fabric Functions
        </h1>
      </motion.div>

      {/* Image */}
      <motion.div
        ref={sectionRef2}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView2 ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <img src={fabricfunctions} alt='fabricfunctions' className='w-full h-full' />
      </motion.div>

      {/* Functional Fabrics */}
      <motion.div
        ref={sectionRef3}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView3 ? 1 : 0 }}
        transition={{ duration: 1 }}
        className='mt-[50px]'>
        <h1 className='font-tomorrow sm:text-[25px] text-[20px] font-bold pb-[10px] border-b-[1px] inline-block'>
          Functional Fabric, Yarn and Finishes
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
          {[
            { id: 1, img: FunctionalFabric1, title: 'Anti Microbial/Anti Odour' },
            { id: 2, img: FunctionalFabric2, title: 'Anti Static' },
            { id: 3, img: FunctionalFabric3, title: 'UPF Sun Protection' },
            { id: 4, img: FunctionalFabric4, title: 'Wicking/ Moisture Management' },
            { id: 5, img: FunctionalFabric5, title: 'Anti Viral' },
            { id: 6, img: FunctionalFabric6, title: 'Thermal Management - Q Max Cool Touch' }
          ].map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className='text-center'>
              <img src={item.img} alt={item.title} className='w-[190px] m-auto h-auto' />
              <h2 className='font-roboto font-bold text-[25px] mt-3'>{item.title}</h2>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Hangtags */}
      <motion.div
        ref={sectionRef3}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView3 ? 1 : 0 }}
        transition={{ duration: 1 }}
        className='mt-[50px]'>
        <h1 className='font-tomorrow sm:text-[25px] text-[20px] font-bold pb-[10px] border-b-[1px] inline-block'>
          Hangtags (Positex)
        </h1>
        <div className='flex md:flex-row flex-col justify-center items-center gap-[25px] mt-[20px]'>
          {[Hangtags1, Hangtags2, Hangtags3].map((hangtag, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: inView3 ? 1 : 0, scale: inView3 ? 1 : 0.8 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img src={hangtag} alt={`Hangtag${index + 1}`} className='md:w-[100%] w-[100%] h-full ' />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FabricFunctions;
