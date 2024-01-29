import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import app from '../firebaseConfig';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const auth = getAuth(app);
const firestore = getFirestore(app);

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        // If authenticated, get the user document from Firestore
        const userDocRef = doc(firestore, 'users', authUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          // If the user document exists, set the user state with the display name
          setUser({
            uid: authUser.uid,
            email: authUser.email,
            displayName: userDocSnap.data().name,
          });
        } else {
          // If the user document does not exist, set the user state with basic information
          setUser({
            uid: authUser.uid,
            email: authUser.email,
          });
        }
      } else {
        // If not authenticated, redirect to login
        window.location.href = '/login';
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
          onClick={() => auth.signOut()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
