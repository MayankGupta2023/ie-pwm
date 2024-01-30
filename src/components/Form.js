import React, { useState, useEffect } from 'react';
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

const auth = getAuth(app);

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occupation: '',
    whereyouheardaboutus: '',
    bday: '',
    agreeTerms: false,
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

    // Check if a user is authenticated
    if (!currentUser) {
      console.error('User is not authenticated.');
      return;
    }

    // Perform your form submission logic here
    const db = getFirestore(app);
    const userRef = doc(db, 'users', currentUser.uid);

    try {
      await setDoc(userRef, formData, { merge: true }); // Merge to update existing fields without overwriting
      console.log('Form data submitted successfully!');
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };
    return (
        <div className=''>
            <form onSubmit={handleSubmit} className="px-20 py-4 w-1/3 min-w-96 border-black border-2 m-auto ">
                <div className="my-6">
                    <label className="block flex justify-between">
                        Name:
                        <br />
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="border-b-2 border-black p-1" />
                    </label>
                </div>

                <div className="my-6">
                    <label className="block flex justify-between">
                        E-mail:
                        <br />
                        <input type="mail" name="email" value={formData.email} onChange={handleChange} className="border-b-2 border-black p-1" />
                    </label>
                </div>

                <div className="my-6">
                    <label className="block flex justify-between">
                        Occupation:
                        <br />
                        <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} className="border-b-2 border-black p-1" />
                    </label>
                </div>

                <div className="my-6">
                    <label className="block flex justify-between">
                        Where you heard about us?:
                        <br />
                        <input type="text" name="whereyouheardaboutus" value={formData.whereyouheardaboutus} onChange={handleChange} className="border-b-2 border-black p-1" />
                    </label>
                </div>

                <div className="my-6">
                    <label className="block flex justify-between">
                        Birth Date:
                        <br />
                        <input type="date" name="bday" value={formData.bday} onChange={handleChange} className="border-b-2 border-black p-1" />
                    </label>
                </div>

                <div className="my-6">
                    <label className="block flex justify-center">
                        <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} className="mr-2" />
                        I agree to the terms and conditions
                    </label>
                </div>

                <div className="my-6">
                    <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white p-2 px-3">Submit</button>
                </div>
            </form>
        </div>
    );
};


export default FormComponent;
