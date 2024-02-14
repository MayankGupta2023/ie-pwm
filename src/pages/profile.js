import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar2';
import app from '../firebaseConfig';
import {
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
} from 'firebase/firestore';

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [currentCredits, setCurrentCredits] = useState('');
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth(app);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!currentUser) {
      console.error('User is not authenticated.');
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      const db = getFirestore(app);
      const userRef = doc(db, 'users', currentUser.uid);

      try {
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          console.log('User data:', userData);
          setName(userData.name);
          setPhoneNumber(userData.phoneNumber);
          setEmail(userData.email);
          setPlan(userData.plan);
          setCurrentCredits(userData.credits);
        } else {
          console.error('No such document!');
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [currentUser]);

  return (
    <div className="relative">
      <div className="Navbar">
        <Navbar />
      </div>
      {isLoading ? (
        <div className="absolute inset-0 flex justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="absolute inset-0 flex justify-center items-center h-screen">
          {/* Your profile content */}
          {/* Button for help */}
          <button className="absolute top-16 md:top-16 right-4 md:right-4 bg-black text-white px-4 py-2 rounded-xl">
            Help
          </button>
          {/* Rest of your profile content */}
          <div className="w-1/2 h-2/5 bg-white flex flex-row justify-center items-center border border-gray-200 rounded-2xl">
            {/* First div */}
            <div className="mx-auto w-1/2 h-full bg-white flex justify-center items-center rounded-2xl">
              <div className="flex flex-col">
                <div className="mb-4">
                  <p className="font-medium mb-1">Full Name</p>
                  <p className="font-thin">{name}</p>
                </div>
                <div className="mb-4">
                  <p className="font-medium mb-1">Phone Number</p>
                  <p className="font-thin">{phoneNumber}</p>
                </div>
                <div className="mb-4">
                  <p className="font-medium mb-1">Current Plan</p>
                  <p className="font-thin">{plan}</p>
                </div>
              </div>
            </div>
            <div className="h-full border-l border-gray-400"></div>
            {/* Second div */}
            <div className="mx-auto w-1/2 h-full bg-white flex justify-center items-center rounded-2xl">
              <div className="flex flex-col">
                <div className="mb-4">
                  <p className="font-medium mb-1">Email</p>
                  <p className="font-thin">{email}</p>
                </div>
                <div className="mb-4">
                  <p className="font-medium mb-1">You are in</p>
                  <p className="font-thin">123-456-7890</p>
                </div>
                <div className="mb-4">
                  <p className="font-medium mb-1">Credits Used</p>
                  <p className="font-thin">{currentCredits} Credits</p>
                  <p className="font-thin">34/100 Questions</p>
                </div>
              </div>
            </div>
          </div>
          {/* Buttons for login and logout */}
          <div className="absolute bottom-20 flex justify-center w-full">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mr-4"
              style={{ backgroundColor: '#fe7544' }}
            >
              Upgrade Now
            </button>
            <button className="bg-black hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl ">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
