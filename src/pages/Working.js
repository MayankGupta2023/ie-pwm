import React from 'react'
import Navbar from '../components/navbar'
import DropdownButton from '../components/dropdown_button'
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import app from '../firebaseConfig';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const auth = getAuth(app);
const firestore = getFirestore(app);
const Working = () => {
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
        <div>
            <div className='h-20 fixed l-0 t-0 w-full '>
                <Navbar />
            </div>

            <div className='h-screen  flex justify-center items-center pt-8'>



                <div className='h-4/5 bg-red-600 w-2/3 p-4 flex relative'>

                    <div className='absolute right-10 top-0'>
                        <button className='p-2 font-medium text-xl '>Upgrade</button>
                        <button className='p-2 ml-4 text-2xl'>&#9733;</button>
                    </div>

                    <div className='w-2/5 bg-yellow-400 pt-1'>

                        <h2 className="text-xl font-semibold mb-2 text-gray-800">
                            Welcome, {user ? user.displayName || user.email : 'Guest'}!
                        </h2>

                        <div className='w-full h-fit gap-1 flex pt-4 flex-wrap'>
                            <DropdownButton />
                            <DropdownButton />
                            <DropdownButton />

                        </div>

                        <div className='mt-8'>
                            <button className='px-4 py-2 bg-white rounded bg-blue-400 text-white '>Chapter-wise-notes</button>
                            <button className='px-4 py-2 bg-lime-500 rounded ml-2 text-white'>FAQ</button>
                        </div>

                        <div className='mt-8'>
                            <input className='w-full px-2 py-1 border-2 border-gray-400 rounded ' type="text" id="enterTopic" name="enterTopic" value='Enter topic or Notes'></input>
                        </div>

                        <button className='p-2 text-center text-white w-full bg-purple-500 mt-8 rounded-xl '>Get Topic-wise Notes</button>

                        <div className='mt-8'>
                            <input className='w-full px-2 py-1 border-2 border-gray-400 rounded ' type="text" id="ask" name="ask" value='Ask a question'></input>
                        </div>

                        <button className='p-2 text-center text-white w-full bg-red-500 mt-8 rounded-xl '>Submit Question</button>



                    </div>


                    <div className='w-3/5 bg-white p-8 '>
                        <div className='font-bold text-2xl'>Results</div>
                        <div className='mt-4'>Result will appear here based on your selections and queries.</div>



                    </div>


                </div>
            </div>



        </div>
    )
}

export default Working
