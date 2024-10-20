import React, { useState, useEffect } from 'react';

const OurPartners = () => {

    const partnerData = [
        { id: 1, img: 'https://via.placeholder.com/150' },
        { id: 2, img: 'https://via.placeholder.com/150' },
        { id: 3, img: 'https://via.placeholder.com/150' },
        { id: 4, img: 'https://via.placeholder.com/150' },
        { id: 5, img: 'https://via.placeholder.com/150' },
        { id: 6, img: 'https://via.placeholder.com/150' },
        { id: 7, img: 'https://via.placeholder.com/150' },
        { id: 8, img: 'https://via.placeholder.com/150' },
        { id: 9, img: 'https://via.placeholder.com/150' },
        { id: 10, img: 'https://via.placeholder.com/150' },
        { id: 11, img: 'https://via.placeholder.com/150' },
        { id: 12, img: 'https://via.placeholder.com/150' }
    ];

    return (
        <div className='my-[60px]'>
            <div className='lg:max-w-[1440px] px-[20px] m-auto'>
                <div className='title'>
                    <h1 className='text-[45px] font-tomorrow font-semibold text-center'>OUR PARTNERS</h1>
                </div>

                <div className='w-[90%] mx-auto my-[50px]'>
                    <div className='flex flex-wrap gap-[25px] justify-center'>
                        {partnerData.map((partner) => (
                            <div key={partner.id} className='h-[120px] lg:w-[20%] md:w-[25%] sm:w-[25%] w-[50%]  bg-slate-400 rounded-lg flex items-center justify-center'>
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
