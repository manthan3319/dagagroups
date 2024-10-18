import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <div className='h-[600px] bg-black'> </div>

            <div className='lg:max-w-[1440px] px-[20px] m-auto py-[80px]'>
                <div className='text-center w-[70%] m-auto'>
                    <h1 className='font-tomorrow text-[45px] font-bold pb-[10px] border-b-[1px] inline-block'>WELCOME TO DAGA GROUP</h1>
                    <p className='font-tomorrow text-[18px] font-medium mt-[35px]'>SPIRIT OF FABRICS</p>
                    <div className='mt-[15px] flex flex-col gap-y-[10px]'>
                        <p className='font-roboto font-normal text-[18px] leading-[30px]'>WE ARE WHOLESALERS, MANUFACTURERS,
                            EXPORTER  OF  FABRICS & READY-MADE CURTAINS.</p>
                        <p className='font-roboto font-normal text-[18px] leading-[30px]'>AT DAGA GROUP, WE PERFORM IN UNISON BY FOLLOWING OUR VALUES AND ETHICAL GUIDELINES CODE OF CONDUCT AS A SOURCE OF GUIDANCE AND INSPIRATION, WHICH ENABLE US TO ACHIEVE OUR VISION.</p>
                    </div>
                </div>

                <div className='mt-[80px] grid grid-cols-3 gap-[55px] text-center items-center bg-black p-[50px] rounded-lg box_shadow_black'>
                    <div className='flex flex-col gap-[5px] visioncard h-[200px] items-center justify-center'>
                        <h1 className='text-[22px] font-tomorrow font-semibold text-white'>Our Mission</h1>
                        <p className='text-[16px] font-roboto text-[#a9a9a9]'>To be the real inspiration to garment manufacturers by offering ahead of time materials with price effective solution.</p>
                    </div>

                    <div className='flex flex-col gap-[5px] visioncard h-[200px] items-center justify-center'>
                        <h1 className='text-[22px] font-tomorrow font-semibold text-white'>VISION</h1>
                        <p className='text-[16px] font-roboto text-[#a9a9a9]'>We are committed to transform ourselves into a renowned textile company across the globe by establishing strong network of clients with support of our young & highly talented professionals and having turnover of 500 Crores by the year 2025.</p>
                    </div>

                    <div className='flex flex-col gap-[5px] visioncard h-[200px] items-center justify-center'>
                        <h1 className='text-[22px] font-tomorrow font-semibold text-white'>Core Values</h1>
                        <p className='text-[16px] font-roboto text-[#a9a9a9]'>Life long learning, Ahead of time innovation, Team work, Committed for work </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
