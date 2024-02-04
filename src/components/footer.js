// components/Footer.js

import React from 'react';
import logo from '../assets/logo.png'


const Footer = () => {
    return (


        <footer className='flex w-full h-full '>

            <div className='h-full w-1/4'>
                <div className='h-4/5 flex flex-col gap-4 justify-center items-center '>

                    <div className='flex gap-2 items-center'>
                        <img src={logo.src} alt='logo' className='h-12' /><span className='font-bold text-2xl'>Instant EduDoc</span>
                    </div>
                    <p className='text-gray-500 pl-16 text-sm '>Never hesitate to ask questions, even if you're not on a web browser, whenever it suits you.</p>


                </div>
            </div>

            <div className='h-full w-1/4 flex'>

                <div className='h-full w-1/2  flex items-center flex-col pt-28  gap-4 '>

                    <div className='text-2xl font-semibold w-32'>Company</div>

                    <div className='text-gray-500 flex flex-col gap-1 w-32'>
                        <div>Home</div>
                        <div>How it Works</div>
                        <div>Pricing</div>
                        <div>Features</div>
                        <div>About Us</div>


                    </div>

                </div>

                <div className='h-full w-1/2  flex flex-col pt-28 items-center gap-4 '>

                    <div className='text-2xl font-semibold w-42'>Useful Links</div>

                    <div className='text-gray-500 flex flex-col gap-1 w-32'>
                        <div>Licenses</div>
                        <div>Privacy Policy</div>
                        <div>Terms & Conditions</div>
                        <div>Security Updates</div>



                    </div>

                </div>

            </div>

            <div className='h-full w-1/4 flex items-end flex-col pt-28  gap-4 '>

                <div className='text-2xl font-semibold  w-32'>Support</div>

                <div className='text-gray-500 flex flex-col gap-1  w-32'>
                    <div>Contact Us</div>
                    <div>Help Center</div>
                    <div>Support Ticket</div>




                </div>


            </div>

            <div className='h-full w-1/4 flex flex-col pt-28  gap-4 '>

                <div className='text-2xl font-semibold pl-16  w-32'>Subscribe</div>

                <div className='text-gray-500 flex flex-col pl-16 gap-8'>
                    <p>Sign up for our Best deals</p>

                    <input className='p-4 bg-gray-200 border-2 w-72 rounded-xl' type='email' placeholder='email@instantedudoc' />




                </div>


            </div>

        </footer>
    );
};

export default Footer;
