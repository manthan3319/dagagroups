import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

const HomeContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'service_6mv7e74',
                'template_m7cw23b', 
                {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    mobileNumber: formData.mobileNumber,
                    subject: formData.subject,
                    message: formData.message,
                },
                'JykYQAmK0jyvbaoeP'
            )
            .then(
                (response) => {
                    alert('Message sent successfully!');
                    setFormData({
                        firstName: '',
                        lastName: '',
                        mobileNumber: '',
                        subject: '',
                        message: '',
                    });
                },
                (error) => {
                    alert('Failed to send message, please try again later.');
                }
            );
    };

    return (
        <div className="px-[20px] py-[80px] bg-[#000000e0]">
            <div>
                <div className="title">
                    <h1 className="text-[55px] font-tomorrow font-semibold text-white text-center">Contact Us</h1>
                </div>

                {/* Inquiry Cards */}
                <div className="pt-[50px]">
                    <div className="xl:w-[80%] w-[100%] m-auto flex justify-between lg:flex-row flex-col md:flex-wrap items-center text-center lg:gap-[45px] md:gap-[15px]">
                        {/* Phone */}
                        <div className="inquiryform 2xl:w-[28%] xl:w-[48%] lg:w-[48%] w-[100%] h-[200px] flex flex-col justify-center border-[1px] border-black gap-[7px] p-[30px] rounded-lg">
                            <p className="text-[45px]">
                                <i className="fa fa-phone-square" aria-hidden="true"></i>
                            </p>
                            <div>
                                <Link to="tel:+919825055595" className="font-roboto">
                                    <p className="text-[18px] font-roboto mb-[5px]">+91 98250 55595</p>
                                </Link>
                                <Link to="tel:+917229055595" className="font-roboto">
                                    <p className="text-[18px] font-roboto">+91 72290 55595</p>
                                </Link>
                            </div>
                        </div>

                        <div className="inquiryform 2xl:w-[28%] xl:w-[47%] w-[100%] lg:w-[47%] h-[200px] flex flex-col justify-center border-[1px] border-black gap-[7px] p-[30px] rounded-lg">
                            <p className="text-[45px]">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                            </p>
                            <Link
                                to="https://www.google.com/maps/dir/21.140883,72.7825035/daga+group/@21.1658384,72.7542285,32432m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be04fba0648af77:0x1e94f42dca286fea!2m2!1d72.8885088!2d21.1858099?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="text-[20px] font-roboto">
                                    6037, VIKAS LOGISTICS PARK, KUMBHARIA, SURAT,
                                    <br />
                                    GUJARAT 395010
                                </p>
                            </Link>
                        </div>

                        {/* Email */}
                        <div className="inquiryform 2xl:w-[28%] xl:w-[100%] lg:w-[100%] w-[100%] h-[200px] flex flex-col justify-center border-[1px] border-black gap-[7px] p-[30px] rounded-lg">
                            <p className="text-[45px]">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </p>
                            <Link to="mailto:Info@dagagroups.com">
                                <p className="text-[18px] font-roboto">Info@dagagroups.com</p>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Inquiry Form */}
                <div className="lg:w-[80%] w-[100%] mt-[70px] m-auto flex flex-col gap-[15px] inquiryform">
                    <div className="text-center mb-[50px]">
                        <h1 className="text-[35px] font-roboto font-bold border-b-[1px] inline-block pb-[3px]">Inquiry form</h1>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-[15px]'>
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-[15px]">
                            <input
                                type="text"
                                name="firstName"
                                className="w-[100%] countact_usFiled"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                className="w-[100%] countact_usFiled"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-[15px]">
                            <input
                                type="text"
                                name="mobileNumber"
                                className="w-[100%] countact_usFiled"
                                placeholder="Mobile Number"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                className="w-[100%] countact_usFiled"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Enter Message"
                                className="w-[100%] p-[10px] countact_usFiled"
                                cols={12}
                                rows={12}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="inline-block px-[30px] font-tomorrow bg-black text-white py-[8px] text-[18px] rounded-lg"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomeContactUs;
