//components->MakePaymentComponent.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import app from '../firebaseConfig';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { color } from 'framer-motion';
import style from '../styles/landing.module.css';

const auth = getAuth(app);
const firestore = getFirestore(app);
const MakePaymentComponent = ({ amount, description, plan, credits,highlight }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
const [authid , setAuthid] = useState(null);







const isLogin= async()=>{
  const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
    if (authUser) {
        // If authenticated, get the user document from Firestore
        const userDocRef = doc(firestore, 'users', authUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          // If the user document exists, set the user state with the display name
          setAuthid(authUser.uid);
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
        return true;
    } else {
        // If not authenticated, redirect to login
        return false;
       
    }
});
};




    const makePayment = async () => {


  const inhai = await isLogin();



        //console.log("here...");

        if(inhai){

        const res = await initializeRazorpay();
        if (!res) {
          alert("Razorpay SDK Failed to load");
          return;
        }
        // Make API call to the serverless API
        const data = await fetch("/api/razorpay",
        {
             method: "POST",
             headers: {
                'Content-Type': 'application/json',
            },
             body: JSON.stringify({
                taxAmt: parseInt(amount)
             })
         }
        )
        .then((t) =>
          t.json()
        );
        //console.log(data);
        var options = {
          key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
          name: "Instant PayDoc",
          currency: data.currency,
          amount: amount,
          order_id: data.id,
          description: description,
          image: "../assets/logo.png",
          handler: async function (response) {
            // Validate payment at server - using webhooks is a better idea.
          
            if (response.razorpay_payment_id) {
              alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
              const db = getFirestore(app);
              const paycurrentDate = new Date();



          const userRef = doc(db, 'users', authid);
          await setDoc(userRef, { plan, credits, paycurrentDate }, { merge: true });
          router.push({
            pathname: '/Working',
          });
          // You can perform additional actions here, such as updating the UI, sending a confirmation email, etc.
        } else {
          alert("Payment Failed!");
          // Handle payment failure scenario, you might want to redirect the user to a different page or display an error message.
        }
        //alert(response.razorpay_order_id);
        //alert(response.razorpay_signature);
      },
      prefill: {
        name: "Shivam",
        email: "admin@instantpaydoc.online",
        contact: '9853785519'

      },
    };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    
        paymentObject.on("payment.captured", (_) => {
          toast.success("Order Placed Successfully");
          cart[1]([]);
          router.push("../pages/Working");
        });


      }else{
        window.location.href = '/login';
      }
      };
      const initializeRazorpay = () => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  }
  return (
    <div>
      <button
        onClick={() => makePayment()}

        className={`font-medium bg-white
      px-6 py-3 rounded-md mt-4  focus:outline-none ${highlight?style.hovdef:style.hov}`}
      >
        Get Started
      </button>


    </div >
  );
};

export default MakePaymentComponent