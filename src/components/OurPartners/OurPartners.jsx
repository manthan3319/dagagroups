import React, { useState, useEffect } from 'react';
import { partner, partner2 } from '../Images/Images';

const OurPartners = () => {

    const partnerData = [
        { id: 1, img: partner },
        { id: 2, img: partner2 },
    ];

    return (
        <div className='my-[60px]'>
            <div className='lg:max-w-[1440px] px-[20px] m-auto'>
                <div className='title'>
                    <h1 className='sm:text-[45px] text-[35px] font-tomorrow font-semibold text-center'>OUR PARTNERS</h1>
                </div>

                <div className='w-[90%] mx-auto my-[50px]'>
                    <div className='flex flex-wrap sm:gap-[20px] gap-[10px] justify-center'>
                        {partnerData.map((partner) => (
                            <div key={partner.id} className='h-[120px] lg:w-[18%] md:w-[30%] sm:w-[48%] w-[48%]  bg-slate-400 rounded-lg flex items-center justify-center'>
                                <img
                                    src={partner.img}
                                    alt={`Partner ${partner.id}`}
                                    className='h-full w-auto object-contain'
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurPartners;
