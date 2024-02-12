import React from 'react'
import Navbar from '../components/navbar'
import DropdownButton1 from '../components/dropdown1'
import DropdownButton2 from '../components/dropdown2'
import DropdownButton3 from '../components/dropdown3'

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
            <div className='h-20 fixed l-0 t-0 w-full z-50 '>
                <Navbar />
            </div>

            <div className='h-20'>

            </div>

            <div className='h-20 text-5xl font-inter font-semibold text-center flex justify-center items-center '>Get your Notes</div>

            <div className='h-fit  flex justify-center items-center'>



                <div className='h-fit   w-5/6 p-4 flex relative'>

                    {/* <div className='absolute right-10 top-0'>
                        <button className='p-2 font-medium text-xl '>Upgrade</button>
                        <button className='p-2 ml-4 text-2xl'>&#9733;</button>
                    </div> */}

                    <div className='w-2/6 h-screen    pt-10'>

                        {/* <h2 className="text-xl font-semibold mb-2 text-gray-800">
                            Welcome, {user ? user.displayName || user.email : 'Guest'}!
                        </h2> */}

                        <div className='w-full h-fit gap-8 flex pt-4 flex-wrap flex-col'>
                            <div>
                                <DropdownButton1 />
                            </div>

                            <div className='flex justify-between pr-8 flex-wrap gap-6'>
                                <DropdownButton2 />
                                <DropdownButton3 />
                            </div>

                        </div>



                        <div className='mt-8   flex justify-around items-center'>
                            <button style={{ background: "#fe7544" }} className='p-2 px-1 text-center text-white w-44  rounded-lg '>Get Topic-wise Notes</button>

                            <input className=' px-2 py-1 border-2 h-10 border-gray-400 rounded ' type="text" id="enterTopic" name="enterTopic" value='Enter topic or Notes'></input>
                        </div>

                        <div className='mt-8   flex justify-around items-center'>
                            <button style={{ background: "#fe7544" }} className='p-2 px-1 text-center text-white w-44  rounded-lg '>Ask any Question</button>

                            <input className=' px-2 py-1 border-2 h-10 border-gray-400 rounded ' type="text" id="enterQuestion" name="enterQuestion" value='Questions'></input>
                        </div>

                        <button style={{ background: "#fe7544" }} className='font-inter font-semibold text-white py-2 w-full text-center mt-8 rounded-lg'>Get Chapter-Wise Notes</button>

                        <button style={{ background: "#fe7544" }} className='font-inter font-semibold text-white py-2 w-full text-center mt-8 rounded-lg'>Get FAQs</button>







                    </div>


                    <div className='w-4/6 h-screen bg-white p-8 border-2 border ml-2 '>
                        <div className='font-bold text-2xl'>Results</div>
                        <div className='mt-4'>Result will appear here based on your selections and queries.</div>



                    </div>


                </div>
            </div>



        </div>
    )
}

export default Working
