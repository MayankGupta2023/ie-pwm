// components/Footer.js

import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png'
import styles from '../styles/navbar.module.css'
import {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
  } from 'firebase/firestore';
  import app from '../firebaseConfig';
  

const Footer = () => {
   
const [email, setEmail] = useState('');

    const handleContact = async () => {
        console.log(email);
        const db = getFirestore(app);
        const userRef = collection(db, 'contacts');
        await addDoc(userRef, {email});
        setEmail('');
    }



    const handleInputChange = (event) => {
        setEmail(event.target.value); // Update email state with input value
    };
    



    return (


        <footer className={`flex w-full h-full pt-20 mb-6 font-sans tracking-tight  font-medium ${styles.inter}`}>

            <div className={`h-full w-1/4 ${styles.fot}`}>
                <div className={`h-4/5 flex flex-col gap-4   items-center `}>

                    <div className='flex gap-2 items-center'>
                        <img src={logo.src} alt='logo' className='h-12 ' /><span className='font-extrabold text-2xl tracking-tighter pr-2'>Instant EduDoc</span>
                    </div>
                    <p className='text-gray-500 pl-20 pr-4 xl:pl-32 text-sm xl:pr-12'>Never hesitate to ask questions, even if you're not on a web browser, whenever it suits you.</p>


                </div>
            </div>

            <div className={`h-full w-1/4 flex ${styles.width} ${styles.cnul}`}>

                <div className='h-full w-1/2  flex items-center flex-col  gap-4 '>

                    <div className='text-2xl font-bold w-32 '>Company</div>

                    <div className='text-gray-500 flex flex-col gap-4 w-32'>
                        <div className='hover:cursor-pointer'>Home</div>
                        <div className='hover:cursor-pointer'>How it Works</div>
                        <div className='hover:cursor-pointer'>Pricing</div>
                        <div className='hover:cursor-pointer'>Features</div>
                        <div className='hover:cursor-pointer'>About Us</div>


                    </div>

                </div>

                <div className='h-full w-1/2 flex flex-col  items-center gap-4 '>

                    <div className='text-2xl font-bold w-42'>Useful Links</div>

                    <div className='text-gray-500 flex  flex-col gap-4 w-32'>
                        <div className='hover:cursor-pointer '>Licenses</div>
                        <div className='hover:cursor-pointer'>Privacy Policy</div>
                        <div className='hover:cursor-pointer'>Terms & Conditions</div>
                        <div className='hover:cursor-pointer'>Security Updates</div>



                    </div>

                </div>

            </div>

            <div className={`h-full w-1/4 flex items-end flex-col gap-4  ${styles.width2}`}>

                <div className='text-2xl font-bold  w-32'>Support</div>

                <div className='text-gray-500 flex flex-col gap-4  w-32'>
                    <div className='hover:cursor-pointer'>Contact Us</div>
                    <div className='hover:cursor-pointer'>Help Center</div>
                    <div className='hover:cursor-pointer'>Support Ticket</div>

                </div>


            </div>


            <div className={`h-full w-1/4 flex flex-col gap-4 ${styles.width2}`}>

                <div className={`text-2xl font-bold pl-16 w-32 ${styles.sub}`}>Subscribe</div>

                <div className={`text-gray-500 flex flex-col pl-16 gap-8 ${styles.sub2}`}>
                    <p className={styles.deals}>Sign up for our Best deals</p>

                    <input className={`p-4 text-sm bg-gray-200 border-2 max-w-72 rounded-xl mr-4 ${styles.mail}`} type='email' placeholder='email@instantedudoc' value={email}  onChange={handleInputChange}  />

                    <button className={`py-2 bg-black w-48 ml-2 font-inter text-white rounded-2xl text-xl ${styles.sub3}`}
                    onClick={handleContact}
                    ><span className='font-inter text-sm'>Contact</span></button>

                    <div className={`flex flex-col ${styles.ram}`} >Developed by RAM</div>


                </div>


            </div>

        </footer>
    );
};

export default Footer;
