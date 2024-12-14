import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Careers = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div>
            <div className='lg:max-w-[1440px] px-[20px] m-auto py-[50px]'>
                <div className='text-center'>
                    <h1 className='font-tomorrow sm:text-[45px] text-[35px] font-bold pb-[10px] border-b-[1px] inline-block'>Careers At Positex</h1>
                </div>

                <div className='flex md:flex-row flex-col gap-[30px] py-[80px] lg:w-[70%] w-[100%] m-auto items-center'>
                    <div className='md:w-[50%] w-[100%] border-r-2'>
                        <p className='text-[#4a4a4a] font-roboto text-[16px]'>Join Us Today</p>
                        <h1 className='text-[23px] font-tomorrow mt-[5px]'>The Right Place For You</h1>
                    </div>

                    <div className='flex flex-col gap-[25px]'>
                        <p className='text-[20px] font-roboto'>Every day at Positex provides you an opportunity to explore your potential, enhance your learning and contribute in developing innovative solutions for our Customers.</p>

                        <p className='text-[20px] font-roboto' >If you believe that you can uphold our values, help us craft breakthrough solutions for the future, committed to delivering value to our Customers while improving the lives of many, we invite you to be one of us.</p>
                    </div>
                </div>

                <div className='text-center m-auto  md:w-[50%] w-[100%] careersapply'>
                    <p className='text-[#4a4a4a] sm:text-[23px] text-[20px]'>What Are You Looking For In Your Next Job ?</p>
                    <h1 className=' xl:text-[55px] sm:text-[33px] text-[25px] font-medium font-roboto'>Apply Now For Success</h1>
                    <div className='my-[20px]'>
                        <Link className='inline-block bg-black text-white px-[25px] py-[10px] rounded-[5px] '>APPLY NOW</Link>
                    </div>

                    <Link className='sm:text-[20px] text-[16px] font-roboto'>Mail Us At <span>Info@dagagroups.com</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Careers
