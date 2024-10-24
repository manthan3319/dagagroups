import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logowhite, menuicon } from '../Images/Images';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'


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

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <div className='sticky top-0 z-[9999999999]'>
            <div className='bg-black py-[20px] md:block hidden '>
                <div className='lg:max-w-[1440px] px-[20px] m-auto'>
                    <div className='flex sm:flex-row flex-col justify-between gap-y-3'>
                        <div className='flex sm:flex-row flex-col sm:gap-[25px] gap-y-3'>
                            <Link className='flex flex-row gap-[8px] items-center justify-center text-white font-tomorrow text-[18px]'>
                                <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                                <span>+91 99047 55595</span>
                            </Link>
                            <Link className='flex flex-row gap-[8px] items-center justify-center text-white font-tomorrow text-[18px]'>
                                <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                <span>hello@dagagroups.in</span>
                            </Link>
                        </div>

                        <div className='flex flex-row gap-[25px] justify-center'>
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

            <div className="border-b-[1px] hidden lg:block bg-white">
                <div className='lg:max-w-[1440px] px-[20px] m-auto py-[20px]'>
                    <div className='flex flex-row justify-between items-center'>
                        <div>
                            <Link className='font-bold text-[30px] font-tomorrow'>
                                DAGA GROUP
                            </Link>
                        </div>

                        <div>
                            <ul className='flex flex-row xl:gap-x-[25px] items-center lg:gap-x-[15px]'>
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

            <div className='lg:hidden block px-[20px] py-[25px] border-b-[1px] border-black sticky top-0 bg-white z-[9999] '>
                <div className='flex justify-between items-center '>
                    <div>
                        <Link to="/" className='font-bold text-[30px] font-tomorrow'>
                            DAGA GROUP
                        </Link>
                    </div>
                    <div>
                        <button onClick={toggleDrawer}><img src={menuicon} className='w-[45px]' /></button>
                    </div>
                </div>

                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='right'
                    className='bla bla bla'
                >
                    <div className='p-[20px] '>
                        <ul className='flex flex-col   gap-y-[25px]'>
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
                </Drawer>
            </div>
        </div>
    );
}

export default Navbar;
