// Navbar.js
import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import Link from 'next/link';
import logo from '../assets/logo.png';
import styles from '../styles/landing.module.css';
import app from '../firebaseConfig';
import menu from '../assets/menu.svg'
import cross from '../assets/cross2.svg'

const Navbar = () => {
  const [bars, setBars] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('You have been logged out.');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div style={{ color: 'rgb(102, 102, 102)' }} className={`h-full bg-white flex justify-between tracking-tight pl-4 pr-2 items-center font-medium  rounded-l font-inter ${styles.b1}`}>
      <div className='flex text-black gap-4 items-center text-3xl'>
        <img src={logo.src} alt='logo' className={`h-12 ${styles.logo}`} />

      </div>

      <div className={bars ? 'hidden' : `text-base flex  justify-around min-w-80 ${styles.nav}`}>
        <Link href="/">Features</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/pricing">Contact</Link>

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
