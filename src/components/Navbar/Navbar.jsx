import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logowhite } from '../Images/Images';

const Navbar = () => {
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
        <div>
            <div className='bg-black py-[20px]'>
                <div className='lg:max-w-[1440px] px-[20px] m-auto'>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-row gap-[25px]'>
                            <Link className='flex flex-row gap-[8px] items-center justify-center text-white font-tomorrow text-[18px]'>
                                <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                                <span>+91 99047 55595</span>
                            </Link>
                            <Link className='flex flex-row gap-[8px] items-center justify-center text-white font-tomorrow text-[18px]'>
                                <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                <span>hello@dagagroups.in</span>
                            </Link>
                        </div>

                        <div className='flex flex-row gap-[25px]'>
                            <Link className='flex flex-row gap-[8px] items-center justify-center text-[30px] text-white'>
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </Link>
                            <Link className='flex flex-row gap-[8px] items-center justify-center text-[30px] text-white'>
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </Link>
                            <Link className='flex flex-row gap-[8px] items-center justify-center text-[30px] text-white'>
                                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='lg:max-w-[1440px] px-[20px] m-auto py-[20px]'>
                    <div className='flex flex-row justify-between items-center'>
                        <div>
                            <Link className='font-bold text-[30px] font-tomorrow'>
                                DAGA GROUP
                            </Link>
                        </div>

                        <div>
                            <ul className='flex flex-row gap-x-[25px] items-center'>
                                {navItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`text-[18px] font-medium font-tomorrow transition duration-300 ease-in-out ${activeLink === item.path ? 'text-[#656565]' : 'text-black'
                                            } hover:text-[#656565] hover:scale-105 ${item.name === 'Contact Us' ? 'bg-[#1D4665] px-4 py-2 rounded' : 'text-black'
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
