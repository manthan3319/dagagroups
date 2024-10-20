import React from 'react'

const HomeContactUs = () => {
    return (
        <div className='px-[20px] py-[80px] bg-[#000000e0]'>
            <div>
                <div className='title'>
                    <h1 className='text-[55px] font-tomorrow font-semibold text-white text-center'>Contact Us</h1>
                </div>

                <div className='pt-[50px]'>
                    <div className='w-[80%] m-auto flex justify-between items-center text-center gap-[45px]'>
                   
                        <div className='inquiryform lg:w-[33%] h-[200px] flex flex-col justify-center border-[1px] border-black gap-[7px] p-[30px] rounded-lg'>
                            <p className='text-[45px]'><i className="fa fa-phone-square" aria-hidden="true"></i></p>
                            <div>
                                <p className='text-[18px] font-roboto mb-[5px]'>+91 99047 55595</p>
                                <p className='text-[18px] font-roboto'>+91 94266 75595</p>
                            </div>
                        </div>

                        <div className='inquiryform lg:w-[33%] h-[200px] flex flex-col justify-center border-[1px] border-black gap-[7px] p-[30px] rounded-lg'>
                            <p className='text-[45px]'><i className="fa fa-map-marker" aria-hidden="true"></i></p>
                            <div>
                                <p className='text-[20px] font-roboto'>
                                    6037, VIKAS LOGISTICS PARK, KUMBHARIA, SURAT,<br /> GUJARAT 395010
                                </p>
                            </div>
                        </div>

                        <div className='inquiryform lg:w-[33%] h-[200px] flex flex-col justify-center border-[1px] border-black gap-[7px] p-[30px] rounded-lg'>
                            <p className='text-[45px]'><i className="fa fa-envelope" aria-hidden="true"></i></p>
                            <div>
                                <p className='text-[18px] font-roboto'>hello@dagagroups.in</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[80%] mt-[70px] m-auto flex flex-col gap-[15px] inquiryform'>
                    <div className='text-center mb-[50px]'>
                        <h1 className='text-[35px] font-roboto font-bold border-b-[1px] inline-block pb-[3px]'>Inquiry form</h1>
                    </div>
                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-[15px]'>
                        <input type='text' className='w-[100%] countact_usFiled' placeholder='First Name' />
                        <input type='text' className='w-[100%] countact_usFiled' placeholder='Last Name' />
                    </div>

                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-[15px]'>
                        <input type='text' className='w-[100%] countact_usFiled' placeholder='Mobile Number' />
                        <input type='text' className='w-[100%] countact_usFiled' placeholder='Subject' />
                    </div>

                    <div>
                        <textarea placeholder='Enter Message' className='w-[100%] p-[10px] countact_usFiled' cols={12} rows={12}/>
                    </div>

                    <div className='text-center'>
                        <button className='inline-block px-[30px] font-tomorrow bg-black text-white py-[8px] text-[18px] rounded-lg'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContactUs
