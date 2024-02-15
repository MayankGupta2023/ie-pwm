// Navbar.js
import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';
import logo from '../assets/logo.png';
import styles from '../styles/landing.module.css';
import app from '../firebaseConfig';
import menu from '../assets/menu.svg'
import cross from '../assets/cross2.svg'


import {
  getFirestore,
  collection,
  doc,
  setDoc,
} from 'firebase/firestore';

const Navbar = () => {
  const [bars, setBars] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth(app);
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  // console.log(bars)

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('You have been logged out.');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  const handleLogoClick = async () => {
    try {
      Router.push('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleClick = () => {
    // Check if the viewport width is less than 640px using media query
    const isMobile = window.matchMedia('(max-width: 640px)').matches;

    if (isMobile) {
      console.log('Button clicked on a mobile device (viewport width < 640px)');
      setBars(!bars);
      // Add your desired logic or additional code here
    }
  };

  return (
    <div style={{ color: 'rgb(102, 102, 102)' }} className={`h-full bg-white flex justify-between tracking-tight pl-4 pr-2 items-center font-medium  rounded-l font-inter ${styles.b1}`}>
      <a href='/' onClick={handleLogoClick}>
        <div className='flex text-black gap-4 items-center text-3xl'>
          <img src={logo.src} alt='logo' className={`h-12 ${styles.logo}`} />
        </div>
      </a>


      <div className={bars ? `${styles.navhide} sm:text-base sm:flex sm:justify-around sm:min-w-80  ` : `text-base flex justify-around min-w-80 ${styles.nav}`}
        onClick={handleClick}
      >
        <Link href="/">Features</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="#footer">Contact</Link>

        <Link href="/Working">Get Notes</Link>

        {/* {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link href="/login">Login</Link>
        )} */}
      </div>

      <div className={`hidden mr-6 ${styles.menu}`}>
        <button onClick={() => {
          setBars(!bars);
          console.log(bars);
        }} >
          {bars ?
            <img src={menu.src} />
            :
            <img src={cross.src} />

          }
        </button>
      </div>

    </div>
  );
};

export default Navbar;