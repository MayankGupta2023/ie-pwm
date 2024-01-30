import React from 'react';
import logo from '@/assets/logo.png';
import styles from '@/styles/navbar.module.css';
import Link from 'next/link';

// console.log(logo);   

const Navbar = () => {
    return (
        <div className={`h-full flex justify-between px-4 items-center text-xl rounded-xl ${styles.nav}`}>
            <div className='flex text-black gap-4 items-center text-3xl'>
                <img src={logo.src} alt='logo' className={`h-12 ${styles.logo}`} />
                Instant EduDoc
            </div>

            <div className='flex justify-around min-w-96 p-2 '>


                <Link href="/">Home</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/dashboard">Get Notes</Link>
                <Link href="/login">Login</Link>

            </div>


        </div>
    )
}

export default Navbar
