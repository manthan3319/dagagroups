import React from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurMostViewedProduct = () => {
    const products = [
        {
            id: 1,
            title: 'FABRIC FOR SPORTSWEAR JACQUARD KNIT-BOTTOMS',
            description: 'Solid',
            img: 'https://via.placeholder.com/400'
        },
        {
            id: 2,
            title: 'FABRIC FOR SPORTSWEAR JACQUARD KNIT-BOTTOMS',
            description: 'Solid',
            img: 'https://via.placeholder.com/400' 
        },
        {
            id: 3,
            title: 'FABRIC FOR SPORTSWEAR JACQUARD KNIT-BOTTOMS',
            description: 'Solid',
            img: 'https://via.placeholder.com/400' 
        },
        {
            id: 4,
            title: 'FABRIC FOR SPORTSWEAR JACQUARD KNIT-BOTTOMS',
            description: 'Solid',
            img: 'https://via.placeholder.com/400' 
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='my-[60px]'>
            <div className='lg:max-w-[1440px] px-[20px] m-auto'>
                <div className='title'>
                    <h1 className='text-[45px] font-tomorrow font-semibold text-center'>OUR MOST VIEWED PRODUCT</h1>
                </div>

                <div className='slider my-[30px]'>
                    <Slider {...settings} className='slider-class '> {/* Add a custom class here */}
                        {products.map(product => (
                            <div key={product.id} className='slider-item_viewdproduct bg-white rounded-lg'> {/* Each slide item */}
                                <div className='h-[400px] bg-cover bg-center bg-slate-400 rounded-t-lg' style={{ backgroundImage: `url(${product.img})` }}>
                                </div>
                                <div className='mt-[15px] p-[10px] text-center'>
                                    <p className='font-roboto text-[#767676]'>{product.description}</p>
                                    <h2 className='font-tomorrow font-medium text-[15px]'>{product.title}</h2>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default OurMostViewedProduct;
