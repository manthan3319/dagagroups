import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { logoWhite } from '../Images/Images'

const Footer = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/aboutus' },
        { name: 'Our Product', path: '/products' },
        { name: 'Event & Trade Show', path: '/events' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Career', path: '/career' },
        { name: 'Contact Us', path: '/contact' },
    ];

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
        <div className='bg-black pt-[50px]'>
            <div className='lg:max-w-[1440px] px-[20px] m-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-[50px]'>
                    <div>
                        <Link><img src={logoWhite} className='w-[150px]' /></Link>
                        <p className='text-white mt-[15px] font-tomorrow'>We are committed to transform ourselves into a renowned textile company across the globe by establishing strong network of clients with support of our young & highly talented professionals and having turnover of 500 Crores by the year 2025.</p>
                    </div>

                    <div>
                        <h1 className='text-white font-bold font-tomorrow text-[22px] mb-[20px]'>QUICK LINKS</h1>

                        <ul className='flex flex-col gap-y-[25px]'>
                            {navItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={`text-[18px] font-medium font-tomorrow transition duration-300 ease-in-out ${activeLink === item.path ? 'text-[#656565]' : 'text-white'
                                        } hover:text-[#656565] hover:scale-105 
                                        }`}
                                >
                                    <Link
                                        to={item.path}
                                        className={`${item.name === 'Contact Us' ? 'text-white' : ''}`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h1 className='text-white font-bold font-tomorrow text-[22px] mb-[20px]'>Contact Us</h1>

                        <div className='flex flex-col gap-[25px]'>
                            <div className='flex flex-row gap-[15px]'>
                                <Link to="https://www.instagram.com/daga_group.official/" target="_blank" className='text-[30px] text-white transition duration-300 ease-in-out hover:scale-105 hover:text-[#656565]'><i class="fa fa-instagram" aria-hidden="true"></i></Link>
                                <Link to="https://www.facebook.com/dagaagroup" target="_blank" className='text-[30px] text-white transition duration-300 ease-in-out hover:scale-105 hover:text-[#656565]'><i class="fa fa-facebook-official" aria-hidden="true"></i></Link>
                                <Link to="https://youtu.be/tmJ5xlWRrl8?si=3NO3LK3xBFqNDX2c" target="_blank" className='text-[30px] text-white transition duration-300 ease-in-out hover:scale-105 hover:text-[#656565]'><i class="fa fa-youtube-play" aria-hidden="true"></i></Link>
                            </div>

                            <div className='transition duration-300 ease-in-out hover:scale-105 hover:text-[#656565] '>
                                <Link to="https://www.google.com/maps/dir/21.140883,72.7825035/daga+group/@21.1658384,72.7542285,32432m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be04fba0648af77:0x1e94f42dca286fea!2m2!1d72.8885088!2d21.1858099?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                                <p className='text-white mb-[10px]'>HEAD OFFICE</p>
                                <div className='flex flex-row items-center gap-[15px]'>
                                    <div>
                                        <Link className='text-[30px] text-white transition duration-300 ease-in-out hover:scale-105 hover:text-[#656565]'><i class="fa fa-map-marker" aria-hidden="true"></i></Link>
                                    </div>
                                    <div>
                                        <p className='font-roboto text-white text-[18px]'>6037, VIKAS LOGISTICS PARK, <br></br>KUMBHARIA, SURAT, GUJARAT 395010</p>
                                    </div>
                                </div>
                                </Link>

                                <div className='transition duration-300 ease-in-out hover:scale-105 hover:text-[#656565] flex flex-row items-center gap-[15px] mt-[10px]'>
                                    <div>
                                        <Link className='text-[30px] text-white '><i class="fa fa-phone-square" aria-hidden="true"></i></Link>
                                    </div>
                                    <div className='flex flex-col gap-[5px]'>
                                        <Link to="tel:+919825055595" className='font-roboto text-white text-[18px] hover:underline'>+91 98250 55595</Link>
                                        <Link to="tel:+917229055595" className='font-roboto text-white text-[18px] hover:underline'>+91 72290 55595</Link>
                                    </div>
                                </div>
                            </div>

                            <div className='transition duration-300 ease-in-out hover:scale-105 hover:text-[#656565] '>
                                <p className='text-white mb-[10px]'>ASSOCIATE OFFICE</p>
                                <div className='flex flex-row items-center gap-[15px]'>
                                    <div>
                                        <Link className='text-[30px] text-white transition duration-300 ease-in-out hover:scale-105 hover:text-[#656565]'><i class="fa fa-map-marker" aria-hidden="true"></i></Link>
                                    </div>
                                    <div>
                                        <p className='font-roboto text-white text-[18px]'>X -941, SATSANG MARG,NEAR JHEEL CHOWK <br></br>
                                            GANDHI NAGAR DELHI - 110031
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='transition duration-300 ease-in-out hover:scale-105 hover:text-[#656565] flex flex-row items-center gap-[15px]'>
                                <div>
                                    <Link className='text-[30px] text-white '><i class="fa fa-phone-square" aria-hidden="true"></i></Link>
                                </div>
                                <div className='flex flex-col gap-[5px]'>
                                    <Link to="tel:+919318373466" className='font-roboto text-white text-[18px] hover:underline'>+91 93183 73466</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center pt-[25px] pb-[25px] border-t-[1px] mt-[25px]'>
                <Link className='text-white font-tomorrow text-[20px]' to="https://brightensolutions.com/">CopyRight © Brighten Solutions</Link>
            </div>
          

        </div>
    )
}

export default Footer
