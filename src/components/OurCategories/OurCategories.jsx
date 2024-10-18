import React from 'react'
import { bgoverlapping } from '../Images/Images'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const OurCategories = () => {
    const categories = [
        {
            id: 1,
            title: 'Sportswear - Knits & Wovens Fabrics',
            img: 'https://via.placeholder.com/450', 
            link: '/enquire-sportswear'
        },
        {
            id: 2,
            title: 'Casualwear - Fashion Fabrics',
            img: 'https://via.placeholder.com/450', 
            link: '/enquire-casualwear'
        },
        {
            id: 3,
            title: 'Formalwear - Premium Fabrics',
            img: 'https://via.placeholder.com/450',
            link: '/enquire-formalwear'
        },
        {
            id: 4,
            title: 'Outdoorwear - Technical Fabrics',
            img: 'https://via.placeholder.com/450',
            link: '/enquire-outdoorwear'
        }
    ]

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        arrows: true, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div className='py-[80px]'>
            <div>
                <div className='title'>
                    <h1 className='text-[55px] font-tomorrow font-semibold text-center'>OUR CATEGORIES</h1>
                </div>

                <div
                    style={{
                        backgroundImage: `url(${bgoverlapping})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }} 
                    className='py-[50px]'
                >
                    <div className='lg:max-w-[1440px] px-[20px] m-auto mt-[50px]'>
                        <Slider {...settings}>
                            {categories.map((category) => (
                                <div key={category.id} className='px-[15px]'> 
                                    <div>
                                        <div 
                                            className='img h-[450px] bg-cover bg-center bg-slate-500' 
                                            style={{ backgroundImage: `url(${category.img})` }} 
                                        ></div>
                                        <div className='mt-[10px]'>
                                            <h1 className='font-tomorrow text-[22px] font-semibold'>{category.title}</h1>

                                            <Link 
                                                to={category.link} 
                                                className='inline-block border-b-[1px] pb-[5px] mt-[10px]'
                                            >
                                                Enquire Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCategories
