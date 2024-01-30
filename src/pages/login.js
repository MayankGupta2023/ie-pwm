

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import firebase from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../firebaseConfig';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import styles from "../styles/landing.module.css"
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';


const auth = getAuth(app);

const AuthPage = () => {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push('/dashboard');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleAuth = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (isLogin) {
        // Login
        await signInWithEmailAndPassword(auth, email, password);
        router.push('/dashboard');
      } else {
        // Sign Up
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const db = getFirestore(app);
        await setDoc(doc(db, 'users', user.uid), {
          name,
          email,
        });

        router.push('/dashboard');
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
  
    // bg-gradient-to-r from-purple-400 via-pink-500 to-red-500   
 
    <div className="flex flex-col  justify-center h-full  bg-white  ">
   <div className={`h-64 ${styles.navbar}`}>
        <Navbar />
      </div>
   
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white mt-10   m-auto p-10  rounded-md shadow-md shadow-black max-w-md h-full w-full items-center"
      >
        <motion.div className="flex mb-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`cursor-pointer text-2xl mx-2 ${
              isLogin ? 'text-blue-600 font-semibold' : 'text-gray-600'
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`cursor-pointer text-2xl mx-2 ${
              !isLogin ? 'text-blue-600 font-semibold' : 'text-gray-600'
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-6 text-gray-800"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={async (e) => {
            e.preventDefault();
            handleAuth(e); // Pass event to handleAuth function
          }}
        >
          {isLogin ? (
            <>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-600 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-blue-600 hover:underline cursor-pointer ml-0"
                  onClick={() => setIsLogin(true)}
                >
                  Forgot Password?
                </motion.button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 ml-10"
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Login'}
                </motion.button>
              </div>
            </>
          ) : (
            <>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-600 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-blue-600 hover:underline cursor-pointer ml-0"
                  onClick={() => setIsLogin(true)}
                >
                  Already have an account? Login
                </motion.button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 focus:outline-none focus:ring focus:border-blue-300 ml-8" 
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Sign Up'}
                </motion.button>
              </div>
            </>
          )}
        </motion.form>
      </motion.div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default AuthPage;

