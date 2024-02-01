//components->MakePaymentComponent.js
import React from 'react'

const MakePaymentComponent = ({ amount, description }) => {
    const makePayment = async () => {
        //console.log("here...");
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
                taxAmt:amount
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
          image: ".././assets/logo.png",
          handler: function (response) {
            // Validate payment at server - using webhooks is a better idea.
            alert("Razorpay Response: "+response.razorpay_payment_id);
            //alert(response.razorpay_order_id);
            //alert(response.razorpay_signature);
          },
          prefill: {
            name:"Shivam",
            email:"admin@instantpaydoc.online",
            contact:'9853785519'

          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
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
  className="font-medium bg-white border border-teal-500
   text-teal-500 px-6 py-3 rounded-md mt-4 hover:bg-teal-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300"
>
  Buy Now
</button>


        </div>
      );
    };

export default MakePaymentComponent