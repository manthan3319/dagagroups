import React from 'react'
import { Link } from 'react-router-dom'

const WelcomeToDaga = () => {
    return (
        <div className='py-[70px]'>
            <div className='lg:max-w-[1440px] px-[20px] m-auto '>
                <div className='flex flex-row items-center justify-center w-[80%] m-auto gap-[25px]'>
                    <div className='w-[50%]'>
                        <h1 className='font-tomorrow text-[45px] font-bold pb-[10px]'>WELCOME TO DAGA GROUP</h1>
                        <p className='font-tomorrow text-[18px] font-medium'>SPIRIT OF FABRICS</p>
                        <div className='mt-[15px] flex flex-col gap-y-[10px]'>
                            <p className='font-roboto font-normal text-[18px] leading-[30px]'>WE ARE WHOLESALERS, MANUFACTURERS,
                                EXPORTER  OF  FABRICS & READY-MADE CURTAINS.</p>
                            <p className='font-roboto font-normal text-[18px] leading-[30px]'>AT DAGA GROUP, WE PERFORM IN UNISON BY FOLLOWING OUR VALUES AND ETHICAL GUIDELINES CODE OF CONDUCT AS A SOURCE OF GUIDANCE AND INSPIRATION, WHICH ENABLE US TO ACHIEVE OUR VISION.</p>
                        </div>

                        <Link className='inline-block mt-[15px] bg-black py-[10px] px-[30px] rounded-lg font-semibold font-tomorrow text-white'>Read More <spna><i class="fa fa-angle-right" aria-hidden="true"></i></spna></Link>
                    </div>

                    <div className='w-[50%] h-[400px] bg-slate-500'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeToDaga
