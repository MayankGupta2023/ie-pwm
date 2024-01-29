// pages/dashboard.js

import { useEffect, useState } from 'react';
import firebase from 'firebase/app';


import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../firebaseConfig';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const auth = getAuth(app);
const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is authenticated
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        // If not authenticated, redirect to login
        window.location.href = '/auth';
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white bg-opacity-90 p-10 rounded-md shadow-md max-w-md w-full flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Welcome, {user ? user.displayName || user.email : 'Guest'}!
        </h2>
        {/* Add more dashboard content here */}
        <button
          className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => firebase.auth().signOut()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
