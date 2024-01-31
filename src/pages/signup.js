

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import app from '../firebaseConfig';
import {

  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
} from 'firebase/firestore';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import styles from "../styles/landing.module.css"





const auth = getAuth(app);

const Signup = ({ phoneNumber }) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occupation: '',
    whereyouheardaboutus: 'social',
    bday: '',
    agreeTerms: true,

  });





  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {

      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      console.error('User is not authenticated.');

      return;
    }
    console.log(router.query.phoneNumber);
    const phoneNumber = router.query.phoneNumber;
    const db = getFirestore(app);
    const userRef = doc(db, 'users', currentUser.uid);

    try {

      await setDoc(userRef, formData, { merge: true });
      await setDoc(userRef, { phoneNumber }, { merge: true });
      console.log('Form data submitted successfully!');
      router.push('/Working');
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div >
      <div className={`h-64 ${styles.navbar}`}>
        <Navbar />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="m-auto p-10 rounded-md  max-w-md w-full items-center"
      >
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md px-8 py-8  rounded-md shadow-lg shadow-black border-opacity-50 hover:border-opacity-100 transition duration-300 transform hover:scale-101"
        >
          <div className="my-6">
            <label className="block flex flex-col">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </label>
          </div>

          <div className="my-6">
            <label className="block flex flex-col">
              E-mail:
              <input
                type="mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </label>
          </div>

          <div className="my-6">
            <label className="block flex flex-col">
              Occupation:
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </label>
          </div>

          <div className="my-6">
            <label className="block flex flex-col">
              Where you heard about us?:
              <select
                name="whereyouheardaboutus"
                value={formData.whereyouheardaboutus}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="social-media">Social Media</option>
                <option value="school-college">School/College</option>
                <option value="friends">Friends</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          <div className="my-6">
            <label className="block flex flex-col">
              Birth Date:
              <input
                type="date"
                name="bday"
                value={formData.bday}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </label>
          </div>

          <div className="my-6">
            <label className="block flex items-center">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mr-2"
              />
              I agree to the terms and conditions
            </label>
          </div>

          <div className="my-6 flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white p-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Signup;
