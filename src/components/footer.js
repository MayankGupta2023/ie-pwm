// components/Footer.js

import React from 'react';
import logo from '../assets/logo.png'
import styles from '../styles/navbar.module.css'


const Footer = () => {
    return (


        <footer className={`flex w-full h-full pt-20 font-sans tracking-tight font-medium ${styles.inter}`}>

            <div className='h-full w-1/4'>
                <div className='h-4/5 flex flex-col gap-4   items-center '>

                    <div className='flex gap-2 items-center'>
                        <img src={logo.src} alt='logo' className='h-12 ' /><span className='font-extrabold text-2xl tracking-tighter'>Instant EduDoc</span>
                    </div>
                    <p className='text-gray-500 pl-16 text-sm '>Never hesitate to ask questions, even if you're not on a web browser, whenever it suits you.</p>


                </div>
            </div>

            <div className='h-full w-1/4 flex'>

                <div className='h-full w-1/2  flex items-center flex-col  gap-4 '>

                    <div className='text-2xl font-bold w-32 '>Company</div>

                    <div className='text-gray-500 flex flex-col gap-4 w-32'>
                        <div>Home</div>
                        <div>How it Works</div>
                        <div>Pricing</div>
                        <div>Features</div>
                        <div>About Us</div>


                    </div>

                </div>

                <div className='h-full w-1/2  flex flex-col  items-center gap-4 '>

                    <div className='text-2xl font-bold w-42'>Useful Links</div>

                    <div className='text-gray-500 flex flex-col gap-4 w-32'>
                        <div>Licenses</div>
                        <div>Privacy Policy</div>
                        <div>Terms & Conditions</div>
                        <div>Security Updates</div>



                    </div>

                </div>

            </div>

            <div className='h-full w-1/4 flex items-end flex-col   gap-4 '>

                <div className='text-2xl font-bold  w-32'>Support</div>

                <div className='text-gray-500 flex flex-col gap-4  w-32'>
                    <div>Contact Us</div>
                    <div>Help Center</div>
                    <div>Support Ticket</div>




                </div>


            </div>

            <div className='h-full w-1/4 flex flex-col  gap-4 '>

                <div className='text-2xl font-bold pl-16  w-32'>Subscribe</div>

                <div className='text-gray-500 flex flex-col pl-16 gap-8'>
                    <p>Sign up for our Best deals</p>

                    <input className='p-4 bg-gray-200 border-2 max-w-72 rounded-xl mr-4' type='email' placeholder='email@instantedudoc' />




                </div>


            </div>

        </footer>
    );
};

export default Footer;
